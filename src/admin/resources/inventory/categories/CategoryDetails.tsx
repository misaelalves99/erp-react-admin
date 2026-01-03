// src/admin/resources/inventory/categories/CategoryDetails.tsx
import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './categories.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /categories/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const CategoryDetails = () => (
  <Show title="Categoria" actions={<ShowActions />} sx={erpListSx}>
    <Box sx={{ mt: `${space[2]}px`, mx: 'auto', width: '100%', maxWidth: 720 }}>
      {/* Header interno */}
      <Box sx={{ mb: `${space[3]}px` }}>
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontWeight: 900,
            letterSpacing: typography.tracking.tight,
            color: colors.text.primary,
            fontSize: 18,
            lineHeight: 1.2,
          }}
        >
          Detalhes da categoria
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize o identificador e o nome da categoria.
        </Typography>
      </Box>

      <Stack sx={{ gap: 16 }}>
        <SectionCard title="Cadastro">
          <SimpleShowLayout sx={erpDetailsSx}>
            <TextField source="id" label="ID" />
            <TextField source="name" label="Categoria" />
          </SimpleShowLayout>
        </SectionCard>

        <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
          Se quiser impedir uso operacional sem perder histórico, considere criar uma convenção no nome
          (ex.: “(inativa)”) — ou você pode evoluir o modelo adicionando um campo <b>status</b>.
        </Box>
      </Stack>
    </Box>
  </Show>
);
