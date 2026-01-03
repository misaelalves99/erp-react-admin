// src/admin/resources/sales/salesInvoices/SalesInvoiceCreate.tsx
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

import { salesInvoiceListShellSx } from './salesInvoices.sx';

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
      <Stack direction="row" spacing={1} sx={{ width: '100%', justifyContent: 'flex-end' }}>
        <ListButton label="Cancelar" />
        <SaveButton label="Salvar" alwaysEnable />
      </Stack>
    </Toolbar>
  );
}

export const SalesInvoiceCreate = () => (
  <Create
    title="Nova fatura/NF"
    actions={<CreateActions />}
    redirect="list"
    sx={salesInvoiceListShellSx}
  >
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
          Criar fatura / nota fiscal
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Vincule a um pedido de venda e confirme data de emissão.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />}>
        <Grid container spacing={2}>
          {/* Coluna esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Dados da fatura/NF">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="number"
                      label="Número"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: NF-2025-0098"
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <ReferenceInput source="salesOrderId" reference="salesOrders" label="Pedido de venda">
                      <SelectInput
                        optionText="number"
                        validate={required()}
                        fullWidth
                      />
                    </ReferenceInput>
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Emissão e valores">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <DateTimeInput
                      source="issuedAt"
                      label="Emitida em"
                      defaultValue={todayIso()}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="total"
                      label="Total"
                      defaultValue={0}
                      fullWidth
                      helperText="Valor total da fatura."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="notes"
                      label="Observações"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Notas internas ou informações complementares."
                    />
                  </Grid>
                </Grid>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Coluna direita */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <SectionCard title="Status e controle">
                <Stack spacing={2}>
                  <SelectInput
                    source="status"
                    label="Status"
                    defaultValue="open"
                    fullWidth
                    choices={[
                      { id: 'open', name: 'Em aberto' },
                      { id: 'issued', name: 'Emitida' },
                      { id: 'paid', name: 'Paga' },
                      { id: 'canceled', name: 'Cancelada' },
                    ]}
                    helperText="Controle do ciclo da fatura."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • “Emitida” → documento gerado e válido. <br />
                    • “Paga” → confirme recebimento no Financeiro. <br />
                    • “Cancelada” → bloqueia uso em relatórios.
                  </Box>
                </Stack>
              </SectionCard>

              <SectionCard title="Dica">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Se você já tem o pedido pronto, selecione o pedido e ajuste o total conforme necessário.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
