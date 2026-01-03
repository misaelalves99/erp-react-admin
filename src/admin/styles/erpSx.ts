// src/admin/styles/erpSx.ts
import { colors, radius, shadows, typography } from '../../design/tokens';

export const ERP_SIDEBAR_WIDTH = 280;
export const ERP_SIDEBAR_CLOSED_WIDTH = 76;

const APPBAR_HEIGHT_XS = 56;
const APPBAR_HEIGHT_SM_UP = 64;

/**
 * ✅ Gutter “padrão mercado” (padding lateral/vertical do conteúdo)
 * - xs: 16px
 * - md: 24px
 * - lg+: 32px (premium leve, sem exagero)
 */
const GUTTER_XS = 16;
const GUTTER_MD = 24;
const GUTTER_LG = 32;

/**
 * ✅ “Miolo” central (evita ficar esticado em telas grandes)
 */
const CONTENT_MAX_WIDTH = 1320;

/**
 * ✅ Global = layout/scroll/base do main.
 * Objetivo:
 * - Padding global profissional no conteúdo (RaLayout-content)
 * - MaxWidth centralizado por página
 * - Remove margin-top: 1em do RA quando actions={false}
 * - Remove camadas extras (cards/wrappers) do React-Admin
 * - Corrige “vão” grande (margin-bottom: 128px) em headers de List
 */
export const erpLayoutContentSx = {
  background: colors.bg.gradient.page,

  '& .RaLayout-appFrame': {
    minHeight: '100vh',
    width: '100%',
  },

  /**
   * ✅ NÃO aplicar “camada” aqui (evita fundo/borda dupla)
   */
  '& .RaLayout-contentWithSidebar': {
    width: '100%',
    flex: 1,
    minWidth: 0,

    // garante que não exista fundo/borda herdados aqui
    background: 'transparent !important',
    border: '0 !important',
    boxShadow: 'none !important',
  },

  /**
   * ✅ A “camada” (fundo/borda/padding) deve ficar NO main container:
   * div#main-content.RaLayout-content
   */
  '& .RaLayout-content': {
    width: '100%',
    maxWidth: 'none',
    minWidth: 0,
    boxSizing: 'border-box',

    overflow: 'auto',
    overflowX: 'hidden',

    // ✅ camada única aqui
    backgroundColor: `${colors.bg.surface[0]} !important`,
    borderTop: `1px solid ${colors.border.subtle} !important`,
    boxShadow: 'none !important',
    borderRadius: '0 !important',

    // ✅ padding global profissional (descola das extremidades)
    paddingLeft: {
      xs: `${GUTTER_XS}px !important`,
      md: `${GUTTER_MD}px !important`,
      lg: `${GUTTER_LG}px !important`,
    },
    paddingRight: {
      xs: `${GUTTER_XS}px !important`,
      md: `${GUTTER_MD}px !important`,
      lg: `${GUTTER_LG}px !important`,
    },
    paddingBottom: {
      xs: `${GUTTER_XS}px !important`,
      md: `${GUTTER_MD}px !important`,
      lg: `${GUTTER_LG}px !important`,
    },

    // ✅ topo: compensa AppBar fixa + respiro
    paddingTop: {
      xs: `${APPBAR_HEIGHT_XS + GUTTER_XS}px !important`,
      sm: `${APPBAR_HEIGHT_SM_UP + GUTTER_XS}px !important`,
      md: `${APPBAR_HEIGHT_SM_UP + GUTTER_MD}px !important`,
      lg: `${APPBAR_HEIGHT_SM_UP + GUTTER_MD}px !important`,
    },

    display: 'block',
  },

  /**
   * ✅ Miolo central por página:
   * Como o RA renderiza páginas como 1º filho do main,
   * centralizamos e limitamos largura aqui.
   */
  '& .RaLayout-content > *': {
    width: '100%',
    maxWidth: `${CONTENT_MAX_WIDTH}px`,
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  },

  /**
   * ✅ FIX GLOBAL: React-Admin aplica `margin-top: 1em` em `.RaList-noActions`
   * (quando `actions={false}`), empurrando o conteúdo pra baixo.
   */
  '& .RaList-noActions': {
    marginTop: '0 !important',
  },
  '& .RaList-main.RaList-noActions': {
    marginTop: '0 !important',
  },

  /**
   * ✅ FIX: reduzir “vão” enorme (margin-bottom: 128px)
   * Isso costuma vir de um Stack no header do List.
   * Mantemos bem “admin / padrão mercado”.
   */
  '& .RaList-root .RaList-main .MuiStack-root[style*="margin-bottom: 128px"], & .RaList-root .RaList-main .MuiStack-root[style*="margin-bottom:128px"]':
    {
      marginBottom: '24px !important',
    },

  /**
   * ✅ fallback (quando não vem inline e sim por classe/estrutura):
   * Ajusta somente o Stack “logo abaixo” do wrapper principal do List.
   */
  '& .RaList-root .RaList-main > .MuiPaper-root > .MuiBox-root > .MuiStack-root': {
    marginBottom: '24px !important',
  },

  /**
   * ✅ REMOVE CAMADAS DO REACT-ADMIN (Card wrappers)
   * (Evita múltiplos fundos/bordas e facilita o padding global)
   */
  '& .RaList-content, & .RaCreate-card, & .RaEdit-card, & .RaShow-card': {
    background: 'transparent !important',
    border: '0 !important',
    boxShadow: 'none !important',
    borderRadius: '0 !important',
    overflow: 'visible !important',
  },

  '& .RaList-content > .MuiCardContent-root, & .RaCreate-card > .MuiCardContent-root, & .RaEdit-card > .MuiCardContent-root, & .RaShow-card > .MuiCardContent-root':
    {
      padding: '0 !important',
    },

  '& .RaList-content > .MuiCardContent-root:last-child, & .RaCreate-card > .MuiCardContent-root:last-child, & .RaEdit-card > .MuiCardContent-root:last-child, & .RaShow-card > .MuiCardContent-root:last-child':
    {
      paddingBottom: '0 !important',
    },
} as const;

/**
 * ✅ Card de seção do app (mantém “sem radius” nas camadas de layout)
 */
export const erpSectionCardSx = {
  overflow: 'hidden',
  border: `1px solid ${colors.border.subtle}`,
  background: colors.bg.gradient.card,
  boxShadow: shadows.soft,
  borderRadius: 0,
  '&.MuiPaper-root': { borderRadius: 0 },
} as const;

/**
 * ✅ Ajustes gerais de List
 */
export const erpListSx = {
  '& .RaTopToolbar-root': { gap: '8px' },
  '& .RaList-main': { paddingTop: 0, width: '100%', maxWidth: 'none' },

  // redundância (caso algum módulo aplique esse sx localmente)
  '& .RaList-noActions': { marginTop: '0 !important' },
  '& .RaList-main.RaList-noActions': { marginTop: '0 !important' },
} as const;

/**
 * ✅ Datagrid padrão
 * (radius permitido apenas no wrapper da tabela)
 */
export const erpDatagridSx = {
  width: '100%',
  overflow: 'visible',
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',

  '& .RaDatagrid-tableWrapper': {
    borderRadius: radius.lg,
    overflow: 'hidden',
    border: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.surface[1],
    boxShadow: shadows.soft,
  },

  '& .RaDatagrid-headerCell': {
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '0.10em',
    fontSize: 11,
    color: colors.text.muted,
    borderBottom: `1px solid ${colors.border.subtle}`,
    backgroundColor: colors.bg.surface[2],
  },

  '& .RaDatagrid-rowCell': {
    borderBottom: `1px solid ${colors.border.subtle}`,
    color: colors.text.secondary,
    fontFamily: typography.fontFamily,
  },

  '& .RaDatagrid-row:hover': { backgroundColor: colors.action.selected },
} as const;
