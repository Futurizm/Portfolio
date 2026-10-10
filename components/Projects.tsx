"use client";

import { projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";
import QuoteBand from "./QuoteBand";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "./LocaleProvider";

export default function Projects() {
  const { dict } = useI18n();
  const [feature, second, third, last] = projects;

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

          <div className="projects__pair">
            <Reveal delay={0.05}>
              <ProjectCard project={second} />
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectCard project={third} />
            </Reveal>
          </div>

          <QuoteBand quoteKey="shipping" />

          <Reveal>
            <ProjectCard project={last} variant="wide" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
