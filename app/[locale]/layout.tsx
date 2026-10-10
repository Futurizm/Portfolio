import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { CONTACT } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { LocaleProvider } from "@/components/LocaleProvider";
import "../globals.css";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

const ogLocale: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  kz: "kk_KZ",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: "%s — Aristid Popandopulo",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Aristid Popandopulo" }],
    creator: "Aristid Popandopulo",
    applicationName: "Aristid Popandopulo",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ru: "/ru",
        kk: "/kz",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: "Aristid Popandopulo",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      locale: ogLocale[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#F5F5F3" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aristid Popandopulo",
    url: SITE_URL,
    jobTitle: dict.hero.role,
    description: dict.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Astana",
      addressCountry: "KZ",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Coventry University Kazakhstan" },
      {
        "@type": "EducationalOrganization",
        name: "College of Information Technology, Pavlodar",
      },
    ],
    knowsAbout: ["Software Engineering", "Artificial Intelligence", "Full-stack Development"],
    sameAs: [CONTACT.instagram, CONTACT.linkedin],
  };

  return (
    <html lang={locale} data-theme="dark" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <LocaleProvider locale={locale} dict={dict}>
          <a className="skip-link" href="#main">
            {dict.nav.skipContent}
          </a>
          {children}
        </LocaleProvider>
        <noscript>
          <style>{`.reveal,.hero__eyebrow,.hero__name,.hero__media,.hero__info{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
