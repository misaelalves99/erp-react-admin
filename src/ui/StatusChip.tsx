// src/ui/StatusChip.tsx
import { Chip } from '@mui/material';
import { colors, radius, shadows, space, typography } from '../design/tokens';

const LABELS: Record<string, string> = {
  draft: 'Rascunho',
  open: 'Aberto',
  approved: 'Aprovado',
  paid: 'Pago',
  cancelled: 'Cancelado',
  delivered: 'Entregue',
  authorized: 'Autorizado',
};

function getStatusStyle(raw: string) {
  switch (raw) {
    case 'paid':
    case 'approved':
    case 'delivered':
    case 'authorized':
      return {
        fg: colors.status.success,
        bg: colors.status.successBg,
        border: `1px solid ${colors.border.subtle}`,
      };
    case 'cancelled':
      return {
        fg: colors.status.danger,
        bg: colors.status.dangerBg,
        border: `1px solid ${colors.border.subtle}`,
      };
    case 'draft':
      return {
        fg: colors.status.warning,
        bg: colors.status.warningBg,
        border: `1px solid ${colors.border.subtle}`,
      };
    case 'open':
    default:
      return {
        fg: colors.status.info,
        bg: colors.status.infoBg,
        border: `1px solid ${colors.border.subtle}`,
      };
  }
}

export function StatusChip(props: { status?: string | null }) {
  const raw = (props.status ?? 'open').toString().toLowerCase();
  const label = LABELS[raw] ?? props.status ?? '—';

  const style = getStatusStyle(raw);

  return (
    <Chip
      size="small"
      label={label}
      variant="outlined"
      sx={{
        borderRadius: radius.pill,
        fontFamily: typography.fontFamily,
        fontWeight: typography.weight.black,
        letterSpacing: typography.tracking.wide,
        textTransform: 'uppercase',
        fontSize: 10,
        height: 26,
        px: 0.5,
        color: style.fg,
        bgcolor: style.bg,
        border: style.border,
        boxShadow: shadows.inset,
        '& .MuiChip-label': { px: space[2] },
      }}
    />
  );
}
