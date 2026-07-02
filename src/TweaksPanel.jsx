// Tweaks panel - overlay controls

const TweaksPanel = ({ tweaks, setTweaks, visible }) => {
  if (!visible) return null;
  const set = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
    } catch (e) {}
  };
  return (
    <div style={{
      position: "fixed", bottom: 20, right: 20, zIndex: 9999,
      width: 300, background: "#fff",
      border: "1px solid var(--color-border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-xl)",
      padding: 20, fontFamily: "var(--font-family-primary)",
    }}>
      <div style={{
        fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase",
        color: "var(--color-brand-accent)", marginBottom: 16,
      }}>
        Tweaks
      </div>

      <TweakRow label="Intensidad del naranja">
        {["normal", "strong"].map(v => (
          <TweakPill key={v} active={tweaks.accentIntensity === v} onClick={() => set("accentIntensity", v)}>
            {v === "normal" ? "Latido" : "Presente"}
          </TweakPill>
        ))}
      </TweakRow>

      <TweakRow label="Banda Atrévete (flagship)">
        <TweakPill active={tweaks.showFlagship} onClick={() => set("showFlagship", true)}>On</TweakPill>
        <TweakPill active={!tweaks.showFlagship} onClick={() => set("showFlagship", false)}>Off</TweakPill>
      </TweakRow>

      <TweakRow label="Actividades en inicio (feedback #2)">
        {[4, 6].map(n => (
          <TweakPill key={n} active={(tweaks.homeActivities || 4) === n} onClick={() => set("homeActivities", n)}>
            {n}
          </TweakPill>
        ))}
      </TweakRow>

      <TweakRow label="Bloque 2 (espacio del cliente)">
        <TweakPill active={tweaks.showClientBlock !== false} onClick={() => set("showClientBlock", true)}>On</TweakPill>
        <TweakPill active={tweaks.showClientBlock === false} onClick={() => set("showClientBlock", false)}>Off</TweakPill>
      </TweakRow>

      <TweakRow label="Casos de éxito">
        <TweakPill active={tweaks.showStories} onClick={() => set("showStories", true)}>On</TweakPill>
        <TweakPill active={!tweaks.showStories} onClick={() => set("showStories", false)}>Off</TweakPill>
      </TweakRow>

      <TweakRow label="Densidad hero">
        {["compact", "airy"].map(v => (
          <TweakPill key={v} active={tweaks.density === v} onClick={() => set("density", v)}>
            {v === "compact" ? "Compacto" : "Aireado"}
          </TweakPill>
        ))}
      </TweakRow>
    </div>
  );
};

const TweakRow = ({ label, children }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-secondary)", marginBottom: 6 }}>
      {label}
    </div>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{children}</div>
  </div>
);

const TweakPill = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      background: active ? "var(--color-brand-primary)" : "var(--color-bg-muted)",
      color: active ? "#fff" : "var(--color-text-body)",
      border: "none", padding: "6px 12px", borderRadius: "var(--radius-full)",
      fontSize: 12, fontWeight: 700, cursor: "pointer",
      fontFamily: "var(--font-family-primary)",
      transition: "all var(--duration-fast) var(--ease-out)",
    }}
  >{children}</button>
);

Object.assign(window, { TweaksPanel });
