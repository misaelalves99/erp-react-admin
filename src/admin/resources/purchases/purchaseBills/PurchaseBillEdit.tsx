// src/admin/resources/purchases/purchaseBills/PurchaseBillEdit.tsx
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

import { todayIso } from '../../../../core/utils/date';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './purchaseBills.sx';

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

export const PurchaseBillEdit = () => (
  <Edit title="Editar conta a pagar" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar conta a pagar
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize fornecedor, vencimento, status e valores da conta.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados da conta">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="number"
                      label="Conta"
                      validate={required()}
                      fullWidth
                      helperText="Identificador/número do documento."
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <ReferenceInput source="supplierId" reference="suppliers" label="Fornecedor">
                      <SelectInput optionText="name" validate={required()} fullWidth />
                    </ReferenceInput>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <SelectInput
                      source="status"
                      label="Status"
                      defaultValue="open"
                      fullWidth
                      choices={[
                        { id: 'open', name: 'Em aberto' },
                        { id: 'scheduled', name: 'Agendada' },
                        { id: 'paid', name: 'Paga' },
                        { id: 'overdue', name: 'Em atraso' },
                        { id: 'canceled', name: 'Cancelada' },
                      ]}
                      helperText="Situação atual da conta."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <DateTimeInput source="dueAt" label="Vencimento" defaultValue={todayIso()} fullWidth />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <NumberInput source="total" label="Total" defaultValue={0} fullWidth helperText="Valor total do título." />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Observações">
                <TextInput
                  source="notes"
                  label="Notas internas (opcional)"
                  fullWidth
                  multiline
                  minRows={3}
                  helperText="Informações de pagamento, condições, histórico."
                />
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Boas práticas">
                <Stack sx={{ gap: 16 }}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • Use <b>Agendada</b> para pagamentos futuros. <br />
                    • Use <b>Paga</b> após compensação/baixa. <br />
                    • Use <b>Em atraso</b> se passou do vencimento sem baixa.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="externalId"
                    label="Referência externa (opcional)"
                    fullWidth
                    helperText="Ex.: ID do fornecedor/ERP externo."
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
