// src/admin/resources/inventory/products/ProductCreate.tsx
import * as React from 'react';
import {
  Create,
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

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './products.sx';

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

export const ProductCreate = () => (
  <Create title="Novo produto" actions={<CreateActions />} redirect="list" sx={erpListSx}>
    <Box sx={{ mt: `${space[2]}px`, mx: 'auto', width: '100%', maxWidth: 1040 }}>
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
          Cadastro de produto
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Defina SKU, categoria, preços e estoque inicial para controle do inventário.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados básicos">
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
                      helperText="Nome comercial do produto."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <ReferenceInput source="categoryId" reference="categories" label="Categoria">
                      <SelectInput optionText="name" validate={required()} fullWidth />
                    </ReferenceInput>
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Preços e estoque">
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
                      helperText="Custo de aquisição."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <NumberInput
                      source="stock"
                      label="Estoque inicial"
                      defaultValue={0}
                      fullWidth
                      helperText="Quantidade inicial em estoque."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="description"
                      label="Descrição (opcional)"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Descrição interna / observações do produto."
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
                    defaultValue="active"
                    fullWidth
                    choices={[
                      { id: 'active', name: 'Ativo' },
                      { id: 'inactive', name: 'Inativo' },
                      { id: 'draft', name: 'Rascunho' },
                    ]}
                    helperText="Controla visibilidade/uso do produto."
                  />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • <b>Ativo</b>: disponível para uso no estoque/vendas. <br />
                    • <b>Rascunho</b>: dados incompletos. <br />
                    • <b>Inativo</b>: bloqueia novas operações.
                  </Box>
                </Stack>
              </SectionCard>

              <SectionCard title="Dica">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Use SKU consistente para facilitar integrações e auditorias de inventário.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
