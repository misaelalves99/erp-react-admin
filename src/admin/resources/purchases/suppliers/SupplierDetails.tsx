// src/admin/resources/purchases/suppliers/SupplierDetails.tsx
import * as React from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  EmailField,
  ListButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { StatusField } from '../../../fields/StatusField';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './suppliers.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /suppliers/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const SupplierDetails = () => (
  <Show title="Fornecedor" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes do fornecedor
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize dados cadastrais, contato e status do fornecedor.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <SectionCard title="Cadastro">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="id" label="ID" />
                <TextField source="name" label="Fornecedor" />
                <TextField source="document" label="CNPJ/CPF" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Contato e localização">
              <SimpleShowLayout sx={erpDetailsSx}>
                <EmailField source="email" label="Email" />
                <TextField source="phone" label="Telefone" />
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
          <Stack spacing={2}>
            <SectionCard title="Status">
              <Stack spacing={2}>
                <SimpleShowLayout sx={erpDetailsSx}>
                  <StatusField source="status" label="Status" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Se necessário, bloqueie o fornecedor para impedir novas compras sem apagar
                  histórico.
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
