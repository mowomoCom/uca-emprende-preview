// UCA Emprende — Programas
// Estructura: breadcrumb · hero · itinerario (4 fases) · listado de programas en filas
// detalladas · banda de convocatorias · CTA. Contenido de ejemplo con la línea del sitio.

const ITINERARY = [
  { step: "01", icon: "lightbulb", title: "Explora", desc: "Primera cita y validación de la idea." },
  { step: "02", icon: "graduationCap", title: "Fórmate", desc: "Talleres y máster para construir el modelo." },
  { step: "03", icon: "target", title: "Lanza", desc: "Programas intensivos y prototipo en el mercado." },
  { step: "04", icon: "euro", title: "Escala", desc: "Financiación, inversores y red alumni." },
];

const PROGRAMS = [
  {
    tag: "Formación reglada", icon: "graduationCap",
    title: "Máster en Creación de Empresas",
    desc: "Un curso académico para pasar de la idea al plan de empresa, con proyecto real tutorizado de principio a fin.",
    meta: [["Duración", "1 curso académico"], ["Formato", "Presencial · El Olivillo"], ["Para", "Titulados UCA"]],
    tone: "primary",
  },
  {
    tag: "Programa intensivo", icon: "target",
    title: "Lanzadera UCA",
    desc: "12 semanas para equipos con prototipo funcional. Metodología lean, mentoring semanal y demo day final ante inversores.",
    meta: [["Duración", "12 semanas"], ["Formato", "Híbrido"], ["Para", "Equipos con MVP"]],
    tone: "accent",
    featured: true,
  },
  {
    tag: "Convocatoria", icon: "award",
    title: "Premio Atrévete",
    desc: "El concurso de ideas de la Cátedra. 18.000 € en premios, seis meses de coworking y mentoring alumni para los ganadores.",
    meta: [["Dotación", "18.000 €"], ["Cierre", "30 jun 2026"], ["Para", "Comunidad UCA"]],
    tone: "muted",
  },
  {
    tag: "Aceleración", icon: "sparkles",
    title: "Santander X · Explorer",
    desc: "Programa de descubrimiento y aceleración temprana para 30 jóvenes con inquietud emprendedora. En colaboración con Banco Santander.",
    meta: [["Plazas", "30 equipos"], ["Formato", "Presencial + viaje"], ["Para", "Menores de 31"]],
    tone: "muted",
  },
];

const ProgramasPage = ({ onNavigate }) => {
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };

  return (
    <div data-screen-label="06 Programas">
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 56, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs><pattern id="prg-grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#prg-grid)" />
        </svg>
        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8 }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>Programas</span>
          </nav>
          <div style={{ maxWidth: 820 }}>
            <Eyebrow color="primary">Programas UCA Emprende</Eyebrow>
            <h1 className="prg-h1" style={{ fontSize: 76, lineHeight: 1.0, letterSpacing: "-0.035em", fontWeight: 900, color: "var(--color-text-primary)", margin: "14px 0 24px", textWrap: "balance" }}>
              Un itinerario para cada <span style={{ color: "var(--color-brand-accent)" }}>momento</span> de tu proyecto.
            </h1>
            <p style={{ fontSize: 21, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0, maxWidth: 680 }}>
              Da igual si vienes con una idea en una servilleta o con un prototipo y tus primeros clientes.
              Hay un programa diseñado para el punto exacto en el que estás.
            </p>
          </div>
        </div>
      </section>

      {/* ITINERARIO */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div className="prg-itinerary-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "#fff" }}>
            {ITINERARY.map((it, i) => (
              <div key={it.step} style={{ padding: 28, borderRight: i < ITINERARY.length - 1 ? "1px solid var(--color-border-subtle)" : "none", position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={it.icon} size={22} strokeWidth={1.75} />
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.06em", color: "var(--color-text-tertiary)" }}>{it.step}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "var(--color-text-primary)", margin: "0 0 6px" }}>{it.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTADO */}
      <section style={{ background: "var(--color-bg-alt)", padding: "88px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 620, marginBottom: 48 }}>
            <Eyebrow color="primary">Qué ofrecemos</Eyebrow>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 0", textWrap: "balance" }}>
              Nuestros programas.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {PROGRAMS.map((p) => <ProgramRow key={p.title} program={p} onOpen={go("programa")} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ background: "var(--color-brand-primary)", borderRadius: "var(--radius-2xl)", padding: "56px 48px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 560 }}>
              <h2 style={{ fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 900, color: "#fff", margin: 0, textWrap: "balance" }}>
                ¿No sabes por dónde empezar?
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", margin: "12px 0 0" }}>
                Pide una primera cita gratuita y te orientamos hacia el programa que encaja contigo.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" iconRight="arrowRight" onClick={go("contacto")}>Pedir cita</Button>
              <Button variant="white" size="lg" onClick={go("actividades")}>Ver agenda</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProgramRow = ({ program, onOpen }) => {
  const [hover, setHover] = React.useState(false);
  const { tag, icon, title, desc, meta, tone, featured } = program;
  const accent = tone === "accent";
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: "#fff", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border-subtle)", padding: 32, display: "grid", gridTemplateColumns: "72px 1fr auto", gap: 28, alignItems: "center", boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)", transition: "all var(--duration-medium) var(--ease-out)", borderLeft: featured ? "4px solid var(--color-brand-accent)" : "1px solid var(--color-border-subtle)" }}
      className="prg-row"
    >
      <div style={{ width: 72, height: 72, borderRadius: "var(--radius-md)", background: accent ? "var(--color-bg-accent-tint)" : "var(--color-bg-brand-tint)", color: accent ? "var(--color-brand-accent)" : "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name={icon} size={34} strokeWidth={1.75} />
      </div>
      <div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: accent ? "var(--color-brand-accent)" : "var(--color-brand-primary)" }}>{tag}</span>
          {featured && <Badge variant="ribbon">★ Más popular</Badge>}
        </div>
        <h3 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.01em", color: "var(--color-text-primary)", margin: "0 0 8px" }}>{title}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-text-body)", margin: "0 0 14px", maxWidth: 640 }}>{desc}</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {meta.map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{k}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="prg-row-cta" style={{ flexShrink: 0 }}>
        <Button variant="outline" iconRight="arrowRight" onClick={onOpen}>Más información</Button>
      </div>
    </article>
  );
};

Object.assign(window, { ProgramasPage });
