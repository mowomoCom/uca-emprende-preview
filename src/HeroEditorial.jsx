// UCA Emprende — Nueva Home · Hero editorial (tipografía XL + ecosistema lateral + ticker)

const HeroEditorial = ({ accentIntensity = "normal", onNavigate }) => {
  const accent = accentIntensity === "strong"
    ? "var(--color-brand-accent)"
    : "var(--color-brand-accent)";

  return (
    <section
      style={{
        position: "relative",
        background: "var(--color-bg-base)",
        paddingTop: 64,
        paddingBottom: 0,
        overflow: "hidden",
      }}
    >
      {/* Grid de fondo muy sutil */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}
      >
        <defs>
          <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <div className="container" style={{ position: "relative" }}>
        {/* Eyebrow institucional */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <Eyebrow color="primary">UCA Emprende · Fundación UCA</Eyebrow>
        </div>

        {/* Bloque titular gigante */}
        <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 56, alignItems: "end" }}>
          <div>
            <h1
              style={{
                fontSize: 108,
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
                fontWeight: 900,
                color: "var(--color-text-primary)",
                margin: 0,
                textWrap: "balance",
              }}
            >
              <span style={{ fontStyle: "italic", fontWeight: 300, letterSpacing: "-0.02em" }}>Ideas</span>
              <br />
              que se convierten
              <br />
              en <span style={{ color: accent, position: "relative", display: "inline-block" }}>
                empresas
                <svg
                  width="100%" height="22" viewBox="0 0 420 22" preserveAspectRatio="none"
                  style={{ position: "absolute", left: 0, bottom: -4, display: "block" }}
                  aria-hidden="true"
                >
                  <path
                    d="M4 14 C 90 4, 180 18, 260 10 S 400 16, 416 8"
                    fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round"
                  />
                </svg>
              </span>.
            </h1>

            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start", maxWidth: 720 }}>
              <div style={{ width: 3, background: accent, alignSelf: "stretch", minHeight: 80 }} />
              <p style={{ fontSize: 21, lineHeight: 1.5, color: "var(--color-text-body)", margin: 0, fontWeight: 400 }}>
                Desde 1981, la Universidad de Cádiz acompaña a quienes quieren emprender. Formación,
                mentorías, coworking en <strong style={{ color: "var(--color-text-primary)" }}>El Olivillo</strong> y una red de más de
                {" "}<strong style={{ color: "var(--color-text-primary)" }}>450 emprendedores y emprendedoras</strong> que empezaron como tú.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap", alignItems: "center" }}>
              {/* Doble foco: Actividades = acción principal destacada (naranja) · Olivillo = secundaria */}
              <Button variant="primary" size="lg" iconRight="arrowRight" onClick={() => onNavigate && onNavigate("actividades")}>
                Ver próximas actividades
              </Button>
              <Button variant="ghost" size="lg" icon="mapPin" onClick={() => onNavigate && onNavigate("coworking")}>
                Conoce El Olivillo
              </Button>
            </div>
          </div>

          {/* Columna derecha: ecosistema + tarjeta "Hoy" */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 8 }}>
            <div style={{ position: "relative" }}>
              <HeroAnimation />
            </div>
            <TodayCard />
          </div>
        </div>

        {/* Ticker cifras */}
        <div style={{ marginTop: 80, borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)", padding: "32px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, alignItems: "stretch" }}>
            <StatInline value="45" suffix="años" label="acompañando al emprendimiento UCA" />
            <StatInline value="450" suffix="+" label="emprendedores y emprendedoras formados" />
            <StatInline value="28" label="startups activas en cartera" />
            <StatInline value="6,2" suffix="M€" label="financiación captada por proyectos UCA" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatInline = ({ value, suffix, label }) => (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 10 }}>
    <div
      style={{
        fontSize: 38,
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: "-0.025em",
        color: "var(--color-brand-primary)",
        fontFamily: "var(--font-family-primary)",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "baseline",
        gap: 4,
      }}
    >
      <span>{value}</span>
      {suffix && (
        <span
          style={{
            color: "var(--color-brand-accent)",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          {suffix}
        </span>
      )}
    </div>
    <div
      style={{
        fontSize: 13,
        lineHeight: 1.4,
        color: "var(--color-text-secondary)",
        fontWeight: 400,
        minHeight: 36,
      }}
    >
      {label}
    </div>
  </div>
);

// Tarjeta flotante: próxima actividad destacada
const TodayCard = () => (
  <div
    style={{
      background: "#fff",
      border: "1px solid var(--color-border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "16px 20px",
      boxShadow: "var(--shadow-md)",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gap: 18,
    }}
  >
    {/* Fecha compacta */}
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      background: "var(--color-bg-accent-tint)", color: "var(--color-brand-accent)",
      borderRadius: "var(--radius-md)", padding: "8px 10px", minWidth: 54,
      lineHeight: 1,
    }}>
      <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>05</span>
      <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", marginTop: 3 }}>MAY</span>
    </div>

    <div style={{ minWidth: 0 }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--color-text-secondary)",
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ position: "relative", width: 8, height: 8 }}>
          <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e" }} />
          <span style={{ position: "absolute", inset: -3, borderRadius: "50%", background: "rgba(34,197,94,0.3)", animation: "pulse-dot 2s ease-in-out infinite" }} />
        </span>
        Próxima actividad · 17:00
      </div>
      <div style={{
        fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)",
        marginTop: 3, letterSpacing: "-0.005em",
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
      }}>
        Validación temprana: ¿tiene mercado tu idea?
      </div>
    </div>

    <a style={{
      fontSize: 13, fontWeight: 700, color: "var(--color-brand-accent)",
      textDecoration: "none", whiteSpace: "nowrap", paddingLeft: 4,
    }}>
      Inscribirme →
    </a>
    <style>{`@keyframes pulse-dot { 0%, 100% { transform: scale(1); opacity: .7; } 50% { transform: scale(1.6); opacity: 0; } }`}</style>
  </div>
);

Object.assign(window, { HeroEditorial });
