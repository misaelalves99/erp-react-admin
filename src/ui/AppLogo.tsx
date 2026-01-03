// src/ui/AppLogo.tsx
import { Box, Stack, Typography } from '@mui/material';
import { colors, radius, shadows, typography } from '../design/tokens';

// ✅ Ícone embutido na marca (sem precisar de prop)
import { RiBuilding2Line } from 'react-icons/ri';

export function AppLogo(props: { compact?: boolean }) {
  const compact = Boolean(props.compact);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={compact ? 0 : 1.2}
      sx={{
        p: 0,
        m: 0,
        minWidth: 0,
        lineHeight: 1,
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          p: 0,
          m: 0,
          flex: '0 0 auto',

          borderRadius: radius.md,
          background: colors.bg.gradient.page,
          position: 'relative',
          boxShadow: shadows.soft,
          border: `1px solid ${colors.border.subtle}`,
          overflow: 'hidden',

          display: 'grid',
          placeItems: 'center',

          '&:before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: colors.glass.shine,
            opacity: 0.55,
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            inset: -10,
            background:
              'radial-gradient(180px circle at 20% 0%, rgba(3,247,235,0.35) 0%, rgba(3,247,235,0) 55%)',
            opacity: 0.65,
          },

          // garante ícone acima dos layers
          '& > *': { position: 'relative', zIndex: 1 },
        }}
      >
        <RiBuilding2Line size={18} color={colors.brand.accent} />
      </Box>

      {!compact ? (
        <Stack spacing={0} sx={{ p: 0, m: 0, minWidth: 0 }}>
          <Typography
            sx={{
              m: 0,
              p: 0,
              fontFamily: typography.fontFamily,
              fontWeight: typography.weight.black,
              letterSpacing: typography.tracking.tight,
              lineHeight: typography.lineHeight.tight,
              color: colors.text.primary,
            }}
          >
            ERP Admin Pro
          </Typography>

          <Typography
            sx={{
              m: 0,
              p: 0,
              mt: 0.2,
              fontFamily: typography.fontFamily,
              fontSize: typography.size.xs,
              color: colors.text.muted,
              lineHeight: typography.lineHeight.snug,
            }}
          >
            React-admin • Demo
          </Typography>
        </Stack>
      ) : null}
    </Stack>
  );
}
