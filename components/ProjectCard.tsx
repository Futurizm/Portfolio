"use client";

import { ArrowUpRight } from "lucide-react";
import type { ProjectMeta } from "@/lib/content";
import TagList from "./TagList";
import { useI18n } from "./LocaleProvider";

export default function ProjectCard({
  project,
  variant = "default",
}: {
  project: ProjectMeta;
  variant?: "feature" | "default" | "wide";
}) {
  const { dict } = useI18n();
  const item = dict.projects.items[project.slug];
  if (!item) return null;

  return (
    <article className="project" data-variant={variant}>
      <div className="project__top">
        <span className="project__index">{project.index}</span>
        <span className="project__category">{item.category}</span>
        {item.badge ? <span className="badge">{item.badge}</span> : null}
      </div>

      <h3 className="project__title">{project.name}</h3>

      <div className="project__body">
        {item.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {item.context ? (
          <p className="project__context">{item.context}</p>
        ) : null}
      </div>

      <div className="project__foot">
        <TagList tags={project.tags} />
        <a
          className="link"
          href={project.href}
          target={project.external ? "_blank" : undefined}
          rel={project.external ? "noopener noreferrer" : undefined}
        >
          {item.linkLabel}
          <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden />
        </a>
      </div>
    </article>
  );
}
