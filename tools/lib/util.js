export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const today = () => new Date().toISOString().slice(0, 10);

export const daysSince = (iso) => {
  if (!iso) return Infinity;
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
};

export const log = (...args) => console.log(`[${new Date().toISOString().slice(11, 19)}]`, ...args);

export const unique = (arr) => [...new Set(arr)];

export function sortObject(value) {
  if (Array.isArray(value)) return value.map(sortObject);
  if (value && typeof value === 'object' && value.constructor === Object) {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((k) => [k, sortObject(value[k])]),
    );
  }
  return value;
}
