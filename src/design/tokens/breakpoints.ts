// src/design/tokens/breakpoints.ts
export const breakpoints = {
  // alinhado ao padrão MUI + ergonomia de dashboard
  values: {
    xs: 0,
    sm: 640,   // mobile landscape / tablets pequenos
    md: 900,   // tablets
    lg: 1200,  // desktop padrão
    xl: 1536,  // wide screens
  },
} as const;
