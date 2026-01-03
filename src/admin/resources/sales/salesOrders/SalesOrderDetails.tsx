// src/admin/resources/sales/salesOrders/SalesOrderDetails.tsx
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
import { StatusField } from '../../../fields/StatusField';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { salesOrderDetailsTypographySx, salesOrderListShellSx } from './salesOrders.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /salesOrders/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const SalesOrderDetails = () => (
  <Show title="Pedido de venda" actions={<ShowActions />} sx={salesOrderListShellSx}>
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
          Detalhes do pedido de venda
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize cliente, status, data de criação e valores do pedido.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <SectionCard title="Pedido">
              <SimpleShowLayout sx={salesOrderDetailsTypographySx}>
                <TextField source="number" label="Pedido" />
                <ReferenceField source="customerId" reference="customers" label="Cliente">
                  <TextField source="name" />
                </ReferenceField>
                <DateTimeField source="createdAt" label="Criado em" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Totais e observações">
              <SimpleShowLayout sx={salesOrderDetailsTypographySx}>
                <NumberField
                  source="total"
                  label="Total"
                  options={{ style: 'currency', currency: 'BRL' }}
                />
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <SectionCard title="Status">
              <Stack spacing={2}>
                <SimpleShowLayout sx={salesOrderDetailsTypographySx}>
                  <StatusField source="status" label="Status" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Use <b>Faturado</b> quando houver fatura/NF vinculada.
                </Box>
              </Stack>
            </SectionCard>

            <SectionCard title="Referência externa">
              <SimpleShowLayout sx={salesOrderDetailsTypographySx}>
                <TextField source="externalId" label="ID externo" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
