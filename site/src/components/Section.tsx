import type { ReactNode } from "react";

interface SectionProps {
  ground?: "surface" | "sunk";
  children: ReactNode;
}

/** A full-width band. Sections are separated by a change of ground, never shadows. */
export function Section({ ground = "surface", children }: SectionProps) {
  return (
    <section className={`site-section site-section--${ground}`}>
      <div className="site-section__inner">{children}</div>
    </section>
  );
}
