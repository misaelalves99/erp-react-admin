// src/admin/resources/finance/bankAccounts/BankAccountCreate.tsx
import * as React from 'react';
import {
  Create,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  Toolbar,
  SaveButton,
  ListButton,
  TopToolbar,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './bankAccounts.sx';

function CreateActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
    </TopToolbar>
  );
}

function CreateToolbar() {
  return (
    <Toolbar sx={{ px: 0, pb: 0 }}>
      <div style={{ display: 'flex', gap: 8, width: '100%', justifyContent: 'flex-end' }}>
        <ListButton label="Cancelar" />
        <SaveButton label="Salvar" alwaysEnable />
      </div>
    </Toolbar>
  );
}

export const BankAccountCreate = () => (
  <Create title="Nova conta bancária" actions={<CreateActions />} redirect="list" sx={erpListSx}>
    <Box sx={{ mt: `${space[2]}px`, mx: 'auto', width: '100%', maxWidth: 1040 }}>
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
          Cadastro de conta bancária
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Crie contas para conciliar pagamentos/recebimentos e controlar o caixa.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados da conta">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={7}>
                    <TextInput
                      source="name"
                      label="Nome da conta"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: Itaú • Conta Corrente, Caixa • PJ…"
                    />
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <TextInput
                      source="bank"
                      label="Banco"
                      validate={required()}
                      fullWidth
                      helperText="Nome do banco."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput source="agency" label="Agência (opcional)" fullWidth helperText="Ex.: 1234" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="accountNumber"
                      label="Conta (opcional)"
                      fullWidth
                      helperText="Ex.: 000123-4"
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Saldo inicial">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="balance"
                      label="Saldo"
                      defaultValue={0}
                      fullWidth
                      helperText="Saldo inicial para conciliação."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <SelectInput
                      source="currency"
                      label="Moeda"
                      defaultValue="BRL"
                      fullWidth
                      choices={[
                        { id: 'BRL', name: 'BRL (R$)' },
                        { id: 'USD', name: 'USD ($)' },
                        { id: 'EUR', name: 'EUR (€)' },
                      ]}
                      helperText="Use BRL na maioria dos casos."
                    />
                  </Grid>
                </Grid>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Boas práticas">
                <Stack sx={{ gap: 16 }}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • Nomeie com padrão para facilitar relatórios. <br />
                    • Mantenha saldo inicial consistente com a conciliação. <br />
                    • Use a mesma conta em todos os pagamentos vinculados.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="notes"
                    label="Notas (opcional)"
                    fullWidth
                    multiline
                    minRows={3}
                    helperText="Informações internas (PIX, chaves, observações)."
                  />
                </Stack>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
