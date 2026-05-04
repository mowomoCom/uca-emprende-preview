// Nueva Home — Casos de éxito (testimoniales) + Newsletter band

const SuccessStories = () => {
  const stories = [
    {
      company: "Algas del Sur",
      sector: "Biotech · Ciencias del Mar",
      founder: "Lucía Pérez, Marina Ayala, Ana Rojas",
      year: "Generación 2023",
      quote: "Entramos con un TFG y una hoja de cálculo. Salimos con clientes en Japón y nuestra primera ronda cerrada. El Olivillo nos dio una mesa, pero lo que importó fue la red.",
      metric: "340k€",
      metricLabel: "Ronda seed",
      tone: "primary",
    },
    {
      company: "Mareo Lab",
      sector: "HealthTech",
      founder: "Elena Casado",
      year: "Generación 2022",
      quote: "Los mentores del programa me obligaron a hablar con 80 clientes antes de escribir una sola línea de código. No es cómodo, pero es lo único que funciona.",
      metric: "18",
      metricLabel: "Hospitales cliente",
      tone: "accent",
    },
    {
      company: "Sotavento Energy",
      sector: "CleanTech · Eólica marina",
      founder: "Daniel Pardo",
      year: "Generación 2024",
      quote: "La cátedra nos conectó con CDTI y con dos business angels el mismo trimestre. No hay aceleradora privada que te dé eso en Cádiz.",
      metric: "1,2M€",
      metricLabel: "Financiación pública",
      tone: "primary",
    },
  ];

  return (
    <section style={{ background: "var(--color-bg-base)", padding: "112px 0" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, gap: 32, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow color="primary">Casos de éxito</Eyebrow>
            <h2 style={{
              fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900,
              color: "var(--color-text-primary)", margin: "12px 0 16px",
            }}>
              Empezaron <span style={{ fontStyle: "italic", fontWeight: 300 }}>como tú</span>.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>
              Tres proyectos de la Cátedra que pasaron del aula al mercado. Todos pasaron por
              El Olivillo; todos siguen en la red alumni.
            </p>
          </div>
          <Button variant="outline" iconRight="arrowRight">Todas las startups</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {stories.map((s, i) => <StoryCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
};

const StoryCard = ({ company, sector, founder, year, quote, metric, metricLabel, tone }) => {
  const [hover, setHover] = React.useState(false);
  const isAccent = tone === "accent";
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        border: "1px solid var(--color-border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        transition: "all var(--duration-medium) var(--ease-out)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Placeholder logo/avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 56, height: 56, borderRadius: "var(--radius-md)",
          background: isAccent ? "var(--color-bg-accent-tint)" : "var(--color-bg-brand-tint)",
          color: isAccent ? "var(--color-brand-accent)" : "var(--color-brand-primary)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-family-primary)", fontWeight: 900, fontSize: 24,
          letterSpacing: "-0.02em",
          flexShrink: 0,
        }}>
          {company.split(" ").map(w => w[0]).join("").slice(0, 2)}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: "var(--color-text-primary)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            {company}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", letterSpacing: "0.04em", textTransform: "uppercase", marginTop: 4 }}>
            {sector}
          </div>
        </div>
      </div>

      {/* Cita */}
      <blockquote style={{
        margin: 0, fontSize: 16, lineHeight: 1.55,
        color: "var(--color-text-body)", fontStyle: "italic",
        position: "relative", paddingLeft: 20,
        borderLeft: `3px solid ${isAccent ? "var(--color-brand-accent)" : "var(--color-brand-primary)"}`,
      }}>
        "{quote}"
      </blockquote>

      {/* Metric + founder */}
      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: 20, borderTop: "1px solid var(--color-border-subtle)" }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.02em", color: isAccent ? "var(--color-brand-accent)" : "var(--color-brand-primary)", lineHeight: 1 }}>
            {metric}
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginTop: 4 }}>
            {metricLabel}
          </div>
        </div>
        <div style={{ textAlign: "right", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.4 }}>
          <div style={{ fontWeight: 700, color: "var(--color-text-body)" }}>{founder}</div>
          <div style={{ marginTop: 2 }}>{year}</div>
        </div>
      </div>
    </article>
  );
};

/* ================================================================
   Newsletter + Contacto — banda oscura final
================================================================ */
const NewsletterBand = () => {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background: "var(--color-brand-primary)", color: "#fff", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      {/* textura */}
      <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}>
        <defs>
          <pattern id="nws-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nws-dots)" />
      </svg>

      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Eyebrow color="accent">Boletín UCA Emprende</Eyebrow>
            <h2 style={{
              fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900,
              color: "#fff", margin: "12px 0 20px", textWrap: "balance",
            }}>
              Una vez al mes, lo <span style={{ color: "var(--color-brand-accent)" }}>esencial</span>.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", margin: 0, maxWidth: 440 }}>
              Convocatorias con deadline, nuevas actividades en El Olivillo,
              casos de éxito y oportunidades de financiación. Sin spam y
              con un botón de baja que sí funciona.
            </p>
          </div>

          <div>
            {sent ? (
              <div style={{
                background: "rgba(255,255,255,0.08)", padding: 32,
                borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 48, lineHeight: 1, color: "var(--color-brand-accent)", marginBottom: 12 }}>✓</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>Suscripción recibida.</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Te escribimos el primer martes del mes.</div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setSent(true); }}
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <label style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                  Tu email
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu.nombre@uca.es"
                    style={{
                      flex: 1, fontFamily: "var(--font-family-primary)",
                      fontSize: 16, padding: "14px 18px",
                      background: "rgba(255,255,255,0.08)", color: "#fff",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "var(--radius-md)",
                      outline: "none",
                    }}
                  />
                  <Button type="submit" variant="primary" size="lg">Suscribirme</Button>
                </div>
                <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginTop: 8 }}>
                  <input type="checkbox" required style={{ marginTop: 3, accentColor: "#E87B00" }} />
                  <span>He leído la <a style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 3 }}>política de privacidad</a> y acepto el tratamiento de mis datos.</span>
                </label>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { SuccessStories, NewsletterBand });
