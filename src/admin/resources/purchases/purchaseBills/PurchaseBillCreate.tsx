// src/admin/resources/purchases/purchaseBills/PurchaseBillCreate.tsx
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
import { erpFormSx, erpListSx } from './purchaseBills.sx';

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

export const PurchaseBillCreate = () => (
  <Create title="Nova conta a pagar" actions={<CreateActions />} redirect="list" sx={erpListSx}>
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
          Criar conta a pagar
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Vincule ao fornecedor, defina vencimento e acompanhe status de pagamento.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados da conta">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="number"
                      label="Número / Conta"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: CP-2025-0031"
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <ReferenceInput source="supplierId" reference="suppliers" label="Fornecedor">
                      <SelectInput optionText="name" validate={required()} fullWidth />
                    </ReferenceInput>
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Vencimento e valores">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <DateTimeInput source="dueAt" label="Vencimento" defaultValue={todayIso()} fullWidth />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="total"
                      label="Total"
                      defaultValue={0}
                      fullWidth
                      helperText="Valor total a pagar."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="notes"
                      label="Observações"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Notas internas (ex.: dados bancários, instruções)."
                    />
                  </Grid>
                </Grid>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Status e controle">
                <Stack sx={{ gap: 16 }}>
                  <SelectInput
                    source="status"
                    label="Status"
                    defaultValue="open"
                    fullWidth
                    choices={[
                      { id: 'open', name: 'Em aberto' },
                      { id: 'approved', name: 'Aprovada' },
                      { id: 'paid', name: 'Paga' },
                      { id: 'overdue', name: 'Vencida' },
                      { id: 'canceled', name: 'Cancelada' },
                    ]}
                    helperText="Ciclo da conta a pagar."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • <b>Vencida</b>: vencimento ultrapassado. <br />
                    • <b>Paga</b>: confirmado pagamento. <br />
                    • <b>Cancelada</b>: encerra o lançamento.
                  </Box>
                </Stack>
              </SectionCard>

              <SectionCard title="Dica">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Ao marcar como <b>Paga</b>, mantenha o Financeiro (Pagamentos) atualizado para refletir no caixa.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
