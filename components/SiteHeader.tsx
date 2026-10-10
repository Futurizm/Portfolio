"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { useI18n } from "./LocaleProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const SECTION_IDS = ["about", "projects", "achievements", "stack", "contact"];

export default function SiteHeader() {
  const { dict } = useI18n();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const links = [
    { id: "about", label: dict.nav.about },
    { id: "projects", label: dict.nav.projects },
    { id: "achievements", label: dict.nav.achievements },
    { id: "stack", label: dict.nav.stack },
    { id: "contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header" data-open={open}>
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label={dict.nav.home}>
          <span className="brand__mark" aria-hidden>
            AP
          </span>
          <span className="brand__name">{dict.hero.name}</span>
        </a>

        <nav className="nav" aria-label={dict.nav.ariaPrimary}>
          {links.map((link) => (
            <a
              key={link.id}
              className="nav__link"
              href={`#${link.id}`}
              data-active={active === link.id}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__tools">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.close : dict.nav.menu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X size={18} strokeWidth={1.6} aria-hidden />
            ) : (
              <MenuIcon size={18} strokeWidth={1.6} aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile" hidden={!open}>
        <nav className="mobile__nav" aria-label={dict.nav.ariaPrimary}>
          {links.map((link, index) => (
            <a
              key={link.id}
              className="mobile__link"
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              <span className="mobile__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile__foot">
          <LanguageSwitcher />
          <p className="mobile__note">{dict.hero.available}</p>
        </div>
      </div>
    </header>
  );
}
