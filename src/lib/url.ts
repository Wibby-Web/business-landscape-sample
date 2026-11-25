/**
 * Link helpers that honour Astro's `base` setting.
 *
 * GitHub Pages serves a project site from a subpath (here:
 * `/business-landscape-sample/`), so every root-absolute URL must be prefixed
 * with that subpath or the browser asks github.io for the wrong file.
 */

/** Astro's BASE_URL always ends with a slash; drop it so we can compose paths. */
export const SITE_BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** `/business-landscape-sample/fr/` -> `/fr` */
export function stripBase(pathname: string): string {
  if (SITE_BASE && pathname.startsWith(SITE_BASE)) {
    return pathname.slice(SITE_BASE.length) || '/';
  }
  return pathname;
}

/** A file in `public/`: ('favicon.svg') -> `/business-landscape-sample/favicon.svg` */
export function assetUrl(file: string): string {
  return `${SITE_BASE}/${file.replace(/^\//, '')}`;
}

/**
 * Build a link for a language and an app route.
 * ('en', '/') -> `/business-landscape-sample/`
 * ('fr', '/') -> `/business-landscape-sample/fr/`
 */
export function localeLink(lang: string, route = '/'): string {
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  const path = route.startsWith('/') ? route : `/${route}`;
  return `${SITE_BASE}${langPrefix}${path}`;
}

/**
 * Anchor on the one-page site, language aware.
 * ('en', 'services') -> `/business-landscape-sample/#services`
 * ('fr', 'services') -> `/business-landscape-sample/fr/#services`
 */
export function sectionLink(lang: string, id: string): string {
  return `${localeLink(lang, '/')}#${id}`;
}
