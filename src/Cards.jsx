// UCA Emprende — Card components: ActivityCard, ServiceCard, BlogCard, StatBlock

const ActivityCard = ({ activity, featured }) => {
  const { title, desc, date, location, duration, category, image, flagship } = activity;
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid var(--color-border-subtle)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
        display: "flex",
        flexDirection: "column",
        transition: "all var(--duration-medium) var(--ease-out)",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
    >
      {flagship && (
        <div style={{ position: "absolute", top: 16, left: 16, zIndex: 2 }}>
          <Badge variant="ribbon">★ Programa flagship</Badge>
        </div>
      )}
      <div
        style={{
          aspectRatio: featured ? "16/9" : "4/3",
          background: image || "linear-gradient(135deg, #e6f0f4, #fff1e0)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      />
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge variant="fecha">{date}</Badge>
          {category && <Badge variant="categoria">{category}</Badge>}
        </div>
        <h3
          style={{
            fontSize: featured ? 26 : 20,
            fontWeight: 700,
            lineHeight: 1.25,
            color: "var(--color-text-primary)",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        {desc && (
          <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>
            {desc}
          </p>
        )}
        <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--color-border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            Inscribirme <Icon name="arrowRight" size={16} />
          </a>
          <span style={{ color: "var(--color-text-secondary)", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Icon name="mapPin" size={13} /> {location} · {duration}
          </span>
        </div>
      </div>
    </article>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <article
    style={{
      background: "#fff",
      border: "1px solid var(--color-border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      transition: "all var(--duration-medium) var(--ease-out)",
      cursor: "pointer",
      boxShadow: "var(--shadow-sm)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.borderColor = "rgba(0,88,119,0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.style.borderColor = "var(--color-border-subtle)";
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "var(--radius-md)",
        background: "var(--color-bg-brand-tint)",
        color: "var(--color-brand-primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon name={icon} size={28} strokeWidth={1.75} />
    </div>
    <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.25 }}>
      {title}
    </h3>
    <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>
      {desc}
    </p>
    <a style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginTop: "auto" }}>
      Saber más <Icon name="arrowRight" size={16} />
    </a>
  </article>
);

const BlogCard = ({ title, excerpt, date, category, image }) => (
  <article
    style={{
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      transition: "all var(--duration-medium) var(--ease-out)",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div
      style={{
        aspectRatio: "16/10",
        background: image || "linear-gradient(135deg, #005877, #2e3d43)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
      <Eyebrow color="accent">{category}</Eyebrow>
      <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: "var(--color-text-primary)", margin: 0, letterSpacing: "-0.01em" }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>
        {excerpt}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 12 }}>
        <span style={{ color: "var(--color-text-secondary)", fontSize: 12 }}>{date}</span>
        <a style={{ color: "var(--color-brand-primary)", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Leer →</a>
      </div>
    </div>
  </article>
);

const StatBlock = ({ value, label, suffix }) => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        fontSize: 72,
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        color: "var(--color-brand-primary)",
        fontFamily: "var(--font-family-primary)",
      }}
    >
      {value}
      {suffix && <span style={{ color: "var(--color-brand-accent)" }}>{suffix}</span>}
    </div>
    <div
      style={{
        marginTop: 8,
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--color-text-secondary)",
      }}
    >
      {label}
    </div>
  </div>
);

Object.assign(window, { ActivityCard, ServiceCard, BlogCard, StatBlock });
