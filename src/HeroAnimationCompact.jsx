// HeroAnimation — sustituida por el logotipo de UCA Emprende (mismo asset que la cabecera)

const HeroAnimation = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 0",
      }}
    >
      <img
        src="assets/logo-uca-emprende.png"
        alt="UCA Emprende"
        style={{
          width: "100%",
          maxWidth: 420,
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

Object.assign(window, { HeroAnimation });
