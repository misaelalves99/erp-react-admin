// src/admin/resources/inventory/products/ProductDelete.tsx
import * as React from 'react';
import { Alert, Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  NumberField,
  ReferenceField,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { StatusField } from '../../../fields/StatusField';
import { ErpDelete } from '../../../../ui/ErpDelete';

import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './products.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const ProductDelete = () => (
  <ErpDelete title="Excluir produto" sx={erpListSx}>
    <Box sx={{ mx: 'auto', width: '100%', maxWidth: 1040 }}>
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
          Excluir produto
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Revise os dados abaixo antes de confirmar a exclusão.
        </Typography>
      </Box>

      {/* Ações rápidas */}
      <Box sx={{ mb: `${space[2]}px` }}>
        <DeleteHeaderActions />
      </Box>

      <Alert severity="warning" sx={{ mb: `${space[2]}px`, borderRadius: 0 }}>
        Se este produto estiver ligado a movimentações, pedidos ou relatórios, a exclusão pode causar
        inconsistências. Se for o caso, prefira marcar como <b>Inativo</b>.
      </Alert>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontWeight: 900,
                  letterSpacing: typography.tracking.tight,
                  color: colors.text.primary,
                  fontSize: 14,
                  mb: '6px',
                }}
              >
                Resumo do produto
              </Typography>

              <Divider
                sx={{
                  opacity: 0.18,
                  borderColor: colors.border.subtle,
                  mb: `${space[2]}px`,
                }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="sku" label="SKU" />
                <TextField source="name" label="Produto" />

                <ReferenceField source="categoryId" reference="categories" label="Categoria">
                  <TextField source="name" />
                </ReferenceField>

                <NumberField
                  source="price"
                  label="Preço"
                  options={{ style: 'currency', currency: 'BRL' }}
                />
                <NumberField
                  source="cost"
                  label="Custo"
                  options={{ style: 'currency', currency: 'BRL' }}
                />
                <NumberField source="stock" label="Estoque" />
              </SimpleShowLayout>
            </Box>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack sx={{ gap: 16 }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontWeight: 900,
                  letterSpacing: typography.tracking.tight,
                  color: colors.text.primary,
                  fontSize: 14,
                  mb: '6px',
                }}
              >
                Status atual
              </Typography>

              <Divider
                sx={{
                  opacity: 0.18,
                  borderColor: colors.border.subtle,
                  mb: `${space[2]}px`,
                }}
              />

              <SimpleShowLayout sx={erpDetailsSx}>
                <StatusField source="status" label="Status" />
              </SimpleShowLayout>

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                Recomendação: use <b>Inativo</b> para retirar de uso mantendo histórico.
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </ErpDelete>
);
