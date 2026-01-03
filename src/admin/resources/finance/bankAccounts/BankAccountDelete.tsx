// src/admin/resources/finance/bankAccounts/BankAccountDelete.tsx
import * as React from 'react';
import { Alert, Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  NumberField,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { ErpDelete } from '../../../../ui/ErpDelete';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './bankAccounts.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export function BankAccountDelete() {
  return (
    <ErpDelete title="Excluir conta bancária" sx={erpListSx}>
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
            Excluir conta bancária
          </Typography>
          <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
            Confirme as informações abaixo antes de excluir. Contas podem ter vínculos com pagamentos.
          </Typography>
        </Box>

        {/* Ações rápidas */}
        <Box sx={{ mb: `${space[2]}px` }}>
          <DeleteHeaderActions />
        </Box>

        <Alert severity="warning" sx={{ mb: `${space[2]}px`, borderRadius: 0 }}>
          Excluir uma conta bancária pode afetar pagamentos, conciliações e relatórios financeiros. Se possível, prefira
          desativar/arquivar a conta (quando houver essa regra).
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
                  Resumo da conta
                </Typography>

                <Divider
                  sx={{
                    opacity: 0.18,
                    borderColor: colors.border.subtle,
                    mb: `${space[2]}px`,
                  }}
                />

                <SimpleShowLayout sx={erpDetailsSx}>
                  <TextField source="name" label="Conta" />
                  <TextField source="bank" label="Banco" />
                  <NumberField source="balance" label="Saldo" options={{ style: 'currency', currency: 'BRL' }} />
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
                  <TextField source="notes" label="Notas internas" />
                </SimpleShowLayout>

                <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Se o objetivo é “zerar”, prefira registrar um lançamento/ajuste em pagamentos para manter rastreabilidade.
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ErpDelete>
  );
}
