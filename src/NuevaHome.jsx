// Nueva Home UCA Emprende — composition

// Estructura de inicio en 4 bloques (feedback cliente 16/06):
//  1) Próximas actividades · 2) [bloque que definirá el cliente, sustituye a "Las 4 formas
//     de acompañarte" — feedback #5, pendiente de contenido] · 3) El Olivillo · 4) Referentes.
const NuevaHome = ({ tweaks, onNavigate }) => {
  return (
    <div>
      <HeroEditorial accentIntensity={tweaks.accentIntensity} onNavigate={onNavigate} />
      {tweaks.showFlagship && <FlagshipBand />}
      {/* Bloque 1 — nº de actividades (4 ó 6) pendiente de decisión del cliente; se alterna desde tweaks */}
      <ActivitiesTimeline onNavigate={onNavigate} count={tweaks.homeActivities || 4} />
      {/* Bloque 2 — esqueleto del bloque que definirá el cliente (sustituye a "Las 4 formas", feedback #5) */}
      {tweaks.showClientBlock !== false && <ClientBlockPlaceholder />}
      {/* Bloque 3 */}
      <OlivilloHero />
      {/* Bloque 4 — referentes / casos de éxito (se conserva) */}
      {tweaks.showStories && <SuccessStories />}
      {/* La captación de boletín vive ahora en el footer (feedback #17); se retira la banda
          duplicada que había aquí para no pedir el email dos veces en la misma página. */}
    </div>
  );
};

Object.assign(window, { NuevaHome });
