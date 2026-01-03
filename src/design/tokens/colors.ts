// src/design/tokens/colors.ts
export const colors = {
  // =========================
  // Brand / Core Identity
  // =========================
  brand: {
    // ✅ Identidade (dark premium): preto + roxo suave
    plum: '#490165', // roxo principal (identidade)
    base: '#000000', // ✅ preto base (fundo) - era #211103

    // ✅ Ações / acentos
    coral: '#FF5964', // primary action / emphasis
    aqua: '#03F7EB', // accent / links / highlights

    // Aliases úteis (semânticos)
    primary: '#FF5964',
    accent: '#03F7EB',

    /**
     * Compatibilidade (caso algum arquivo ainda use `colors.brand.espresso`)
     * -> agora é preto absoluto.
     */
    espresso: '#000000',
  },

  // =========================
  // Backgrounds (Dark)
  // =========================
  bg: {
    solid: {
      primary: '#000000', // ✅ preto base
      secondary: '#490165', // roxo identidade
    },

    // Gradientes prontos para uso (CSS string)
    gradient: {
      page: 'linear-gradient(135deg, #490165 0%, #000000 60%, #000000 100%)',

      hero:
        'radial-gradient(900px circle at 20% 0%, rgba(3,247,235,0.16) 0%, rgba(3,247,235,0) 55%), linear-gradient(135deg, #490165 0%, #000000 70%, #000000 100%)',

      card:
        'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
    },

    // Superfícies (cards, panels)
    surface: {
      0: 'rgba(255,255,255,0.02)',
      1: 'rgba(255,255,255,0.04)',
      2: 'rgba(255,255,255,0.06)',
      3: 'rgba(255,255,255,0.08)',
      4: 'rgba(255,255,255,0.10)',
    },
  },

  // =========================
  // Text (Dark Mode)
  // =========================
  text: {
    primary: '#FCF7F8',
    secondary: 'rgba(252,247,248,0.78)',
    muted: 'rgba(252,247,248,0.60)',
    soft: 'rgba(252,247,248,0.46)',
    inverse: '#000000', // ✅ era #211103
    link: '#03F7EB',
  },

  // =========================
  // Borders & Dividers
  // =========================
  border: {
    subtle: 'rgba(252,247,248,0.10)',
    default: 'rgba(252,247,248,0.14)',
    strong: 'rgba(252,247,248,0.20)',
    focus: 'rgba(3,247,235,0.60)',
  },

  // =========================
  // Icons
  // =========================
  icon: {
    primary: '#FCF7F8',
    secondary: 'rgba(252,247,248,0.70)',
    accent: '#03F7EB',
  },

  // =========================
  // Actions (Buttons, Hover, Selected)
  // =========================
  action: {
    primary: '#FF5964',
    primaryHover: '#FF5964', // seu pedido: hover = #FF5964
    primaryActive: '#FF4242',

    focusRing: 'rgba(3,247,235,0.55)',

    // estados de navegação/seleção (menu, list items etc.)
    selected: 'rgba(3,247,235,0.14)',
    selectedHover: 'rgba(3,247,235,0.20)',
    hover: 'rgba(255,89,100,0.14)',

    disabledBg: 'rgba(252,247,248,0.08)',
    disabledText: 'rgba(252,247,248,0.36)',
  },

  // =========================
  // Status / Semantic Colors
  // =========================
  status: {
    warning: '#FFD400',
    success: '#03CEA4',
    danger: '#FF4242',
    info: '#03F7EB',

    // fundos (chips/alerts)
    warningBg: 'rgba(255,212,0,0.16)',
    successBg: 'rgba(3,206,164,0.16)',
    dangerBg: 'rgba(255,66,66,0.16)',
    infoBg: 'rgba(3,247,235,0.14)',
  },

  // =========================
  // Notifications (Toast/Snackbar)
  // =========================
  notification: {
    success: '#03CEA4',
    error: '#FF4242',
    successBg: 'rgba(3,206,164,0.16)',
    errorBg: 'rgba(255,66,66,0.16)',
  },

  // =========================
  // DataViz / Graphic Lines
  // =========================
  dataviz: {
    aqua: '#03F7EB',
    yellow: '#FFD400',
    green: '#03CEA4',
    red: '#FF4242',
  },

  // =========================
  // Glassmorphism helpers
  // =========================
  glass: {
    panel: 'rgba(252,247,248,0.06)',
    panelStrong: 'rgba(252,247,248,0.10)',
    blur: 'blur(14px)',
    shine:
      'linear-gradient(90deg, rgba(252,247,248,0.14) 0%, rgba(252,247,248,0.02) 60%, rgba(252,247,248,0.10) 100%)',
  },
} as const;
