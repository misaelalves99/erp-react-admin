// src/admin/resources/fiscal/taxRates/TaxRateDetails.tsx
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

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './taxRates.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /taxRates/:id/delete */}
    </TopToolbar>
  );
}

export const TaxRateDetails = () => (
  <Show title="Imposto / Alíquota" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes do imposto / alíquota
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize nome e percentual configurado.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Cadastro">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="name" label="Imposto" />
                <NumberField source="rate" label="Alíquota" options={{ style: 'percent', maximumFractionDigits: 2 }} />
              </SimpleShowLayout>

              <Divider sx={{ mt: `${space[2]}px`, opacity: 0.18, borderColor: colors.border.subtle }} />

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                Observação: o valor é armazenado em formato decimal (0.18 = 18%).
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
                <TextField source="code" label="Código" />
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Impacto">
              <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                Alterações de alíquota podem afetar cálculos fiscais e relatórios. Garanta alinhamento com a regra de
                vigência do seu processo.
              </Box>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
