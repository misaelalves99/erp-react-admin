// src/admin/resources/purchases/purchaseBills/PurchaseBillDelete.tsx
import * as React from 'react';
import { Alert, Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  NumberField,
  ReferenceField,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { DateTimeField } from '../../../fields/DateTimeField';
import { StatusField } from '../../../fields/StatusField';
import { ErpDelete } from '../../../../ui/ErpDelete';

import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './purchaseBills.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const PurchaseBillDelete = () => (
  <ErpDelete title="Excluir conta a pagar" sx={erpListSx}>
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
          Excluir conta a pagar
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
        Esta ação é <b>permanente</b>. Se você precisa manter histórico financeiro, considere
        alterar o <b>status</b> para <b>Cancelada</b> em vez de excluir.
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
                Resumo do título
              </Typography>

              <Divider
                sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="number" label="Conta" />
                <ReferenceField source="supplierId" reference="suppliers" label="Fornecedor">
                  <TextField source="name" />
                </ReferenceField>
                <DateTimeField source="dueAt" label="Vencimento" />
                <NumberField source="total" label="Total" options={{ style: 'currency', currency: 'BRL' }} />
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
                Status atual
              </Typography>

              <Divider
                sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <StatusField source="status" label="Status" />
              </SimpleShowLayout>

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                Recomendação: use <b>Cancelada</b> para preservar histórico e impedir novas baixas.
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </ErpDelete>
);
