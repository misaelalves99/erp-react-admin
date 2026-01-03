// src/ui/SectionCard.tsx
import * as React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { colors, space, typography } from '../design/tokens';
import { erpSectionCardSx } from '../admin/styles/erpSx';

type Props = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
};

export function SectionCard({ title, subtitle, right, children }: Props) {
  return (
    <Card sx={erpSectionCardSx}>
      <CardContent sx={{ p: { xs: `${space[3]}px`, sm: `${space[4]}px` } }}>
        <Box sx={{ mb: `${space[2]}px`, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontWeight: typography.weight.black,
                letterSpacing: typography.tracking.tight,
                color: colors.text.primary,
                fontSize: 15,
                lineHeight: 1.25,
              }}
            >
              {title}
            </Typography>

            {subtitle ? (
              <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 12 }}>
                {subtitle}
              </Typography>
            ) : null}
          </Box>

          {right ? <Box sx={{ flexShrink: 0 }}>{right}</Box> : null}
        </Box>

        {children}
      </CardContent>
    </Card>
  );
}
