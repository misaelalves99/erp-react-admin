// src/admin/resources/finance/journalEntries/journalEntries.sx.ts
import { colors, radius, shadows, space, typography } from '../../../../design/tokens';

/**
 * ✅ JournalEntries com estilos próprios (sem depender de erpSx).
 * Regra do layout:
 * - ❌ SEM radius em wrappers de layout (cards/containers/papers)
 * - ✅ radius só em inputs/botões/tabelas
 */

export const journalEntryListSx = {
  '& .RaList-main': {
    width: '100%',
    minWidth: 0,
    paddingTop: 0,
  },

  '& .RaTopToolbar-root': {
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 1,
  },

  // ✅ remove o Card padrão do RA no “layout”
  '& .RaList-content.MuiCard-root': {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    overflow: 'visible',
    borderRadius: 0,
  },

  // ✅ garantia: qualquer Paper/Card wrapper não pode “arredondar”
  '& .MuiPaper-root': { borderRadius: 0 },
} as const;

export const journalEntryDatagridSx = {
  width: '100%',
  overflow: 'visible',
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',

  // ✅ radius permitido: tabela (wrapper)
  '& .RaDatagrid-tableWrapper': {
    borderRadius: radius.lg,
    overflow: 'hidden',
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.surface[1],
    boxShadow: shadows.soft,
  },

  '& .RaDatagrid-headerCell': {
    fontFamily: typography.fontFamily,
    fontWeight: 900,
    color: colors.text.muted,
    letterSpacing: '0.10em',
    textTransform: 'uppercase',
    fontSize: 11,
    backgroundColor: colors.bg.surface[2],
    borderBottom: `1px solid ${colors.border.subtle}`,
    whiteSpace: 'nowrap',
  },

  '& .RaDatagrid-rowCell': {
    fontFamily: typography.fontFamily,
    verticalAlign: 'middle',
    borderBottom: `1px solid ${colors.border.subtle}`,
    color: colors.text.secondary,
  },

  '& .RaDatagrid-row': { transition: 'background-color 140ms ease' },
  '& .RaDatagrid-row:hover': { backgroundColor: colors.action.hover },

  '& .RaNumberField-root': {
    fontVariantNumeric: 'tabular-nums',
  },
} as const;

/**
 * SEARCH (FilterForm/SearchInput)
 */
export const journalEntrySearchWrapSx = {
  width: { xs: '100%', sm: 320, md: 360 },
  maxWidth: { xs: '100%', md: 360 },

  '& .RaFilterForm-form': { width: '100%', display: 'flex' },
  '& .MuiFormControl-root': { width: '100%' },

  '& .MuiInputBase-root': {
    width: '100%',
    borderRadius: radius.input,
    backgroundColor: colors.glass.panel,
    border: `1px solid ${colors.border.default}`,
    boxShadow: shadows.soft,
    backdropFilter: colors.glass.blur,
    WebkitBackdropFilter: colors.glass.blur,
    transition: 'border-color 140ms ease, box-shadow 140ms ease, background-color 140ms ease',
  },

  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },

  '& .MuiInputBase-input': {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    color: colors.text.primary,
    paddingTop: `${space[2]}px`,
    paddingBottom: `${space[2]}px`,
  },

  '& .MuiInputAdornment-root, & svg': { color: colors.text.muted },

  '& .MuiInputBase-root:hover': {
    borderColor: colors.border.strong,
    backgroundColor: colors.action.hover,
    boxShadow: shadows.lift,
  },

  '& .MuiInputBase-root.Mui-focused': {
    borderColor: colors.border.strong,
    boxShadow: shadows.glowAqua,
  },
} as const;

/**
 * DETAILS (SimpleShowLayout)
 * - layout limpo (sem radius)
 */
export const journalEntryDetailsSx = {
  '& .RaSimpleShowLayout-root': { padding: 0 },

  '& .RaSimpleShowLayout-row': {
    margin: 0,
    padding: `${space[2]}px 0`,
    borderBottom: `1px solid ${colors.border.subtle}`,
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '170px 1fr' },
    gap: `${space[2]}px`,
    alignItems: 'center',
  },

  '& .RaSimpleShowLayout-row:last-of-type': { borderBottom: 'none' },

  '& .RaSimpleShowLayout-label': {
    margin: 0,
    fontFamily: typography.fontFamily,
    fontWeight: 900,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontSize: 11,
    color: colors.text.muted,
    whiteSpace: 'nowrap',
  },

  '& .RaSimpleShowLayout-value': {
    margin: 0,
    fontFamily: typography.fontFamily,
    fontSize: 14,
    color: colors.text.secondary,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
} as const;

/**
 * FORM (SimpleForm)
 * - sem “card” visual no wrapper
 * - radius apenas em inputs
 */
export const journalEntryFormSx = {
  borderRadius: 0,
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',
  padding: 0,

  '& .MuiFormControl-root': {
    marginTop: 0,
    marginBottom: 0,
  },

  '& .MuiPaper-root': { borderRadius: 0 },

  '& .MuiInputLabel-root': {
    fontFamily: typography.fontFamily,
    color: colors.text.muted,
  },

  '& .MuiInputBase-root': {
    borderRadius: radius.input,
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
    fontFamily: typography.fontFamily,
    color: colors.text.soft,
  },
} as const;

/**
 * HEADER PILL BUTTONS
 */
export const journalEntryPillBtnSx = {
  borderRadius: radius.pill,
  height: 42,
  px: `${space[4]}px`,
  fontWeight: 900,
  letterSpacing: '0.2px',
  boxShadow: shadows.soft,
  textTransform: 'none',
  '&:hover': { boxShadow: shadows.lift, transform: 'translateY(-1px)' },
  '&:active': { transform: 'translateY(0px)' },
  transition: 'transform 140ms ease, box-shadow 140ms ease',
} as const;

/**
 * BUTTONS (base)
 */
export const journalEntryPrimaryBtnSx = {
  borderRadius: radius.button,
  minHeight: 40,
  px: `${space[4]}px`,
  fontWeight: 800,
  textTransform: 'none',
  boxShadow: shadows.soft,
  '&:hover': { boxShadow: shadows.lift, transform: 'translateY(-1px)' },
  '&:active': { transform: 'translateY(0px)' },
  transition: 'transform 120ms ease, box-shadow 120ms ease',
} as const;

export const journalEntryGhostBtnSx = {
  borderRadius: radius.button,
  minHeight: 40,
  px: `${space[4]}px`,
  fontWeight: 800,
  textTransform: 'none',
  border: `1px solid ${colors.border.default}`,
  backgroundColor: colors.glass.panel,
  boxShadow: shadows.soft,
  '&:hover': {
    borderColor: colors.border.strong,
    backgroundColor: colors.action.hover,
    boxShadow: shadows.lift,
    transform: 'translateY(-1px)',
  },
  '&:active': { transform: 'translateY(0px)' },
  transition:
    'transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease, border-color 120ms ease',
} as const;

/**
 * ROW ACTION ICONS
 */
export const journalEntryActionIconSx = {
  width: 40,
  height: 40,
  borderRadius: radius.pill,
  border: `1px solid ${colors.border.default}`,
  backgroundColor: colors.glass.panel,
  boxShadow: shadows.soft,
  backdropFilter: colors.glass.blur,
  WebkitBackdropFilter: colors.glass.blur,
  '& svg': { opacity: 0.95 },
  '&:hover': {
    borderColor: colors.border.strong,
    backgroundColor: colors.action.hover,
    transform: 'translateY(-1px)',
    boxShadow: shadows.lift,
  },
  '&:active': { transform: 'translateY(0px)' },
  transition:
    'transform 140ms ease, box-shadow 140ms ease, background-color 140ms ease, border-color 140ms ease',
} as const;

export const journalEntryDangerIconSx = {
  ...journalEntryActionIconSx,
  borderColor: `rgba(255, 66, 66, 0.35)`,
  '&:hover': {
    ...journalEntryActionIconSx['&:hover'],
    borderColor: `rgba(255, 66, 66, 0.70)`,
    backgroundColor: 'rgba(255, 66, 66, 0.10)',
  },
} as const;

/**
 * ✅ Aliases para manter compat com imports existentes nas telas
 */
export const erpListSx = journalEntryListSx;
export const erpDatagridSx = journalEntryDatagridSx;
export const erpDetailsSx = journalEntryDetailsSx;
export const erpFormSx = journalEntryFormSx;
