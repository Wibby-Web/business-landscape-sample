import type { SiteContent } from './content';

export const fr = {
  'a11y.skip': 'Aller au contenu',

  'nav.services': 'Services',
  'nav.work': 'Nos réalisations',
  'nav.about': 'À propos',
  'nav.contact': 'Contact',
  'nav.cta': 'Demander une estimation',
  'nav.openMenu': 'Ouvrir le menu',
  'nav.closeMenu': 'Fermer le menu',

  'hero.eyebrow': 'Aménagement paysager · West Island',
  'hero.title': "Un peu plus d'espace pour respirer.",
  'hero.subtitle':
    "Un aménagement réfléchi pour les espaces autour de votre maison. Du rafraîchissement des jardins aux patios conçus pour recevoir.",
  'hero.ctaPrimary': 'Demander une estimation',
  'hero.ctaSecondary': 'Voir nos réalisations',
  'hero.owned': 'Entreprise locale',
  'hero.location': 'West Island, Montréal',
  'hero.imageAlt':
    "Sentier de pierres naturelles traversant un jardin mature vers la terrasse arrière d'une maison",

  'services.eyebrow': 'Notre savoir-faire',
  'services.title': 'Ce que nous faisons.',

  'work.title': 'Quelques espaces que nous avons façonnés.',
  'work.note':
    'Projets résidentiels conceptuels et exemples · West Island, Montréal',
  'work.badge': 'Projet exemple',

  'about.eyebrow': 'Qui nous sommes',
  'about.title': 'Une petite équipe. Un travail soigné.',
  'about.body':
    "Nous sommes une petite équipe locale convaincue que les espaces extérieurs doivent être aussi agréables à vivre qu'à regarder. Nous prenons le temps de comprendre vos besoins, nous travaillons avec soin et nous vous laissons un espace dont vous profiterez pendant des années.",
  'about.imageAlt':
    'Trois paysagistes plantant ensemble un massif dans une cour arrière',

  'contact.eyebrow': 'Discutons',
  'contact.title': 'Votre cour pourrait être la prochaine.',
  'contact.body':
    "Une idée en tête, ou simplement le sentiment que quelque chose doit être rafraîchi ? Commençons par là.",
  'contact.email': 'hello@cedarandstone.ca',
  'contact.phone': '(514) 555-5555',
  'contact.note': 'Nous desservons le West Island de Montréal et les environs.',

  'form.name': 'Nom',
  'form.namePlaceholder': 'Votre nom complet',
  'form.required': 'obligatoire',
  'form.email': 'Courriel',
  'form.emailPlaceholder': 'nom@exemple.com',
  'form.phone': 'Téléphone (facultatif)',
  'form.phonePlaceholder': '(514) 555-0000',
  'form.project': 'Que souhaitez-vous aménager ? (facultatif)',
  'form.projectPlaceholder': 'Choisir une option',
  'form.message': 'Message',
  'form.messagePlaceholder':
    'Parlez-nous un peu de votre projet et de votre terrain…',
  'form.submit': 'Demander une estimation',
  'form.successTitle': 'Merci — votre demande est bien reçue.',
  'form.successBody':
    'Nous communiquerons avec vous sous deux jours ouvrables pour discuter de votre projet.',
  'form.successReset': 'Envoyer une autre demande',

  'footer.brand': 'Cedar & Stone Landscaping',
  'footer.address':
    "Nous desservons l'ouest de l'île de Montréal (Beaconsfield, Kirkland, Pointe-Claire, Baie-D'Urfé, DDO) et les environs.",
  'footer.navHeading': 'Navigation',
  'footer.inquiriesHeading': 'Demandes directes',
  'footer.rights': 'Tous droits réservés.',

  services: [
    {
      title: 'Jardins et plantations',
      description: 'Massifs, plantations et rafraîchissements saisonniers.',
      imageAlt:
        'Mains plantant des vivaces dans un massif fraîchement paillé près d’une maison en pierre',
    },
    {
      title: 'Patios et sentiers',
      description: 'Des espaces beaux et pratiques pour le quotidien.',
      imageAlt:
        'Patio en pierre naturelle avec table à manger et coin détente dans une cour arrière',
    },
    {
      title: 'Pelouse et entretien saisonnier',
      description: 'Pose de gazon, réparations et nettoyages saisonniers.',
      imageAlt:
        'Pelouse fraîchement tondue bordée d’une pierre naturelle et de massifs denses',
    },
  ],

  projects: [
    {
      title: 'Rafraîchissement de cour arrière',
      meta: 'Patio et jardin · Beaconsfield',
      imageAlt:
        'Patio en pierre naturelle avec table à manger, jardinière et coin détente',
    },
    {
      title: 'Jardin avant',
      meta: 'Plantation · Kirkland',
      imageAlt:
        'Massif avant fraîchement planté avec hostas, hortensias et paillis',
    },
    {
      title: 'Un nouveau départ',
      meta: 'Pelouse · Pointe-Claire',
      imageAlt:
        'Pelouse nouvellement posée avec sentier de pierre longeant une bordure mixte',
    },
  ],

  aboutPoints: [
    'Établis dans le West Island — nous connaissons le sol, les saisons et les règlements municipaux',
    "Des échanges directs avec l'équipe qui travaille réellement sur votre terrain",
    'Des estimations claires et des échéanciers transparents',
  ],

  projectOptions: [
    'Jardin et plantation',
    'Patio et sentiers',
    'Pelouse et entretien saisonnier',
    'Autre / je ne sais pas encore',
  ],
} satisfies SiteContent;
