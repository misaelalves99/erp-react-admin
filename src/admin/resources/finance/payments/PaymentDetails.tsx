// src/admin/resources/finance/payments/PaymentDetails.tsx
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
import { erpDetailsSx, erpListSx } from './payments.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /payments/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const PaymentDetails = () => (
  <Show title="Pagamento" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes do pagamento
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize conta, status, data e valor do pagamento.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Pagamento">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="kind" label="Entrada/Saída" />
                <ReferenceField source="bankAccountId" reference="bankAccounts" label="Conta">
                  <TextField source="name" />
                </ReferenceField>
                <TextField source="reference" label="Referência" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Liquidação">
              <SimpleShowLayout sx={erpDetailsSx}>
                <StatusField source="status" label="Status" />
                <DateTimeField source="paidAt" label="Pago em" />
                <NumberField source="amount" label="Valor" options={{ style: 'currency', currency: 'BRL' }} />
              </SimpleShowLayout>

              <Divider sx={{ mt: `${space[2]}px`, opacity: 0.18, borderColor: colors.border.subtle }} />

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                Sugestão: quando o pagamento estiver conciliado, prefira estornar com um novo registro ao invés de editar.
              </Box>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Referência">
              <Stack sx={{ gap: 16 }}>
                <SimpleShowLayout sx={erpDetailsSx}>
                  <TextField source="externalId" label="ID externo" />
                  <TextField source="notes" label="Notas internas" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Para auditoria, registre sempre uma referência clara (nota, boleto, transação, etc.).
                </Box>
              </Stack>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
