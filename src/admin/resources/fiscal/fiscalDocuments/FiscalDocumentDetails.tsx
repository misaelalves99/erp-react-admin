// src/admin/resources/fiscal/fiscalDocuments/FiscalDocumentDetails.tsx
import * as React from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { DateTimeField } from '../../../fields/DateTimeField';
import { StatusField } from '../../../fields/StatusField';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './fiscalDocuments.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /fiscalDocuments/:id/delete */}
    </TopToolbar>
  );
}

export const FiscalDocumentDetails = () => (
  <Show title="Documento fiscal" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes do documento fiscal
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize tipo, numeração, status, emissão e total.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Identificação">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="type" label="Tipo" />
                <TextField source="number" label="Número" />
                <StatusField source="status" label="Status" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Emissão e valores">
              <SimpleShowLayout sx={erpDetailsSx}>
                <DateTimeField source="issuedAt" label="Emitido em" />
                <NumberField source="total" label="Total" options={{ style: 'currency', currency: 'BRL' }} />
              </SimpleShowLayout>

              <Divider sx={{ mt: `${space[2]}px`, opacity: 0.18, borderColor: colors.border.subtle }} />

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                Para auditoria, mantenha histórico de alterações e preferências de correção conforme seu fluxo fiscal.
              </Box>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Metadados">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="id" label="ID" />
                <TextField source="externalId" label="ID externo" />
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Checklist fiscal">
              <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                Verifique: tipo correto, numeração, status “authorized” e total compatível com o pedido/serviço.
              </Box>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
