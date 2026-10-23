import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-du-gold text-du-maroon-dark hover:bg-du-gold-light shadow-lg shadow-du-gold/20",
  secondary:
    "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm",
  ghost:
    "bg-transparent text-du-maroon border border-du-maroon/30 hover:bg-du-maroon/5",
};

export function Button({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  download,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  download?: boolean | string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      download={download}
    >
      {children}
    </a>
  );
}
