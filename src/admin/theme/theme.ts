// src/admin/theme/theme.ts
import { alpha, createTheme } from '@mui/material/styles';
import { breakpoints, colors, radius, shadows, typography, space } from '../../design/tokens';

export const erpTheme = createTheme({
  breakpoints,

  palette: {
    mode: 'dark',

    primary: {
      main: colors.action.primary,
      contrastText: colors.text.primary,
    },
    secondary: {
      main: colors.brand.aqua,
      contrastText: colors.text.inverse,
    },

    success: { main: colors.status.success },
    warning: { main: colors.status.warning },
    error: { main: colors.status.danger },
    info: { main: colors.status.info },

    background: {
      default: colors.bg.solid.primary,
      paper: colors.bg.surface[2],
    },

    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.muted,
    },

    divider: colors.border.subtle,
  },

  // ✅ Layout sem radius global (wrappers/cards/layout)
  shape: { borderRadius: 0 },

  typography: {
    fontFamily: typography.fontFamily,

    h3: {
      fontWeight: typography.weight.black,
      letterSpacing: typography.tracking.tight,
      lineHeight: 1.08,
    },
    h4: {
      fontWeight: typography.weight.black,
      letterSpacing: typography.tracking.tight,
      lineHeight: 1.12,
    },
    h5: {
      fontWeight: typography.weight.black,
      letterSpacing: typography.tracking.tight,
      lineHeight: 1.15,
    },

    subtitle1: { fontWeight: typography.weight.bold },
    subtitle2: { fontWeight: typography.weight.bold, color: colors.text.secondary },

    body1: { color: colors.text.secondary },
    body2: { color: colors.text.muted },

    button: { textTransform: 'none', fontWeight: typography.weight.black, letterSpacing: '-0.01em' },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': { colorScheme: 'dark' },

        html: { height: '100%', width: '100%' },
        body: {
          height: '100%',
          width: '100%',
          margin: 0,
          padding: 0,
          background: colors.bg.solid.primary,
          backgroundImage: [
            colors.bg.gradient.page,
            `radial-gradient(900px 520px at 18% 0%, ${alpha(colors.brand.aqua, 0.18)}, transparent 56%)`,
            `radial-gradient(800px 520px at 92% 8%, ${alpha(colors.brand.coral, 0.16)}, transparent 58%)`,
          ].join(', '),
          backgroundAttachment: 'fixed',
        },

        '#root': { height: '100%', width: '100%' },

        a: { color: colors.text.link },

        '*': { scrollbarColor: `${alpha(colors.brand.aqua, 0.35)} transparent` },
        '*::-webkit-scrollbar': { width: 10, height: 10 },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: alpha(colors.brand.aqua, 0.28),
          borderRadius: 999,
          border: `3px solid transparent`,
          backgroundClip: 'content-box',
        },
        '*::-webkit-scrollbar-thumb:hover': { backgroundColor: alpha(colors.brand.aqua, 0.42) },

        /**
         * ✅ IMPORTANTÍSSIMO:
         * O React-Admin envolve o login em wrappers (RaLogin-*) com paddings/centering.
         * Aqui a gente “zera” isso para a SUA LoginPage controlar o layout.
         */
        '.RaLogin-root': {
          padding: '0 !important',
          margin: '0 !important',
          background: 'transparent !important',
        },
        '.RaLogin-container': {
          padding: '0 !important',
          margin: '0 !important',
          width: '100%',
          maxWidth: 'none !important',
          display: 'block !important',
          alignItems: 'initial !important',
          justifyContent: 'initial !important',
          background: 'transparent !important',
        },
        '.RaLogin-card': {
          margin: '0 !important',
          width: '100%',
          maxWidth: 'none !important',
          background: 'transparent !important',
          boxShadow: 'none !important',
          border: '0 !important',
        },
      },
    },

    // ✅ Paper sem radius (layout/wrappers)
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colors.bg.surface[2],
          border: `1px solid ${colors.border.subtle}`,
          borderRadius: 0,
        },
      },
    },

    // ✅ Card sem radius (layout/wrappers)
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          background: colors.bg.gradient.card,
          border: `1px solid ${colors.border.subtle}`,
          boxShadow: shadows.card,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colors.glass.panel,
          backdropFilter: colors.glass.blur,
          borderBottom: `1px solid ${colors.border.subtle}`,
          boxShadow: 'none',
          borderRadius: 0,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          backgroundColor: colors.bg.surface[2],
          borderRight: `1px solid ${colors.border.subtle}`,
          borderRadius: 0,
        },
      },
    },

    MuiListSubheader: {
      styleOverrides: {
        root: { backgroundColor: 'transparent', color: colors.text.muted },
      },
    },

    // ✅ Sidebar items = “botões” → pode ter radius
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: radius.md,
          marginInline: `${space[2]}px`,
          marginBlock: 3,
          paddingInline: `${space[3]}px`,

          '&:hover': { backgroundColor: colors.action.hover },

          '&.Mui-selected': {
            backgroundColor: colors.action.selected,
            '&:hover': { backgroundColor: colors.action.selectedHover },
          },
        },
      },
    },

    // ✅ Botões podem ter radius
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: radius.lg },

        containedPrimary: {
          backgroundColor: colors.action.primary,
          color: colors.text.primary,
          boxShadow: shadows.lift,
          '&:hover': { backgroundColor: colors.action.primaryHover },
          '&:active': { backgroundColor: colors.action.primaryActive },
          '&.Mui-disabled': {
            backgroundColor: colors.action.disabledBg,
            color: colors.action.disabledText,
          },
        },

        outlined: {
          borderColor: colors.border.strong,
          '&:hover': { borderColor: colors.border.focus, backgroundColor: colors.action.hover },
        },
      },
    },

    // ✅ Inputs podem ter radius
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius.lg,
          backgroundColor: colors.bg.surface[1],

          '& .MuiOutlinedInput-notchedOutline': { borderColor: colors.border.subtle },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: colors.border.default },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.border.focus,
            boxShadow: `0 0 0 4px ${alpha(colors.brand.aqua, 0.18)}`,
          },
        },

        input: { color: colors.text.primary },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: radius.pill,
          fontWeight: 900,
          borderColor: colors.border.strong,
          backgroundColor: colors.bg.surface[2],
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.bg.surface[4],
          border: `1px solid ${colors.border.subtle}`,
          boxShadow: shadows.soft,
          borderRadius: radius.md,
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: radius.lg,
          border: `1px solid ${colors.border.subtle}`,
          backgroundImage: 'none',
        },
        standardSuccess: { backgroundColor: colors.notification.successBg },
        standardError: { backgroundColor: colors.notification.errorBg },
        standardWarning: { backgroundColor: colors.status.warningBg },
        standardInfo: { backgroundColor: colors.status.infoBg },
      },
    },
  },
});
