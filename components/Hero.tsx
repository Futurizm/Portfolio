"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useI18n } from "./LocaleProvider";

export default function Hero() {
  const { dict } = useI18n();
  const reduceMotion = useReducedMotion();
  const hero = dict.hero;

  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="top" className="hero">
      <div className="hero__grid-lines" aria-hidden />
      <div className="container hero__inner">
        <motion.div className="hero__eyebrow" {...fade(0)}>
          <span className="eyebrow">{hero.eyebrow}</span>
          <span className="hero__status">
            <span className="dot" aria-hidden />
            {hero.available}
          </span>
        </motion.div>

        <motion.h1 className="hero__name" {...fade(0.06)}>
          {hero.name}
        </motion.h1>

        <motion.div className="hero__media" {...fade(0.12)}>
          <figure className="portrait">
            <Image
              src="/portrait.jpg"
              alt={hero.portraitAlt}
              fill
              priority
              sizes="(max-width: 900px) 82vw, 360px"
              className="portrait__img"
            />
          </figure>
        </motion.div>

        <motion.div className="hero__info" {...fade(0.18)}>
          <div className="hero__lead">
            <p className="hero__role">{hero.role}</p>
            <p className="hero__desc">{hero.description}</p>
          </div>

          <p className="hero__location">{hero.location}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              {hero.explore}
              <ArrowDown size={16} strokeWidth={1.8} aria-hidden />
            </a>
            <a className="btn btn--ghost" href="#contact">
              {hero.contact}
              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
            </a>
          </div>

          <ul className="hero__stats">
            {hero.stats.map((stat) => (
              <li key={stat} className="hero__stat">
                {stat}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
