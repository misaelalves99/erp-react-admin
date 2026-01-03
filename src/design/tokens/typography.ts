// src/design/tokens/typography.ts
export const typography = {
  // Stack moderna e confiável para dashboard
  fontFamily: [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(','),

  // Pesos “de mercado” (equilíbrio entre legibilidade e destaque)
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
  },

  // Tracking ajustado para UI
  tracking: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.10em',
  },

  // Tipografia escalável (rem) para responsividade
  size: {
    xs: '0.75rem',   // 12
    sm: '0.875rem',  // 14
    base: '1rem',    // 16
    md: '1.125rem',  // 18
    lg: '1.25rem',   // 20
    xl: '1.5rem',    // 24
    '2xl': '1.875rem', // 30
    '3xl': '2.25rem',  // 36
  },

  // Line-height padrão de UI premium
  lineHeight: {
    tight: 1.15,
    snug: 1.25,
    normal: 1.45,
    relaxed: 1.65,
  },
} as const;
