// src/admin/resources/purchases/suppliers/SupplierEdit.tsx
import * as React from 'react';
import {
  Edit,
  ListButton,
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

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './suppliers.sx';

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

export const SupplierEdit = () => (
  <Edit title="Editar fornecedor" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar fornecedor
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize dados cadastrais, contato e status do fornecedor.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <SectionCard title="Dados do fornecedor">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={7}>
                    <TextInput
                      source="name"
                      label="Fornecedor"
                      validate={required()}
                      fullWidth
                      helperText="Nome/Razão social."
                    />
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <TextInput
                      source="document"
                      label="CNPJ/CPF"
                      validate={required()}
                      fullWidth
                      helperText="Documento para emissão e conciliação."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Contato e localização">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="email"
                      label="Email"
                      validate={required()}
                      fullWidth
                      helperText="Email principal para contato."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextInput source="phone" label="Telefone" fullWidth helperText="Opcional." />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput source="city" label="Cidade" fullWidth helperText="Cidade/UF." />
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
                  helperText="Condições, prazos, histórico de relacionamento."
                />
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <SectionCard title="Status e governança">
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
                      { id: 'inactive', name: 'Inativo' },
                    ]}
                    helperText="Controle interno do fornecedor."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • Use <b>Bloqueado</b> para impedir novas compras. <br />
                    • Use <b>Inativo</b> para manter histórico sem uso operacional.
                  </Box>

                  <TextInput
                    source="externalId"
                    label="Referência externa (opcional)"
                    fullWidth
                    helperText="Ex.: ID no ERP do fornecedor."
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
