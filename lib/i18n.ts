export const locales = ["en", "ru", "kz"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  kz: "Қазақша",
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  kz: "KZ",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export interface MetaDict {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string;
}

export interface NavDict {
  ariaPrimary: string;
  about: string;
  projects: string;
  achievements: string;
  stack: string;
  contact: string;
  menu: string;
  close: string;
  themeToLight: string;
  themeToDark: string;
  language: string;
  home: string;
  skipContent: string;
}

export interface HeroDict {
  eyebrow: string;
  name: string;
  role: string;
  description: string;
  location: string;
  explore: string;
  contact: string;
  stats: [string, string, string];
  scroll: string;
  available: string;
  portraitAlt: string;
}

export interface QuotesDict {
  primary: string;
  worthSolving: string;
  shipping: string;
  intelligence: string;
  workingIdea: string;
}

export interface AboutDict {
  label: string;
  title: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
}

export interface ProjectItemDict {
  category: string;
  description: string[];
  badge?: string;
  context?: string;
  linkLabel: string;
}

export interface ProjectsDict {
  label: string;
  title: string;
  subtitle: string;
  items: Record<string, ProjectItemDict>;
  articleNote: string;
}

export interface AchievementItemDict {
  competition: string;
  project: string;
  place: string;
  stage?: string;
  year: string;
  description: string;
  result: string;
  linkLabel: string;
}

export interface AchievementsDict {
  label: string;
  title: string;
  subtitle: string;
  items: Record<string, AchievementItemDict>;
  summaryTitle: string;
  summaryText: string;
  teamNote: string;
}

export interface StackCategoryDict {
  name: string;
  items: string[];
}

export interface StackDict {
  label: string;
  title: string;
  subtitle: string;
  categories: StackCategoryDict[];
}

export interface ContactDict {
  label: string;
  title: string;
  text: string;
  finalLine: string;
  emailLabel: string;
  copy: string;
  copied: string;
  instagramLabel: string;
  linkedinLabel: string;
}

export interface LocationDict {
  label: string;
  basedIn: string;
  city: string;
  timezone: string;
}

export interface FooterDict {
  copyright: string;
  tagline: string;
  backToTop: string;
  role: string;
  builtWith: string;
}

export interface Dictionary {
  meta: MetaDict;
  nav: NavDict;
  hero: HeroDict;
  quotes: QuotesDict;
  about: AboutDict;
  projects: ProjectsDict;
  achievements: AchievementsDict;
  stack: StackDict;
  contact: ContactDict;
  location: LocationDict;
  footer: FooterDict;
}
