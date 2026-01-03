// src/admin/pages/HelpPage.tsx
import { Stack, Typography, Box } from '@mui/material';
import { PageHeader } from '../../ui/PageHeader';
import { SectionCard } from '../../ui/SectionCard';
import { colors, space, typography } from '../../design/tokens';

export function HelpPage() {
  return (
    <Stack spacing={space[3]}>
      <PageHeader title="Ajuda" subtitle="Guia rápido do ERP (demo in-memory)." />

      <SectionCard title="Como usar">
        <Typography
          sx={{
            color: colors.text.secondary,
            fontFamily: typography.fontFamily,
            lineHeight: typography.lineHeight.relaxed,
          }}
        >
          Este projeto usa React-admin para CRUD e navegação. Use o menu lateral para acessar os módulos.
        </Typography>

        <Typography
          sx={{
            mt: space[4],
            fontFamily: typography.fontFamily,
            fontWeight: typography.weight.black,
            color: colors.text.primary,
            letterSpacing: typography.tracking.tight,
          }}
        >
          Acesso demo
        </Typography>

        <Box sx={{ mt: 0.5 }}>
          <Typography
            sx={{
              color: colors.text.muted,
              fontFamily: typography.fontFamily,
              fontSize: typography.size.sm,
            }}
          >
            admin@erp.local / admin
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: space[4],
            fontFamily: typography.fontFamily,
            fontWeight: typography.weight.black,
            color: colors.text.primary,
            letterSpacing: typography.tracking.tight,
          }}
        >
          Registro demo
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            color: colors.text.secondary,
            fontFamily: typography.fontFamily,
            lineHeight: typography.lineHeight.relaxed,
          }}
        >
          Crie um usuário em <b style={{ color: colors.brand.accent }}>/register</b>. Os dados ficam no localStorage.
        </Typography>
      </SectionCard>
    </Stack>
  );
}
