// HeroAnimation → ecosistema UCA Emprende, versión ESTÁTICA y simplificada.
// Feedback cliente 16/06: eliminar la animación del hero. Iteración posterior: simplificar
// el gráfico manteniendo el concepto (un núcleo UCA Emprende del que parten sus pilares),
// pero con una composición más limpia: un único anillo sutil, chips repartidos de forma
// regular y conectores finos y ordenados (sin doble anillo ni nodos sueltos).

const HeroAnimation = () => {
  const C = 250;              // centro
  const R_CHIP = 190;         // radio donde se sitúan los chips
  const R_CORE = 74;          // radio del núcleo
  const R_RING = 150;         // anillo sutil de referencia

  // Los seis pilares del ecosistema, repartidos cada 60° empezando arriba.
  const pillars = [
    "CONVOCATORIAS", "FORMACIÓN", "FINANCIACIÓN",
    "COWORKING", "RED ALUMNI", "MENTORÍA",
  ].map((label, i) => {
    const rad = (-90 + i * 60) * Math.PI / 180;
    const cos = Math.cos(rad), sin = Math.sin(rad);
    return {
      label,
      // chip
      cx: C + R_CHIP * cos,
      cy: C + R_CHIP * sin,
      w: label.length * 7.2 + 24,
      // segmento conector (del borde del núcleo hasta antes del chip)
      x1: C + (R_CORE + 12) * cos,
      y1: C + (R_CORE + 12) * sin,
      x2: C + (R_CHIP - 26) * cos,
      y2: C + (R_CHIP - 26) * sin,
    };
  });

  return (
    <div
      aria-label="Ecosistema UCA Emprende"
      role="img"
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        maxWidth: 460,
        position: "relative",
        margin: "0 auto",
      }}
    >
      <svg viewBox="0 0 500 500" style={{ width: "100%", height: "100%", overflow: "visible" }} aria-hidden="true">
        <defs>
          <radialGradient id="haNucleus" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1b78a0" />
            <stop offset="100%" stopColor="#003d55" />
          </radialGradient>
        </defs>

        {/* anillo sutil de referencia */}
        <circle cx={C} cy={C} r={R_RING} fill="none" stroke="rgba(0,88,119,0.12)" strokeWidth="1" strokeDasharray="3 6" />

        {/* conectores finos + pequeño punto de enlace */}
        {pillars.map((p, i) => (
          <g key={`c-${i}`}>
            <line x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2} stroke="rgba(0,88,119,0.28)" strokeWidth="1.25" />
            <circle cx={p.x2} cy={p.y2} r="3.5" fill="#E87B00" />
          </g>
        ))}

        {/* núcleo: círculo azul + logotipo UCA Emprende */}
        <circle cx={C} cy={C} r={R_CORE} fill="url(#haNucleus)" />
        <circle cx={C} cy={C} r={R_CORE} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
        <foreignObject x={C - 72} y={C - 42} width="144" height="84">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <img
              src="assets/logo-uca-emprende.png"
              alt="UCA Emprende"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        </foreignObject>

        {/* chips de los pilares */}
        <g fontFamily="Lato, sans-serif" fontWeight="700" fontSize="11" letterSpacing="0.08em" textAnchor="middle">
          {pillars.map((p, i) => (
            <g key={`p-${i}`}>
              <rect
                x={p.cx - p.w / 2} y={p.cy - 14} width={p.w} height="28" rx="14"
                fill="#fff" stroke="rgba(0,88,119,0.18)"
              />
              <text x={p.cx} y={p.cy + 4} fill="#005877">{p.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

Object.assign(window, { HeroAnimation });
