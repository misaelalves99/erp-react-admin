// src/admin/resources/purchases/suppliers/SupplierCreate.tsx
import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  email,
  Toolbar,
  SaveButton,
  ListButton,
  TopToolbar,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './suppliers.sx';

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

export const SupplierCreate = () => (
  <Create title="Novo fornecedor" actions={<CreateActions />} redirect="list" sx={erpListSx}>
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
          Cadastro de fornecedor
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Registre dados fiscais e canais de contato para uso em compras e contas a pagar.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Dados básicos">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <TextInput
                      source="name"
                      label="Fornecedor / Razão social"
                      validate={required()}
                      fullWidth
                      helperText="Nome do fornecedor (PF) ou razão social (PJ)."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="document"
                      label="CNPJ/CPF"
                      validate={required()}
                      fullWidth
                      helperText="Sem pontuação (opcional)."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Contato">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="email"
                      label="E-mail"
                      type="email"
                      validate={[required(), email()]}
                      fullWidth
                      helperText="Usado para solicitações, envio de pedido e documentos."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="phone"
                      label="Telefone / WhatsApp"
                      type="tel"
                      fullWidth
                      helperText="DDD + número."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="notes"
                      label="Observações"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Notas internas do fornecedor."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Endereço">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput source="city" label="Cidade" fullWidth />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput source="state" label="UF" fullWidth helperText="Ex.: SP, RJ, MG" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="address"
                      label="Endereço"
                      fullWidth
                      helperText="Rua, número, complemento."
                    />
                  </Grid>
                </Grid>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <SectionCard title="Status e controle">
                <Stack spacing={2}>
                  <SelectInput
                    source="status"
                    label="Status"
                    defaultValue="approved"
                    fullWidth
                    choices={[
                      { id: 'approved', name: 'Aprovado' },
                      { id: 'pending', name: 'Pendente' },
                      { id: 'blocked', name: 'Bloqueado' },
                    ]}
                    helperText="Controla uso em novos pedidos/contas."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • <b>Aprovado</b>: disponível para compras. <br />
                    • <b>Pendente</b>: exige revisão interna. <br />
                    • <b>Bloqueado</b>: impede novas operações.
                  </Box>
                </Stack>
              </SectionCard>

              <SectionCard title="Boas práticas">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Mantenha e-mail/telefone atualizados para evitar falhas em envio de pedidos e
                  cobranças.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
