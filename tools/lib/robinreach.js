import { readFileSync, existsSync } from 'node:fs';
import { sleep, log } from './util.js';

const BASE = 'https://robinreach.com/api/v1';

function loadEnvFile(path = '.env.local') {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    if (!process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, '');
  }
}

export function apiKey() {
  loadEnvFile();
  return process.env.ROBINREACH_API_KEY || '';
}

// The key goes in the header rather than the query string the docs also allow:
// query-string keys leak into server logs, proxies and browser history.
async function request(path, { method = 'GET', body, attempt = 1 } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey()}`,
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(30_000),
  });

  // 100 requests/minute overall, 100/hour for post creation.
  if (res.status === 429) {
    if (attempt > 3) throw new Error('rate limited by RobinReach after 3 attempts');
    const wait = Number(res.headers.get('retry-after')) * 1000 || 60_000;
    log(`  rate limited, waiting ${Math.round(wait / 1000)}s`);
    await sleep(wait);
    return request(path, { method, body, attempt: attempt + 1 });
  }

  const text = await res.text();
  if (!res.ok) throw new Error(`RobinReach ${res.status} on ${method} ${path}: ${text.slice(0, 200)}`);
  return text ? JSON.parse(text) : null;
}

export const listBrands = () => request('/brands');
export const listProfiles = (brandId) => request(`/social_profiles?brand_id=${encodeURIComponent(brandId)}`);

// `publish_time` is required even when publishing immediately, so a caller that
// wants "now" passes now; status decides whether it actually goes out.
export function createPost({ content, profileIds, publishTime, status = 'scheduled', labels = [] }) {
  return request('/posts', {
    method: 'POST',
    body: {
      content,
      social_profile_ids: profileIds,
      publish_time: publishTime,
      timezone: 'UTC',
      status,
      labels,
    },
  });
}

export const validatePost = (body) => request('/posts/validate', { method: 'POST', body });
