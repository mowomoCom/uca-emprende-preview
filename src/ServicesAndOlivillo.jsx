// Nueva Home — Servicios en layout editorial + Olivillo hero

const ServicesEditorial = () => {
  const services = [
    {
      num: "01",
      icon: "lightbulb",
      title: "Asesoramiento",
      desc: "Primera cita de 45 minutos gratuita. Te ayudamos a validar tu idea, estructurar el modelo de negocio y decidir los siguientes pasos.",
      highlight: "Primera sesión gratis",
    },
    {
      num: "02",
      icon: "graduationCap",
      title: "Formación",
      desc: "Talleres, cursos y el Máster en Creación de Empresas. De la metodología lean hasta cómo negociar con un inversor.",
      highlight: "14 programas al año",
    },
    {
      num: "03",
      icon: "home",
      title: "Coworking",
      desc: "El Olivillo, en pleno casco histórico. Puesto fijo o flexible, salas reservables y una comunidad de 80+ emprendedores.",
      highlight: "Desde 85 € / mes",
    },
    {
      num: "04",
      icon: "euro",
      title: "Financiación",
      desc: "Convocatorias propias, becas Santander, acceso a ENISA, CDTI y una red de business angels del entorno UCA.",
      highlight: "Hasta 18.000 €",
    },
  ];

  return (
    <section style={{ background: "var(--color-bg-base)", padding: "112px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start", marginBottom: 72 }}>
          <div style={{ position: "sticky", top: 100 }}>
            <Eyebrow color="primary">Qué ofrecemos</Eyebrow>
            <h2 style={{
              fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900,
              color: "var(--color-text-primary)", margin: "12px 0 24px",
              textWrap: "balance",
            }}>
              Cuatro formas de acompañarte.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0, maxWidth: 380 }}>
              Desde el café informal donde alguien te escucha
              la idea hasta la ronda con inversores: hay un paso diseñado
              para cada momento de tu proyecto.
            </p>
            <a style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginTop: 28, color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 15,
              textDecoration: "none", borderBottom: "2px solid var(--color-brand-accent)",
              paddingBottom: 2,
            }}>
              Ver programa completo <Icon name="arrowRight" size={16} />
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {services.map((s, i) => <ServiceRow key={s.num} {...s} last={i === services.length - 1} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceRow = ({ num, icon, title, desc, highlight, last }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "auto 72px 1fr auto",
        gap: 28,
        alignItems: "start",
        padding: "36px 0",
        borderTop: "1px solid var(--color-border-subtle)",
        borderBottom: last ? "1px solid var(--color-border-subtle)" : "none",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div style={{
        fontSize: 14, fontWeight: 700, letterSpacing: "0.08em",
        color: "var(--color-text-secondary)", fontVariantNumeric: "tabular-nums",
        paddingTop: 18,
      }}>
        / {num}
      </div>

      <div style={{
        width: 72, height: 72, borderRadius: "var(--radius-md)",
        background: hover ? "var(--color-brand-primary)" : "var(--color-bg-brand-tint)",
        color: hover ? "#fff" : "var(--color-brand-primary)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all var(--duration-medium) var(--ease-out)",
        flexShrink: 0,
      }}>
        <Icon name={icon} size={34} strokeWidth={1.75} />
      </div>

      <div style={{ maxWidth: 540 }}>
        <h3 style={{
          fontSize: 28, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.01em",
          color: "var(--color-text-primary)", margin: "8px 0 10px",
        }}>
          {title}
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>
          {desc}
        </p>
      </div>

      <div style={{ textAlign: "right", paddingTop: 14, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
        <span style={{
          background: "var(--color-bg-accent-tint)", color: "var(--color-brand-accent)",
          padding: "6px 12px", borderRadius: "var(--radius-full)",
          fontSize: 12, fontWeight: 700, letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}>
          {highlight}
        </span>
        <span style={{
          color: "var(--color-brand-primary)", fontSize: 18,
          transform: hover ? "translateX(4px)" : "translateX(0)",
          transition: "transform var(--duration-medium) var(--ease-out)",
          fontWeight: 700,
        }}>
          →
        </span>
      </div>
    </div>
  );
};

/* ================================================================
   Olivillo Hero — bloque grande con imagen placeholder + datos
================================================================ */
const OlivilloHero = () => {
  return (
    <section style={{ background: "var(--color-bg-alt)", padding: "0 0 112px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 0, borderRadius: "var(--radius-2xl)", overflow: "hidden", background: "#fff", boxShadow: "var(--shadow-lg)" }}>
          {/* Foto del edificio El Olivillo */}
          <div style={{
            position: "relative",
            background: "#2e3d43",
            minHeight: 540,
            overflow: "hidden",
          }}>
            <img
              src="assets/olivillo.jpg"
              alt="Edificio El Olivillo, coworking UCA Emprende, casco histórico de Cádiz"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Gradient inferior para legibilidad del badge */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 100%)",
              pointerEvents: "none",
            }} />

            {/* Tag sobre la ilustración */}
            <div style={{
              position: "absolute", top: 32, left: 32,
              background: "rgba(255,255,255,0.95)", borderRadius: "var(--radius-full)",
              padding: "8px 16px", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-brand-primary)",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              <Icon name="mapPin" size={14} />
              Casco histórico · Cádiz
            </div>

            {/* Badge número */}
            <div style={{
              position: "absolute", bottom: 32, left: 32, right: 32,
              display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16,
            }}>
              <div style={{ color: "#fff" }}>
                <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.9 }}>
                  600<span style={{ color: "var(--color-brand-accent)" }}>m²</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
                  De espacio para tu proyecto
                </div>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div style={{ padding: "64px 64px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
            <Eyebrow color="primary">Coworking El Olivillo</Eyebrow>
            <h2 style={{
              fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900,
              color: "var(--color-text-primary)", margin: 0, textWrap: "balance",
            }}>
              Un antiguo cine convertido en laboratorio de ideas.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-text-body)", margin: 0 }}>
              En la calle del Olivillo, a dos minutos de la playa de la Caleta. 600 m² con puestos
              de trabajo, dos salas de reuniones, zona maker y café. Una comunidad activa de
              <strong style={{ color: "var(--color-text-primary)" }}> 80+ emprendedores UCA</strong> trabajando cada día.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "12px 0 20px" }}>
              {[
                ["Puesto fijo", "85 € / mes"],
                ["Puesto flex", "45 € / mes"],
                ["Sala reuniones", "Incluida"],
                ["Mentoring semanal", "Incluido"],
              ].map(([k, v]) => (
                <div key={k} style={{
                  padding: "14px 18px", background: "var(--color-bg-alt)",
                  borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)",
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>
                    {k}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: "var(--color-text-primary)", marginTop: 4, letterSpacing: "-0.01em" }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="secondary" size="lg">Reservar visita</Button>
              <Button variant="ghost" iconRight="arrowRight">Tarifas y planos</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ServicesEditorial, OlivilloHero });
