import { Link } from "react-router";
import type { ButtonVariant } from "../content";

interface ButtonProps {
  label: string;
  href: string;
  variant: ButtonVariant;
}

/** `.wd-btn`. Internal paths use the router; anything else opens in a new tab. */
export function Button({ label, href, variant }: ButtonProps) {
  const className = `wd-btn wd-btn--${variant}`;
  if (href.startsWith("/")) {
    return <Link className={className} to={href}>{label}</Link>;
  }
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
}
