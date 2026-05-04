// UCA Emprende — shared primitives (buttons, badges, chips, icons)
// Exposes: Button, Badge, Chip, Icon, Logo, Eyebrow

const { useState } = React;

/* ---------- Icons (Lucide-style, stroke 2px, currentColor) ---------- */
const Icon = ({ name, size = 20, strokeWidth = 2, className = "", ...rest }) => {
  const paths = {
    search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
    menu: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>,
    x: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
    chevronDown: <polyline points="6 9 12 15 18 9" />,
    chevronRight: <polyline points="9 18 15 12 9 6" />,
    arrowRight: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
    mapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
    lightbulb: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8a6 6 0 0 0-12 0c0 1.5.5 3 1.5 3.5.76.76 1.23 1.52 1.41 2.5" /></>,
    award: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>,
    euro: <><path d="M4 10h12" /><path d="M4 14h9" /><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" /></>,
    graduationCap: <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
    send: <><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></>,
    filter: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
    sparkles: <><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" /><path d="M19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" /></>,
    target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
    youtube: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></>,
    play: <polygon points="5 3 19 12 5 21 5 3" />,
    star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
};

/* ---------- Button ---------- */
const Button = ({ variant = "primary", size = "md", children, icon, iconRight, ...rest }) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-family-primary)",
    fontWeight: 700,
    letterSpacing: "var(--ls-button)",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all var(--duration-medium) var(--ease-out)",
    whiteSpace: "nowrap",
    fontSize: size === "lg" ? 17 : size === "sm" ? 14 : 16,
    padding: size === "lg" ? "14px 32px" : size === "sm" ? "8px 16px" : "12px 24px",
    borderRadius: "var(--radius-md)",
  };
  const variants = {
    primary: { background: "var(--color-brand-accent)", color: "#fff", boxShadow: "var(--shadow-sm)" },
    secondary: { background: "var(--color-brand-primary)", color: "#fff", boxShadow: "var(--shadow-sm)" },
    outline: { background: "transparent", color: "var(--color-brand-primary)", boxShadow: "inset 0 0 0 2px var(--color-brand-primary)" },
    ghost: { background: "transparent", color: "var(--color-brand-primary)" },
    white: { background: "#fff", color: "var(--color-brand-primary)", boxShadow: "var(--shadow-sm)" },
  };
  return (
    <button
      {...rest}
      className={`uca-btn uca-btn--${variant} ${rest.className || ""}`}
      style={{ ...base, ...variants[variant], ...(rest.style || {}) }}
    >
      {icon && <Icon name={icon} size={18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={18} />}
    </button>
  );
};

/* ---------- Eyebrow label ---------- */
const Eyebrow = ({ children, color = "accent", style = {} }) => (
  <span
    className="eyebrow"
    style={{
      color: color === "accent" ? "var(--color-brand-accent)" : color === "primary" ? "var(--color-brand-primary)" : "var(--color-text-secondary)",
      ...style,
    }}
  >
    {children}
  </span>
);

/* ---------- Badge (fecha, categoría, ribbon) ---------- */
const Badge = ({ variant = "fecha", children }) => {
  const styles = {
    fecha: {
      background: "var(--color-bg-accent-tint)",
      color: "var(--color-brand-accent)",
      padding: "5px 12px",
      borderRadius: "var(--radius-full)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    categoria: {
      background: "var(--color-bg-muted)",
      color: "var(--color-text-body)",
      padding: "5px 10px",
      borderRadius: "var(--radius-full)",
      fontSize: 12,
      fontWeight: 700,
    },
    categoriaActiva: {
      background: "var(--color-brand-primary)",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "var(--radius-full)",
      fontSize: 12,
      fontWeight: 700,
    },
    ribbon: {
      background: "var(--color-brand-primary)",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  };
  return <span style={{ display: "inline-block", ...styles[variant] }}>{children}</span>;
};

/* ---------- Chip (filter) ---------- */
const Chip = ({ children, active, onRemove, onClick }) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: onRemove ? "6px 10px 6px 14px" : "7px 14px",
    borderRadius: "var(--radius-full)",
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "var(--font-family-primary)",
    cursor: "pointer",
    border: "1px solid transparent",
    transition: "all 150ms ease",
  };
  const theme = active
    ? { background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", borderColor: "rgba(0,88,119,0.2)" }
    : { background: "var(--color-bg-muted)", color: "var(--color-text-body)" };
  return (
    <span style={{ ...base, ...theme }} onClick={onClick}>
      {children}
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{ width: 18, height: 18, border: "none", background: "transparent", color: "inherit", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Eliminar filtro"
        >
          <Icon name="x" size={14} />
        </button>
      )}
    </span>
  );
};

/* ---------- Logo ---------- */
const Logo = ({ variant = "emprende", height = 40 }) => {
  if (variant === "uca") return <img src="assets/logo-uca.svg" alt="Universidad de Cádiz" style={{ height, width: "auto", display: "block" }} />;
  return <img src="assets/logo-uca-emprende.png" alt="UCA Emprende" style={{ height, width: "auto", display: "block" }} />;
};

Object.assign(window, { Icon, Button, Badge, Chip, Logo, Eyebrow });
