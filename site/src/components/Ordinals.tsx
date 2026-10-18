import type { ReactNode } from "react";

const ORDINAL = /(\d)(st|nd|rd|th)\b/g;

/** Renders "April 17th" with the suffix as a superscript, as on the printed card. */
export function Ordinals({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(ORDINAL)) {
    const end = match.index + match[0].length;
    parts.push(text.slice(last, end - match[2].length), <sup key={match.index}>{match[2]}</sup>);
    last = end;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}
