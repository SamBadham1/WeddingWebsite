/**
 * Samuel & Samantha — components are plain HTML + CSS classes from bundle.css (no JavaScript).
 * These interfaces document the content each one takes.
 */
/** `nav.wd-nav` (+ `wd-nav--on-forest` over the hero). */
export interface NavBarProps { links: { label: string; href: string; current?: boolean }[]; onForest?: boolean; }
/** `header.wd-hero` — the save-the-date as the home page hero. */
export interface HeroProps { eyebrow: string; names: [string, string]; details: string[]; action?: { label: string; href: string }; }
/** `div.wd-heading` (+ `wd-heading--on-forest`). */
export interface SectionHeadingProps { eyebrow: string; title: string; onForest?: boolean; }
/** `.wd-btn` + one variant class. */
export interface ButtonProps { variant: "primary" | "outline" | "link" | "on-forest"; label: string; href?: string; disabled?: boolean; }
/** `article.wd-event` inside `div.wd-events`. */
export interface EventCardProps { time: string; title: string; place: string; note?: string; }
