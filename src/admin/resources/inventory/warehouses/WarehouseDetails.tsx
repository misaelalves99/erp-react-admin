// src/admin/resources/inventory/warehouses/WarehouseDetails.tsx
import * as React from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  BooleanField,
  EditButton,
  ListButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './warehouses.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /warehouses/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const WarehouseDetails = () => (
  <Show title="Depósito" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes do depósito
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize o cadastro, cidade e se este depósito é o principal.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Cadastro">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="name" label="Depósito" />
                <TextField source="city" label="Cidade" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Observações">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Governança">
              <Stack sx={{ gap: 16 }}>
                <SimpleShowLayout sx={erpDetailsSx}>
                  <BooleanField source="isMain" label="Depósito principal" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <SimpleShowLayout sx={erpDetailsSx}>
                  <TextField source="externalId" label="ID externo" />
                </SimpleShowLayout>

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Se houver mais de um “principal”, defina apenas um para evitar comportamento ambíguo.
                </Box>
              </Stack>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
