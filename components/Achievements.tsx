"use client";

import { ArrowUpRight } from "lucide-react";
import { achievements } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TagList from "./TagList";
import { useI18n } from "./LocaleProvider";

export default function Achievements() {
  const { dict } = useI18n();
  const data = dict.achievements;

  return (
    <section id="achievements" className="section section--alt">
      <div className="container">
        <SectionHeading
          label={data.label}
          title={data.title}
          subtitle={data.subtitle}
        />

        <ul className="ach-list">
          {achievements.map((achievement, index) => {
            const item = data.items[achievement.slug];
            if (!item) return null;

            return (
              <li key={achievement.slug} className="ach-item">
                <Reveal
                  className="ach"
                  delay={Math.min(index * 0.04, 0.2)}
                  y={12}
                >
                  <span className="ach__index">{achievement.index}</span>

                  <div className="ach__main">
                    <div className="ach__head">
                      <h3 className="ach__competition">{item.competition}</h3>
                      <span className="ach__project">{item.project}</span>
                    </div>
                    <p className="ach__desc">{item.description}</p>
                    <p className="ach__result">{item.result}</p>
                    <TagList tags={achievement.tags} />
                  </div>

                  <div className="ach__aside">
                    <span className="ach__place">
                      {item.place}
                      {item.stage ? (
                        <span className="ach__stage"> · {item.stage}</span>
                      ) : null}
                    </span>
                    <span className="ach__year">{item.year}</span>
                    <a
                      className="link"
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkLabel}
                      <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden />
                    </a>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="ach-summary" y={12}>
          <p className="ach-summary__title">{data.summaryTitle}</p>
          <p className="ach-summary__text">{data.summaryText}</p>
          <p className="ach-summary__note">{data.teamNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
