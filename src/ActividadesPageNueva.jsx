// Actividades — nueva versión editorial
// Hero con buscador integrado · vista calendario/lista · timeline agrupado por mes · convocatorias destacadas

/* --- utilidades de fecha (filtro por fecha destacado + vista calendario) --- */
const MONTHS_ES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const parseMonthLabel = (label) => {
  const parts = String(label).toLowerCase().split(" ");
  return { monthIndex: MONTHS_ES.indexOf(parts[0]), year: parseInt(parts[1], 10) };
};
const firstWeekdayMon0 = (label) => {
  const { monthIndex, year } = parseMonthLabel(label);
  return (new Date(year, monthIndex, 1).getDay() + 6) % 7; // lunes = 0
};
const daysInMonth = (label) => {
  const { monthIndex, year } = parseMonthLabel(label);
  return new Date(year, monthIndex + 1, 0).getDate();
};
/* Clave numérica ordenable (aaaammdd) para comparar días entre meses */
const dayKey = (label, day) => {
  const { monthIndex, year } = parseMonthLabel(label);
  return year * 10000 + (monthIndex + 1) * 100 + parseInt(day, 10);
};
const fmtDay = (pick) => `${parseInt(pick.day, 10)} ${pick.label.split(" ")[0].slice(0, 3).toLowerCase()}`;

const ActividadesPageNueva = () => {
  const [view, setView] = React.useState("lista"); // lista | calendario
  const [search, setSearch] = React.useState("");
  const [activeCat, setActiveCat] = React.useState("Todas");
  // Filtro de fecha: mes rápido ("all" | label) y/o rango de días {from, to} elegido en el calendario
  const [dateFilter, setDateFilter] = React.useState({ month: "all", from: null, to: null });
  const [dateOpen, setDateOpen] = React.useState(false);

  const months = [
    {
      label: "Mayo 2026",
      activities: [
        { day: "05", dow: "MAR", time: "17:00", duration: "3h", location: "El Olivillo", category: "Taller", title: "Validación temprana: cómo saber si tu idea tiene mercado", desc: "Una tarde práctica con Elena Casado, fundadora de Mareo Lab.", seats: "12 / 20 plazas", featured: true, image: "uploads/act/act-validacion.jpg" },
        { day: "12", dow: "MAR", time: "19:00", duration: "2h", location: "Paraninfo UCA", category: "Evento", title: "Demo Day Primavera 2026", desc: "Diez equipos del programa presentan ante inversores y comunidad UCA.", seats: "Entrada libre", image: "uploads/act/act-demoday.jpg" },
        { day: "15", dow: "VIE", time: "10:00", duration: "2h 30min", location: "El Olivillo", category: "Networking", title: "Pitch clínico con inversores andaluces", desc: "Sesión cerrada con 4 business angels de la red Keiretsu.", seats: "8 / 10 plazas", image: "uploads/act/act-pitch.jpg" },
        { day: "19", dow: "MAR", time: "10:00", duration: "1h 30min", location: "Online", category: "Webinar", title: "Financiación pública para startups early-stage", desc: "ENISA, CDTI y líneas propias UCA en una sola sesión.", seats: "Streaming gratuito", image: "uploads/act/act-financiacion.jpg" },
        { day: "22", dow: "VIE", time: "16:00", duration: "2h", location: "El Olivillo", category: "Taller", title: "Legal para fundadores: pactos de socios", desc: "Con Gómez-Acebo & Pombo — plantillas incluidas.", seats: "5 / 24 plazas", image: "uploads/act/act-legal.jpg" },
        { day: "26", dow: "MAR", time: "18:00", duration: "1h 30min", location: "Aula Magna", category: "Evento", title: "Mujeres que emprenden: mesa redonda", desc: "Cuatro fundadoras UCA cuentan su camino real.", seats: "Entrada libre", image: "uploads/act/act-mujeres.jpg" },
        /* Sin `image` a propósito: enseña el fallback por categoría cuando el cliente no aporte foto */
        { day: "29", dow: "VIE", time: "11:00", duration: "2h", location: "Online", category: "Webinar", title: "Ciberseguridad básica para tu producto digital", desc: "Checklist OWASP, gestión de secretos, auditoría rápida.", seats: "Streaming gratuito" },
      ],
    },
    {
      label: "Junio 2026",
      activities: [
        { day: "02", dow: "MAR", time: "17:30", duration: "2h", location: "El Olivillo", category: "Mentoring", title: "Open Office: cafés con mentores", desc: "Reserva 45 min con un mentor especializado en tu sector.", seats: "7 slots", image: "uploads/act/act-mentores.jpg" },
        { day: "09", dow: "MAR", time: "10:00", duration: "1 día", location: "Cádiz · El Olivillo", category: "Bootcamp", title: "Bootcamp de pricing para SaaS", desc: "Modelos de precio, packaging y experimentos reales.", seats: "16 / 20 plazas", image: "uploads/act/act-bootcamp.jpg" },
      ],
    },
  ];

  const calls = [
    { tag: "Convocatoria abierta", title: "Premio Atrévete · XXIII edición", desc: "18.000 € + 6 meses de coworking en El Olivillo + mentoring alumni.", deadline: "30 jun 2026", days: 57, tone: "primary" },
    { tag: "Convocatoria abierta", title: "Becas Santander X · Explorer", desc: "Programa de aceleración temprana para 30 equipos universitarios.", deadline: "15 may 2026", days: 11, tone: "accent" },
    { tag: "Convocatoria abierta", title: "Programa Lanzadera UCA", desc: "12 semanas intensivas para equipos con prototipo funcional.", deadline: "30 abr 2026", days: 0, tone: "muted" },
  ];

  const categories = ["Todas", "Taller", "Webinar", "Evento", "Networking", "Mentoring", "Bootcamp", "Programa"];

  // --- Filtrado real (buscador + categoría + fecha) ---
  const q = search.trim().toLowerCase();
  const matchesActivity = (a, monthLabel) => {
    if (activeCat !== "Todas" && a.category !== activeCat) return false;
    if (dateFilter.from) {
      const k = dayKey(monthLabel, a.day);
      const kFrom = dateFilter.from.key;
      const kTo = dateFilter.to ? dateFilter.to.key : kFrom;
      if (k < kFrom || k > kTo) return false;
    } else if (dateFilter.month !== "all" && monthLabel !== dateFilter.month) return false;
    if (q && !`${a.title} ${a.desc} ${a.category} ${a.location}`.toLowerCase().includes(q)) return false;
    return true;
  };
  const filteredMonths = months
    .map((m) => ({ ...m, activities: m.activities.filter((a) => matchesActivity(a, m.label)) }))
    .filter((m) => m.activities.length > 0);
  const totalCount = filteredMonths.reduce((n, m) => n + m.activities.length, 0);

  // Mes que se pinta en la vista calendario: el del rango/filtro de fecha, o el primero disponible
  const calendarMonthLabel = dateFilter.from ? dateFilter.from.label : (dateFilter.month !== "all" ? dateFilter.month : months[0].label);
  const calendarMonth = months.find((m) => m.label === calendarMonthLabel) || months[0];

  // Chips de filtros aplicados (derivados del estado)
  const noDate = { month: "all", from: null, to: null };
  const clearAll = () => { setDateFilter(noDate); setActiveCat("Todas"); setSearch(""); };
  const dateLabel = dateFilter.from
    ? (dateFilter.to && dateFilter.to.key !== dateFilter.from.key ? `${fmtDay(dateFilter.from)} – ${fmtDay(dateFilter.to)}` : fmtDay(dateFilter.from))
    : (dateFilter.month !== "all" ? dateFilter.month : null);
  const applied = [];
  if (dateLabel) applied.push({ key: "date", label: dateLabel, clear: () => setDateFilter(noDate) });
  if (activeCat !== "Todas") applied.push({ key: "cat", label: activeCat, clear: () => setActiveCat("Todas") });
  if (q) applied.push({ key: "search", label: `"${search.trim()}"`, clear: () => setSearch("") });

  return (
    <div data-screen-label="02 Actividades">
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 56, paddingBottom: 48, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs>
            <pattern id="act-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#act-grid)" />
        </svg>

        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>Actividades</span>
          </nav>

          <div className="act-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <Eyebrow color="primary">Agenda UCA Emprende · curso 2025/26</Eyebrow>
              <h1 className="act-h1" style={{ fontSize: 92, lineHeight: 0.98, letterSpacing: "-0.035em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 24px", textWrap: "balance" }}>
                Un <span style={{ fontStyle: "italic", fontWeight: 300 }}>plan</span><br />
                cada semana.
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0, maxWidth: 560 }}>
                Talleres, webinars, programas y convocatorias para toda la comunidad UCA.
                Filtra por lo que te interesa y apúntate en dos clicks — todas son <strong style={{ color: "var(--color-text-primary)" }}>gratuitas</strong>.
              </p>
            </div>

            <div style={{ background: "#fff", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", padding: 24, border: "1px solid var(--color-border-subtle)" }}>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brand-primary)", marginBottom: 10 }}>
                Busca una actividad
              </label>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-tertiary)" }}>
                  <Icon name="search" size={18} />
                </div>
                <input
                  type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder="p. ej. validación, mentoring, becas..."
                  style={{ width: "100%", padding: "14px 16px 14px 48px", fontSize: 16, border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-md)", background: "#fff", color: "var(--color-text-primary)", fontFamily: "var(--font-family-primary)", boxSizing: "border-box", outline: "none" }}
                />
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap", fontSize: 13, color: "var(--color-text-secondary)" }}>
                <span style={{ fontWeight: 700 }}>Sugerencias:</span>
                {["Premio Atrévete", "El Olivillo", "Demo Day"].map((t) => (
                  <a key={t} href="#" onClick={(e) => { e.preventDefault(); setSearch(t); }} style={{ color: "var(--color-brand-primary)", textDecoration: "underline", fontWeight: 700 }}>{t}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVOCATORIAS BAND (deadline urgente) */}
      <section style={{ paddingTop: 24, paddingBottom: 56 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
            <Eyebrow>Convocatorias abiertas</Eyebrow>
            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>Cierran pronto · presenta tu proyecto</span>
          </div>
          <div className="calls-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {calls.map((c, i) => <CallCard key={i} {...c} />)}
          </div>
        </div>
      </section>

      {/* STICKY FILTERS — FECHA como filtro destacado, categoría secundaria */}
      <div style={{ position: "sticky", top: 80, zIndex: 40, background: "rgba(255,255,255,0.96)", backdropFilter: "saturate(140%) blur(8px)", WebkitBackdropFilter: "saturate(140%) blur(8px)", boxShadow: "var(--shadow-sticky)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div className="container" style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            {/* Filtro destacado: FECHA */}
            <DateFilter months={months} value={dateFilter} onChange={setDateFilter} open={dateOpen} setOpen={setDateOpen} />

            {/* Filtro secundario: categoría */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--color-text-tertiary)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Categoría</span>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {categories.map((c) => (
                  <button key={c} onClick={() => setActiveCat(c)}
                    style={{
                      padding: "5px 11px", borderRadius: "var(--radius-full)", border: "1px solid var(--color-border-subtle)",
                      background: activeCat === c ? "var(--color-bg-brand-tint)" : "transparent",
                      color: activeCat === c ? "var(--color-brand-primary)" : "var(--color-text-secondary)",
                      fontFamily: "var(--font-family-primary)", fontSize: 12, fontWeight: 700, cursor: "pointer",
                      transition: "all var(--duration-fast) var(--ease-out)",
                    }}
                  >{c}</button>
                ))}
              </div>
            </div>

            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ color: "var(--color-text-secondary)", fontSize: 13, fontWeight: 700 }}>{totalCount} {totalCount === 1 ? "resultado" : "resultados"}</span>
              <div style={{ display: "inline-flex", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                {[
                  { id: "lista", label: "Lista" },
                  { id: "calendario", label: "Calendario" },
                ].map((v) => (
                  <button key={v.id} onClick={() => setView(v.id)}
                    style={{
                      padding: "8px 14px", border: "none", fontFamily: "var(--font-family-primary)",
                      fontSize: 13, fontWeight: 700, cursor: "pointer",
                      background: view === v.id ? "var(--color-brand-primary)" : "#fff",
                      color: view === v.id ? "#fff" : "var(--color-text-body)",
                    }}
                  >{v.label}</button>
                ))}
              </div>
            </div>
          </div>
          {applied.length > 0 && (
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ color: "var(--color-text-secondary)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Aplicados</span>
              {applied.map((f) => (
                <Chip key={f.key} active onRemove={f.clear}>{f.label}</Chip>
              ))}
              <button onClick={clearAll} style={{ background: "none", border: "none", color: "var(--color-brand-primary)", fontSize: 12, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Limpiar</button>
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      {view === "lista" ? (
        <section style={{ paddingTop: 56, paddingBottom: 96 }}>
          <div className="container">
            {filteredMonths.length > 0 ? (
              <>
                {filteredMonths.map((m) => <MonthBlock key={m.label} month={m} />)}
                {applied.length === 0 && (
                  <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
                    <Button variant="outline" iconRight="arrowRight">Cargar siguientes meses</Button>
                  </div>
                )}
              </>
            ) : (
              <EmptyState onClear={clearAll} />
            )}
          </div>
        </section>
      ) : (
        <CalendarView month={calendarMonth} activeCat={activeCat} search={q} />
      )}

      {/* SUGGESTION BAND */}
      <section style={{ background: "var(--color-bg-alt)", padding: "72px 0" }}>
        <div className="container">
          <div className="suggestion-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <Eyebrow color="primary">¿Echas algo en falta?</Eyebrow>
              <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 12px", textWrap: "balance" }}>
                Propón una actividad para tu facultad.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0, maxWidth: 480 }}>
                ¿Eres docente, alumno o alumni con una idea de taller, mesa o evento? Cuéntanoslo —
                respondemos en menos de 7 días.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
              <Button variant="secondary" size="lg" iconRight="arrowRight">Proponer actividad</Button>
              <Button variant="outline" size="lg">Ver guía</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- CallCard (convocatoria con deadline) --- */
const CallCard = ({ tag, title, desc, deadline, days, tone }) => {
  const closed = days <= 0;
  const colorMap = {
    primary: { bg: "var(--color-brand-primary)", fg: "#fff", accent: "var(--color-brand-accent)" },
    accent: { bg: "var(--color-brand-accent)", fg: "#fff", accent: "#fff" },
    muted: { bg: "var(--color-bg-muted)", fg: "var(--color-text-primary)", accent: "var(--color-text-secondary)" },
  };
  const c = colorMap[tone] || colorMap.primary;
  return (
    <article style={{ position: "relative", background: c.bg, color: c.fg, borderRadius: "var(--radius-lg)", padding: 28, overflow: "hidden", display: "flex", flexDirection: "column", gap: 12, minHeight: 220 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.85 }}>{closed ? "Cerrada" : tag}</span>
        {!closed && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 32, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.02em", color: c.accent }}>{days}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.75, marginTop: 2 }}>días</div>
          </div>
        )}
      </div>
      <h3 style={{ fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.01em", fontWeight: 900, margin: "4px 0 0", color: c.fg }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.85, margin: 0 }}>{desc}</p>
      <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.18)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, opacity: 0.85 }}>Cierra · {deadline}</span>
        <span style={{ fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}>
          {closed ? "Ver bases" : "Presentar proyecto"} <Icon name="arrowRight" size={14} />
        </span>
      </div>
    </article>
  );
};

/* --- MonthBlock + TimelineRow --- */
const MonthBlock = ({ month }) => (
  <div style={{ marginBottom: 64 }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16, paddingBottom: 16, borderBottom: "2px solid var(--color-text-primary)" }}>
      <h2 style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--color-text-primary)", margin: 0, textTransform: "uppercase" }}>
        {month.label}
      </h2>
      <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {month.activities.length} actividades
      </span>
    </div>
    <div>
      {month.activities.map((a, i) => <ActTimelineRow key={i} activity={a} />)}
    </div>
  </div>
);

const ActTimelineRow = ({ activity }) => {
  const [hover, setHover] = React.useState(false);
  const { day, dow, time, duration, location, category, title, desc, seats, featured } = activity;
  return (
    <article
      className="timeline-row"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "grid", gridTemplateColumns: "88px 96px 1fr auto", gap: 24, alignItems: "center",
        padding: "24px 20px", borderTop: "1px solid var(--color-border-subtle)",
        background: hover ? "#fff" : "transparent",
        borderRadius: hover ? "var(--radius-lg)" : 0,
        boxShadow: hover ? "var(--shadow-lg)" : "none",
        transition: "all var(--duration-medium) var(--ease-out)", cursor: "pointer",
      }}
    >
      <ActivityThumb image={activity.image} category={category} title={title} featured={featured} size={88} />
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 4 }}>{dow}</div>
        <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", color: hover ? "var(--color-brand-accent)" : "var(--color-brand-primary)", transition: "color var(--duration-medium)" }}>{day}</div>
        <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", color: "var(--color-text-primary)", marginTop: 2 }}>{time}</div>
      </div>
      <div style={{ maxWidth: 680 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center", flexWrap: "wrap" }}>
          <Badge variant="categoria">{category}</Badge>
          {featured && <Badge variant="ribbon">★ Destacada</Badge>}
          <span style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "inline-flex", alignItems: "center", gap: 4 }}>
            <Icon name="mapPin" size={13} /> {location} · {duration}
          </span>
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.01em", color: "var(--color-text-primary)", margin: "0 0 6px" }}>{title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0 }}>{desc}</p>
      </div>
      <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
        <span style={{ fontSize: 12, color: "var(--color-text-secondary)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{seats}</span>
        <a style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform var(--duration-medium)" }}>
          Inscribirme <Icon name="arrowRight" size={15} />
        </a>
      </div>
    </article>
  );
};

/* --- Calendar grid view (mes activo, con filtros aplicados) --- */
const CalendarView = ({ month, activeCat = "Todas", search = "" }) => {
  const startDow = firstWeekdayMon0(month.label);
  const total = daysInMonth(month.label);
  const matches = (a) =>
    (activeCat === "Todas" || a.category === activeCat) &&
    (!search || `${a.title} ${a.desc} ${a.category} ${a.location}`.toLowerCase().includes(search));

  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= total; d++) {
    const dd = String(d).padStart(2, "0");
    cells.push({ day: dd, acts: month.activities.filter((a) => a.day === dd && matches(a)) });
  }
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <section style={{ paddingTop: 56, paddingBottom: 96 }}>
      <div className="container">
        <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-text-primary)", margin: "0 0 24px", textTransform: "uppercase" }}>
          {month.label}
        </h2>
        <div className="calendar-scroll" style={{ overflowX: "auto" }}>
          <div className="calendar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1, background: "var(--color-border-subtle)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d) => (
              <div key={d} style={{ background: "var(--color-bg-alt)", padding: "12px 14px", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>{d}</div>
            ))}
            {cells.map((c, i) => <CalendarCell key={i} cell={c} />)}
          </div>
        </div>
        <div style={{ marginTop: 16, display: "flex", gap: 18, flexWrap: "wrap", fontSize: 12, color: "var(--color-text-secondary)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 11, height: 11, borderRadius: 3, background: "var(--color-brand-accent)" }} /> Destacada</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 11, height: 11, borderRadius: 3, background: "var(--color-bg-brand-tint)", border: "1px solid var(--color-border-subtle)" }} /> Actividad</span>
        </div>
      </div>
    </section>
  );
};

const CalendarCell = ({ cell }) => {
  const [hover, setHover] = React.useState(false);
  if (!cell) return <div style={{ background: "var(--color-bg-alt)", minHeight: 132 }} />;
  const shown = cell.acts.slice(0, 3);
  const extra = cell.acts.length - shown.length;
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: hover && cell.acts.length ? "var(--color-bg-base)" : "#fff", minHeight: 132, padding: 10, display: "flex", flexDirection: "column", gap: 4, transition: "background var(--duration-fast) var(--ease-out)" }}
    >
      <div style={{ fontSize: 15, fontWeight: 700, color: cell.acts.length ? "var(--color-brand-primary)" : "var(--color-text-tertiary)" }}>{cell.day}</div>
      {shown.map((a, j) => (
        <div key={j} title={`${a.time} · ${a.title}`} style={{ fontSize: 11, fontWeight: 700, padding: "4px 6px", borderRadius: 4, background: a.featured ? "var(--color-brand-accent)" : "var(--color-bg-brand-tint)", color: a.featured ? "#fff" : "var(--color-brand-primary)", lineHeight: 1.3, cursor: "pointer", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {a.time} · {a.title}
        </div>
      ))}
      {extra > 0 && <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-text-secondary)", padding: "2px 6px" }}>+{extra} más</div>}
    </div>
  );
};

/* --- DateFilter: filtro por fecha destacado con calendario desplegable --- */
const periodBtn = (active) => ({
  padding: "7px 12px", borderRadius: "var(--radius-full)", border: "1px solid var(--color-border-subtle)",
  background: active ? "var(--color-brand-primary)" : "#fff", color: active ? "#fff" : "var(--color-text-body)",
  fontFamily: "var(--font-family-primary)", fontSize: 13, fontWeight: 700, cursor: "pointer",
});

const DateFilter = ({ months, value, onChange, open, setOpen }) => {
  const label = value.from
    ? (value.to && value.to.key !== value.from.key ? `${fmtDay(value.from)} – ${fmtDay(value.to)}` : fmtDay(value.from))
    : (value.month === "all" ? "Todas las fechas" : value.month);
  const hasFilter = value.month !== "all" || value.from;

  // Selección de rango: 1er click = día suelto; 2º click = extiende a rango; 3º = empieza de nuevo
  const pickDay = (monthLabel, dd) => {
    const pick = { key: dayKey(monthLabel, dd), label: monthLabel, day: dd };
    if (!value.from || value.to) { onChange({ month: "all", from: pick, to: null }); return; }
    if (pick.key === value.from.key) { onChange({ month: "all", from: null, to: null }); return; }
    const [a, b] = pick.key < value.from.key ? [pick, value.from] : [value.from, pick];
    onChange({ month: "all", from: a, to: b });
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}
        style={{
          display: "inline-flex", alignItems: "center", gap: 10, padding: "11px 18px",
          borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-default)",
          background: hasFilter ? "var(--color-bg-brand-tint)" : "#fff",
          color: "var(--color-brand-primary)", fontFamily: "var(--font-family-primary)",
          fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "var(--shadow-sm)",
        }}
      >
        <Icon name="calendar" size={18} />
        {label}
        <Icon name="chevronDown" size={16} />
      </button>
      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 55 }} />
          <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 60, width: 340, background: "#fff", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--color-border-subtle)", padding: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 10 }}>Atajos</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              <button onClick={() => onChange({ month: "all", from: null, to: null })} style={periodBtn(value.month === "all" && !value.from)}>Todas las fechas</button>
              {months.map((m) => (
                <button key={m.label} onClick={() => onChange({ month: m.label, from: null, to: null })} style={periodBtn(value.month === m.label && !value.from)}>{m.label}</button>
              ))}
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 10 }}>
              O elige un día — o un rango con dos clicks
            </div>
            <MiniCalendar months={months} value={value} onPick={pickDay} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
              <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                {value.from && !value.to ? "Elige el final del rango…" : " "}
              </span>
              <button onClick={() => setOpen(false)} style={{ background: "var(--color-brand-primary)", color: "#fff", border: "none", borderRadius: "var(--radius-md)", padding: "8px 16px", fontFamily: "var(--font-family-primary)", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Aplicar</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/* Calendario mensual con navegación ‹ › entre los meses con agenda y selección de día/rango */
const MiniCalendar = ({ months, value, onPick }) => {
  const initialIdx = value.from ? Math.max(0, months.findIndex((m) => m.label === value.from.label)) : 0;
  const [idx, setIdx] = React.useState(initialIdx);
  const month = months[idx];
  const startDow = firstWeekdayMon0(month.label);
  const total = daysInMonth(month.label);
  const withActs = new Set(month.activities.map((a) => a.day));
  const kFrom = value.from ? value.from.key : null;
  const kTo = value.to ? value.to.key : kFrom;

  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= total; d++) cells.push(String(d).padStart(2, "0"));
  while (cells.length % 7 !== 0) cells.push(null);

  const navBtn = (disabled) => ({
    width: 28, height: 28, borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border-subtle)",
    background: "#fff", color: disabled ? "var(--color-text-tertiary)" : "var(--color-brand-primary)",
    fontFamily: "var(--font-family-primary)", fontSize: 14, fontWeight: 700,
    cursor: disabled ? "default" : "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center",
  });

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <button aria-label="Mes anterior" disabled={idx === 0} onClick={() => setIdx(idx - 1)} style={navBtn(idx === 0)}>‹</button>
        <span style={{ fontSize: 13, fontWeight: 900, color: "var(--color-text-primary)", letterSpacing: "0.02em" }}>{month.label}</span>
        <button aria-label="Mes siguiente" disabled={idx === months.length - 1} onClick={() => setIdx(idx + 1)} style={navBtn(idx === months.length - 1)}>›</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
        {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
          <div key={i} style={{ textAlign: "center", fontSize: 10, fontWeight: 900, color: "var(--color-text-tertiary)", padding: "2px 0" }}>{d}</div>
        ))}
        {cells.map((dd, i) => {
          if (!dd) return <div key={i} />;
          const k = dayKey(month.label, dd);
          const has = withActs.has(dd);
          const isEnd = kFrom && (k === kFrom || k === kTo);
          const inRange = kFrom && k > kFrom && k < kTo;
          return (
            <button key={i} onClick={() => onPick(month.label, dd)}
              style={{
                aspectRatio: "1 / 1", borderRadius: "var(--radius-sm)", border: "none", position: "relative",
                background: isEnd ? "var(--color-brand-primary)" : inRange ? "var(--color-bg-brand-tint)" : "transparent",
                color: isEnd ? "#fff" : has ? "var(--color-brand-primary)" : "var(--color-text-secondary)",
                fontFamily: "var(--font-family-primary)", fontSize: 12, fontWeight: has || isEnd ? 900 : 400,
                cursor: "pointer",
              }}
            >
              {parseInt(dd, 10)}
              {has && !isEnd && (
                <span style={{ position: "absolute", left: "50%", bottom: 3, transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "var(--color-brand-accent)" }} />
              )}
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 8, display: "flex", gap: 14, fontSize: 11, color: "var(--color-text-secondary)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-brand-accent)", display: "inline-block" }} /> Día con actividad
        </span>
      </div>
    </div>
  );
};

const EmptyState = ({ onClear }) => (
  <div style={{ textAlign: "center", padding: "72px 0", color: "var(--color-text-secondary)" }}>
    <div style={{ color: "var(--color-text-tertiary)", marginBottom: 16, display: "flex", justifyContent: "center" }}>
      <Icon name="calendar" size={40} strokeWidth={1.5} />
    </div>
    <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", margin: "0 0 8px" }}>No hay actividades con estos filtros</h3>
    <p style={{ fontSize: 15, margin: "0 0 20px" }}>Prueba con otra fecha o categoría.</p>
    <Button variant="outline" onClick={onClear}>Limpiar filtros</Button>
  </div>
);

Object.assign(window, { ActividadesPageNueva });
