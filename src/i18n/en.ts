import type { SiteContent } from './content';

export const en = {
  'a11y.skip': 'Skip to content',

  'nav.services': 'Services',
  'nav.work': 'Our Work',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.cta': 'Request an estimate',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',

  'hero.eyebrow': 'Landscaping · West Island',
  'hero.title': 'A little more room to breathe.',
  'hero.subtitle':
    'Thoughtful landscaping for the spaces around your home. From garden refreshes to patios made for gathering.',
  'hero.ctaPrimary': 'Request an estimate',
  'hero.ctaSecondary': 'Explore our work',
  'hero.owned': 'Locally owned',
  'hero.location': 'West Island, Montreal',
  'hero.imageAlt':
    'Stone pathway winding through a mature garden toward the back deck of a home',

  'services.eyebrow': 'Our craft',
  'services.title': 'What we do.',

  'work.title': "A few spaces we've shaped.",
  'work.note': 'Concept & sample residential projects · West Island, Montreal',
  'work.badge': 'Sample project',

  'about.eyebrow': 'Who we are',
  'about.title': 'Small team. Thoughtful work.',
  'about.body':
    "We're a small local team who believe outdoor spaces should feel as good as they look. We take the time to understand what you need, work with care, and leave you with a space you'll enjoy for years to come.",
  'about.imageAlt':
    'Three landscapers planting a garden bed together in a residential backyard',

  'contact.eyebrow': "Let's talk",
  'contact.title': 'Your yard could be next.',
  'contact.body':
    "Have an idea, or just know something needs a little work? Let's start there.",
  'contact.email': 'hello@cedarandstone.ca',
  'contact.phone': '(514) 555-0184',
  'contact.note': "Serving Montreal's West Island and surrounding areas.",

  'form.name': 'Name',
  'form.namePlaceholder': 'Your full name',
  'form.required': 'required',
  'form.email': 'Email',
  'form.emailPlaceholder': 'name@example.com',
  'form.phone': 'Phone (optional)',
  'form.phonePlaceholder': '(514) 555-0000',
  'form.project': 'What are you looking to do? (optional)',
  'form.projectPlaceholder': 'Select an option',
  'form.message': 'Message',
  'form.messagePlaceholder':
    'Tell us a little bit about your project and property…',
  'form.submit': 'Request an estimate',
  'form.successTitle': 'Thanks — your request is in.',
  'form.successBody':
    "We'll be in touch within two business days to talk through your project.",
  'form.successReset': 'Send another request',

  'footer.brand': 'Cedar & Stone Landscaping',
  'footer.address':
    "Serving Montreal's West Island (Beaconsfield, Kirkland, Pointe-Claire, Baie-D'Urfé, DDO) & surrounding areas.",
  'footer.navHeading': 'Navigation',
  'footer.inquiriesHeading': 'Direct inquiries',
  'footer.rights': 'All rights reserved.',

  services: [
    {
      title: 'Garden & Planting',
      description: 'Garden beds, planting and seasonal refreshes.',
      imageAlt:
        'Hands planting perennials in a freshly mulched garden bed next to a stone house',
    },
    {
      title: 'Patios & Pathways',
      description: 'Beautiful, practical spaces for everyday living.',
      imageAlt:
        'Natural stone patio with a dining table and lounge seating in a backyard',
    },
    {
      title: 'Lawn & Seasonal Care',
      description: 'Lawn installation, repairs and seasonal cleanups.',
      imageAlt:
        'Freshly cut lawn bordered by a stone edge and dense garden beds',
    },
  ],

  projects: [
    {
      title: 'Backyard refresh',
      meta: 'Patio & garden · Beaconsfield',
      imageAlt:
        'Natural stone patio with a dining table, planter and lounge seating',
    },
    {
      title: 'Front garden',
      meta: 'Planting · Kirkland',
      imageAlt:
        'Freshly planted front garden bed with hostas, hydrangeas and mulch',
    },
    {
      title: 'A fresh start',
      meta: 'Lawn · Pointe-Claire',
      imageAlt:
        'Newly laid lawn with a stone path edging a mixed border of shrubs',
    },
  ],

  aboutPoints: [
    'Based on the West Island — familiar with local soil, seasons, and neighbourhood bylaws',
    'Direct communication with the team doing the actual work on your yard',
    'Straightforward estimates with transparent timelines',
  ],

  projectOptions: [
    'Garden & planting',
    'Patio & pathways',
    'Lawn & seasonal care',
    'Something else / not sure yet',
  ],
} satisfies SiteContent;
