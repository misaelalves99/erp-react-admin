// src/admin/resources/sales/customers/CustomerDetails.tsx
import * as React from 'react';
import {
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  ListButton,
  EditButton,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { StatusField } from '../../../fields/StatusField';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { customerDetailsTypographySx, customerListShellSx } from './customers.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete fica via ação de ícone nas Lists / rota custom /customers/:id/delete */}
    </TopToolbar>
  );
}

export const CustomerDetails = () => (
  <Show title="Cliente" actions={<ShowActions />} sx={customerListShellSx}>
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
          Detalhes do cliente
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize dados cadastrais e status atual do cliente.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <SectionCard title="Identificação">
              <SimpleShowLayout sx={customerDetailsTypographySx}>
                <TextField source="id" label="ID" />
                <TextField source="name" label="Cliente" />
                <TextField source="document" label="CNPJ/CPF" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Contato e localização">
              <SimpleShowLayout sx={customerDetailsTypographySx}>
                <EmailField source="email" label="E-mail" />
                <TextField source="phone" label="Telefone" />
                <TextField source="city" label="Cidade" />
                <TextField source="state" label="UF" />
                <TextField source="address" label="Endereço" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Observações">
              <SimpleShowLayout sx={customerDetailsTypographySx}>
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <SectionCard title="Status">
              <Stack spacing={2}>
                <SimpleShowLayout sx={customerDetailsTypographySx}>
                  <StatusField source="status" label="Status" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Status influencia operações vinculadas (pedidos/faturas). Para bloquear novas ações,
                  use <b>Bloqueado</b>.
                </Box>
              </Stack>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
