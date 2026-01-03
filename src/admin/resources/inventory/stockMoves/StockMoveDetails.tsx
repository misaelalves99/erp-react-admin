// src/admin/resources/inventory/stockMoves/StockMoveDetails.tsx
import * as React from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { DateTimeField } from '../../../fields/DateTimeField';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './stockMoves.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /stockMoves/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const StockMoveDetails = () => (
  <Show title="Movimentação de estoque" actions={<ShowActions />} sx={erpListSx}>
    <Box sx={{ mt: `${space[2]}px`, mx: 'auto', width: '100%', maxWidth: 1040 }}>
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
          Detalhes da movimentação
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize produto, depósito, tipo, quantidade e data da movimentação.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Movimentação">
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
            </SectionCard>

            <SectionCard title="Notas internas">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="notes" label="Notas" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Contexto">
              <Stack sx={{ gap: 16 }}>
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Movimentações ajudam a manter rastreabilidade do estoque e ajustes operacionais.
                </Box>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <SimpleShowLayout sx={erpDetailsSx}>
                  <TextField source="externalId" label="ID externo" />
                </SimpleShowLayout>
              </Stack>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
