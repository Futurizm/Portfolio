import type { ReactNode } from "react";

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "start",
}: {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "start" | "center";
}) {
  return (
    <header className="section-head" data-align={align}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-sub">{subtitle}</p> : null}
    </header>
  );
}
