// UCA Emprende — Contacto
// Estructura: breadcrumb · hero · formulario + tarjetas de datos · mapa/ubicación · FAQ.
// El formulario es una maqueta funcional en cliente (no envía a ningún backend todavía).

const CONTACT_CARDS = [
  { icon: "mapPin", label: "Dónde estamos", value: "Calle del Olivillo, 2", sub: "11002 Cádiz" },
  { icon: "send", label: "Escríbenos", value: "emprende@uca.es", sub: "Respondemos en menos de 48 h" },
  { icon: "users", label: "Llámanos", value: "956 015 898", sub: "Lunes a viernes, 9:00 a 14:00" },
  { icon: "clock", label: "Horario de El Olivillo", value: "9:00 a 21:00", sub: "De lunes a viernes" },
];

const REASONS = ["Quiero una primera cita", "Información sobre programas", "Coworking El Olivillo", "Convocatorias y premios", "Prensa o colaboración", "Otro"];

const FAQ = [
  { q: "¿Tengo que ser estudiante de la UCA para participar?", a: "La mayoría de programas están abiertos a estudiantes, egresados, personal y alumni de la Universidad de Cádiz. Algunas actividades son abiertas a todo el público." },
  { q: "¿Los programas y el asesoramiento tienen coste?", a: "El asesoramiento y la gran mayoría de actividades son gratuitos para la comunidad UCA. El coworking tiene tarifas reducidas desde 45 € al mes." },
  { q: "¿Cómo pido la primera cita de asesoramiento?", a: "Rellena el formulario indicando que quieres una primera cita, o escríbenos a emprende@uca.es. Te contestamos con varias franjas disponibles." },
];

const ContactoPage = ({ onNavigate }) => {
  const [sent, setSent] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };

  const inputStyle = { width: "100%", fontFamily: "var(--font-family-primary)", fontSize: 16, padding: "13px 16px", background: "#fff", color: "var(--color-text-primary)", border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-md)", outline: "none" };
  const labelStyle = { display: "block", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-brand-primary)", marginBottom: 8 };

  return (
    <div data-screen-label="09 Contacto">
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 48, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs><pattern id="con-grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#con-grid)" />
        </svg>
        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8 }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>Contacto</span>
          </nav>
          <div style={{ maxWidth: 760 }}>
            <Eyebrow color="primary">Hablemos</Eyebrow>
            <h1 className="con-h1" style={{ fontSize: 72, lineHeight: 1.0, letterSpacing: "-0.035em", fontWeight: 900, color: "var(--color-text-primary)", margin: "14px 0 20px", textWrap: "balance" }}>
              Cuéntanos tu <span style={{ color: "var(--color-brand-accent)" }}>proyecto</span>.
            </h1>
            <p style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0, maxWidth: 600 }}>
              La primera cita es gratuita y sin compromiso. Escríbenos, pásate por El Olivillo o llámanos: como te venga mejor.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + DATOS */}
      <section style={{ paddingBottom: 88 }}>
        <div className="container">
          <div className="con-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Formulario */}
            <div style={{ background: "var(--color-bg-alt)", borderRadius: "var(--radius-2xl)", padding: 40, border: "1px solid var(--color-border-subtle)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--color-bg-accent-tint)", color: "var(--color-brand-accent)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 34, marginBottom: 16 }}>✓</div>
                  <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Mensaje enviado.</h2>
                  <p style={{ fontSize: 16, color: "var(--color-text-body)", margin: "0 0 20px" }}>Gracias por escribirnos. Te respondemos en menos de 48 horas.</p>
                  <Button variant="outline" onClick={() => setSent(false)}>Enviar otro mensaje</Button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: 20 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 900, color: "var(--color-text-primary)", margin: 0 }}>Escríbenos</h2>
                  <div className="con-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div><label style={labelStyle}>Nombre</label><input required type="text" placeholder="Tu nombre" style={inputStyle} /></div>
                    <div><label style={labelStyle}>Email</label><input required type="email" placeholder="tu.nombre@uca.es" style={inputStyle} /></div>
                  </div>
                  <div><label style={labelStyle}>Motivo de la consulta</label>
                    <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                      {REASONS.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div><label style={labelStyle}>Mensaje</label><textarea required rows={5} placeholder="Cuéntanos en qué punto estás y cómo podemos ayudarte." style={{ ...inputStyle, resize: "vertical" }} /></div>
                  <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                    <input required type="checkbox" style={{ marginTop: 3, accentColor: "#E87B00" }} />
                    <span>He leído la <a href="#" style={{ color: "var(--color-brand-primary)", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>política de privacidad</a> y acepto el tratamiento de mis datos.</span>
                  </label>
                  <div><Button type="submit" variant="primary" size="lg" iconRight="send">Enviar mensaje</Button></div>
                </form>
              )}
            </div>

            {/* Tarjetas de datos */}
            <div style={{ display: "grid", gap: 16 }}>
              {CONTACT_CARDS.map((c) => (
                <div key={c.label} style={{ background: "#fff", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-lg)", padding: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={c.icon} size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>{c.label}</div>
                    <div style={{ fontSize: 18, fontWeight: 900, color: "var(--color-text-primary)", margin: "3px 0 2px" }}>{c.value}</div>
                    <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAPA / UBICACIÓN */}
      <section style={{ paddingBottom: 88 }}>
        <div className="container">
          <div style={{ borderRadius: "var(--radius-2xl)", overflow: "hidden", border: "1px solid var(--color-border-subtle)", position: "relative", minHeight: 300, background: "var(--color-bg-brand-tint)" }}>
            <img src="uploads/OLIVILLO_01-1-1024x683.jpg" alt="El Olivillo, en el casco histórico de Cádiz" style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", left: 24, bottom: 24, background: "#fff", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: "18px 22px", maxWidth: 320 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-brand-primary)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                <Icon name="mapPin" size={15} /> Coworking El Olivillo
              </div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "var(--color-text-primary)", margin: "6px 0 4px" }}>Calle del Olivillo, 2</div>
              <div style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>11002 Cádiz · Casco histórico</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--color-bg-alt)", padding: "88px 0" }}>
        <div className="container">
          <div className="con-faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "start" }}>
            <div>
              <Eyebrow color="primary">Preguntas frecuentes</Eyebrow>
              <h2 style={{ fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 16px", textWrap: "balance" }}>
                Antes de escribir, quizá esto ayude.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>
                Y si no encuentras lo que buscas, escríbenos sin problema: para eso está el formulario.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQ.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} style={{ background: "#fff", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border-subtle)", overflow: "hidden" }}>
                    <button onClick={() => setOpenFaq(open ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "var(--font-family-primary)", textAlign: "left" }}>
                      <span style={{ fontSize: 17, fontWeight: 700, color: "var(--color-text-primary)" }}>{f.q}</span>
                      <span style={{ color: "var(--color-brand-primary)", transform: open ? "rotate(180deg)" : "none", transition: "transform var(--duration-fast) var(--ease-out)", flexShrink: 0 }}><Icon name="chevronDown" size={20} /></span>
                    </button>
                    {open && <div style={{ padding: "0 24px 20px", fontSize: 15, lineHeight: 1.65, color: "var(--color-text-body)" }}>{f.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { ContactoPage });
