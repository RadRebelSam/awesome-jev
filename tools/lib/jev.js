import { readFileSync, existsSync } from 'node:fs';
import { sleep, log } from './util.js';

// The key is never committed and never printed. It is read from the environment,
// or from .env.local, which .gitignore covers.
function loadEnvFile(path = '.env.local') {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const value = match[2].replace(/^["']|["']$/g, '');
    if (!process.env[match[1]]) process.env[match[1]] = value;
  }
}

// Two ways in. Vercel's AI Gateway lists typesafe-ai/jev as free, so it is
// preferred when its key is present; the direct TypeSafe API is the fallback.
export function resolveEndpoint() {
  loadEnvFile();

  const gatewayKey = process.env.AI_GATEWAY_API_KEY;
  const directKey = process.env.TYPESAFE_API_KEY || process.env.JEV_API_KEY;

  if (process.env.JEV_BASE_URL) {
    return {
      via: 'custom',
      baseUrl: process.env.JEV_BASE_URL.replace(/\/$/, ''),
      key: gatewayKey || directKey,
      model: process.env.JEV_MODEL || 'jev-latest',
      paths: ['/systemone', '/decisions'],
    };
  }

  if (gatewayKey) {
    // AI Gateway refuses to serve any model, including ones listed free, until
    // the team has a card on file. Keep the direct API as a fallback so a
    // gateway that is not yet enabled does not stop a run.
    const fallback = directKey
      ? { via: 'typesafe-direct', baseUrl: 'https://api.typesafe.ai/v1', key: directKey, model: 'jev-latest', paths: ['/systemone'] }
      : null;
    return {
      fallback,
      via: 'vercel-ai-gateway',
      // The gateway's TypeSafe-compatible API takes TypeSafe's own request and
      // response shapes, so only the base URL and the model id differ from a
      // direct call. (Its native equivalent is POST /v1/evaluate, which renames
      // noul to boolean.)
      baseUrl: 'https://ai-gateway.vercel.sh/typesafe/v1',
      key: gatewayKey,
      model: process.env.JEV_MODEL || 'typesafe-ai/jev',
      paths: ['/systemone'],
    };
  }

  if (directKey) {
    return {
      via: 'typesafe-direct',
      baseUrl: 'https://api.typesafe.ai/v1',
      key: directKey,
      model: process.env.JEV_MODEL || 'jev-latest',
      paths: ['/systemone'],
    };
  }

  return null;
}

let resolvedPath = null;

export async function evaluate(state, questions, endpoint, attempt = 1) {
  try {
    return await request(state, questions, endpoint, attempt);
  } catch (err) {
    if (!endpoint.fallback || attempt > 1) throw err;
    log(`falling back to ${endpoint.fallback.via}: ${err.message.slice(0, 120)}`);
    resolvedPath = null;
    return request(state, questions, endpoint.fallback, 1);
  }
}

async function request(state, questions, endpoint, attempt = 1) {
  const body = JSON.stringify({ model: endpoint.model, state, questions });
  const paths = resolvedPath ? [resolvedPath] : endpoint.paths;
  let lastError = 'no endpoint tried';

  for (const path of paths) {
    let res;
    try {
      res = await fetch(`${endpoint.baseUrl}${path}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${endpoint.key}`,
          'Content-Type': 'application/json',
        },
        body,
        signal: AbortSignal.timeout(120_000),
      });
    } catch (err) {
      lastError = err.message;
      continue;
    }

    if (res.status === 404) {
      lastError = `404 at ${path}`;
      continue;
    }

    if (res.status === 429 || res.status >= 500) {
      if (attempt > 4) throw new Error(`${res.status} from ${path} after ${attempt} attempts`);
      const wait = Number(res.headers.get('retry-after')) * 1000 || 5000 * attempt;
      log(`  ${res.status}, retrying in ${Math.round(wait / 1000)}s`);
      await sleep(wait);
      return request(state, questions, endpoint, attempt + 1);
    }

    if (!res.ok) {
      // Error bodies can echo request content; keep the excerpt short and never
      // log the header that carries the key.
      throw new Error(`${res.status} from ${path}: ${(await res.text()).slice(0, 200)}`);
    }

    resolvedPath = path;
    return res.json();
  }

  throw new Error(`no working endpoint under ${endpoint.baseUrl} (${lastError})`);
}
