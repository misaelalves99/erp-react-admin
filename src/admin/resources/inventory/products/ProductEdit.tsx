// src/admin/resources/inventory/products/ProductEdit.tsx
import * as React from 'react';
import {
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

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './products.sx';

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
      <div style={{ display: 'flex', gap: 8, width: '100%', justifyContent: 'flex-end' }}>
        <ListButton label="Cancelar" />
        <SaveButton label="Salvar alterações" alwaysEnable />
      </div>
    </Toolbar>
  );
}

export const ProductEdit = () => (
  <Edit title="Editar produto" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar produto
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize cadastro, categoria, preço/custo, estoque e status.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados do produto">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="sku"
                      label="SKU"
                      validate={required()}
                      fullWidth
                      helperText="Código interno do produto."
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <TextInput
                      source="name"
                      label="Produto"
                      validate={required()}
                      fullWidth
                      helperText="Nome comercial exibido em listas e relatórios."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <ReferenceInput source="categoryId" reference="categories" label="Categoria">
                      <SelectInput optionText="name" validate={required()} fullWidth />
                    </ReferenceInput>
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Financeiro e estoque">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <NumberInput
                      source="price"
                      label="Preço"
                      defaultValue={0}
                      fullWidth
                      helperText="Preço de venda."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <NumberInput
                      source="cost"
                      label="Custo"
                      defaultValue={0}
                      fullWidth
                      helperText="Custo médio/compra."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <NumberInput
                      source="stock"
                      label="Estoque"
                      defaultValue={0}
                      fullWidth
                      helperText="Quantidade disponível."
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
                  helperText="Informações operacionais (restrições, fornecedor, etc.)."
                />
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Status e governança">
                <Stack sx={{ gap: 16 }}>
                  <SelectInput
                    source="status"
                    label="Status"
                    defaultValue="active"
                    fullWidth
                    choices={[
                      { id: 'active', name: 'Ativo' },
                      { id: 'inactive', name: 'Inativo' },
                      { id: 'blocked', name: 'Bloqueado' },
                    ]}
                    helperText="Controle operacional do item."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • Use <b>Inativo</b> para manter histórico sem venda. <br />
                    • Use <b>Bloqueado</b> para impedir uso temporariamente.
                  </Box>

                  <TextInput
                    source="externalId"
                    label="Referência externa (opcional)"
                    fullWidth
                    helperText="Ex.: ID no catálogo/ERP externo."
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
