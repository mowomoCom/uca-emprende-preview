// Nueva Home — Convocatoria urgente (Premio Atrévete) + próximas actividades como timeline

const FlagshipBand = () => {
  // Calcula días al 30 junio 2026 (ejemplo)
  const deadline = new Date("2026-06-30T23:59:59");
  const now = new Date();
  const daysLeft = Math.max(0, Math.ceil((deadline - now) / (1000 * 60 * 60 * 24)));

  return (
    <section style={{ background: "var(--color-bg-base)", padding: "0 0 96px" }}>
      <div className="container">
        <div
          style={{
            position: "relative",
            background: "var(--color-brand-primary)",
            color: "#fff",
            borderRadius: "var(--radius-2xl)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            minHeight: 360,
          }}
        >
          {/* Textura SVG muy sutil (líneas diagonales) */}
          <svg
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}
          >
            <defs>
              <pattern id="flagshipLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#flagshipLines)" />
          </svg>

          <div style={{ padding: "56px 56px 56px 64px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20, position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{
                background: "var(--color-brand-accent)", color: "#fff",
                fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "6px 12px", borderRadius: "var(--radius-sm)",
              }}>★ Programa flagship</span>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                XXIII edición · 2026
              </span>
            </div>

            <h2 style={{
              fontSize: 56, lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 900,
              color: "#fff", margin: 0, textWrap: "balance",
            }}>
              Premio <span style={{ color: "var(--color-brand-accent)" }}>Atrévete</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.82)", margin: 0, maxWidth: 520 }}>
              Hasta <strong style={{ color: "#fff" }}>18.000 €</strong> de dotación, 6 meses de coworking en El Olivillo
              y mentoring con emprendedores alumni. Abierto a estudiantes, egresados y personal UCA.
            </p>

            <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" iconRight="arrowRight">Presentar mi proyecto</Button>
              <a style={{ color: "rgba(255,255,255,0.85)", textDecoration: "underline", textUnderlineOffset: 4, fontWeight: 700, fontSize: 15 }}>
                Ver bases →
              </a>
            </div>
          </div>

          {/* Countdown + metadatos */}
          <div style={{
            background: "rgba(0,0,0,0.18)",
            borderLeft: "1px solid rgba(255,255,255,0.12)",
            padding: "56px 56px 56px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 32,
            position: "relative",
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brand-accent)", marginBottom: 10 }}>
                Quedan
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <div style={{ fontSize: 96, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#fff" }}>
                  {daysLeft}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>días</div>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 6 }}>
                Cierre inscripciones · 30 junio 2026
              </div>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 24 }}>
              {[
                ["Dotación", "18.000 €"],
                ["Duración", "6 meses"],
                ["Plazas", "10 equipos"],
              ].map(([k, v]) => (
                <li key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                  <span style={{ color: "rgba(255,255,255,0.65)" }}>{k}</span>
                  <span style={{ color: "#fff", fontWeight: 700 }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   ActivitiesTimeline — Grid de cards tipo agenda con columna temporal
================================================================ */
const ActivitiesTimeline = ({ onNavigate, count = 4 }) => {
  // El cliente decidirá si en inicio van 4 ó 6 actividades (feedback #2);
  // `count` llega del panel de tweaks para poder enseñar ambas opciones en la revisión.
  const items = [
    {
      day: "05", month: "MAY", dow: "MAR",
      time: "17:00",
      duration: "3h",
      location: "El Olivillo",
      category: "Taller",
      title: "Validación temprana: cómo saber si tu idea tiene mercado",
      desc: "Una tarde práctica con Elena Casado, fundadora de Mareo Lab, para aprender a hablar con clientes antes de construir nada.",
      seats: "12 / 20 plazas",
      featured: true,
      image: "uploads/act/act-validacion.jpg",
    },
    {
      day: "12", month: "MAY", dow: "MAR",
      time: "19:00",
      duration: "2h",
      location: "Paraninfo UCA",
      category: "Evento",
      title: "Demo Day Primavera 2026",
      desc: "Diez equipos del programa presentan ante inversores y comunidad UCA.",
      seats: "Entrada libre",
      image: "uploads/act/act-demoday.jpg",
    },
    {
      day: "15", month: "MAY", dow: "VIE",
      time: "10:00",
      duration: "2h 30min",
      location: "El Olivillo",
      category: "Networking",
      title: "Pitch clínico con inversores andaluces",
      desc: "Sesión cerrada con 4 business angels de la red Keiretsu.",
      seats: "8 / 10 plazas",
      image: "uploads/act/act-pitch.jpg",
    },
    {
      day: "19", month: "MAY", dow: "MAR",
      time: "10:00",
      duration: "1h 30min",
      location: "Online",
      category: "Webinar",
      title: "Financiación pública para startups early-stage",
      desc: "ENISA, CDTI y líneas propias UCA en una sola sesión práctica.",
      seats: "Streaming gratuito",
      image: "uploads/act/act-financiacion.jpg",
    },
    {
      day: "22", month: "MAY", dow: "VIE",
      time: "16:00",
      duration: "2h",
      location: "El Olivillo",
      category: "Taller",
      title: "Legal para fundadores: pactos de socios",
      desc: "Con Gómez-Acebo & Pombo — plantillas incluidas.",
      seats: "5 / 24 plazas",
      image: "uploads/act/act-legal.jpg",
    },
    {
      day: "26", month: "MAY", dow: "MAR",
      time: "18:30",
      duration: "2h",
      location: "El Olivillo",
      category: "Mentoring",
      title: "Open Office: cafés con mentores del ecosistema",
      desc: "Reserva 45 min con un mentor especializado en tu sector. Siete mentores disponibles.",
      seats: "7 slots · por invitación",
      image: "uploads/act/act-mentores.jpg",
    },
  ].slice(0, count);

  return (
    <section style={{ background: "var(--color-bg-alt)", padding: "112px 0" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 680 }}>
            <Eyebrow>Agenda · mayo 2026</Eyebrow>
            <h2 style={{
              fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900,
              color: "var(--color-text-primary)", margin: "12px 0 16px",
            }}>
              Próximas actividades.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>
              Talleres, eventos, webinars y sesiones de mentoring. Apúntate al que te encaje —
              todas son gratuitas para la comunidad UCA.
            </p>
          </div>
          <Button variant="outline" iconRight="arrowRight" onClick={() => onNavigate && onNavigate("actividades")}>
            Ver calendario completo
          </Button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {items.map((a, i) => <TimelineRow key={i} activity={a} />)}
        </div>
      </div>
    </section>
  );
};

const TimelineRow = ({ activity }) => {
  const [hover, setHover] = React.useState(false);
  const { day, month, dow, time, duration, location, category, title, desc, seats, featured } = activity;

  return (
    <article
      className="timeline-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "104px 110px 1fr auto",
        gap: 28,
        alignItems: "center",
        padding: "24px 24px",
        borderTop: "1px solid var(--color-border-subtle)",
        background: hover ? "#fff" : "transparent",
        borderRadius: hover ? "var(--radius-lg)" : 0,
        boxShadow: hover ? "var(--shadow-lg)" : "none",
        transition: "all var(--duration-medium) var(--ease-out)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Imagen cuadrada de la actividad */}
      <ActivityThumb image={activity.image} category={category} title={title} featured={featured} size={104} />

      {/* Columna fecha */}
      <div style={{ textAlign: "left" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 4 }}>
          {dow}
        </div>
        <div style={{
          fontSize: 56, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em",
          color: hover ? "var(--color-brand-accent)" : "var(--color-brand-primary)",
          transition: "color var(--duration-medium) var(--ease-out)",
        }}>
          {day}
        </div>
        <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.12em", color: "var(--color-text-primary)", marginTop: 2 }}>
          {month} · {time}
        </div>
      </div>

      {/* Contenido */}
      <div style={{ maxWidth: 680 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "center", flexWrap: "wrap" }}>
          <Badge variant="categoria">{category}</Badge>
          {featured && <Badge variant="ribbon">★ Destacada</Badge>}
          <span style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
            <Icon name="mapPin" size={13} /> {location} · {duration}
          </span>
        </div>
        <h3 style={{
          fontSize: 24, fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em",
          color: "var(--color-text-primary)", margin: "0 0 8px",
        }}>
          {title}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>
          {desc}
        </p>
      </div>

      {/* CTA + plazas */}
      <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
        <span style={{ fontSize: 12, color: "var(--color-text-secondary)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {seats}
        </span>
        <a style={{
          color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 15, textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: 6,
          transform: hover ? "translateX(4px)" : "translateX(0)",
          transition: "transform var(--duration-medium) var(--ease-out)",
        }}>
          Inscribirme <Icon name="arrowRight" size={16} />
        </a>
      </div>
    </article>
  );
};

Object.assign(window, { FlagshipBand, ActivitiesTimeline });
