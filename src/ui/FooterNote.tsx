// src/ui/FooterNote.tsx
import { Box, Typography } from '@mui/material';
import { useAppMeta } from '../core/contexts/AppMetaContext';
import { colors, space, typography } from '../design/tokens';

/**
 * ✅ Export nomeado (FooterNote) + export default (compat)
 * Isso evita erro "has no exported member" caso algum lugar importe diferente.
 */
export function FooterNote() {
  const meta = useAppMeta();

  return (
    <Box
      sx={{
        px: space[2],
        py: space[2],
        opacity: 0.92,
      }}
    >
      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: typography.size.xs,
          lineHeight: typography.lineHeight.snug,
          color: colors.text.muted,
        }}
      >
        {meta.appName} • v{meta.version} • Demo in-memory
      </Typography>
    </Box>
  );
}

export default FooterNote;
