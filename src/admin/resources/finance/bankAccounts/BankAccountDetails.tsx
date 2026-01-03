// src/admin/resources/finance/bankAccounts/BankAccountDetails.tsx
import * as React from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './bankAccounts.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /bankAccounts/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const BankAccountDetails = () => (
  <Show title="Conta bancária" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes da conta bancária
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize dados da conta e saldo atual.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Cadastro">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="name" label="Conta" />
                <TextField source="bank" label="Banco" />
                <NumberField source="balance" label="Saldo" options={{ style: 'currency', currency: 'BRL' }} />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Observações">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>
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
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Dica: para manter consistência financeira, utilize Pagamentos e Lançamentos Contábeis para ajustes.
                </Box>
              </Stack>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
