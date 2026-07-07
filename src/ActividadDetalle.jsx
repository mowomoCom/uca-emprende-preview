// UCA Emprende — Single de actividad (detalle de una actividad concreta)
// Estructura: breadcrumb · hero split (info + foto) · cuerpo editorial en dos columnas
// (contenido largo + tarjeta sticky de inscripción) · actividades relacionadas.
// Datos de ejemplo tomados de la actividad destacada de la agenda (validación temprana).

const ACTIVITY = {
  category: "Taller",
  featured: true,
  title: "Validación temprana: cómo saber si tu idea tiene mercado",
  lead: "Una tarde práctica para poner a prueba tu idea con clientes reales antes de invertir un solo euro en desarrollo.",
  image: "uploads/act/act-validacion.jpg",
  date: { day: "05", dow: "Martes", monthYear: "mayo 2026" },
  time: "17:00",
  duration: "3 h",
  location: "El Olivillo · Cádiz",
  modality: "Presencial",
  price: "Gratuita",
  seatsTaken: 12,
  seatsTotal: 20,
  intro: [
    "El error más caro al emprender es construir algo que nadie quiere. En este taller aprenderás a validar tu idea con método: a salir a la calle, hablar con clientes potenciales y leer las señales que confirman (o descartan) que hay un mercado dispuesto a pagar.",
    "No hace falta tener nada montado. Vengas con una idea en la cabeza o con un prototipo a medias, saldrás con un plan de validación concreto para las dos semanas siguientes.",
  ],
  learn: [
    "Formular las hipótesis de negocio que de verdad hay que comprobar primero.",
    "Diseñar y ejecutar entrevistas de descubrimiento sin sesgar las respuestas.",
    "Montar experimentos baratos (landing, preventa, concierge) para medir interés real.",
    "Interpretar las métricas de validación y decidir si seguir, pivotar o parar.",
  ],
  agenda: [
    { t: "17:00", label: "Bienvenida y por qué validamos", desc: "El coste de construir sin validar y el marco de la sesión." },
    { t: "17:30", label: "Hipótesis y entrevistas de cliente", desc: "Práctica en grupos con casos reales de la comunidad UCA." },
    { t: "18:45", label: "Experimentos de bajo coste", desc: "Landing pages, preventas y pruebas de humo paso a paso." },
    { t: "19:45", label: "Plan de validación y cierre", desc: "Cada asistente define sus próximos 14 días de validación." },
  ],
  speaker: {
    name: "Elena Casado",
    role: "Fundadora de Mareo Lab · mentora UCA Emprende",
    bio: "Ha acompañado a más de 40 equipos en fase temprana. Antes fue responsable de producto en dos startups del entorno andaluz.",
  },
  tags: ["Validación", "Lean startup", "Descubrimiento de cliente", "Fase temprana"],
};

const RELATED = [
  { day: "12", dow: "MAR", category: "Evento", title: "Demo Day Primavera 2026", location: "Paraninfo UCA", image: "uploads/act/act-demoday.jpg" },
  { day: "15", dow: "VIE", category: "Networking", title: "Pitch clínico con inversores andaluces", location: "El Olivillo", image: "uploads/act/act-pitch.jpg" },
  { day: "22", dow: "VIE", category: "Taller", title: "Legal para fundadores: pactos de socios", location: "El Olivillo", image: "uploads/act/act-legal.jpg" },
];

const ActividadDetalle = ({ onNavigate }) => {
  const a = ACTIVITY;
  const pct = Math.round((a.seatsTaken / a.seatsTotal) * 100);
  const seatsLeft = a.seatsTotal - a.seatsTaken;
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };

  return (
    <div data-screen-label="03 Actividad · detalle">
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 64, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs>
            <pattern id="det-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#det-grid)" />
        </svg>

        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <a href="#" onClick={go("actividades")} style={{ color: "inherit", textDecoration: "none" }}>Actividades</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>{a.title}</span>
          </nav>

          <div className="det-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 20 }}>
                <Badge variant="categoria">{a.category}</Badge>
                {a.featured && <Badge variant="ribbon">★ Destacada</Badge>}
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-brand-accent)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{a.price}</span>
              </div>
              <h1 className="det-h1" style={{ fontSize: 60, lineHeight: 1.02, letterSpacing: "-0.03em", fontWeight: 900, color: "var(--color-text-primary)", margin: "0 0 20px", textWrap: "balance" }}>
                {a.title}
              </h1>
              <p style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-text-body)", margin: "0 0 28px", maxWidth: 560 }}>
                {a.lead}
              </p>
              <div className="det-meta" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                {[
                  { icon: "calendar", label: `${a.date.day} ${a.date.monthYear}` },
                  { icon: "clock", label: `${a.time} · ${a.duration}` },
                  { icon: "mapPin", label: a.location },
                ].map((m) => (
                  <span key={m.label} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)" }}>
                    <span style={{ color: "var(--color-brand-primary)" }}><Icon name={m.icon} size={18} /></span>
                    {m.label}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", aspectRatio: "4 / 3", background: "var(--color-bg-brand-tint)" }}>
                <img src={a.image} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", top: 20, left: 20, background: "#fff", borderRadius: "var(--radius-md)", padding: "10px 14px", display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1, boxShadow: "var(--shadow-md)" }}>
                  <span style={{ fontSize: 30, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--color-brand-accent)" }}>{a.date.day}</span>
                  <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", color: "var(--color-text-secondary)", textTransform: "uppercase", marginTop: 3 }}>{a.date.monthYear.split(" ")[0].slice(0, 3)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUERPO */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="det-body-grid" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 64, alignItems: "start" }}>
            {/* Columna de contenido */}
            <div>
              <BodyBlock title="Sobre la actividad">
                {a.intro.map((p, i) => (
                  <p key={i} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-text-body)", margin: "0 0 16px" }}>{p}</p>
                ))}
              </BodyBlock>

              <BodyBlock title="Qué te llevas">
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
                  {a.learn.map((l, i) => (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 12, alignItems: "start" }}>
                      <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <Icon name="chevronRight" size={16} />
                      </span>
                      <span style={{ fontSize: 17, lineHeight: 1.55, color: "var(--color-text-body)" }}>{l}</span>
                    </li>
                  ))}
                </ul>
              </BodyBlock>

              <BodyBlock title="Programa">
                <div style={{ position: "relative" }}>
                  {a.agenda.map((it, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 20, padding: "18px 0", borderTop: "1px solid var(--color-border-subtle)" }}>
                      <div style={{ fontSize: 16, fontWeight: 900, color: "var(--color-brand-accent)", letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{it.t}</div>
                      <div>
                        <div style={{ fontSize: 17, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 3 }}>{it.label}</div>
                        <div style={{ fontSize: 15, lineHeight: 1.5, color: "var(--color-text-secondary)" }}>{it.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </BodyBlock>

              <BodyBlock title="Quién lo imparte">
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "var(--color-bg-alt)", borderRadius: "var(--radius-lg)", padding: 24, border: "1px solid var(--color-border-subtle)" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 26, fontWeight: 900 }}>
                    {a.speaker.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div style={{ fontSize: 19, fontWeight: 900, color: "var(--color-text-primary)" }}>{a.speaker.name}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-brand-accent)", margin: "3px 0 10px" }}>{a.speaker.role}</div>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>{a.speaker.bio}</p>
                  </div>
                </div>
              </BodyBlock>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 32 }}>
                {a.tags.map((t) => (
                  <span key={t} style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-secondary)", background: "var(--color-bg-muted)", borderRadius: "var(--radius-full)", padding: "6px 14px" }}>#{t}</span>
                ))}
              </div>
            </div>

            {/* Tarjeta sticky de inscripción */}
            <aside className="det-aside" style={{ position: "sticky", top: 100 }}>
              <div style={{ background: "#fff", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", padding: 28 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: "var(--color-brand-primary)", letterSpacing: "-0.02em" }}>{a.price}</span>
                  <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>· plaza limitada</span>
                </div>

                <div style={{ display: "grid", gap: 12, margin: "20px 0", paddingTop: 20, borderTop: "1px solid var(--color-border-subtle)" }}>
                  {[
                    { icon: "calendar", k: "Fecha", v: `${a.date.dow} ${a.date.day} · ${a.date.monthYear}` },
                    { icon: "clock", k: "Horario", v: `${a.time} · ${a.duration}` },
                    { icon: "mapPin", k: "Lugar", v: a.location },
                    { icon: "users", k: "Modalidad", v: a.modality },
                  ].map((r) => (
                    <div key={r.k} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 12, alignItems: "start" }}>
                      <span style={{ color: "var(--color-brand-primary)", marginTop: 1 }}><Icon name={r.icon} size={18} /></span>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{r.k}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginTop: 1 }}>{r.v}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Plazas */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                    <span style={{ color: "var(--color-text-secondary)" }}>Plazas ocupadas</span>
                    <span style={{ color: "var(--color-brand-primary)" }}>{a.seatsTaken} / {a.seatsTotal}</span>
                  </div>
                  <div style={{ height: 8, borderRadius: "var(--radius-full)", background: "var(--color-bg-muted)", overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: "var(--color-brand-accent)", borderRadius: "var(--radius-full)" }} />
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 6 }}>Quedan {seatsLeft} plazas</div>
                </div>

                <Button variant="primary" size="lg" iconRight="arrowRight" style={{ width: "100%" }}>Inscribirme</Button>
                <button style={{ width: "100%", marginTop: 10, background: "transparent", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-md)", padding: "12px 16px", fontFamily: "var(--font-family-primary)", fontSize: 15, fontWeight: 700, color: "var(--color-brand-primary)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <Icon name="send" size={16} /> Compartir
                </button>
                <p style={{ fontSize: 12, lineHeight: 1.5, color: "var(--color-text-secondary)", margin: "16px 0 0", textAlign: "center" }}>
                  Recibirás la confirmación y los detalles de acceso en tu correo UCA.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELACIONADAS */}
      <section style={{ background: "var(--color-bg-alt)", padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
            <div>
              <Eyebrow color="primary">Sigue explorando</Eyebrow>
              <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-text-primary)", margin: "8px 0 0" }}>Otras actividades este mes</h2>
            </div>
            <a href="#" onClick={go("actividades")} style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Ver toda la agenda <Icon name="arrowRight" size={16} />
            </a>
          </div>
          <div className="det-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {RELATED.map((r, i) => <RelatedCard key={i} activity={r} onOpen={go("actividad")} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

const BodyBlock = ({ title, children }) => (
  <div style={{ marginBottom: 44 }}>
    <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.01em", color: "var(--color-text-primary)", margin: "0 0 18px" }}>{title}</h2>
    {children}
  </div>
);

const RelatedCard = ({ activity, onOpen }) => {
  const [hover, setHover] = React.useState(false);
  const { day, dow, category, title, location, image } = activity;
  return (
    <article
      onClick={onOpen}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: "#fff", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--color-border-subtle)", cursor: "pointer", boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)", transform: hover ? "translateY(-3px)" : "none", transition: "all var(--duration-medium) var(--ease-out)", display: "flex", flexDirection: "column" }}
    >
      <div style={{ position: "relative", aspectRatio: "16 / 10", background: "var(--color-bg-brand-tint)" }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 12, left: 12, background: "#fff", borderRadius: "var(--radius-sm)", padding: "6px 10px", display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
          <span style={{ fontSize: 18, fontWeight: 900, color: "var(--color-brand-primary)" }}>{day}</span>
          <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: "0.08em", color: "var(--color-text-secondary)" }}>{dow}</span>
        </div>
      </div>
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <Badge variant="categoria">{category}</Badge>
        <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3, color: "var(--color-text-primary)", margin: 0 }}>{title}</h3>
        <span style={{ fontSize: 13, color: "var(--color-text-secondary)", display: "inline-flex", alignItems: "center", gap: 5, marginTop: "auto" }}>
          <Icon name="mapPin" size={13} /> {location}
        </span>
      </div>
    </article>
  );
};

Object.assign(window, { ActividadDetalle });
