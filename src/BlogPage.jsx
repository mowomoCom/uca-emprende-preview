// UCA Emprende — Blog (listado)
// Estructura: breadcrumb · hero · artículo destacado · filtros por categoría · grid de posts ·
// newsletter. Reutiliza BlogCard. Todos los posts abren el single (articulo.html).

const POSTS = [
  { category: "Guías", date: "2 may 2026", title: "Cómo validar tu idea antes de escribir una línea de código", excerpt: "Cuatro experimentos baratos para saber si hay mercado sin gastarte el presupuesto en desarrollo.", image: "uploads/act/act-validacion.jpg", featured: true },
  { category: "Casos de éxito", date: "24 abr 2026", title: "Algas del Sur: del TFG a exportar a Japón", excerpt: "La historia de tres investigadoras que convirtieron su tesis en una biotech con clientes internacionales.", image: "uploads/act/act-mujeres.jpg" },
  { category: "Convocatorias", date: "18 abr 2026", title: "Todo lo que necesitas para presentarte al Premio Atrévete", excerpt: "Fechas, requisitos y consejos para preparar una candidatura ganadora a la XXIII edición.", image: "uploads/act/act-demoday.jpg" },
  { category: "El Olivillo", date: "9 abr 2026", title: "Un día en El Olivillo, el coworking de la UCA en Cádiz", excerpt: "Recorremos los 600 m² del antiguo cine reconvertido en laboratorio de ideas.", image: "uploads/OLIVILLO_01-1-1024x683.jpg" },
  { category: "Guías", date: "1 abr 2026", title: "Financiación pública para startups: ENISA, CDTI y más", excerpt: "Un mapa práctico de las líneas de financiación no dilutiva a las que puede optar tu proyecto.", image: "uploads/act/act-financiacion.jpg" },
  { category: "Comunidad", date: "20 mar 2026", title: "Qué aprendimos del último Pitch clínico con inversores", excerpt: "Los errores más comunes al presentar ante business angels, contados por quienes los cometieron.", image: "uploads/act/act-pitch.jpg" },
  { category: "Guías", date: "12 mar 2026", title: "Pactos de socios: lo que nadie te cuenta al empezar", excerpt: "Cláusulas esenciales para que la relación entre fundadores no acabe en los tribunales.", image: "uploads/act/act-legal.jpg" },
];

const CATEGORIES = ["Todas", "Guías", "Casos de éxito", "Convocatorias", "El Olivillo", "Comunidad"];

const BlogPage = ({ onNavigate }) => {
  const [cat, setCat] = React.useState("Todas");
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };
  const open = () => onNavigate && onNavigate("articulo");

  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured).filter((p) => cat === "Todas" || p.category === cat);

  return (
    <div data-screen-label="07 Blog">
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 48, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs><pattern id="blg-grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#blg-grid)" />
        </svg>
        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8 }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>Blog</span>
          </nav>
          <div style={{ maxWidth: 760 }}>
            <Eyebrow color="primary">Blog UCA Emprende</Eyebrow>
            <h1 className="blg-h1" style={{ fontSize: 72, lineHeight: 1.0, letterSpacing: "-0.035em", fontWeight: 900, color: "var(--color-text-primary)", margin: "14px 0 20px", textWrap: "balance" }}>
              Ideas, guías y <span style={{ color: "var(--color-brand-accent)" }}>aprendizajes</span>.
            </h1>
            <p style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-text-body)", margin: 0, maxWidth: 620 }}>
              Todo lo que aprendemos acompañando a emprendedores, en artículos cortos y prácticos. Sin postureo.
            </p>
          </div>
        </div>
      </section>

      {/* DESTACADO */}
      {featured && (
        <section style={{ paddingBottom: 24 }}>
          <div className="container">
            <article onClick={open} className="blg-featured" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 0, borderRadius: "var(--radius-2xl)", overflow: "hidden", background: "#fff", border: "1px solid var(--color-border-subtle)", boxShadow: "var(--shadow-md)", cursor: "pointer" }}>
              <div style={{ minHeight: 380, background: `url('${featured.image}') center/cover` }} />
              <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Badge variant="ribbon">★ Destacado</Badge>
                  <Eyebrow color="accent">{featured.category}</Eyebrow>
                </div>
                <h2 style={{ fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 900, color: "var(--color-text-primary)", margin: 0, textWrap: "balance" }}>{featured.title}</h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>{featured.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                  <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{featured.date} · 5 min de lectura</span>
                  <span style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 15, display: "inline-flex", alignItems: "center", gap: 6 }}>Leer artículo <Icon name="arrowRight" size={16} /></span>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* FILTROS */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32, paddingBottom: 24, borderBottom: "1px solid var(--color-border-subtle)" }}>
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                style={{ padding: "8px 16px", borderRadius: "var(--radius-full)", border: "1px solid var(--color-border-subtle)", background: cat === c ? "var(--color-brand-primary)" : "#fff", color: cat === c ? "#fff" : "var(--color-text-body)", fontFamily: "var(--font-family-primary)", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all var(--duration-fast) var(--ease-out)" }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          {rest.length > 0 ? (
            <div className="blg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {rest.map((p, i) => (
                <div key={i} onClick={open} style={{ cursor: "pointer" }}>
                  <BlogCard {...p} image={`url('${p.image}')`} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "72px 0", color: "var(--color-text-secondary)" }}>
              <p style={{ fontSize: 16 }}>No hay artículos en esta categoría todavía.</p>
              <Button variant="outline" onClick={() => setCat("Todas")}>Ver todos</Button>
            </div>
          )}
        </div>
      </section>

      <NewsletterBand />
    </div>
  );
};

Object.assign(window, { BlogPage });
