export interface ProjectMeta {
  slug: string;
  index: string;
  /** Official product name — identical across locales. */
  name: string;
  tags: string[];
  href: string;
  external: boolean;
  /** Larger editorial treatment in the layout. */
  featured: boolean;
}

export interface AchievementMeta {
  slug: string;
  index: string;
  competition: string;
  project: string;
  tags: string[];
  url: string;
}

export const CONTACT = {
  email: "aristidpopandopulo183@gmail.com",
  instagram: "https://www.instagram.com/unreal1zedfutur1zm/",
  linkedin:
    "https://www.linkedin.com/in/aristid-popandopulo-72a795289/?isSelfProfile=true",
} as const;

/**
 * Structural, non-translatable project data.
 * Display copy lives in the language dictionaries under `projects.items[slug]`.
 */
export const projects: ProjectMeta[] = [
  {
    slug: "moonclaw",
    index: "01",
    name: "Moonclaw",
    tags: ["Automation", "CRM", "Telegram", "WhatsApp"],
    href: "https://moonclaw-landing.vercel.app/",
    external: true,
    featured: true,
  },
  {
    slug: "torrential",
    index: "02",
    name: "Torrential",
    tags: ["WebTorrent", "Electron", "React", "TypeScript", "Node.js"],
    href: "https://torrential-fawn.vercel.app/en",
    external: true,
    featured: false,
  },
  {
    slug: "xguard",
    index: "03",
    name: "XGuard",
    tags: ["Python", "NLP", "FastAPI", "Machine Learning"],
    href: "https://pavlodarnews.kz/ru/pavlodarskie-studenti-sozdali-veb-platformu-dlya-viyavleniya-podozritelnikh-goszakupok",
    external: true,
    featured: false,
  },
  {
    slug: "sports-trainer",
    index: "04",
    name: "AI Sports Trainer",
    tags: ["Flutter", "Python", "Machine Learning", "Mobile"],
    href: "https://pavlodarnews.kz/ru/studenti-iz-pavlodara-za-den-sozdali-platformu-dlya-boytsov-edinoborstv",
    external: true,
    featured: false,
  },
  {
    slug: "jobswipe",
    index: "05",
    name: "JobSwipeAI",
    tags: ["Telegram Mini App", "React", "Node.js", "AI"],
    href: "https://kazpravda.kz/n/dvoynoy-intellekt/",
    external: true,
    featured: false,
  },
];

/**
 * Structural achievement data. Competition and project names are official
 * and stay identical across locales; all descriptive copy is translated.
 */
export const achievements: AchievementMeta[] = [
  {
    slug: "innovation",
    index: "01",
    competition: "Innovation Hackathon",
    project: "JobSwipeAI",
    tags: ["AI", "Telegram"],
    url: "https://kazpravda.kz/n/dvoynoy-intellekt/",
  },
  {
    slug: "kuickhack",
    index: "02",
    competition: "KuickHack'25",
    project: "JobBlazeAI",
    tags: ["Full-stack", "AI", "AR"],
    url: "https://pavlodarnews.kz/ru/v-pavlodare-studenti-sozdali-prilozhenie-dlya-poiska-raboti",
  },
  {
    slug: "nasa",
    index: "03",
    competition: "NASA Space Apps Challenge",
    project: "AirWatch AI",
    tags: ["NASA", "AI", "GIS", "Leaflet"],
    url: "https://pavlodarnews.kz/ru/pavlodartsi-pobedili-v-krupneyshem-khakatone-ot-nasa",
  },
  {
    slug: "hackcor",
    index: "04",
    competition: "HackCor",
    project: "XGuard",
    tags: ["AI", "Python", "FastAPI", "ML"],
    url: "https://pavlodarnews.kz/ru/pavlodarskie-studenti-sozdali-veb-platformu-dlya-viyavleniya-podozritelnikh-goszakupok",
  },
  {
    slug: "aiga",
    index: "05",
    competition: "AIGA CASE Hackathon",
    project: "AI Sports Trainer",
    tags: ["ML", "Flutter", "AI", "Mobile"],
    url: "https://pavlodarnews.kz/ru/studenti-iz-pavlodara-za-den-sozdali-platformu-dlya-boytsov-edinoborstv",
  },
];
