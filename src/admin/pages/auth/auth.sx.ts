// src/admin/pages/auth/auth.sx.ts
import { alpha } from '@mui/material/styles';
import { colors, radius, shadows, typography } from '../../../design/tokens';

/**
 * ✅ Auth styles (Login/Register)
 * IMPORTANTÍSSIMO:
 * - NUNCA use números em px no sx do MUI (vira theme.spacing * 8)
 * - Sempre use strings 'NNpx' para padding/margin/gap quando quiser px real.
 */

export const AUTH_GUTTER_XS = '16px';
export const AUTH_GUTTER_SM = '24px';
export const AUTH_GAP_LG = '48px';

export const authRootSx = {
  minHeight: '100dvh',
  display: 'grid',
  placeItems: 'center',
  px: { xs: AUTH_GUTTER_XS, sm: AUTH_GUTTER_SM },
  py: { xs: '28px', sm: '36px' }, // ✅ px real (sem theme.spacing)
  backgroundColor: colors.bg.solid.primary,
  backgroundImage: [
    colors.bg.gradient.page,
    `radial-gradient(900px 520px at 18% 0%, ${alpha(colors.brand.aqua, 0.16)}, transparent 56%)`,
    `radial-gradient(850px 520px at 92% 10%, ${alpha(colors.brand.coral, 0.16)}, transparent 58%)`,
  ].join(', '),
  color: colors.text.primary,
} as const;

export const authShellSx = {
  width: '100%',
  maxWidth: 1120,
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', lg: 'minmax(420px, 520px) minmax(380px, 440px)' },
  gap: { xs: '24px', lg: AUTH_GAP_LG }, // ✅ px real
  alignItems: 'center',
} as const;

export const authInfoColSx = {
  display: { xs: 'none', lg: 'block' },
} as const;

export const authInfoStackSx = {
  gap: '18px', // ✅ px real
} as const;

export const authHeroTitleSx = {
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.black,
  letterSpacing: typography.tracking.tight,
  fontSize: 38,
  lineHeight: 1.05,
} as const;

export const authHeroTextSx = {
  fontFamily: typography.fontFamily,
  color: colors.text.secondary,
  fontSize: 14,
  lineHeight: 1.7,
  maxWidth: 520,
} as const;

export const authDemoCardSx = {
  borderRadius: 0, // ✅ sem radius em wrappers/layout
  border: `1px solid ${colors.border.subtle}`,
  backgroundColor: colors.glass.panel,
  boxShadow: shadows.soft,
  p: '18px', // ✅ px real
} as const;

export const authDemoTitleSx = {
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.black,
  letterSpacing: typography.tracking.wide,
  textTransform: 'uppercase',
  fontSize: 11,
  color: colors.text.muted,
  mb: '10px',
} as const;

export const authDemoTextSx = {
  fontFamily: typography.fontFamily,
  color: colors.text.secondary,
  fontSize: 13,
  lineHeight: 1.7,
} as const;

export const authHintSx = {
  fontFamily: typography.fontFamily,
  color: colors.text.soft,
  fontSize: 12,
  lineHeight: 1.6,
} as const;

/**
 * FORM CARD
 */
export const authFormCardSx = {
  width: '100%',
  borderRadius: 0, // ✅ sem radius em wrappers/layout
  backgroundColor: colors.bg.surface[2],
  border: `1px solid ${colors.border.subtle}`,
  boxShadow: shadows.card,
  overflow: 'hidden',
  position: 'relative',
  backdropFilter: colors.glass.blur,
  WebkitBackdropFilter: colors.glass.blur,
} as const;

export const authTopAccentSx = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: `linear-gradient(90deg, ${colors.brand.coral} 0%, ${colors.brand.aqua} 100%)`,
  opacity: 0.9,
} as const;

export const authTopAccentAltSx = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: `linear-gradient(90deg, ${colors.brand.aqua} 0%, ${colors.brand.coral} 100%)`,
  opacity: 0.9,
} as const;

export const authCardContentSx = {
  p: { xs: '18px', sm: '22px' }, // ✅ px real (sem 144px/176px)
} as const;

export const authMobileLogoWrapSx = {
  display: { xs: 'flex', lg: 'none' },
  justifyContent: 'center',
  mb: '16px',
} as const;

export const authFormSx = {
  gap: '16px', // ✅ px real (sem 128px)
} as const;

export const authFormHeaderSx = {
  gap: '6px',
} as const;

export const authFormTitleSx = {
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.black,
  letterSpacing: typography.tracking.tight,
  fontSize: 22,
  lineHeight: 1.2,
} as const;

export const authFormSubtitleSx = {
  fontFamily: typography.fontFamily,
  color: colors.text.secondary,
  fontSize: 14,
  lineHeight: 1.6,
} as const;

export const authFieldsWrapSx = {
  gap: '12px', // ✅ px real
} as const;

export const authFieldSx = {
  '& .MuiInputLabel-root': {
    color: colors.text.muted,
    fontFamily: typography.fontFamily,
  },
  '& .MuiInputBase-root': {
    borderRadius: radius.input, // ✅ permitido (input)
    backgroundColor: colors.bg.surface[2],
    color: colors.text.primary,
    fontFamily: typography.fontFamily,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: colors.border.subtle,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: colors.border.default,
  },
  '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: colors.border.focus,
  },
  '& .MuiInputBase-root.Mui-focused': {
    boxShadow: shadows.glowAqua,
  },
  '& .MuiFormHelperText-root': {
    color: colors.text.soft,
    fontFamily: typography.fontFamily,
  },
} as const;

export const authSubmitBtnSx = {
  borderRadius: radius.button, // ✅ permitido (botão)
  minHeight: '48px',
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.black,
  letterSpacing: typography.tracking.wide,
  textTransform: 'uppercase',
  backgroundColor: colors.action.primary,
  color: colors.text.inverse,
  boxShadow: shadows.lift,
  '&:hover': {
    backgroundColor: colors.action.primaryHover,
    boxShadow: shadows.glowCoral,
    transform: 'translateY(-1px)',
  },
  '&:active': {
    backgroundColor: colors.action.primaryActive,
    transform: 'translateY(0px)',
  },
  '&.Mui-disabled': {
    backgroundColor: colors.action.disabledBg,
    color: colors.action.disabledText,
    boxShadow: 'none',
  },
  '&:focus-visible': { outline: 'none', boxShadow: shadows.glowCoral },
  transition: 'transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease',
} as const;

export const authDividerSx = {
  borderColor: colors.border.subtle,
} as const;

export const authFooterRowSx = {
  gap: '12px',
  flexWrap: 'wrap',
} as const;

export const authDemoInlineSx = {
  color: colors.text.muted,
  fontFamily: typography.fontFamily,
  fontSize: 12,
  lineHeight: 1.5,
} as const;

export const authLinkSx = {
  fontFamily: typography.fontFamily,
  fontSize: 12,
  color: colors.text.link,
  '&:hover': { color: colors.brand.accent },
  '&:focus-visible': { outline: 'none', boxShadow: shadows.glowAqua, borderRadius: 0 },
} as const;

/**
 * Register extras
 */
export const authBulletListSx = {
  gap: '4px',
} as const;

export const authBulletItemSx = {
  fontFamily: typography.fontFamily,
  fontSize: 13,
  color: colors.text.secondary,
  lineHeight: 1.6,
} as const;

export const authMobileHintSx = {
  display: { xs: 'block', lg: 'none' },
  color: colors.text.soft,
  fontFamily: typography.fontFamily,
  fontSize: 12,
  textAlign: 'center',
  lineHeight: 1.6,
} as const;
