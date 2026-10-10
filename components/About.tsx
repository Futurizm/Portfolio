"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "./LocaleProvider";

export default function About() {
  const { dict } = useI18n();
  const about = dict.about;

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading label={about.label} title={about.title} />

        <div className="about">
          <Reveal className="about__body">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="about__paragraph">
                {paragraph}
              </p>
            ))}
            <p className="about__quote">{dict.quotes.worthSolving}</p>
          </Reveal>

          <Reveal className="about__facts" delay={0.08}>
            <dl className="facts">
              {about.facts.map((fact) => (
                <div key={fact.label} className="facts__row">
                  <dt className="facts__label">{fact.label}</dt>
                  <dd className="facts__value">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
