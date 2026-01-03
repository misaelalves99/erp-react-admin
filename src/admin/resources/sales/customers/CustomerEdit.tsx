// src/admin/resources/sales/customers/CustomerEdit.tsx
import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  email,
  Toolbar,
  SaveButton,
  ListButton,
  ShowButton,
  TopToolbar,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { customerListShellSx } from './customers.sx';

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

export const CustomerEdit = () => (
  <Edit title="Editar cliente" actions={<EditActions />} redirect="list" sx={customerListShellSx}>
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
          Editar cliente
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Ajuste dados cadastrais e status. Alterações impactam pedidos e faturamento vinculados.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Dados do cliente">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <TextInput
                      source="name"
                      label="Cliente"
                      validate={required()}
                      fullWidth
                      helperText="Nome/Razão social."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="document"
                      label="CNPJ/CPF"
                      validate={required()}
                      fullWidth
                      helperText="Documento principal."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Contato e endereço">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="email"
                      label="E-mail"
                      type="email"
                      validate={[required(), email()]}
                      fullWidth
                      helperText="Usado para comunicação e envio de documentos."
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

                  <Grid item xs={12} md={6}>
                    <TextInput source="city" label="Cidade" fullWidth />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput source="state" label="UF" fullWidth helperText="Ex.: SP, RJ, MG" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="address"
                      label="Endereço (opcional)"
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
                    defaultValue="open"
                    fullWidth
                    choices={[
                      { id: 'open', name: 'Ativo' },
                      { id: 'inactive', name: 'Inativo' },
                      { id: 'blocked', name: 'Bloqueado' },
                    ]}
                    helperText="Define se o cliente pode operar (pedidos/faturas)."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • <b>Ativo</b>: operação normal. <br />
                    • <b>Inativo</b>: não recomendado para novos pedidos. <br />
                    • <b>Bloqueado</b>: impede novas operações.
                  </Box>
                </Stack>
              </SectionCard>

              <SectionCard title="Observações">
                <TextInput
                  source="notes"
                  label="Notas internas (opcional)"
                  fullWidth
                  multiline
                  minRows={4}
                  helperText="Informações internas do relacionamento/comercial."
                />
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Edit>
);
