// src/admin/resources/purchases/suppliers/SupplierDelete.tsx
import * as React from 'react';
import { Alert, Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  EmailField,
  ListButton,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { StatusField } from '../../../fields/StatusField';
import { ErpDelete } from '../../../../ui/ErpDelete';

import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './suppliers.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const SupplierDelete = () => (
  <ErpDelete title="Excluir fornecedor" sx={erpListSx}>
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
          Excluir fornecedor
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
        Esta ação é <b>permanente</b>. Se você precisa manter histórico de compras, considere
        alterar o <b>status</b> para <b>Inativo</b> ou <b>Bloqueado</b> em vez de excluir.
      </Alert>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
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
                Resumo do fornecedor
              </Typography>

              <Divider
                sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="id" label="ID" />
                <TextField source="name" label="Fornecedor" />
                <TextField source="document" label="CNPJ/CPF" />
                <EmailField source="email" label="Email" />
                <TextField source="phone" label="Telefone" />
                <TextField source="city" label="Cidade" />
              </SimpleShowLayout>
            </Box>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
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
                Status atual
              </Typography>

              <Divider
                sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <StatusField source="status" label="Status" />
              </SimpleShowLayout>

              <Box
                sx={{
                  mt: `${space[2]}px`,
                  color: colors.text.muted,
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                Recomendação: use <b>Bloqueado</b> para impedir novas compras mantendo histórico.
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </ErpDelete>
);
