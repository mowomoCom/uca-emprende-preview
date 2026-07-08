// UCA Emprende — Páginas legales (aviso legal, privacidad, cookies, accesibilidad)
// Un único componente LegalDoc renderiza cualquiera de los cuatro documentos a partir de
// su definición en LEGAL_DOCS. Layout: breadcrumb · cabecera · índice sticky + cuerpo.
// El contenido es ORIENTATIVO: debe validarlo el servicio jurídico de la UCA.

const TITULAR = "Fundación Universidad de Cádiz (Cátedra de Emprendedores)";
const DIRECCION = "Calle del Olivillo, 2 · 11002 Cádiz";
const EMAIL = "emprende@uca.es";

const LEGAL_DOCS = {
  "aviso-legal": {
    title: "Aviso legal",
    updated: "Última actualización: julio de 2026",
    lead: "Condiciones generales de uso del sitio web de UCA Emprende.",
    sections: [
      { id: "titular", h: "1. Titular del sitio", ps: [
        `En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es ${TITULAR}, con domicilio en ${DIRECCION} y dirección de contacto ${EMAIL}.`,
      ] },
      { id: "objeto", h: "2. Objeto", ps: [
        "El presente aviso regula el acceso y uso del sitio web de UCA Emprende, cuya finalidad es difundir las actividades, programas y servicios de apoyo al emprendimiento de la comunidad universitaria.",
      ] },
      { id: "uso", h: "3. Condiciones de uso", ps: [
        "La persona usuaria se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe. El titular podrá retirar o suspender el acceso a los contenidos que incumplan la normativa vigente.",
      ] },
      { id: "propiedad", h: "4. Propiedad intelectual e industrial", ps: [
        "Los contenidos, marcas, logotipos y diseños del sitio son titularidad de la Universidad de Cádiz o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.",
      ] },
      { id: "responsabilidad", h: "5. Responsabilidad", ps: [
        "El titular no se responsabiliza de los daños derivados del uso del sitio ni de la indisponibilidad temporal por causas técnicas. La información publicada puede actualizarse o modificarse sin previo aviso.",
      ] },
      { id: "enlaces", h: "6. Enlaces a terceros", ps: [
        "El sitio puede incluir enlaces a páginas externas. El titular no asume responsabilidad sobre los contenidos ni las políticas de privacidad de dichos sitios.",
      ] },
      { id: "legislacion", h: "7. Legislación aplicable", ps: [
        "Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a derecho.",
      ] },
    ],
  },
  "privacidad": {
    title: "Política de privacidad",
    updated: "Última actualización: julio de 2026",
    lead: "Cómo tratamos tus datos personales cuando usas este sitio o te pones en contacto con nosotros.",
    sections: [
      { id: "responsable", h: "1. Responsable del tratamiento", ps: [
        `El responsable del tratamiento de tus datos es ${TITULAR}, con domicilio en ${DIRECCION}. Puedes contactar en ${EMAIL} para cualquier cuestión relacionada con tus datos.`,
      ] },
      { id: "datos", h: "2. Qué datos recogemos", ps: [
        "Recogemos los datos que nos facilitas voluntariamente a través de los formularios (nombre, correo electrónico y el contenido de tu mensaje) y los datos técnicos de navegación estrictamente necesarios para el funcionamiento del sitio.",
      ] },
      { id: "finalidad", h: "3. Con qué finalidad", ps: [
        "Utilizamos tus datos para atender tus consultas, gestionar tu participación en actividades y programas y, si lo autorizas, enviarte el boletín con convocatorias y novedades.",
      ] },
      { id: "legitimacion", h: "4. Legitimación", ps: [
        "La base jurídica es tu consentimiento, el interés legítimo en atender tus solicitudes y, en su caso, el cumplimiento de obligaciones legales aplicables a la Universidad de Cádiz.",
      ] },
      { id: "conservacion", h: "5. Conservación", ps: [
        "Conservamos tus datos mientras exista una relación con la persona interesada y, posteriormente, durante los plazos legalmente exigibles. Cuando dejen de ser necesarios, se suprimen de forma segura.",
      ] },
      { id: "derechos", h: "6. Tus derechos", ps: [
        "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a la dirección de contacto. También puedes reclamar ante la Agencia Española de Protección de Datos.",
      ] },
    ],
  },
  "cookies": {
    title: "Política de cookies",
    updated: "Última actualización: julio de 2026",
    lead: "Qué cookies utiliza este sitio y cómo puedes gestionarlas.",
    sections: [
      { id: "que-son", h: "1. Qué son las cookies", ps: [
        "Una cookie es un pequeño archivo que se almacena en tu dispositivo al visitar un sitio web. Sirven para recordar tus preferencias y para obtener información estadística sobre el uso del sitio.",
      ] },
      { id: "tipos", h: "2. Cookies que utilizamos", ps: [
        "Este sitio utiliza únicamente las cookies necesarias para su funcionamiento y, en su caso, cookies de medición anónima. No se utilizan cookies publicitarias ni de perfilado.",
      ], table: {
        head: ["Cookie", "Tipo", "Finalidad", "Duración"],
        rows: [
          ["Sesión técnica", "Necesaria", "Funcionamiento básico del sitio", "Sesión"],
          ["Preferencias", "Necesaria", "Recordar ajustes de la interfaz", "1 año"],
          ["Analítica anónima", "Analítica", "Medir el uso agregado del sitio", "2 años"],
        ],
      } },
      { id: "gestion", h: "3. Cómo gestionarlas", ps: [
        "Puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador. Ten en cuenta que desactivar las cookies necesarias puede afectar al funcionamiento del sitio.",
      ] },
      { id: "consentimiento", h: "4. Consentimiento", ps: [
        "Al continuar navegando, y salvo para las cookies estrictamente necesarias, se solicitará tu consentimiento previo. Podrás retirarlo en cualquier momento desde esta página.",
      ] },
    ],
  },
  "accesibilidad": {
    title: "Declaración de accesibilidad",
    updated: "Última actualización: julio de 2026",
    lead: "Nuestro compromiso para que este sitio sea usable por el mayor número de personas.",
    sections: [
      { id: "compromiso", h: "1. Compromiso", ps: [
        "UCA Emprende y la Universidad de Cádiz se comprometen a hacer accesible su sitio web de conformidad con el Real Decreto 1112/2018 sobre accesibilidad de los sitios web y aplicaciones del sector público.",
      ] },
      { id: "conformidad", h: "2. Nivel de conformidad", ps: [
        "Este sitio pretende ser conforme con el nivel AA de las Pautas de Accesibilidad para el Contenido Web (WCAG 2.1) y la norma UNE-EN 301549. El estado de conformidad se revisará periódicamente.",
      ] },
      { id: "estado", h: "3. Estado actual", ps: [
        "El sitio se encuentra en fase de revisión de accesibilidad. Se irán corrigiendo los aspectos detectados para alcanzar la plena conformidad.",
      ] },
      { id: "contacto", h: "4. Contacto y reclamaciones", ps: [
        `Si detectas barreras de accesibilidad, puedes comunicárnoslo en ${EMAIL}. Atenderemos tu comunicación y, si procede, aplicaremos las medidas necesarias en un plazo razonable.`,
      ] },
    ],
  },
};

const LegalDoc = ({ slug, onNavigate }) => {
  const doc = LEGAL_DOCS[slug] || LEGAL_DOCS["aviso-legal"];
  const go = (id) => (e) => { if (e) e.preventDefault(); onNavigate && onNavigate(id); };

  return (
    <div data-screen-label={`Legal · ${doc.title}`}>
      {/* CABECERA */}
      <section style={{ position: "relative", background: "var(--color-bg-base)", paddingTop: 40, paddingBottom: 40, overflow: "hidden" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
          <defs><pattern id="leg-grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,88,119,0.05)" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#leg-grid)" />
        </svg>
        <div className="container" style={{ position: "relative" }}>
          <nav style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}>
            <a href="#" onClick={go("inicio")} style={{ color: "inherit", textDecoration: "none" }}>Inicio</a>
            <span>/</span>
            <span style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>{doc.title}</span>
          </nav>
          <Eyebrow color="primary">Información legal</Eyebrow>
          <h1 className="leg-h1" style={{ fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 900, color: "var(--color-text-primary)", margin: "12px 0 14px", textWrap: "balance" }}>
            {doc.title}
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--color-text-body)", margin: "0 0 8px", maxWidth: 640 }}>{doc.lead}</p>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>{doc.updated}</p>
        </div>
      </section>

      {/* CUERPO */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          {/* Callout: contenido orientativo */}
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "var(--color-bg-accent-tint)", border: "1px solid rgba(232,123,0,0.25)", borderRadius: "var(--radius-lg)", padding: "18px 22px", marginBottom: 40 }}>
            <span style={{ color: "var(--color-brand-accent)", flexShrink: 0, marginTop: 2 }}><Icon name="lightbulb" size={20} /></span>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-text-body)", margin: 0 }}>
              <strong style={{ color: "var(--color-text-primary)" }}>Texto orientativo.</strong> Este contenido es una plantilla de referencia y debe ser revisado y validado por el servicio jurídico de la Universidad de Cádiz antes de su publicación definitiva.
            </p>
          </div>

          <div className="leg-grid" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 56, alignItems: "start" }}>
            {/* Índice */}
            <aside className="leg-index" style={{ position: "sticky", top: 100 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 14 }}>En esta página</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {doc.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} style={{ fontSize: 14, color: "var(--color-brand-primary)", textDecoration: "none", fontWeight: 700, lineHeight: 1.4 }}>{s.h}</a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Documento */}
            <div style={{ maxWidth: 720 }}>
              {doc.sections.map((s) => (
                <div key={s.id} id={s.id} style={{ marginBottom: 36, scrollMarginTop: 100 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.01em", color: "var(--color-text-primary)", margin: "0 0 14px" }}>{s.h}</h2>
                  {s.ps.map((p, i) => (
                    <p key={i} style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-text-body)", margin: "0 0 14px" }}>{p}</p>
                  ))}
                  {s.table && (
                    <div style={{ overflowX: "auto", marginTop: 8 }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 480 }}>
                        <thead>
                          <tr>
                            {s.table.head.map((h) => (
                              <th key={h} style={{ textAlign: "left", padding: "10px 14px", background: "var(--color-bg-alt)", color: "var(--color-text-primary)", fontWeight: 700, borderBottom: "2px solid var(--color-border-default)" }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci} style={{ padding: "10px 14px", borderBottom: "1px solid var(--color-border-subtle)", color: ci === 0 ? "var(--color-text-primary)" : "var(--color-text-body)", fontWeight: ci === 0 ? 700 : 400 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--color-border-subtle)", display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button variant="outline" iconRight="arrowRight" onClick={go("contacto")}>¿Dudas? Contáctanos</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { LegalDoc, LEGAL_DOCS });
