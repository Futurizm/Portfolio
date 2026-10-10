import type { Dictionary, Locale } from "@/lib/i18n";
import { en } from "./en";
import { ru } from "./ru";
import { kz } from "./kz";

const dictionaries: Record<Locale, Dictionary> = { en, ru, kz };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export default dictionaries;
