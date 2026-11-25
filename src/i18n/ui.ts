import { en } from './en';
import { fr } from './fr';

export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export const defaultLang = 'en';

export const ui = { en, fr };

export type Lang = keyof typeof ui;

export type { SiteContent, TextKey } from './content';
