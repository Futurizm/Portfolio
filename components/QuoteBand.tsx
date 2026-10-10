"use client";

import { Quote } from "lucide-react";
import type { QuotesDict } from "@/lib/i18n";
import Reveal from "./Reveal";
import { useI18n } from "./LocaleProvider";

export default function QuoteBand({
  quoteKey,
}: {
  quoteKey: keyof QuotesDict;
}) {
  const { dict } = useI18n();

  return (
    <Reveal className="quote-wrap">
      <figure className="quote">
        <Quote className="quote__icon" size={22} strokeWidth={1.4} aria-hidden />
        <blockquote className="quote__text">{dict.quotes[quoteKey]}</blockquote>
      </figure>
    </Reveal>
  );
}
