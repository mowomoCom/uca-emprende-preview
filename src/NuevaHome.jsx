// Nueva Home UCA Emprende — composition

// Estructura de inicio en 4 bloques (feedback cliente 16/06):
//  1) Próximas actividades · 2) [bloque que definirá el cliente, sustituye a "Las 4 formas
//     de acompañarte" — feedback #5, pendiente de contenido] · 3) El Olivillo · 4) Referentes.
const NuevaHome = ({ tweaks, onNavigate }) => {
  return (
    <div>
      <HeroEditorial accentIntensity={tweaks.accentIntensity} onNavigate={onNavigate} />
      {tweaks.showFlagship && <FlagshipBand />}
      {/* Bloque 1 */}
      <ActivitiesTimeline onNavigate={onNavigate} />
      {/* Bloque 2 — PENDIENTE: el cliente sustituye "Las 4 formas de acompañarte" por otro bloque (feedback #5) */}
      {/* Bloque 3 */}
      <OlivilloHero />
      {/* Bloque 4 — referentes / casos de éxito (se conserva) */}
      {tweaks.showStories && <SuccessStories />}
      <NewsletterBand />
    </div>
  );
};

Object.assign(window, { NuevaHome });
