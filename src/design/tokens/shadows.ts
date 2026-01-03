// src/design/tokens/shadows.ts
export const shadows = {
  // sombras com profundidade “premium” + compatível com dark
  soft: '0 8px 22px rgba(0,0,0,0.28)',
  card: '0 14px 40px rgba(0,0,0,0.40)',
  lift: '0 18px 60px rgba(0,0,0,0.55)',

  // foco (glow) usando aqua para contraste e identidade
  glowAqua: '0 0 0 4px rgba(3,247,235,0.22)',
  glowCoral: '0 0 0 4px rgba(255,89,100,0.18)',

  // borda/realce sutil (glass)
  inset: 'inset 0 1px 0 rgba(252,247,248,0.10)',
} as const;
