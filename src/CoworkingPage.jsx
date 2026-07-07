// UCA Emprende — Página de Coworking (El Olivillo)
// Estructura: breadcrumb · hero split con foto real · banda de cifras · tarifas/planes ·
// equipamiento y servicios · galería · ubicación · CTA de reserva.
// Fotos reales del espacio en assets/olivillo.jpg y uploads/OLIVILLO_01-1-1024x683.jpg.

const PLANS = [
  { name: "Puesto flex", price: "45 €", per: "/ mes", desc: "Acceso a puesto libre en horario de mañana o tarde. Ideal para quien alterna con la universidad.", features: ["Puesto no asignado", "Wifi y taquilla de día", "Zonas comunes y café"], tone: "muted" },
  { name: "Puesto fijo", price: "85 €", per: "/ mes", desc: "Tu mesa reservada de lunes a viernes, con almacenamiento propio y prioridad en salas.", features: ["Puesto asignado 24/7", "Taquilla personal", "4 h de sala al mes", "Mentoring semanal"], tone: "primary", featured: true },
  { name: "Equipo", price: "A medida", per: "", desc: "Espacio para equipos de 3 a 6 personas del programa UCA Emprende. Consúltanos disponibilidad.", features: ["Zona reservada", "Salas incluidas", "Acompañamiento del programa"], tone: "muted" },
];

const AMENITIES = [
  { icon: "briefcase", title: "Puestos fijos y flex", desc: "Mesas amplias con monitor opcional y sillas ergonómicas." },
  { icon: "users", title: "Dos salas de reuniones", desc: "Reservables desde la comunidad, con pantalla y videollamada." },
  { icon: "lightbulb", title: "Zona maker", desc: "Espacio de prototipado para dar forma a tus primeras ideas." },
  { icon: "award", title: "Mentoring semanal", desc: "Sesiones con mentores especializados por sector." },
  { icon: "sparkles", title: "Eventos y networking", desc: "Agenda propia de talleres, demo days y encuentros." },
  { icon: "mapPin", title: "Casco histórico", desc: "A dos minutos de la playa de la Caleta, en el centro de Cádiz." },
];

const STATS = [
  { value: "600", suffix: "m²", label: "de espacio de trabajo" },
  { value: "80", suffix: "+", label: "emprendedores en la comunidad" },
  { value: "2", label: "salas de reuniones reservables" },
  { value: "45", suffix: "€", label: "cuota flexible al mes" },
];

const GALLERY = [
  { src: "assets/olivillo.jpg", alt: "Sala principal de coworking El Olivillo con puestos de trabajo", span: 2 },
  { src: "uploads/OLIVILLO_01-1-1024x683.jpg", alt: "Edificio El Olivillo, antiguo cine en el casco histórico de Cádiz", span: 1 },
  { src: "uploads/act/act-mentores.jpg", alt: "Sesión de mentoring en El Olivillo", span: 1 },
];

const CoworkingPage = ({ onNavigate }) => {
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };

  return (
    <div data-screen-label="04 Coworking · El Olivillo">
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 72, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs>
            <pattern id="cow-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cow-grid)" />
        </svg>

        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8 }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>Coworking</span>
          </nav>

          <div className="cow-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <Eyebrow color="primary">Coworking El Olivillo · Cádiz</Eyebrow>
              <h1 className="cow-h1" style={{ fontSize: 68, lineHeight: 1.0, letterSpacing: "-0.035em", fontWeight: 900, color: "var(--color-text-primary)", margin: "14px 0 22px", textWrap: "balance" }}>
                Un antiguo cine convertido en <span style={{ color: "var(--color-brand-accent)" }}>laboratorio de ideas</span>.
              </h1>
              <p style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-text-body)", margin: "0 0 32px", maxWidth: 540 }}>
                600 m² en pleno casco histórico con puestos de trabajo, dos salas de reuniones,
                zona maker y una comunidad activa de <strong style={{ color: "var(--color-text-primary)" }}>80+ emprendedores UCA</strong> trabajando cada día.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button variant="primary" size="lg" iconRight="arrowRight">Reservar visita</Button>
                <Button variant="outline" size="lg" icon="calendar">Reservar sala</Button>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", aspectRatio: "4 / 3", background: "var(--color-bg-brand-tint)" }}>
                <img src="assets/olivillo.jpg" alt="Interior del coworking El Olivillo" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 20, left: 20, color: "#fff" }}>
                  <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.9 }}>600<span style={{ color: "var(--color-brand-accent)" }}>m²</span></div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginTop: 4 }}>para tu proyecto</div>
                </div>
                <div style={{ position: "absolute", top: 20, left: 20, background: "rgba(255,255,255,0.95)", borderRadius: "var(--radius-full)", padding: "8px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-brand-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Icon name="mapPin" size={14} /> Calle del Olivillo, 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section style={{ borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)", padding: "32px 0" }}>
        <div className="container">
          <div className="cow-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.025em", color: "var(--color-brand-primary)", display: "flex", alignItems: "baseline", gap: 4 }}>
                  {s.value}{s.suffix && <span style={{ color: "var(--color-brand-accent)", fontSize: 22 }}>{s.suffix}</span>}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.4, color: "var(--color-text-secondary)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFAS */}
      <section style={{ padding: "96px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 620, marginBottom: 48 }}>
            <Eyebrow color="primary">Tarifas</Eyebrow>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 12px", textWrap: "balance" }}>
              Elige cómo quieres trabajar.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>
              Todas las modalidades incluyen wifi, zonas comunes, café y acceso a la agenda de actividades. Sin permanencia.
            </p>
          </div>
          <div className="cow-plans-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }}>
            {PLANS.map((p) => <PlanCard key={p.name} {...p} />)}
          </div>
        </div>
      </section>

      {/* EQUIPAMIENTO */}
      <section style={{ background: "var(--color-bg-alt)", padding: "96px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 620, marginBottom: 48 }}>
            <Eyebrow color="primary">Qué encontrarás</Eyebrow>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 0", textWrap: "balance" }}>
              Todo lo que necesitas para arrancar.
            </h2>
          </div>
          <div className="cow-amenities-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {AMENITIES.map((a) => (
              <div key={a.title} style={{ background: "#fff", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-subtle)", padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={a.icon} size={26} strokeWidth={1.75} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--color-text-primary)", margin: 0 }}>{a.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section style={{ padding: "96px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
            <div>
              <Eyebrow color="primary">El espacio</Eyebrow>
              <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-text-primary)", margin: "8px 0 0" }}>Un vistazo a El Olivillo</h2>
            </div>
          </div>
          <div className="cow-gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "220px", gap: 16 }}>
            {GALLERY.map((g, i) => (
              <div key={i} style={{ gridColumn: `span ${g.span * 2}`, borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--color-bg-brand-tint)", border: "1px solid var(--color-border-subtle)" }}>
                <img src={g.src} alt={g.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN + CTA */}
      <section style={{ background: "var(--color-bg-dark)", padding: "80px 0", color: "#e6eaec" }}>
        <div className="container">
          <div className="cow-cta-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brand-accent)" }}>Ven a conocerlo</span>
              <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 900, color: "#fff", margin: "12px 0 20px", textWrap: "balance" }}>
                Pásate por El Olivillo.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.75)", margin: "0 0 28px", maxWidth: 460 }}>
                Reserva una visita guiada y te enseñamos el espacio, las salas y cómo funciona la comunidad. Sin compromiso.
              </p>
              <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
                {[
                  { icon: "mapPin", v: "Calle del Olivillo, 2 · 11002 Cádiz" },
                  { icon: "clock", v: "Lunes a viernes · 9:00 a 21:00" },
                  { icon: "send", v: "emprende@uca.es · 956 015 898" },
                ].map((r) => (
                  <div key={r.v} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, fontWeight: 700, color: "#fff" }}>
                    <span style={{ color: "var(--color-brand-accent)" }}><Icon name={r.icon} size={18} /></span>{r.v}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button variant="primary" size="lg" iconRight="arrowRight">Reservar visita</Button>
                <Button variant="white" size="lg" onClick={go("actividades")}>Ver actividades</Button>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "var(--radius-2xl)", overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "var(--shadow-xl)", background: "var(--color-header-mid)" }}>
              <img src="uploads/OLIVILLO_01-1-1024x683.jpg" alt="Fachada del edificio El Olivillo" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PlanCard = ({ name, price, per, desc, features, tone, featured }) => {
  const dark = tone === "primary";
  return (
    <article style={{
      position: "relative", display: "flex", flexDirection: "column", gap: 16,
      background: dark ? "var(--color-brand-primary)" : "#fff",
      color: dark ? "#fff" : "var(--color-text-body)",
      border: dark ? "none" : "1px solid var(--color-border-subtle)",
      borderRadius: "var(--radius-xl)", padding: 32,
      boxShadow: dark ? "var(--shadow-lg)" : "var(--shadow-sm)",
    }}>
      {featured && (
        <span style={{ position: "absolute", top: -12, left: 32, background: "var(--color-brand-accent)", color: "#fff", fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "var(--radius-full)" }}>
          El más elegido
        </span>
      )}
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.8)" : "var(--color-text-secondary)" }}>{name}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 8 }}>
          <span style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-0.02em", color: dark ? "#fff" : "var(--color-text-primary)" }}>{price}</span>
          {per && <span style={{ fontSize: 15, color: dark ? "rgba(255,255,255,0.75)" : "var(--color-text-secondary)" }}>{per}</span>}
        </div>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: dark ? "rgba(255,255,255,0.85)" : "var(--color-text-body)" }}>{desc}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
        {features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, lineHeight: 1.5 }}>
            <span style={{ color: dark ? "var(--color-brand-accent)" : "var(--color-brand-primary)", flexShrink: 0, marginTop: 2 }}><Icon name="chevronRight" size={15} /></span>
            {f}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", paddingTop: 8 }}>
        <Button variant={dark ? "white" : "outline"} iconRight="arrowRight" style={{ width: "100%" }}>
          {price === "A medida" ? "Consultar" : "Reservar plaza"}
        </Button>
      </div>
    </article>
  );
};

Object.assign(window, { CoworkingPage });
