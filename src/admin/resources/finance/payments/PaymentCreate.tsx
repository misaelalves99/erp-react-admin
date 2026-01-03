// src/admin/resources/finance/payments/PaymentCreate.tsx
import * as React from 'react';
import {
  Create,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
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

import { todayIso } from '../../../../core/utils/date';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './payments.sx';

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

export const PaymentCreate = () => (
  <Create title="Novo pagamento" actions={<CreateActions />} redirect="list" sx={erpListSx}>
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
          Registrar pagamento
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Lance entradas/saídas vinculando conta bancária e referência para rastreabilidade.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados do pagamento">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SelectInput
                      source="kind"
                      label="Tipo"
                      defaultValue="OUT"
                      fullWidth
                      validate={required()}
                      choices={[
                        { id: 'IN', name: 'Entrada' },
                        { id: 'OUT', name: 'Saída' },
                      ]}
                      helperText="Entrada (recebimento) ou saída (pagamento)."
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <ReferenceInput source="bankAccountId" reference="bankAccounts" label="Conta bancária">
                      <SelectInput optionText="name" validate={required()} fullWidth />
                    </ReferenceInput>
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="reference"
                      label="Referência"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: Conta a pagar #123, Fatura NF-998, contrato…"
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Status e valores">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SelectInput
                      source="status"
                      label="Status"
                      defaultValue="paid"
                      fullWidth
                      choices={[
                        { id: 'paid', name: 'Pago' },
                        { id: 'pending', name: 'Pendente' },
                        { id: 'canceled', name: 'Cancelado' },
                      ]}
                      helperText="Controle de execução."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <DateTimeInput source="paidAt" label="Pago em" defaultValue={todayIso()} fullWidth />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <NumberInput
                      source="amount"
                      label="Valor"
                      defaultValue={0}
                      fullWidth
                      helperText="Valor do pagamento."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="notes"
                      label="Observações (opcional)"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Notas internas do lançamento."
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
                    • Use referência consistente para auditoria. <br />
                    • Vincule sempre a conta correta para conciliação. <br />
                    • Evite “Pago” sem data/valor definidos.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="externalId"
                    label="ID externo (opcional)"
                    fullWidth
                    helperText="Ex.: ID do gateway/banco."
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
