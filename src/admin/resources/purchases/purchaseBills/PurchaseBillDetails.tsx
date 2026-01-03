// src/admin/resources/purchases/purchaseBills/PurchaseBillDetails.tsx
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
import { erpDetailsSx, erpListSx } from './purchaseBills.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /purchaseBills/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const PurchaseBillDetails = () => (
  <Show title="Conta a pagar" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes da conta a pagar
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize fornecedor, vencimento, status e valor total do título.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Título">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="number" label="Conta" />
                <ReferenceField source="supplierId" reference="suppliers" label="Fornecedor">
                  <TextField source="name" />
                </ReferenceField>
                <DateTimeField source="dueAt" label="Vencimento" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Totais e observações">
              <SimpleShowLayout sx={erpDetailsSx}>
                <NumberField source="total" label="Total" options={{ style: 'currency', currency: 'BRL' }} />
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Status">
              <Stack sx={{ gap: 16 }}>
                <SimpleShowLayout sx={erpDetailsSx}>
                  <StatusField source="status" label="Status" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Se o pagamento foi concluído, marque como <b>Paga</b> para refletir em relatórios.
                </Box>
              </Stack>
            </SectionCard>

            <SectionCard title="Referência externa">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="externalId" label="ID externo" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
