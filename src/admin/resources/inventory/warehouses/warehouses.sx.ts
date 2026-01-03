// src/admin/resources/inventory/warehouses/warehouses.sx.ts
import { colors, radius, shadows, space, typography } from '../../../../design/tokens';

/**
 * ✅ Warehouses com estilos próprios (sem depender de exports globais).
 * Regras do app:
 * - ❌ Sem radius em wrappers/layout (cards, containers, etc.)
 * - ✅ Radius só em inputs/botões/tabela
 * - ✅ Evitar Stack spacing={space[...]}; nas telas usar gap em px no componente
 */

/**
 * LIST (List/Show/Edit/Create/Delete)
 * - remove “card wrapper” padrão do List (sem radius em layout)
 */
export const warehouseListSx = {
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

  '& .RaList-content.MuiCard-root': {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    overflow: 'visible',
    borderRadius: 0,
  },

  // ✅ alguns fluxos podem renderizar Paper/Card por baixo
  '& .MuiPaper-root': {
    borderRadius: 0,
  },
} as const;

/**
 * DATAGRID (List)
 * - Radius só no wrapper da tabela
 */
export const warehouseDatagridSx = {
  width: '100%',
  overflow: 'visible',
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',

  '& .RaDatagrid-tableWrapper': {
    borderRadius: radius.lg, // ✅ permitido (tabela)
    overflow: 'hidden',
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.surface[1],
    boxShadow: shadows.soft,
  },

  '& .RaDatagrid-headerCell': {
    fontFamily: typography.fontFamily,
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '0.10em',
    fontSize: 11,
    color: colors.text.muted,
    borderBottom: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.surface[2],
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

  /**
   * ✅ BooleanField mais “pill” (dentro da tabela)
   */
  '& .RaBooleanField-value': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 56,
    paddingInline: 10,
    paddingBlock: 6,
    borderRadius: radius.pill, // ✅ permitido (pill na tabela)
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.glass.panel,
    boxShadow: shadows.soft,
    backdropFilter: colors.glass.blur,
    WebkitBackdropFilter: colors.glass.blur,
    fontSize: 12,
    fontWeight: 800,
    color: colors.text.secondary,
  },
} as const;

/**
 * DETAILS (SimpleShowLayout)
 * - sem radius no layout
 */
export const warehouseDetailsSx = {
  '& .RaSimpleShowLayout-root': {
    padding: 0,
  },

  '& .RaSimpleShowLayout-row': {
    margin: 0,
    padding: `${space[2]}px 0`,
    borderBottom: `1px solid ${colors.border.subtle}`,
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '170px 1fr' },
    gap: `${space[2]}px`,
    alignItems: 'center',
  },

  '& .RaSimpleShowLayout-row:last-of-type': {
    borderBottom: 'none',
  },

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
 * FORM (SimpleForm / Inputs)
 * - sem radius no wrapper
 * - radius só em inputs/botões
 */
export const warehouseFormSx = {
  borderRadius: 0,
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',
  padding: 0,

  '& .MuiFormControl-root': {
    marginTop: 0,
    marginBottom: 0,
  },

  '& .MuiInputLabel-root': {
    fontFamily: typography.fontFamily,
    color: colors.text.muted,
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
    fontFamily: typography.fontFamily,
    color: colors.text.soft,
  },

  '& .MuiPaper-root': {
    borderRadius: 0,
  },
} as const;

/**
 * SEARCH (FilterForm/SearchInput)
 */
export const warehouseSearchWrapSx = {
  width: { xs: '100%', sm: 320, md: 360 },
  maxWidth: { xs: '100%', md: 360 },

  '& .RaFilterForm-form': { width: '100%', display: 'flex' },
  '& .MuiFormControl-root': { width: '100%' },

  '& .MuiInputBase-root': {
    width: '100%',
    borderRadius: radius.input, // ✅ permitido (input)
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
 * HEADER PILL BUTTONS
 */
export const warehousePillBtnSx = {
  borderRadius: radius.pill, // ✅ permitido (botão)
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
export const warehousePrimaryBtnSx = {
  borderRadius: radius.button, // ✅ permitido (botão)
  minHeight: 40,
  px: `${space[4]}px`,
  fontWeight: 800,
  textTransform: 'none',
  boxShadow: shadows.soft,
  '&:hover': {
    boxShadow: shadows.lift,
    transform: 'translateY(-1px)',
  },
  '&:active': { transform: 'translateY(0px)' },
  transition: 'transform 120ms ease, box-shadow 120ms ease',
} as const;

export const warehouseGhostBtnSx = {
  borderRadius: radius.button, // ✅ permitido (botão)
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
export const warehouseActionIconSx = {
  width: 40,
  height: 40,
  borderRadius: radius.pill, // ✅ permitido (ícone/botão)
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

export const warehouseDangerIconSx = {
  ...warehouseActionIconSx,
  borderColor: `rgba(255, 66, 66, 0.35)`,
  '&:hover': {
    ...warehouseActionIconSx['&:hover'],
    borderColor: `rgba(255, 66, 66, 0.70)`,
    backgroundColor: 'rgba(255, 66, 66, 0.10)',
  },
} as const;

/**
 * ✅ Aliases para manter compat com imports existentes nas telas
 */
export const erpListSx = warehouseListSx;
export const erpDatagridSx = warehouseDatagridSx;
export const erpDetailsSx = warehouseDetailsSx;
export const erpFormSx = warehouseFormSx;
