// UCA Emprende — Single de blog (artículo)
// Estructura: breadcrumb · cabecera del artículo · imagen destacada · cuerpo de lectura
// (columna estrecha) con barra de compartir · ficha de autor · artículos relacionados.

const ARTICLE = {
  category: "Guías",
  title: "Cómo validar tu idea antes de escribir una línea de código",
  lead: "Cuatro experimentos baratos para saber si hay mercado sin gastarte el presupuesto en desarrollo.",
  date: "2 de mayo de 2026",
  readTime: "5 min de lectura",
  image: "uploads/act/act-validacion.jpg",
  author: { name: "Elena Casado", role: "Fundadora de Mareo Lab · mentora UCA Emprende" },
};

const RELATED_POSTS = [
  { category: "Convocatorias", date: "18 abr 2026", title: "Todo lo que necesitas para presentarte al Premio Atrévete", excerpt: "Fechas, requisitos y consejos para una candidatura ganadora.", image: "uploads/act/act-demoday.jpg" },
  { category: "Guías", date: "1 abr 2026", title: "Financiación pública para startups: ENISA, CDTI y más", excerpt: "Un mapa práctico de las líneas de financiación no dilutiva.", image: "uploads/act/act-financiacion.jpg" },
  { category: "Comunidad", date: "20 mar 2026", title: "Qué aprendimos del último Pitch clínico con inversores", excerpt: "Los errores más comunes al presentar ante business angels.", image: "uploads/act/act-pitch.jpg" },
];

const ArticuloPage = ({ onNavigate }) => {
  const a = ARTICLE;
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };
  const openBlog = () => onNavigate && onNavigate("blog");

  const P = ({ children }) => <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--color-text-body)", margin: "0 0 22px" }}>{children}</p>;
  const H2 = ({ children }) => <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.01em", color: "var(--color-text-primary)", margin: "40px 0 16px" }}>{children}</h2>;

  return (
    <div data-screen-label="08 Artículo · detalle">
      {/* CABECERA */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 40, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs><pattern id="art-grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#art-grid)" />
        </svg>
        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 28, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <a href="#" onClick={go("blog")} style={{ color: "inherit", textDecoration: "none" }}>Blog</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>{a.category}</span>
          </nav>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <Eyebrow color="accent">{a.category}</Eyebrow>
            <h1 className="art-h1" style={{ fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.03em", fontWeight: 900, color: "var(--color-text-primary)", margin: "14px 0 20px", textWrap: "balance" }}>
              {a.title}
            </h1>
            <p style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-text-body)", margin: "0 auto 24px", maxWidth: 640 }}>{a.lead}</p>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", fontSize: 14, color: "var(--color-text-secondary)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14 }}>
                  {a.author.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <strong style={{ color: "var(--color-text-primary)" }}>{a.author.name}</strong>
              </span>
              <span>·</span><span>{a.date}</span><span>·</span><span>{a.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEN DESTACADA */}
      <div className="container">
        <div style={{ maxWidth: 960, margin: "0 auto", borderRadius: "var(--radius-2xl)", overflow: "hidden", aspectRatio: "16 / 8", boxShadow: "var(--shadow-lg)", background: "var(--color-bg-brand-tint)" }}>
          <img src={a.image} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>

      {/* CUERPO */}
      <section style={{ padding: "56px 0 96px" }}>
        <div className="container">
          <div className="art-body" style={{ maxWidth: 720, margin: "0 auto" }}>
            <P>El error más caro al emprender no es elegir mal la tecnología ni tardar en salir al mercado. Es construir, durante meses, algo que al final no quiere nadie. La buena noticia es que se puede evitar, y no hace falta ni una línea de código para hacerlo.</P>
            <P>Validar consiste en comprobar, con el menor esfuerzo posible, si las creencias sobre las que montas tu negocio son ciertas. Estas son las cuatro formas más rápidas y baratas de hacerlo.</P>

            <H2>1. Entrevistas de descubrimiento</H2>
            <P>Antes de vender nada, entiende el problema. Habla con 15 o 20 personas de tu público objetivo y pregúntales por su día a día, no por tu idea. El objetivo es descubrir dolores reales, no confirmar los tuyos.</P>

            <blockquote style={{ margin: "32px 0", padding: "20px 28px", borderLeft: "4px solid var(--color-brand-accent)", background: "var(--color-bg-alt)", borderRadius: "0 var(--radius-md) var(--radius-md) 0" }}>
              <p style={{ fontSize: 21, lineHeight: 1.5, fontStyle: "italic", color: "var(--color-text-primary)", margin: 0 }}>
                "Si preguntas a la gente si compraría tu producto, todos dicen que sí. Si les preguntas qué hicieron la última vez que tuvieron el problema, te dicen la verdad."
              </p>
            </blockquote>

            <H2>2. La prueba de humo</H2>
            <P>Monta una landing page que explique tu propuesta como si el producto ya existiera, con un botón de "quiero saber más" o "reservar". Lleva algo de tráfico y mide cuánta gente deja su correo. Es la señal de interés más honesta que vas a conseguir con 50 euros.</P>

            <H2>3. La preventa</H2>
            <P>El interés se demuestra con la cartera. Ofrece tu producto en preventa con un descuento por reservar antes de tiempo. Si nadie paga, tienes una respuesta valiosa mucho antes de haber invertido en desarrollo.</P>

            <H2>4. El concierge</H2>
            <P>Entrega el servicio a mano, sin automatizar nada, para los primeros clientes. Aprenderás en una semana lo que un producto terminado tardaría meses en enseñarte, y de paso facturas desde el primer día.</P>

            <P>Ninguno de estos experimentos requiere programar. Todos te dan datos reales para decidir si seguir, pivotar o parar. Y esa decisión, tomada a tiempo, es la diferencia entre un proyecto que despega y uno que se queda en el cajón.</P>

            {/* Tags + compartir */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--color-border-subtle)", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Validación", "Lean startup", "Guía"].map((t) => (
                  <span key={t} style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-secondary)", background: "var(--color-bg-muted)", borderRadius: "var(--radius-full)", padding: "6px 14px" }}>#{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-secondary)" }}>Compartir</span>
                {["twitter", "linkedin", "facebook"].map((n) => (
                  <a key={n} href="#" aria-label={n} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--color-bg-muted)", color: "var(--color-brand-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={n} size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Autor */}
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "var(--color-bg-alt)", borderRadius: "var(--radius-lg)", padding: 28, border: "1px solid var(--color-border-subtle)", marginTop: 32 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--color-bg-brand-tint)", color: "var(--color-brand-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 22, fontWeight: 900 }}>
                {a.author.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 900, color: "var(--color-text-primary)" }}>{a.author.name}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-brand-accent)", margin: "3px 0 8px" }}>{a.author.role}</div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>Acompaña a equipos en fase temprana dentro del programa UCA Emprende. Escribe sobre validación y descubrimiento de cliente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELACIONADOS */}
      <section style={{ background: "var(--color-bg-alt)", padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
            <div>
              <Eyebrow color="primary">Sigue leyendo</Eyebrow>
              <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-text-primary)", margin: "8px 0 0" }}>Artículos relacionados</h2>
            </div>
            <a href="#" onClick={go("blog")} style={{ color: "var(--color-brand-accent)", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>Ver todo el blog <Icon name="arrowRight" size={16} /></a>
          </div>
          <div className="art-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {RELATED_POSTS.map((p, i) => (
              <div key={i} onClick={openBlog} style={{ cursor: "pointer" }}>
                <BlogCard {...p} image={`url('${p.image}')`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { ArticuloPage });
