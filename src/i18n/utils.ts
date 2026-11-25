import { ui, defaultLang, type Lang, type TextKey } from './ui';
import { stripBase } from '../lib/url';

/** `/fr/#contact` -> `fr`. Ignores the GitHub Pages base prefix. */
export function getLangFromUrl(url: URL): Lang {
  const [first] = stripBase(url.pathname).split('/').filter(Boolean);
  return first && first in ui ? (first as Lang) : defaultLang;
}

/** Typed lookup with English as the fallback. */
export function useTranslations(lang: Lang) {
  return function t(key: TextKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
