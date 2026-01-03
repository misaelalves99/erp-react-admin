// src/admin/resources/sales/salesInvoices/SalesInvoiceEdit.tsx
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
import { salesInvoiceListShellSx } from './salesInvoices.sx';

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

export const SalesInvoiceEdit = () => (
  <Edit
    title="Editar fatura/NF"
    actions={<EditActions />}
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
          Editar fatura / NF
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize numeração, vínculo com pedido e status do documento fiscal.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Dados do documento">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="number"
                      label="Fatura/NF"
                      validate={required()}
                      fullWidth
                      helperText="Numeração do documento."
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <ReferenceInput source="salesOrderId" reference="salesOrders" label="Pedido">
                      <SelectInput optionText="number" validate={required()} fullWidth />
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
                        { id: 'authorized', name: 'Autorizada' },
                        { id: 'canceled', name: 'Cancelada' },
                      ]}
                      helperText="Situação do documento."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <DateTimeInput
                      source="issuedAt"
                      label="Emitida em"
                      defaultValue={todayIso()}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <NumberInput
                      source="total"
                      label="Total"
                      defaultValue={0}
                      fullWidth
                      helperText="Valor total da fatura/NF."
                    />
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
                  helperText="Informações internas para auditoria/controle."
                />
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <SectionCard title="Boas práticas">
                <Stack spacing={2}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • Evite alterar a numeração após autorização. <br />
                    • Se cancelar, mantenha histórico e motivo nas notas. <br />
                    • Total deve refletir o pedido vinculado.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="externalId"
                    label="Chave/ID externo (opcional)"
                    fullWidth
                    helperText="Ex.: chave de acesso / ID do emissor."
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
