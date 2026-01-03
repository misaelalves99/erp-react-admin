// src/admin/resources/finance/payments/PaymentEdit.tsx
import * as React from 'react';
import {
  DateTimeInput,
  Edit,
  ListButton,
  NumberInput,
  ReferenceInput,
  required,
  SaveButton,
  SelectInput,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './payments.sx';

function EditActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <ShowButton label="Detalhes" />
    </TopToolbar>
  );
}

function EditToolbar() {
  return (
    <Toolbar sx={{ px: 0, pb: 0 }}>
      <Stack direction="row" spacing={1} sx={{ width: '100%', justifyContent: 'flex-end' }}>
        <ListButton label="Cancelar" />
        <SaveButton label="Salvar alterações" alwaysEnable />
      </Stack>
    </Toolbar>
  );
}

export const PaymentEdit = () => (
  <Edit title="Editar pagamento" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar pagamento
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize tipo, conta bancária, referência e valor.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Pagamento">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="kind"
                      label="Entrada/Saída"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: IN (entrada) / OUT (saída)."
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <ReferenceInput source="bankAccountId" reference="bankAccounts" label="Conta">
                      <SelectInput optionText="name" fullWidth />
                    </ReferenceInput>
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="reference"
                      label="Referência"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: Pagamento de fornecedor, boleto, taxa, mensalidade..."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Liquidação">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="status"
                      label="Status"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: paid, pending, canceled..."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <DateTimeInput
                      source="paidAt"
                      label="Pago em"
                      fullWidth
                      helperText="Data/hora de pagamento."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="amount"
                      label="Valor"
                      validate={required()}
                      fullWidth
                      helperText="Valor em BRL."
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ mt: `${space[2]}px`, opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Dica: mantenha o “kind” consistente com o sinal do valor (ex.: OUT para saída).
                </Box>
              </SectionCard>

              <SectionCard title="Observações">
                <TextInput
                  source="notes"
                  label="Notas internas (opcional)"
                  fullWidth
                  multiline
                  minRows={3}
                  helperText="Ex.: comprovante, dados do boleto, observações de conciliação..."
                />
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <SectionCard title="Governança">
                <Stack spacing={2}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                    Pagamentos impactam saldos e relatórios. Evite edições frequentes após conciliado.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="externalId"
                    label="Referência externa (opcional)"
                    fullWidth
                    helperText="Ex.: ID do sistema legado."
                  />
                </Stack>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Edit>
);
