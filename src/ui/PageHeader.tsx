// src/ui/PageHeader.tsx
import * as React from 'react';
import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { colors, space, typography } from '../design/tokens';

type BreadcrumbItem = {
  label: string;
  to?: string;
};

export function PageHeader(props: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const hasCrumbs = Boolean(props.breadcrumbs?.length);

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      sx={{
        gap: space[3],
        mb: space[4],
        px: 0,
        pl: 0,
        pr: 0,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 'none' }}>
        {hasCrumbs ? (
          <Breadcrumbs
            separator="/"
            sx={{
              mb: space[1],
              '& .MuiTypography-root, & .MuiLink-root': {
                fontFamily: typography.fontFamily,
                fontSize: 12,
                color: colors.text.muted,
              },
              '& .MuiBreadcrumbs-separator': {
                color: colors.text.muted,
                mx: 1,
              },
            }}
          >
            {props.breadcrumbs!.map((c, idx) => {
              const isLast = idx === props.breadcrumbs!.length - 1;

              if (c.to && !isLast) {
                return (
                  <Link
                    key={`${c.label}-${idx}`}
                    component={RouterLink}
                    to={c.to}
                    underline="none"
                    sx={{
                      color: colors.text.muted,
                      '&:hover': { color: colors.text.primary },
                    }}
                  >
                    {c.label}
                  </Link>
                );
              }

              return (
                <Typography
                  key={`${c.label}-${idx}`}
                  sx={{
                    color: isLast ? colors.text.primary : colors.text.muted,
                    fontWeight: isLast ? typography.weight.bold : typography.weight.semibold,
                  }}
                >
                  {c.label}
                </Typography>
              );
            })}
          </Breadcrumbs>
        ) : null}

        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontWeight: typography.weight.black,
            letterSpacing: typography.tracking.tight,
            lineHeight: 1.08,
            color: colors.text.primary,
            fontSize: { xs: 28, sm: 34, md: 40 },
          }}
        >
          {props.title}
        </Typography>

        {props.subtitle ? (
          <Typography
            sx={{
              mt: space[1],
              color: colors.text.secondary,
              fontFamily: typography.fontFamily,
              fontSize: { xs: 14, md: 15 },
              lineHeight: 1.65,
            }}
          >
            {props.subtitle}
          </Typography>
        ) : null}
      </Box>

      {props.right ? (
        <Box
          sx={{
            width: { xs: '100%', md: 'auto' },
            px: 0,
            pl: 0,
            pr: 0,
          }}
        >
          {props.right}
        </Box>
      ) : null}
    </Stack>
  );
}
