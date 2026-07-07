// UCA Emprende — Sobre UCA Emprende (quiénes somos)
// Estructura: breadcrumb · hero editorial · misión + cifras · qué hacemos · valores ·
// hitos (timeline) · equipo · CTA a contacto. Contenido de ejemplo con la línea del sitio.

const SOBRE_STATS = [
  { value: "45", suffix: "", label: "años de trayectoria" },
  { value: "450", suffix: "+", label: "emprendedores formados" },
  { value: "28", suffix: "", label: "startups activas" },
  { value: "6,2", suffix: "M€", label: "captados por proyectos" },
];

const VALUES = [
  { icon: "users", title: "Cercanía", desc: "Acompañamos de tú a tú, sin burocracia. La primera cita siempre es un café, no un formulario." },
  { icon: "target", title: "Rigor", desc: "Método antes que humo. Validar, medir y decidir con datos, no con corazonadas." },
  { icon: "home", title: "Comunidad", desc: "Nadie emprende solo. La red alumni y El Olivillo son el motor de todo lo que hacemos." },
  { icon: "sparkles", title: "Impacto", desc: "Proyectos que crean empleo y transforman el tejido productivo de la bahía de Cádiz." },
];

const MILESTONES = [
  { year: "1981", title: "Nace la Cátedra", desc: "La Universidad de Cádiz crea la Cátedra de Emprendedores para acercar la empresa al aula." },
  { year: "2009", title: "Primer Premio Atrévete", desc: "Arranca el concurso de ideas que hoy es referente del emprendimiento universitario andaluz." },
  { year: "2016", title: "Abre El Olivillo", desc: "Un antiguo cine del casco histórico se convierte en coworking y sede de la comunidad." },
  { year: "2026", title: "Red de 450+", desc: "Más de 450 emprendedores formados y una cartera viva de 28 startups en activo." },
];

const TEAM = [
  { name: "Dirección de la Cátedra", role: "Vicerrectorado de Emprendimiento" },
  { name: "Coordinación de programas", role: "Formación y mentoring" },
  { name: "Gestión de El Olivillo", role: "Coworking y comunidad" },
  { name: "Comunicación y alumni", role: "Difusión y red de contactos" },
];

const SobrePage = ({ onNavigate }) => {
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };

  return (
    <div data-screen-label="05 Sobre UCA Emprende">
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 64, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs><pattern id="sob-grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#sob-grid)" />
        </svg>
        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8 }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>Sobre UCA Emprende</span>
          </nav>
          <div style={{ maxWidth: 860 }}>
            <Eyebrow color="primary">Quiénes somos</Eyebrow>
            <h1 className="sob-h1" style={{ fontSize: 76, lineHeight: 1.0, letterSpacing: "-0.035em", fontWeight: 900, color: "var(--color-text-primary)", margin: "14px 0 24px", textWrap: "balance" }}>
              Cuatro décadas poniendo el emprendimiento en el <span style={{ color: "var(--color-brand-accent)" }}>centro</span> de la UCA.
            </h1>
            <p style={{ fontSize: 21, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0, maxWidth: 720 }}>
              Somos la Cátedra de Emprendedores de la Fundación Universidad de Cádiz. Desde 1981 acompañamos a
              estudiantes, docentes y alumni que quieren convertir una idea en una empresa real.
            </p>
          </div>
        </div>
      </section>

      {/* MISIÓN + CIFRAS */}
      <section style={{ background: "var(--color-bg-alt)", padding: "80px 0" }}>
        <div className="container">
          <div className="sob-mission-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 64 }}>
            <div>
              <Eyebrow color="primary">Nuestra misión</Eyebrow>
              <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 16px", textWrap: "balance" }}>
                Que ninguna buena idea se quede en el cajón.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-text-body)", margin: "0 0 16px" }}>
                Damos a la comunidad universitaria las herramientas, el espacio y la red que necesita para
                emprender con garantías: formación práctica, mentoring con quienes ya lo han hecho, un coworking
                en pleno centro y acceso a financiación pública y privada.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-text-body)", margin: 0 }}>
                Todo gratuito para la comunidad UCA, porque creemos que emprender no debería depender del bolsillo
                con el que empiezas.
              </p>
            </div>
            <div style={{ borderRadius: "var(--radius-2xl)", overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "var(--shadow-lg)", background: "var(--color-bg-brand-tint)" }}>
              <img src="assets/olivillo.jpg" alt="Comunidad UCA Emprende trabajando en El Olivillo" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
          <div className="sob-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, paddingTop: 48, borderTop: "1px solid var(--color-border-subtle)" }}>
            {SOBRE_STATS.map((s) => <StatBlock key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section style={{ padding: "96px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 620, marginBottom: 48 }}>
            <Eyebrow color="primary">Cómo trabajamos</Eyebrow>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 0", textWrap: "balance" }}>
              Cuatro principios que no negociamos.
            </h2>
          </div>
          <div className="sob-values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ width: 56, height: 56, borderRadius: "var(--radius-md)", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={v.icon} size={28} strokeWidth={1.75} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-text-primary)", margin: 0 }}>{v.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HITOS */}
      <section style={{ background: "var(--color-bg-alt)", padding: "96px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 620, marginBottom: 48 }}>
            <Eyebrow color="primary">Nuestra historia</Eyebrow>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 0", textWrap: "balance" }}>
              De 1981 a hoy.
            </h2>
          </div>
          <div className="sob-milestones-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {MILESTONES.map((m) => (
              <div key={m.year} style={{ background: "#fff", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-subtle)", padding: 28, borderTop: "3px solid var(--color-brand-accent)" }}>
                <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-brand-primary)", marginBottom: 10 }}>{m.year}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", margin: "0 0 8px" }}>{m.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section style={{ padding: "96px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 620 }}>
              <Eyebrow color="primary">El equipo</Eyebrow>
              <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 0", textWrap: "balance" }}>
                Personas detrás de la Cátedra.
              </h2>
            </div>
            <p style={{ fontSize: 15, color: "var(--color-text-secondary)", maxWidth: 320, margin: 0 }}>
              Los nombres y fotos del equipo se completarán con la información que aporte UCA Emprende.
            </p>
          </div>
          <div className="sob-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {TEAM.map((t) => (
              <div key={t.name} style={{ background: "#fff", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-subtle)", overflow: "hidden" }}>
                <div style={{ aspectRatio: "1 / 1", background: "var(--color-bg-brand-tint)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-primary)" }}>
                  <Icon name="users" size={44} strokeWidth={1.5} />
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 4 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-bg-dark)", padding: "72px 0", color: "#fff" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 640 }}>
              <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 900, color: "#fff", margin: 0, textWrap: "balance" }}>
                ¿Tienes una idea? Hablemos.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", margin: "12px 0 0", maxWidth: 520 }}>
                La primera cita es gratuita y sin compromiso. Te ayudamos a decidir el siguiente paso.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" iconRight="arrowRight" onClick={go("contacto")}>Contactar</Button>
              <Button variant="white" size="lg" onClick={go("programas")}>Ver programas</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { SobrePage });
