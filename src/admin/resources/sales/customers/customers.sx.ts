// src/admin/resources/sales/customers/customers.sx.ts
import { colors, radius, shadows, typography } from '../../../../design/tokens';

export const customerListShellSx = {
  '& .RaList-content': { background: 'transparent' },

  '& .RaList-content > .MuiCard-root': {
    background: 'transparent',
    boxShadow: 'none',
    border: 'none',
  },

  '& .RaList-content > .MuiCard-root > .MuiCardContent-root': {
    padding: 0,
  },

  // ✅ remove “folgas” do RA que às vezes criam sensação de layout solto
  '& .RaList-main': {
    width: '100%',
    maxWidth: 'none',
    paddingTop: 0,
    marginTop: 0,
  },

  '& .RaList-noActions': {
    marginTop: 0,
  },
} as const;

export const customerDatagridSx = {
  // base (o wrapper real da tabela fica no .RaDatagrid-tableWrapper)
  width: '100%',
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',

  '& .RaDatagrid-tableWrapper': {
    borderRadius: radius.lg,
    overflow: 'hidden',
    border: `1px solid ${colors.border.subtle}`,
    backgroundImage: colors.bg.gradient.card,
    backgroundColor: colors.bg.surface[1],
    boxShadow: shadows.soft,
  },

  // ✅ padding consistente em header/cells (padrão mercado)
  '& .MuiTableCell-root': {
    padding: '14px 16px',
  },

  '& .RaDatagrid-headerCell': {
    fontFamily: typography.fontFamily,
    fontWeight: typography.weight.black,
    textTransform: 'uppercase',
    letterSpacing: typography.tracking.wide,
    fontSize: 11,
    color: colors.text.muted,
    borderBottom: `1px solid ${colors.border.subtle}`,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },

  '& .RaDatagrid-rowCell': {
    borderBottom: `1px solid ${colors.border.subtle}`,
    color: colors.text.secondary,
    fontFamily: typography.fontFamily,
  },

  '& .RaDatagrid-row': {
    transition: 'background-color 140ms ease',
  },

  '& .RaDatagrid-row:hover': {
    backgroundColor: colors.action.hover,
  },
} as const;

export const customerSearchWrapSx = {
  width: { xs: '100%', sm: '340px' },
  '& .MuiFormControl-root': { width: '100%' },

  '& .MuiOutlinedInput-root': {
    height: '42px',
    borderRadius: radius.pill,
    backgroundColor: colors.bg.surface[2],
    color: colors.text.primary,

    '& fieldset': { borderColor: colors.border.subtle },
    '&:hover fieldset': { borderColor: colors.border.default },
    '&.Mui-focused fieldset': { borderColor: colors.border.focus },
    '&.Mui-focused': { boxShadow: shadows.glowAqua },
  },

  '& .MuiOutlinedInput-input': {
    fontFamily: typography.fontFamily,
    paddingTop: 0,
    paddingBottom: 0,
  },

  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: colors.icon.secondary,
  },
} as const;

export const customerPrimaryBtnSx = {
  borderRadius: radius.button,
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.black,
  letterSpacing: typography.tracking.wide,
  textTransform: 'none',
  backgroundColor: colors.action.primary,
  boxShadow: shadows.soft,
  '&:hover': {
    backgroundColor: colors.action.primaryHover,
    boxShadow: shadows.lift,
    transform: 'translateY(-1px)',
  },
  '&:active': { backgroundColor: colors.action.primaryActive, transform: 'translateY(0px)' },
  transition: 'transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease',
} as const;

export const customerGhostBtnSx = {
  borderRadius: radius.button,
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.semibold,
  textTransform: 'none',
  color: colors.text.secondary,
  border: `1px solid ${colors.border.default}`,
  backgroundColor: 'transparent',
  '&:hover': {
    borderColor: colors.border.strong,
    backgroundColor: colors.action.hover,
    color: colors.text.primary,
  },
} as const;

export const customerDetailsTypographySx = {
  '& .MuiTypography-root': {
    color: colors.text.secondary,
    fontFamily: typography.fontFamily,
  },
} as const;
