// src/admin/resources/inventory/stockMoves/StockMoveDelete.tsx
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
import { ErpDelete } from '../../../../ui/ErpDelete';

import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './stockMoves.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const StockMoveDelete = () => (
  <ErpDelete title="Excluir movimentação de estoque" sx={erpListSx}>
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
          Excluir movimentação de estoque
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
        Excluir movimentações pode comprometer auditoria e histórico do estoque. Se possível, prefira
        registrar uma movimentação corretiva (ajuste) em vez de excluir.
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
                Resumo da movimentação
              </Typography>

              <Divider
                sx={{
                  opacity: 0.18,
                  borderColor: colors.border.subtle,
                  mb: `${space[2]}px`,
                }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <ReferenceField source="productId" reference="products" label="Produto">
                  <TextField source="name" />
                </ReferenceField>

                <ReferenceField source="warehouseId" reference="warehouses" label="Depósito">
                  <TextField source="name" />
                </ReferenceField>

                <TextField source="type" label="Tipo" />
                <NumberField source="qty" label="Quantidade" />
                <TextField source="reason" label="Motivo" />
                <DateTimeField source="createdAt" label="Data" />
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
                Referência
              </Typography>

              <Divider
                sx={{
                  opacity: 0.18,
                  borderColor: colors.border.subtle,
                  mb: `${space[2]}px`,
                }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="externalId" label="ID externo" />
              </SimpleShowLayout>

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                Dica: se o objetivo é corrigir o estoque, crie uma nova movimentação do tipo <b>ADJ</b>.
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </ErpDelete>
);
