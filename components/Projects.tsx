"use client";

import { Fragment } from "react";
import { projects, type ProjectMeta } from "@/lib/content";
import ProjectCard from "./ProjectCard";
import QuoteBand from "./QuoteBand";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "./LocaleProvider";

export default function Projects() {
  const { dict } = useI18n();
  const [feature, ...rest] = projects;

  // The first project gets an editorial full-width treatment, the rest are
  // grouped into pairs. A quote is placed after the first pair.
  const groups: ProjectMeta[][] = [];
  for (let i = 0; i < rest.length; i += 2) {
    groups.push(rest.slice(i, i + 2));
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          label={dict.projects.label}
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
        />

        <div className="projects">
          <Reveal>
            <ProjectCard project={feature} variant="feature" />
          </Reveal>

          {groups.map((group, groupIndex) => (
            <Fragment key={groupIndex}>
              {groupIndex === 1 ? <QuoteBand quoteKey="shipping" /> : null}

              {group.length === 1 ? (
                <Reveal>
                  <ProjectCard project={group[0]} variant="wide" />
                </Reveal>
              ) : (
                <div className="projects__pair">
                  {group.map((project, index) => (
                    <Reveal key={project.slug} delay={index * 0.05}>
                      <ProjectCard project={project} />
                    </Reveal>
                  ))}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
