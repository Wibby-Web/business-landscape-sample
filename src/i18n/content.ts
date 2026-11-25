/**
 * Shape of the copy for the one-page site.
 *
 * Flat, dotted keys for text fragments (same idea as the typed dictionary in
 * `business_restaurant_sample`) and typed arrays for the repeating sections.
 * Both `en.ts` and `fr.ts` implement this, so a missing translation is a type
 * error instead of a blank spot on the page.
 */

export type ServiceCopy = {
  title: string;
  description: string;
  imageAlt: string;
};

export type ProjectCopy = {
  title: string;
  meta: string;
  imageAlt: string;
};

export type SiteContent = {
  'a11y.skip': string;

  'nav.services': string;
  'nav.work': string;
  'nav.about': string;
  'nav.contact': string;
  'nav.cta': string;
  'nav.openMenu': string;
  'nav.closeMenu': string;

  'hero.eyebrow': string;
  'hero.title': string;
  'hero.subtitle': string;
  'hero.ctaPrimary': string;
  'hero.ctaSecondary': string;
  'hero.owned': string;
  'hero.location': string;
  'hero.imageAlt': string;

  'services.eyebrow': string;
  'services.title': string;

  'work.title': string;
  'work.note': string;
  'work.badge': string;

  'about.eyebrow': string;
  'about.title': string;
  'about.body': string;
  'about.imageAlt': string;

  'contact.eyebrow': string;
  'contact.title': string;
  'contact.body': string;
  'contact.email': string;
  'contact.phone': string;
  'contact.note': string;

  'form.name': string;
  'form.namePlaceholder': string;
  'form.required': string;
  'form.email': string;
  'form.emailPlaceholder': string;
  'form.phone': string;
  'form.phonePlaceholder': string;
  'form.project': string;
  'form.projectPlaceholder': string;
  'form.message': string;
  'form.messagePlaceholder': string;
  'form.submit': string;
  'form.successTitle': string;
  'form.successBody': string;
  'form.successReset': string;

  'footer.brand': string;
  'footer.address': string;
  'footer.navHeading': string;
  'footer.inquiriesHeading': string;
  'footer.rights': string;

  services: ServiceCopy[];
  projects: ProjectCopy[];
  aboutPoints: string[];
  projectOptions: string[];
};

/** Keys that resolve to a plain string (i.e. everything `t()` accepts). */
export type TextKey = {
  [K in keyof SiteContent]: SiteContent[K] extends string ? K : never;
}[keyof SiteContent];
