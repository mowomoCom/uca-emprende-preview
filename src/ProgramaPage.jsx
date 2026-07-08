// UCA Emprende — Single de programa (detalle de un programa)
// Estructura: breadcrumb · hero split · cuerpo (sobre / a quién / qué incluye / fases /
// mentores) + sidebar sticky de convocatoria · programas relacionados.
// Datos de ejemplo del programa Lanzadera UCA.

const PROGRAM = {
  tag: "Programa intensivo",
  title: "Lanzadera UCA",
  lead: "12 semanas para llevar tu prototipo del laboratorio al mercado, con mentoring semanal y un demo day final ante inversores.",
  image: "uploads/act/act-bootcamp.jpg",
  meta: { duracion: "12 semanas", formato: "Híbrido · El Olivillo", dedicacion: "10 h / semana", plazas: "20 plazas" },
  convocatoria: { estado: "Abierta", cierre: "30 jun 2026", inicio: "Septiembre 2026" },
  intro: [
    "Lanzadera UCA es el programa de aceleración temprana de la Cátedra de Emprendedores. Está pensado para equipos que ya tienen un prototipo funcional y quieren validarlo en el mercado, conseguir sus primeros clientes y prepararse para levantar financiación.",
    "Durante 12 semanas trabajarás con una metodología lean, acompañado de un mentor asignado y con acceso a la red de inversores y alumni de la Universidad de Cádiz.",
  ],
  forWhom: [
    "Equipos de la comunidad UCA (estudiantes, egresados, personal o alumni).",
    "Proyectos con un prototipo o MVP ya funcionando, no solo una idea.",
    "Disponibilidad para dedicar al menos 10 horas semanales durante el programa.",
  ],
  includes: [
    { icon: "award", title: "Mentor asignado", desc: "Una sesión semanal individual con un mentor de tu sector." },
    { icon: "home", title: "Espacio en El Olivillo", desc: "Puesto de coworking durante todo el programa." },
    { icon: "graduationCap", title: "Formación aplicada", desc: "Talleres de producto, pricing, legal y fundraising." },
    { icon: "euro", title: "Acceso a inversores", desc: "Demo day final ante business angels y fondos del entorno." },
  ],
  phases: [
    { range: "Semanas 1-3", title: "Descubrimiento y validación", desc: "Hipótesis, entrevistas de cliente y primeros experimentos de mercado." },
    { range: "Semanas 4-6", title: "Producto y métricas", desc: "Iteración del MVP y definición de las métricas que de verdad importan." },
    { range: "Semanas 7-9", title: "Modelo y tracción", desc: "Pricing, canales de captación y consecución de los primeros clientes." },
    { range: "Semanas 10-12", title: "Inversión y Demo Day", desc: "Preparación del pitch y presentación ante inversores." },
  ],
  mentors: ["Elena Casado · Producto", "Daniel Pardo · CleanTech", "Nuria Cano · SaaS e IA", "Gonzalo Ferrer · Fundraising"],
};

const RELATED_PROGRAMS = [
  { tag: "Formación reglada", icon: "graduationCap", title: "Máster en Creación de Empresas", desc: "Un curso académico para pasar de la idea al plan de empresa." },
  { tag: "Convocatoria", icon: "award", title: "Premio Atrévete", desc: "18.000 € en premios, coworking y mentoring para las mejores ideas." },
  { tag: "Aceleración", icon: "sparkles", title: "Santander X · Explorer", desc: "Descubrimiento y aceleración temprana para jóvenes emprendedores." },
];

const ProgramaPage = ({ onNavigate }) => {
  const p = PROGRAM;
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };

  return (
    <div data-screen-label="Programa · detalle">
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 64, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs><pattern id="pgs-grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#pgs-grid)" />
        </svg>
        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <a href="#" onClick={go("programas")} style={{ color: "inherit", textDecoration: "none" }}>Programas</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>{p.title}</span>
          </nav>
          <div className="pgs-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 18 }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-brand-accent)" }}>{p.tag}</span>
                <Badge variant="fecha">Convocatoria {p.convocatoria.estado.toLowerCase()}</Badge>
              </div>
              <h1 className="pgs-h1" style={{ fontSize: 64, lineHeight: 1.0, letterSpacing: "-0.035em", fontWeight: 900, color: "var(--color-text-primary)", margin: "0 0 20px", textWrap: "balance" }}>
                {p.title}
              </h1>
              <p style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-text-body)", margin: "0 0 28px", maxWidth: 560 }}>{p.lead}</p>
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                {[["clock", p.meta.duracion], ["home", p.meta.formato], ["users", p.meta.plazas]].map(([icon, label]) => (
                  <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)" }}>
                    <span style={{ color: "var(--color-brand-primary)" }}><Icon name={icon} size={18} /></span>{label}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: "var(--radius-2xl)", overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "var(--shadow-lg)", background: "var(--color-bg-brand-tint)" }}>
              <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CUERPO */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="pgs-body-grid" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 64, alignItems: "start" }}>
            <div>
              <PgBlock title="Sobre el programa">
                {p.intro.map((t, i) => <p key={i} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-text-body)", margin: "0 0 16px" }}>{t}</p>)}
              </PgBlock>

              <PgBlock title="A quién va dirigido">
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
                  {p.forWhom.map((l, i) => (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 12, alignItems: "start" }}>
                      <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}><Icon name="chevronRight" size={16} /></span>
                      <span style={{ fontSize: 17, lineHeight: 1.55, color: "var(--color-text-body)" }}>{l}</span>
                    </li>
                  ))}
                </ul>
              </PgBlock>

              <PgBlock title="Qué incluye">
                <div className="pgs-includes-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {p.includes.map((it) => (
                    <div key={it.title} style={{ background: "var(--color-bg-alt)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-lg)", padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                      <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "#fff", color: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--color-border-subtle)" }}>
                        <Icon name={it.icon} size={22} strokeWidth={1.75} />
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text-primary)" }}>{it.title}</div>
                      <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--color-text-body)" }}>{it.desc}</div>
                    </div>
                  ))}
                </div>
              </PgBlock>

              <PgBlock title="Cómo es el itinerario">
                <div>
                  {p.phases.map((ph, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "132px 1fr", gap: 20, padding: "18px 0", borderTop: "1px solid var(--color-border-subtle)" }}>
                      <div style={{ fontSize: 13, fontWeight: 900, color: "var(--color-brand-accent)", letterSpacing: "0.02em", textTransform: "uppercase", paddingTop: 2 }}>{ph.range}</div>
                      <div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 3 }}>{ph.title}</div>
                        <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-text-secondary)" }}>{ph.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </PgBlock>

              <PgBlock title="Mentores del programa">
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {p.mentors.map((m) => (
                    <span key={m} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-full)", padding: "8px 16px 8px 8px", fontSize: 14, fontWeight: 700, color: "var(--color-text-primary)" }}>
                      <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900 }}>{m.split(" ")[0][0]}{m.split(" ")[1] ? m.split(" ")[1][0] : ""}</span>
                      {m}
                    </span>
                  ))}
                </div>
              </PgBlock>
            </div>

            {/* Sidebar convocatoria */}
            <aside className="pgs-aside" style={{ position: "sticky", top: 100 }}>
              <div style={{ background: "#fff", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", padding: 28 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-bg-accent-tint)", color: "var(--color-brand-accent)", borderRadius: "var(--radius-full)", padding: "6px 12px", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  Convocatoria {p.convocatoria.estado.toLowerCase()}
                </div>
                <div style={{ display: "grid", gap: 12, margin: "20px 0", paddingBottom: 20, borderBottom: "1px solid var(--color-border-subtle)" }}>
                  {[
                    ["clock", "Duración", p.meta.duracion],
                    ["calendar", "Inicio", p.convocatoria.inicio],
                    ["calendar", "Cierre inscripción", p.convocatoria.cierre],
                    ["users", "Plazas", p.meta.plazas],
                    ["home", "Formato", p.meta.formato],
                  ].map(([icon, k, v]) => (
                    <div key={k} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 12, alignItems: "start" }}>
                      <span style={{ color: "var(--color-brand-primary)", marginTop: 1 }}><Icon name={icon} size={18} /></span>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{k}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginTop: 1 }}>{v}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="lg" iconRight="arrowRight" style={{ width: "100%" }} onClick={go("contacto")}>Solicitar plaza</Button>
                <button onClick={go("contacto")} style={{ width: "100%", marginTop: 10, background: "transparent", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-md)", padding: "12px 16px", fontFamily: "var(--font-family-primary)", fontSize: 15, fontWeight: 700, color: "var(--color-brand-primary)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <Icon name="book" size={16} /> Descargar bases
                </button>
                <p style={{ fontSize: 12, lineHeight: 1.5, color: "var(--color-text-secondary)", margin: "16px 0 0", textAlign: "center" }}>
                  Plazas limitadas. La admisión se realiza por orden de solicitud y valoración del proyecto.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELACIONADOS */}
      <section style={{ background: "var(--color-bg-alt)", padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
            <div>
              <Eyebrow color="primary">Otros programas</Eyebrow>
              <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-text-primary)", margin: "8px 0 0" }}>Quizá también te encaje</h2>
            </div>
            <a href="#" onClick={go("programas")} style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>Ver todos los programas <Icon name="arrowRight" size={16} /></a>
          </div>
          <div className="pgs-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {RELATED_PROGRAMS.map((r, i) => (
              <article key={i} onClick={go("programa")} style={{ background: "#fff", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-subtle)", padding: 28, cursor: "pointer", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={r.icon} size={26} strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-brand-primary)" }}>{r.tag}</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.25 }}>{r.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>{r.desc}</p>
                <span style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6, marginTop: "auto" }}>Ver programa <Icon name="arrowRight" size={15} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PgBlock = ({ title, children }) => (
  <div style={{ marginBottom: 44 }}>
    <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.01em", color: "var(--color-text-primary)", margin: "0 0 18px" }}>{title}</h2>
    {children}
  </div>
);

Object.assign(window, { ProgramaPage });
