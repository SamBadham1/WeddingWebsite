// The shape of every piece of site content.

export type ButtonVariant = "primary" | "outline" | "link" | "on-forest";

export interface LinkItem {
  label: string;
  /** "/schedule" for a page on this site, a full URL for anything else. */
  href: string;
}

export interface Action extends LinkItem {
  variant: ButtonVariant;
}

export interface Heading {
  eyebrow: string;
  title: string;
}

export interface SiteContent {
  couple: { names: string; monogram: string; nameLines: string[] };
  venue: { name: string; area: string };
  /** As printed on the card, e.g. "Saturday April 17th 2027". */
  dateDisplay: string;
  /** For running text, e.g. "Saturday 17 April 2027". */
  dateText: string;
  nav: LinkItem[];
}

export interface HomeContent {
  hero: { eyebrow: string; action?: LinkItem };
  intro: Heading & { body: string[]; actions: Action[] };
}

export interface EventItem {
  time: string;
  title: string;
  place: string;
  note?: string;
}

export interface ScheduleContent {
  heading: Heading;
  intro: string;
  events: EventItem[];
}

export interface TravelSection {
  title: string;
  body: string[];
  links?: LinkItem[];
}

export interface TravelContent {
  heading: Heading;
  intro: string;
  sections: TravelSection[];
}

export interface ImageItem {
  /** A path under public/, e.g. "/images/dress-code/look-1.jpg". */
  src: string;
  alt: string;
  caption?: string;
}

export interface DressCodeContent {
  heading: Heading;
  /** The dress code itself, e.g. "Eclectic Formal". */
  code: string;
  keywords: string[];
  body: string[];
  images: ImageItem[];
}

export interface FaqItem {
  question: string;
  answer: string[];
}

export interface FaqContent {
  heading: Heading;
  items: FaqItem[];
}
