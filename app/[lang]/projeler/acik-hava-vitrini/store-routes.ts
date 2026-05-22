/* ── Store route helpers ──────────────────────────────────────────────────── */

const STORE_SEGMENT = "projeler/acik-hava-vitrini";

export function getStoreBasePath(lang: string) {
  return `/${lang}/${STORE_SEGMENT}`;
}

export function getStoreProductsPath(lang: string) {
  return `${getStoreBasePath(lang)}/urunler`;
}

export function getStoreProductPath(lang: string, slug: string) {
  return `${getStoreProductsPath(lang)}/${slug}`;
}

export function getStoreCartPath(lang: string) {
  return `${getStoreBasePath(lang)}/sepet`;
}

export function getStoreCheckoutPath(lang: string) {
  return `${getStoreBasePath(lang)}/odeme`;
}
