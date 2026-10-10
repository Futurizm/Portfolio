"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "./LocaleProvider";

export default function Stack() {
  const { dict } = useI18n();

  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHeading
          label={dict.stack.label}
          title={dict.stack.title}
          subtitle={dict.stack.subtitle}
        />

        <div className="stack">
          {dict.stack.categories.map((category, index) => (
            <Reveal
              key={category.name}
              className="stack__cat"
              delay={Math.min(index * 0.05, 0.2)}
              y={12}
            >
              <h3 className="stack__cat-name">{category.name}</h3>
              <ul className="stack__items">
                {category.items.map((item) => (
                  <li key={item} className="stack__item">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
