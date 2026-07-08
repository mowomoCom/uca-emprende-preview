// UCA Emprende — Layout components: IntranetBar, Header, Footer

const IntranetBar = () => (
  // Barra superior reducida a 1-2 enlaces externos relevantes (PENDIENTE: el cliente aportará los definitivos
  // — p. ej. Vicerrectorado de Emprendimiento y la aplicación del servicio de apoyo / UCA Emprende).
  <div
    className="intranet-bar"
    style={{
      background: "var(--color-bg-dark)",
      color: "rgba(255,255,255,0.9)",
      fontSize: 13,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 24px",
    }}
  >
    <ul style={{ listStyle: "none", display: "flex", gap: 24, margin: 0, padding: 0 }}>
      {[
        { label: "Vicerrectorado de Emprendimiento", href: "#" },
        { label: "Servicio de Apoyo UCA Emprende", href: "#" },
      ].map((l) => (
        <li key={l.label}>
          <a href={l.href} style={{ color: "inherit", textDecoration: "none", opacity: 0.9, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}>
            {l.label}<Icon name="arrowRight" size={13} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Header = ({ current = "inicio", onNavigate }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const items = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre", label: "Sobre UCA Emprende" },
    { id: "actividades", label: "Actividades" },
    { id: "coworking", label: "Coworking" },
    { id: "programas", label: "Programas" },
    { id: "blog", label: "Blog" },
    { id: "contacto", label: "Contacto" },
  ];
  const go = (e, id) => { e.preventDefault(); setMenuOpen(false); onNavigate && onNavigate(id); };
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "saturate(140%) blur(8px)",
        WebkitBackdropFilter: "saturate(140%) blur(8px)",
        boxShadow: "var(--shadow-sticky)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="container header-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
          gap: 16,
        }}
      >
        <a href="#" onClick={(e) => go(e, "inicio")} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
          <Logo variant="emprende" height={60} />
        </a>
        <nav className="nav-desktop">
          <ul style={{ listStyle: "none", display: "flex", gap: 32, margin: 0, padding: 0 }}>
            {items.map((item) => {
              const active = item.id === current;
              return (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={(e) => go(e, item.id)}
                    style={{
                      color: active ? "var(--color-brand-accent)" : "var(--color-text-primary)",
                      fontWeight: 700,
                      fontSize: 15,
                      textDecoration: "none",
                      position: "relative",
                      paddingBottom: 6,
                      borderBottom: active ? "2px solid var(--color-brand-accent)" : "2px solid transparent",
                      transition: "all 150ms ease",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button aria-label="Buscar" className="header-search" style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-primary)", cursor: "pointer" }}>
            <Icon name="search" size={20} />
          </button>
          <Button variant="primary" onClick={(e) => go(e, "actividades")}>Inscríbete</Button>
          <button
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: 44, height: 44, borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border-subtle)", background: "#fff",
              display: "none", alignItems: "center", justifyContent: "center",
              color: "var(--color-brand-primary)", cursor: "pointer", flexShrink: 0,
            }}
          >
            {/* Icono hamburguesa / cierre dibujado inline para no depender del set de iconos */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen
                ? <><line x1="4" y1="4" x2="16" y2="16" /><line x1="16" y1="4" x2="4" y2="16" /></>
                : <><line x1="3" y1="5" x2="17" y2="5" /><line x1="3" y1="10" x2="17" y2="10" /><line x1="3" y1="15" x2="17" y2="15" /></>}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="nav-mobile" style={{ borderTop: "1px solid var(--color-border-subtle)", background: "#fff" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: "8px 16px 16px", display: "flex", flexDirection: "column" }}>
            {items.map((item) => {
              const active = item.id === current;
              return (
                <li key={item.id} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                  <a
                    href="#"
                    onClick={(e) => go(e, item.id)}
                    style={{
                      display: "block", padding: "14px 8px",
                      color: active ? "var(--color-brand-accent)" : "var(--color-text-primary)",
                      fontWeight: 700, fontSize: 16, textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

const FooterNewsletter = () => {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return (
    <div className="footer-newsletter" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center", paddingBottom: 40, marginBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)", flexWrap: "wrap" }}>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brand-accent)", marginBottom: 8 }}>Boletín UCA Emprende</div>
        <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "-0.01em" }}>Recibe convocatorias y actividades, una vez al mes.</div>
      </div>
      {sent ? (
        <div style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 15 }}>✓ Suscripción recibida. Gracias.</div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setSent(true); }} style={{ display: "flex", gap: 8, minWidth: 320 }}>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu.nombre@uca.es"
            style={{ flex: 1, fontFamily: "var(--font-family-primary)", fontSize: 15, padding: "12px 16px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--radius-md)", outline: "none" }} />
          <Button type="submit" variant="primary">Suscribirme</Button>
        </form>
      )}
    </div>
  );
};

const Footer = () => {
  // Feedback cliente 16/06: el footer recoge el boletín + la información institucional y
  // secundaria (memorias, personal, requisición de cuentas, enlaces no principales).
  // El "Sobre UCA Emprende / quiénes somos" se ha movido al menú principal (no va aquí).
  const columns = [
    {
      title: "Institucional",
      links: ["Memorias anuales", "Personal y equipo", "Transparencia", "Requisición de cuentas", "Normativa"],
    },
    {
      title: "Universidad",
      links: ["UCA.es", "Fundación UCA", "Transferencia", "OTRI", "Cátedras"],
    },
    {
      title: "Contacto",
      links: ["Calle del Olivillo, 2", "11002 Cádiz", "956 015 898", "emprende@uca.es"],
    },
  ];
  return (
    <footer style={{ background: "var(--color-bg-dark)", color: "#e6eaec", paddingTop: 56, marginTop: 0 }}>
      <div className="container">
        {/* Boletín — captación secundaria en el propio footer */}
        <FooterNewsletter />

        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <div style={{ marginBottom: 20, filter: "brightness(0) invert(1)" }}>
              <Logo variant="uca" height={56} />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: 260 }}>
              Cátedra de Emprendedores de la Fundación Universidad de Cádiz. Impulsamos el emprendimiento universitario desde 1979.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["facebook", "twitter", "linkedin", "instagram", "youtube"].map((name) => (
                <a key={name} href="#" aria-label={name} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  <Icon name={name} size={16} />
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", marginBottom: 16 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l}><a href="#" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0 32px", fontSize: 12, color: "rgba(255,255,255,0.5)", flexWrap: "wrap", gap: 12 }}>
          <span>© {new Date().getFullYear()} Universidad de Cádiz · Cátedra de Emprendedores</span>
          <ul style={{ listStyle: "none", display: "flex", gap: 24, margin: 0, padding: 0 }}>
            <li><a href="aviso-legal.html" style={{ color: "inherit", textDecoration: "none" }}>Aviso legal</a></li>
            <li><a href="privacidad.html" style={{ color: "inherit", textDecoration: "none" }}>Privacidad</a></li>
            <li><a href="cookies.html" style={{ color: "inherit", textDecoration: "none" }}>Cookies</a></li>
            <li><a href="accesibilidad.html" style={{ color: "inherit", textDecoration: "none" }}>Accesibilidad</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Navegación entre las páginas de la preview (mapa único compartido por todos los HTML)
const UCA_PAGES = {
  inicio: "index.html",
  sobre: "sobre.html",
  actividades: "actividades.html",
  actividad: "actividad.html",
  coworking: "coworking.html",
  programas: "programas.html",
  blog: "blog.html",
  articulo: "articulo.html",
  contacto: "contacto.html",
  programa: "programa.html",
  "aviso-legal": "aviso-legal.html",
  privacidad: "privacidad.html",
  cookies: "cookies.html",
  accesibilidad: "accesibilidad.html",
};
const ucaNavigate = (id) => { const u = UCA_PAGES[id]; if (u) window.location.href = u; };

Object.assign(window, { IntranetBar, Header, Footer, UCA_PAGES, ucaNavigate });
