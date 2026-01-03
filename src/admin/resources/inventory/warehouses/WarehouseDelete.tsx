// src/admin/resources/inventory/warehouses/WarehouseDelete.tsx
import * as React from 'react';
import { Alert, Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  BooleanField,
  EditButton,
  ListButton,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { ErpDelete } from '../../../../ui/ErpDelete';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './warehouses.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const WarehouseDelete = () => (
  <ErpDelete title="Excluir depósito" sx={erpListSx}>
    <Box sx={{ mx: 'auto', width: '100%', maxWidth: 1040 }}>
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
          Excluir depósito
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Revise os dados antes de confirmar. Depósitos geralmente têm vínculos com movimentações.
        </Typography>
      </Box>

      {/* Ações rápidas */}
      <Box sx={{ mb: `${space[2]}px` }}>
        <DeleteHeaderActions />
      </Box>

      <Alert severity="warning" sx={{ mb: `${space[2]}px`, borderRadius: 0 }}>
        Excluir um depósito pode quebrar movimentações e relatórios de estoque. Se este for o depósito
        principal, defina outro como principal antes de excluir.
      </Alert>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
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
                Resumo do depósito
              </Typography>

              <Divider
                sx={{
                  opacity: 0.18,
                  borderColor: colors.border.subtle,
                  mb: `${space[2]}px`,
                }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="name" label="Depósito" />
                <TextField source="city" label="Cidade" />
              </SimpleShowLayout>
            </Box>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
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
                Governança
              </Typography>

              <Divider
                sx={{
                  opacity: 0.18,
                  borderColor: colors.border.subtle,
                  mb: `${space[2]}px`,
                }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <BooleanField source="isMain" label="Depósito principal" />
                <TextField source="externalId" label="ID externo" />
              </SimpleShowLayout>

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                Recomendação: se o depósito ainda precisa existir, considere mantê-lo e apenas não usá-lo
                em novas movimentações.
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </ErpDelete>
);
