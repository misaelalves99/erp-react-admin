// src/admin/resources/sales/salesOrders/SalesOrderCreate.tsx
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

import { salesOrderListShellSx } from './salesOrders.sx';

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

export const SalesOrderCreate = () => (
  <Create
    title="Novo pedido de venda"
    actions={<CreateActions />}
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
          Criar pedido de venda
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Vincule o cliente, defina status e revise valores antes de salvar.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />}>
        <Grid container spacing={2}>
          {/* Coluna esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Dados do pedido">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="number"
                      label="Número do pedido"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: PV-2025-0001"
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <ReferenceInput source="customerId" reference="customers" label="Cliente">
                      <SelectInput
                        optionText="name"
                        validate={required()}
                        fullWidth
                      />
                    </ReferenceInput>
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Datas e observações">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <DateTimeInput
                      source="createdAt"
                      label="Criado em"
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
                      helperText="Valor total do pedido."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="notes"
                      label="Observações"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Notas internas do pedido."
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
                      { id: 'approved', name: 'Aprovado' },
                      { id: 'invoiced', name: 'Faturado' },
                      { id: 'canceled', name: 'Cancelado' },
                    ]}
                    helperText="Status do pedido no fluxo."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • “Em aberto” → edição livre. <br />
                    • “Aprovado” → pronto para faturar. <br />
                    • “Faturado” → vincule uma fatura/NF.
                  </Box>
                </Stack>
              </SectionCard>

              <SectionCard title="Dica">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Se o total ainda não estiver definido, salve como <b>Em aberto</b> e
                  atualize após fechar o carrinho/itens.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
