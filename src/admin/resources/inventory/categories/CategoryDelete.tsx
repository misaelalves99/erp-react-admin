// src/admin/resources/inventory/categories/CategoryDelete.tsx
import * as React from 'react';
import { Alert, Box, Divider, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { ErpDelete } from '../../../../ui/ErpDelete';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './categories.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const CategoryDelete = () => (
  <ErpDelete title="Excluir categoria" sx={erpListSx}>
    <Box sx={{ mx: 'auto', width: '100%', maxWidth: 720 }}>
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
          Excluir categoria
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Revise os dados abaixo antes de confirmar a exclusão.
        </Typography>
      </Box>

      {/* Ações rápidas */}
      <Box sx={{ mb: `${space[2]}px` }}>
        <DeleteHeaderActions />
      </Box>

      <Alert severity="warning" sx={{ mb: `${space[2]}px`, borderRadius: 0 }}>
        Se esta categoria estiver associada a produtos, a exclusão pode quebrar relatórios ou cadastros.
        Confirme antes de prosseguir.
      </Alert>

      <Stack sx={{ gap: 16 }}>
        <Box>
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontWeight: 900,
              letterSpacing: typography.tracking.tight,
              color: colors.text.primary,
              fontSize: 14,
              mb: '6px',
            }}
          >
            Resumo
          </Typography>

          <Divider
            sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }}
          />

          <SimpleShowLayout sx={erpDetailsSx}>
            <TextField source="id" label="ID" />
            <TextField source="name" label="Categoria" />
          </SimpleShowLayout>
        </Box>

        <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
          Alternativa: você pode manter a categoria e apenas parar de usá-la em novos produtos.
        </Box>
      </Stack>
    </Box>
  </ErpDelete>
);
