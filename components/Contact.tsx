"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { CONTACT } from "@/lib/content";
import { useI18n } from "./LocaleProvider";

export default function Contact() {
  const { dict } = useI18n();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  const stack = [
    {
      key: "email",
      label: dict.contact.emailLabel,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: <Mail size={18} strokeWidth={1.5} aria-hidden />,
      external: false,
    },
    {
      key: "instagram",
      label: dict.contact.instagramLabel,
      value: "@unreal1zedfutur1zm",
      href: CONTACT.instagram,
      icon: <Instagram size={18} strokeWidth={1.5} aria-hidden />,
      external: true,
    },
    {
      key: "linkedin",
      label: dict.contact.linkedinLabel,
      value: "Aristid Popandopulo",
      href: CONTACT.linkedin,
      icon: <Linkedin size={18} strokeWidth={1.5} aria-hidden />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact">
          <div className="contact__intro">
            <span className="section-label">{dict.contact.label}</span>
            <h2 className="contact__title">{dict.contact.title}</h2>
            <p className="contact__text">{dict.contact.text}</p>
            <p className="contact__final">{dict.contact.finalLine}</p>
          </div>

          <div className="contact__list">
            {stack.map((entry) => (
              <div key={entry.key} className="contact__row">
                <span className="contact__icon">{entry.icon}</span>
                <a
                  className="contact__link"
                  href={entry.href}
                  target={entry.external ? "_blank" : undefined}
                  rel={entry.external ? "noopener noreferrer" : undefined}
                >
                  <span className="contact__label">{entry.label}</span>
                  <span className="contact__value">{entry.value}</span>
                </a>
                {entry.key === "email" ? (
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={copyEmail}
                  >
                    {copied ? (
                      <Check size={14} strokeWidth={2} aria-hidden />
                    ) : (
                      <Copy size={14} strokeWidth={1.7} aria-hidden />
                    )}
                    <span>{copied ? dict.contact.copied : dict.contact.copy}</span>
                  </button>
                ) : (
                  <ArrowUpRight
                    className="contact__arrow"
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden
                  />
                )}
              </div>
            ))}
            <p className="sr-only" role="status" aria-live="polite">
              {copied ? dict.contact.copied : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
