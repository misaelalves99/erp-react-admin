// src/admin/resources/sales/salesOrders/SalesOrderEdit.tsx
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
import { salesOrderListShellSx } from './salesOrders.sx';

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

export const SalesOrderEdit = () => (
  <Edit
    title="Editar pedido de venda"
    actions={<EditActions />}
    redirect="list"
    sx={salesOrderListShellSx}
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
          Editar pedido de venda
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize cliente, status, data e total do pedido.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Dados do pedido">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="number"
                      label="Pedido"
                      validate={required()}
                      fullWidth
                      helperText="Número/identificador do pedido."
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <ReferenceInput source="customerId" reference="customers" label="Cliente">
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
                        { id: 'approved', name: 'Aprovado' },
                        { id: 'invoiced', name: 'Faturado' },
                        { id: 'canceled', name: 'Cancelado' },
                      ]}
                      helperText="Define estágio do pedido."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <DateTimeInput
                      source="createdAt"
                      label="Criado em"
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
                      helperText="Valor total do pedido."
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
                  helperText="Informações internas do pedido (condições, prazos, etc.)."
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
                    • Use <b>Aprovado</b> quando confirmado com o cliente. <br />
                    • Use <b>Faturado</b> quando houver fatura/NF vinculada. <br />
                    • Evite alterar total sem registrar justificativa nas notas.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="externalId"
                    label="Referência externa (opcional)"
                    fullWidth
                    helperText="Ex.: ID do e-commerce/marketplace."
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
