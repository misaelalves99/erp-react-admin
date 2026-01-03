// src/admin/resources/sales/customers/CustomerCreate.tsx
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
import { Box, Grid, Stack, Typography, Divider } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';

import { customerListShellSx } from './customers.sx';

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

export const CustomerCreate = () => (
  <Create
    title="Novo cliente"
    actions={<CreateActions />}
    redirect="list"
    sx={customerListShellSx}
  >
    <Box
      sx={{
        mt: `${space[2]}px`,
        mx: 'auto',
        width: '100%',
        maxWidth: 1040,
      }}
    >
      {/* Header interno (padrão dashboard) */}
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
          Cadastro de cliente
        </Typography>

        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Preencha os dados essenciais. Você pode editar informações depois.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />}>
        <Grid container spacing={2}>
          {/* Coluna esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Dados básicos">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <TextInput
                      source="name"
                      label="Cliente / Razão social"
                      validate={required()}
                      fullWidth
                      helperText="Nome do cliente (PF) ou razão social (PJ)."
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
                      helperText="Usado para comunicações e envio de documentos."
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

          {/* Coluna direita (meta/status) */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <SectionCard title="Status e controles">
                <Stack spacing={2}>
                  <SelectInput
                    source="status"
                    label="Status"
                    defaultValue="open"
                    fullWidth
                    choices={[
                      { id: 'open', name: 'Em aberto' },
                      { id: 'active', name: 'Ativo' },
                      { id: 'inactive', name: 'Inativo' },
                    ]}
                    helperText="Define visibilidade e uso nos fluxos."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box>
                    <Typography sx={{ color: colors.text.muted, fontSize: 12, mb: '6px' }}>
                      Observações
                    </Typography>
                    <TextInput
                      source="notes"
                      label="Notas internas"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Visível apenas para o time interno."
                    />
                  </Box>
                </Stack>
              </SectionCard>

              <SectionCard title="Boas práticas">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  • Use e-mail válido para evitar falhas em notificações. <br />
                  • Para PJ, informe CNPJ e razão social corretamente. <br />
                  • Status <b>Inativo</b> bloqueia uso em novos pedidos.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
