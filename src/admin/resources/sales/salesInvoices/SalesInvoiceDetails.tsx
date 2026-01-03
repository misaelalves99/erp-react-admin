// src/admin/resources/sales/salesInvoices/SalesInvoiceDetails.tsx
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
import { salesInvoiceDetailsTypographySx, salesInvoiceListShellSx } from './salesInvoices.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /salesInvoices/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const SalesInvoiceDetails = () => (
  <Show title="Fatura/NF" actions={<ShowActions />} sx={salesInvoiceListShellSx}>
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
          Detalhes da fatura / NF
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize vínculo do pedido, status e valores do documento.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <SectionCard title="Documento">
              <SimpleShowLayout sx={salesInvoiceDetailsTypographySx}>
                <TextField source="number" label="Fatura/NF" />
                <ReferenceField source="salesOrderId" reference="salesOrders" label="Pedido">
                  <TextField source="number" />
                </ReferenceField>
                <DateTimeField source="issuedAt" label="Emitida em" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Totais">
              <SimpleShowLayout sx={salesInvoiceDetailsTypographySx}>
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
                <SimpleShowLayout sx={salesInvoiceDetailsTypographySx}>
                  <StatusField source="status" label="Status" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Use <b>Cancelada</b> quando o documento não deve ser considerado em operações futuras.
                </Box>
              </Stack>
            </SectionCard>

            <SectionCard title="Referência externa">
              <SimpleShowLayout sx={salesInvoiceDetailsTypographySx}>
                <TextField source="externalId" label="Chave/ID" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
