"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "./LocaleProvider";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const { dict } = useI18n();
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") {
      setTheme(current);
    }
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }

  const label = theme === "dark" ? dict.nav.themeToLight : dict.nav.themeToDark;

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <Sun size={16} strokeWidth={1.6} aria-hidden />
      ) : (
        <Moon size={16} strokeWidth={1.6} aria-hidden />
      )}
    </button>
  );
}
