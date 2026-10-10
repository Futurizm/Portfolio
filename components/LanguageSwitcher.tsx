"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeShort, type Locale } from "@/lib/i18n";
import { useI18n } from "./LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, dict } = useI18n();
  const pathname = usePathname() ?? `/${locale}`;
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;

    try {
      localStorage.setItem("locale", next);
      document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      /* ignore */
    }

    const segments = pathname.split("/");
    segments[1] = next;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${segments.join("/") || `/${next}`}${hash}`);
  }

  return (
    <div className="lang" role="group" aria-label={dict.nav.language}>
      {locales.map((code, i) => (
        <span key={code} className="lang__item">
          {i > 0 && (
            <span className="lang__sep" aria-hidden>
              /
            </span>
          )}
          <button
            type="button"
            className="lang__btn"
            data-active={code === locale}
            aria-current={code === locale ? "true" : undefined}
            onClick={() => switchTo(code)}
          >
            {localeShort[code]}
          </button>
        </span>
      ))}
    </div>
  );
}
