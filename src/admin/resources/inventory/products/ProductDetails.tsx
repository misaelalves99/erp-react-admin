// src/admin/resources/inventory/products/ProductDetails.tsx
import * as React from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { StatusField } from '../../../fields/StatusField';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './products.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /products/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const ProductDetails = () => (
  <Show title="Produto" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes do produto
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize cadastro, categoria e indicadores do produto.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Cadastro">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="sku" label="SKU" />
                <TextField source="name" label="Produto" />
                <ReferenceField source="categoryId" reference="categories" label="Categoria">
                  <TextField source="name" />
                </ReferenceField>
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Totais e observações">
              <SimpleShowLayout sx={erpDetailsSx}>
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
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Status">
              <Stack sx={{ gap: 16 }}>
                <SimpleShowLayout sx={erpDetailsSx}>
                  <StatusField source="status" label="Status" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Estoque baixo? Considere usar movimentações para ajustes e manter rastreabilidade.
                </Box>
              </Stack>
            </SectionCard>

            <SectionCard title="Referência externa">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="externalId" label="ID externo" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
