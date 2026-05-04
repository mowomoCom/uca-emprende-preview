// HeroAnimation compacta (para la nueva home — sin labels grandes, más simbólica)

const HeroAnimation = () => {
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
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbitRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes pulse { 0%,100% { opacity: .25; } 50% { opacity: .9; } }
        @keyframes breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .ha-ring-out { animation: orbit 55s linear infinite; transform-origin: 250px 250px; }
        .ha-ring-in  { animation: orbitRev 40s linear infinite; transform-origin: 250px 250px; }
        .ha-nucleus  { animation: breathe 4s ease-in-out infinite; transform-origin: 250px 250px; }
        .ha-conn { animation: pulse 3.2s ease-in-out infinite; }
        .ha-conn.d1 { animation-delay: 0s; } .ha-conn.d2 { animation-delay: .4s; }
        .ha-conn.d3 { animation-delay: .8s; } .ha-conn.d4 { animation-delay: 1.2s; }
        .ha-conn.d5 { animation-delay: 1.6s; } .ha-conn.d6 { animation-delay: 2s; }
        .ha-chip { animation: float 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ha-ring-out, .ha-ring-in, .ha-nucleus, .ha-conn, .ha-chip { animation: none !important; }
        }
      `}</style>

      <svg viewBox="0 0 500 500" style={{ width: "100%", height: "100%", overflow: "visible" }} aria-hidden="true">
        <defs>
          <radialGradient id="haNucleus" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1b78a0" />
            <stop offset="100%" stopColor="#003d55" />
          </radialGradient>
          <radialGradient id="haHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#005877" stopOpacity="0.14" />
            <stop offset="60%" stopColor="#005877" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#005877" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="haNode" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFA040" />
            <stop offset="100%" stopColor="#cc6a00" />
          </radialGradient>
        </defs>

        <circle cx="250" cy="250" r="240" fill="url(#haHalo)" />
        <circle cx="250" cy="250" r="130" fill="none" stroke="rgba(0,88,119,0.12)" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(0,88,119,0.08)" strokeWidth="1" strokeDasharray="3 6" />

        {/* conectores naranja */}
        <g stroke="#E87B00" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7">
          <line className="ha-conn d1" x1="250" y1="250" x2="110" y2="150" />
          <line className="ha-conn d2" x1="250" y1="250" x2="400" y2="120" />
          <line className="ha-conn d3" x1="250" y1="250" x2="430" y2="340" />
          <line className="ha-conn d4" x1="250" y1="250" x2="260" y2="430" />
          <line className="ha-conn d5" x1="250" y1="250" x2="80" y2="350" />
          <line className="ha-conn d6" x1="250" y1="250" x2="200" y2="70" />
        </g>

        {/* orbit nodes */}
        <g className="ha-ring-in">
          <circle cx="380" cy="250" r="10" fill="url(#haNode)" />
          <circle cx="190" cy="140" r="8" fill="#E87B00" opacity="0.85" />
          <circle cx="190" cy="360" r="9" fill="#E87B00" opacity="0.9" />
        </g>
        <g className="ha-ring-out">
          <circle cx="450" cy="250" r="7" fill="#005877" opacity="0.7" />
          <circle cx="160" cy="115" r="6" fill="#005877" opacity="0.6" />
          <circle cx="160" cy="385" r="7" fill="#005877" opacity="0.75" />
        </g>

        {/* nucleus */}
        <g className="ha-nucleus">
          <circle cx="250" cy="250" r="78" fill="url(#haNucleus)" />
          <circle cx="250" cy="250" r="78" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
          <text x="250" y="244" textAnchor="middle" fontFamily="Lato" fontWeight="900" fontSize="26" fill="#fff" letterSpacing="-0.01em">IDEA</text>
          <line x1="220" y1="256" x2="280" y2="256" stroke="#E87B00" strokeWidth="2" strokeLinecap="round" />
          <text x="250" y="282" textAnchor="middle" fontFamily="Lato" fontWeight="700" fontSize="15" fill="rgba(255,255,255,0.85)" letterSpacing="0.05em">EMPRESA</text>
        </g>

        {/* chips flotantes minimalistas */}
        <g fontFamily="Lato, sans-serif" fontWeight="700" fontSize="11" letterSpacing="0.08em" textAnchor="middle">
          <g className="ha-chip">
            <rect x="40" y="132" width="118" height="28" rx="14" fill="#fff" stroke="rgba(0,88,119,0.18)" />
            <text x="99" y="150" fill="#005877">MENTORÍA</text>
          </g>
          <g className="ha-chip" style={{ animationDelay: "0.6s" }}>
            <rect x="340" y="102" width="128" height="28" rx="14" fill="#fff" stroke="rgba(0,88,119,0.18)" />
            <text x="404" y="120" fill="#005877">FORMACIÓN</text>
          </g>
          <g className="ha-chip" style={{ animationDelay: "1.2s" }}>
            <rect x="360" y="326" width="138" height="28" rx="14" fill="#fff" stroke="rgba(0,88,119,0.18)" />
            <text x="429" y="344" fill="#005877">FINANCIACIÓN</text>
          </g>
          <g className="ha-chip" style={{ animationDelay: "1.8s" }}>
            <rect x="198" y="418" width="128" height="28" rx="14" fill="#fff" stroke="rgba(0,88,119,0.18)" />
            <text x="262" y="436" fill="#005877">COWORKING</text>
          </g>
          <g className="ha-chip" style={{ animationDelay: "2.4s" }}>
            <rect x="20" y="336" width="128" height="28" rx="14" fill="#fff" stroke="rgba(0,88,119,0.18)" />
            <text x="84" y="354" fill="#005877">RED ALUMNI</text>
          </g>
          <g className="ha-chip" style={{ animationDelay: "3s" }}>
            <rect x="140" y="52" width="138" height="28" rx="14" fill="#fff" stroke="rgba(0,88,119,0.18)" />
            <text x="209" y="70" fill="#005877">CONVOCATORIAS</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

Object.assign(window, { HeroAnimation });
