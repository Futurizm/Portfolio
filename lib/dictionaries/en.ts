import type { Dictionary } from "@/lib/i18n";

export const en: Dictionary = {
  meta: {
    title: "Aristid Popandopulo — Software Engineer × AI Developer",
    description:
      "Portfolio of Aristid Popandopulo — Software Engineer and AI Developer based in Astana, Kazakhstan. Full-stack products, AI systems and 10+ hackathon victories with team Goodbalalar.",
    ogTitle: "Aristid Popandopulo — Software Engineer × AI Developer",
    ogDescription:
      "Full-stack products, AI systems and 10+ hackathon victories. Software Engineering × Artificial Intelligence.",
    keywords:
      "Aristid Popandopulo, Software Engineer, AI Developer, Full-stack developer, Kazakhstan, Astana, hackathon, Goodbalalar, portfolio",
  },
  nav: {
    ariaPrimary: "Primary navigation",
    about: "About",
    projects: "Projects",
    achievements: "Achievements",
    stack: "Stack",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    language: "Language",
    home: "Back to top",
    skipContent: "Skip to content",
  },
  hero: {
    eyebrow: "Software Engineering × Artificial Intelligence",
    name: "Aristid Popandopulo",
    role: "Software Engineer × AI Developer",
    description:
      "I build digital products, develop intelligent systems and turn complex ideas into working solutions.",
    location:
      "Astana, Kazakhstan · Coventry University Kazakhstan · Class of 2030",
    explore: "Explore my work",
    contact: "Get in touch",
    stats: ["10+ Hackathon wins", "AI & Full-stack", "Team Goodbalalar"],
    scroll: "Scroll",
    available: "Available for collaborations",
    portraitAlt: "Portrait of Aristid Popandopulo",
  },
  quotes: {
    primary: "I don't just write code — I build things that matter.",
    worthSolving:
      "I'm not only interested in solving problems, but in finding the problems truly worth solving.",
    shipping: "From the first line of code to a product people actually use.",
    intelligence:
      "Artificial intelligence is not the goal. What matters is what you can change with it.",
    workingIdea: "A good idea becomes valuable when it starts working.",
  },
  about: {
    label: "01 — About",
    title: "A little about me.",
    paragraphs: [
      "My name is Aristid Popandopulo. I'm a Software Engineer and AI Developer, currently in my first year at Coventry University Kazakhstan in Astana.",
      "My path into development started at the College of Information Technology in Pavlodar, where I gained a practical foundation in information systems. Today I'm growing in full-stack development and artificial intelligence, building web applications, AI tools and products that solve real problems.",
      "Together with the Goodbalalar team, I took part in hackathons across Kazakhstan and won more than ten of them. Those competitions taught me to turn ideas into prototypes quickly, to work as a team and to build solutions under tight time constraints.",
    ],
    facts: [
      { label: "Based in", value: "Astana, Kazakhstan" },
      { label: "Education", value: "Coventry University Kazakhstan" },
      {
        label: "Background",
        value: "College of Information Technology, Pavlodar",
      },
      { label: "Team", value: "Goodbalalar" },
      { label: "Focus", value: "Software Engineering & AI" },
    ],
  },
  projects: {
    label: "02 — Selected work",
    title: "Selected work.",
    subtitle:
      "A selection of products and experiments built around real-world problems.",
    articleNote: "Read the article",
    items: {
      moonclaw: {
        category: "EdTech · Business Automation",
        description: [
          "Moonclaw helps language schools and education centers automate trial-lesson bookings and inquiry handling. The service brings lesson booking, group schedules, reminders and subscription plans together in a single CRM, cutting down administrators' manual work and reducing the risk of lost requests.",
          "The solution is delivered turnkey: infrastructure, updates and technical support are all part of the service. Customer communication can be arranged through Telegram and WhatsApp.",
        ],
        linkLabel: "Visit Moonclaw",
      },
      xguard: {
        category: "AI · GovTech",
        description: [
          "An intelligent system for analyzing public procurement that surfaces potential corruption risks. Its algorithms examine contracts, detect price anomalies and flag suspicious purchases for further review.",
        ],
        badge: "HackCor — 1st Place · 2025",
        context:
          "Won the case set by the Anti-Corruption Agency of the Republic of Kazakhstan, among 62 teams.",
        linkLabel: "Read the article",
      },
      "sports-trainer": {
        category: "AI · SportsTech",
        description: [
          "A mobile platform for martial arts clubs that uses artificial intelligence to build personalized training programs. The system takes user data into account and can dynamically adapt the training plan to each athlete's progress and goals.",
        ],
        badge: "AIGA CASE Hackathon — 2nd Place · 2025",
        context: "Second place among 20+ teams in Astana.",
        linkLabel: "Read the article",
      },
      jobswipe: {
        category: "AI · CareerTech",
        description: [
          "A Telegram Mini App that simplifies the job search through personalized recommendations. AI analyzes the user's skills, interests and preferences to suggest fitting vacancies and make the search more convenient.",
        ],
        badge: "Innovation Hackathon — 1st Place · 2025",
        context:
          "First place among 27 teams from 14 regions of Kazakhstan. Grand prize — 1,000,000 tenge.",
        linkLabel: "Read the article",
      },
    },
  },
  achievements: {
    label: "03 — Achievements",
    title: "Built under pressure. Recognized across Kazakhstan.",
    subtitle:
      "More than ten hackathon victories with Goodbalalar — turning ambitious ideas into working prototypes.",
    items: {
      innovation: {
        competition: "Innovation Hackathon",
        project: "JobSwipeAI",
        place: "1st Place",
        year: "2025",
        description:
          "An AI-powered Telegram Mini App for smart job matching based on the user's profile and preferences.",
        result:
          "Won among 27 teams from 14 regions of the country; grand prize — 1,000,000 tenge.",
        linkLabel: "Read the article",
      },
      kuickhack: {
        competition: "KuickHack'25",
        project: "JobBlazeAI",
        place: "3rd Place",
        year: "2025",
        description:
          "A cross-platform job search app with automated applications, a voice AI interviewer and experimental job discovery using augmented reality.",
        result: "Third place among 118 teams.",
        linkLabel: "Read the article",
      },
      nasa: {
        competition: "NASA Space Apps Challenge",
        project: "AirWatch AI",
        place: "1st Place",
        stage: "National Stage",
        year: "2025",
        description:
          "An air-quality monitoring web service that uses NASA TEMPO satellite data and artificial intelligence. The project combines geospatial visualization of pollutants — including NO₂, O₃ and aerosols — with air-quality forecasting.",
        result:
          "First place at the national stage among 350 teams, advancing to the global stage of the competition.",
        linkLabel: "Read the article",
      },
      hackcor: {
        competition: "HackCor",
        project: "XGuard",
        place: "1st Place",
        year: "2025",
        description:
          "An intelligent public procurement analysis system for detecting price deviations and potential corruption risks.",
        result:
          "Won the case of the Anti-Corruption Agency of the Republic of Kazakhstan among 62 teams.",
        linkLabel: "Read the article",
      },
      aiga: {
        competition: "AIGA CASE Hackathon",
        project: "AI Sports Trainer",
        place: "2nd Place",
        year: "2025",
        description:
          "An AI platform for personalized training planning in martial arts, adapting the program to each athlete's individual metrics.",
        result: "Second place among 20+ teams in Astana.",
        linkLabel: "Read the article",
      },
    },
    summaryTitle: "10+ Hackathon victories",
    summaryText: "One team. Real problems. Working solutions.",
    teamNote:
      "These victories were achieved together with the Goodbalalar team.",
  },
  stack: {
    label: "04 — Stack",
    title: "Tools of the trade.",
    subtitle: "The technologies I use to build, connect and ship products.",
    categories: [
      {
        name: "Frontend & Web",
        items: ["Next.js", "TypeScript", "React"],
      },
      {
        name: "Backend & APIs",
        items: ["Node.js", "Python", "FastAPI", "REST API development"],
      },
      {
        name: "AI & LLM Integration",
        items: ["OpenAI API", "LLM integration", "OpenRouter", "OpenCode"],
      },
      {
        name: "Data & Infrastructure",
        items: ["Supabase", "PostgreSQL", "Git", "Docker"],
      },
      {
        name: "Automation & Bots",
        items: [
          "Telegram Bot Development",
          "Telegram Mini Apps",
          "External API integration",
        ],
      },
    ],
  },
  contact: {
    label: "05 — Contact",
    title: "Have something in mind?",
    text: "Working on an interesting product, looking for a teammate for a hackathon, or want to discuss an idea? Write to me — I'm always open to interesting projects, new connections and meaningful conversations.",
    finalLine: "Good ideas deserve to be built.",
    emailLabel: "Email",
    copy: "Copy email",
    copied: "Email copied",
    instagramLabel: "Instagram",
    linkedinLabel: "LinkedIn",
  },
  location: {
    label: "Based in",
    basedIn: "Based in",
    city: "Astana, Kazakhstan",
    timezone: "UTC+05:00 · Asia/Almaty",
  },
  footer: {
    copyright: "© 2026 Aristid Popandopulo",
    tagline: "Designed with intention. Built with code.",
    backToTop: "Back to top",
    role: "Software Engineer × AI Developer",
    builtWith: "Built with Next.js",
  },
};
