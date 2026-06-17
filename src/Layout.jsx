// UCA Emprende — Layout components: IntranetBar, Header, Footer

const IntranetBar = () => (
  // Barra superior reducida a 1-2 enlaces externos relevantes (PENDIENTE: el cliente aportará los definitivos
  // — p. ej. Vicerrectorado de Emprendimiento y la aplicación del servicio de apoyo / UCA Emprende).
  <div
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
  const items = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre", label: "Sobre UCA Emprende" },
    { id: "actividades", label: "Actividades" },
    { id: "coworking", label: "Coworking" },
    { id: "programas", label: "Programas" },
    { id: "blog", label: "Blog" },
    { id: "contacto", label: "Contacto" },
  ];
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
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
        }}
      >
        <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate && onNavigate("inicio");}} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Logo variant="emprende" height={60} />
        </a>
        <nav>
          <ul style={{ listStyle: "none", display: "flex", gap: 32, margin: 0, padding: 0 }}>
            {items.map((item) => {
              const active = item.id === current;
              return (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(item.id); }}
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
          <button aria-label="Buscar" style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-brand-primary)", cursor: "pointer" }}>
            <Icon name="search" size={20} />
          </button>
          <Button variant="primary">Inscríbete</Button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const columns = [
    {
      title: "Emprende",
      links: ["Actividades", "Programas", "Coworking El Olivillo", "Blog", "Casos de éxito"],
    },
    {
      title: "Servicios",
      links: ["Asesoramiento", "Formación", "Mentoring", "Financiación", "Internacionalización"],
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
    <footer style={{ background: "var(--color-bg-dark)", color: "#e6eaec", paddingTop: 64, marginTop: 0 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0 32px", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          <span>© {new Date().getFullYear()} Universidad de Cádiz · Cátedra de Emprendedores</span>
          <ul style={{ listStyle: "none", display: "flex", gap: 24, margin: 0, padding: 0 }}>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Aviso legal</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacidad</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Cookies</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Accesibilidad</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { IntranetBar, Header, Footer });
