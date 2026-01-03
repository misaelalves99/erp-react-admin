// src/admin/resources/finance/payments/PaymentDelete.tsx
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
import { erpDetailsSx, erpListSx } from './payments.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const PaymentDelete = () => (
  <ErpDelete title="Excluir pagamento" sx={erpListSx}>
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
          Excluir pagamento
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Confirme os dados do pagamento antes de excluir.
        </Typography>
      </Box>

      {/* Ações rápidas */}
      <Box sx={{ mb: `${space[2]}px` }}>
        <DeleteHeaderActions />
      </Box>

      <Alert severity="warning" sx={{ mb: `${space[2]}px`, borderRadius: 0 }}>
        Excluir pagamentos pode alterar saldos, conciliações e relatórios. Se possível, prefira estornar criando um novo
        pagamento reverso para manter rastreabilidade.
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
                Resumo do pagamento
              </Typography>

              <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }} />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="kind" label="Entrada/Saída" />

                <ReferenceField source="bankAccountId" reference="bankAccounts" label="Conta">
                  <TextField source="name" />
                </ReferenceField>

                <TextField source="reference" label="Referência" />
                <StatusField source="status" label="Status" />
                <DateTimeField source="paidAt" label="Pago em" />
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
                Valor
              </Typography>

              <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }} />

              <SimpleShowLayout sx={erpDetailsSx}>
                <NumberField source="amount" label="Valor" options={{ style: 'currency', currency: 'BRL' }} />
                <TextField source="externalId" label="ID externo" />
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                Se o objetivo é corrigir um erro, considere um estorno ao invés de apagar.
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </ErpDelete>
);
