// Nueva Home UCA Emprende — composition

const NuevaHome = ({ tweaks, onNavigate }) => {
  return (
    <div>
      <HeroEditorial accentIntensity={tweaks.accentIntensity} onNavigate={onNavigate} />
      {tweaks.showFlagship && <FlagshipBand />}
      <ActivitiesTimeline onNavigate={onNavigate} />
      <ServicesEditorial />
      <OlivilloHero />
      {tweaks.showStories && <SuccessStories />}
      <NewsletterBand />
    </div>
  );
};

Object.assign(window, { NuevaHome });
