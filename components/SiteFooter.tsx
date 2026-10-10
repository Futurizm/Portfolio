"use client";

import { ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/content";
import LocalTime from "./LocalTime";
import { useI18n } from "./LocaleProvider";

export default function SiteFooter() {
  const { dict } = useI18n();

  function backToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__location">
          <div>
            <span className="section-label">{dict.location.label}</span>
            <p className="footer__city">{dict.location.city}</p>
            <p className="footer__tz">{dict.location.timezone}</p>
          </div>
          <LocalTime />
        </div>

        <div className="footer__bar">
          <div className="footer__meta">
            <p className="footer__copy">{dict.footer.copyright}</p>
            <p className="footer__tagline">{dict.footer.tagline}</p>
          </div>

          <div className="footer__social">
            <a
              className="icon-btn"
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.contact.instagramLabel}
            >
              <Instagram size={16} strokeWidth={1.6} aria-hidden />
            </a>
            <a
              className="icon-btn"
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.contact.linkedinLabel}
            >
              <Linkedin size={16} strokeWidth={1.6} aria-hidden />
            </a>
            <a
              className="icon-btn"
              href={`mailto:${CONTACT.email}`}
              aria-label={dict.contact.emailLabel}
            >
              <Mail size={16} strokeWidth={1.6} aria-hidden />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__built">{dict.footer.builtWith}</span>
          <button type="button" className="btn btn--ghost btn--sm" onClick={backToTop}>
            <ArrowUp size={15} strokeWidth={1.8} aria-hidden />
            {dict.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
