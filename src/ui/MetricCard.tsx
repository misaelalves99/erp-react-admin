// src/ui/MetricCard.tsx
import { Card, CardContent, Stack, Typography, Box } from '@mui/material';
import { colors, space, typography } from '../design/tokens';

export function MetricCard(props: { label: string; value: string; hint?: string }) {
  return (
    <Card sx={{ height: '100%', borderRadius: 0 }}>
      {/* ✅ tokens em PX (evita space * 8 do MUI) */}
      <CardContent sx={{ p: { xs: `${space[4]}px`, sm: `${space[5]}px` } }}>
        <Stack sx={{ gap: `${space[2]}px` }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ gap: `${space[2]}px` }}>
            <Typography
              sx={{
                color: colors.text.muted,
                fontFamily: typography.fontFamily,
                fontWeight: typography.weight.black,
                letterSpacing: typography.tracking.wide,
                textTransform: 'uppercase',
                fontSize: 11,
                lineHeight: 1.2,
              }}
            >
              {props.label}
            </Typography>

            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: `linear-gradient(135deg, ${colors.brand.coral} 0%, ${colors.brand.aqua} 100%)`,
                opacity: 0.95,
                flex: '0 0 auto',
              }}
            />
          </Stack>

          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontWeight: typography.weight.black,
              letterSpacing: typography.tracking.tight,
              color: colors.text.primary,
              fontSize: { xs: 24, sm: 28 },
              lineHeight: 1.12,
            }}
          >
            {props.value}
          </Typography>

          {props.hint ? (
            <Typography
              sx={{
                color: colors.text.secondary,
                fontFamily: typography.fontFamily,
                fontSize: 13,
                lineHeight: 1.55,
              }}
            >
              {props.hint}
            </Typography>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
