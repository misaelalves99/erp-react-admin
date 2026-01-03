// src/admin/resources/fiscal/taxRates/TaxRateDelete.tsx
import * as React from 'react';
import { Alert, Box, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  EditButton,
  ListButton,
  NumberField,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';

import { ErpDelete } from '../../../../ui/ErpDelete';
import { colors, space, typography } from '../../../../design/tokens';
import { erpDetailsSx, erpListSx } from './taxRates.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const TaxRateDelete = () => (
  <ErpDelete title="Excluir imposto / alíquota" sx={erpListSx}>
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
          Excluir imposto / alíquota
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Confirme os dados antes de excluir. Esta ação é irreversível.
        </Typography>
      </Box>

      {/* Ações rápidas */}
      <Box sx={{ mb: `${space[2]}px` }}>
        <DeleteHeaderActions />
      </Box>

      <Alert severity="warning" sx={{ mb: `${space[2]}px`, borderRadius: 0 }}>
        Excluir alíquotas pode quebrar cálculos e relatórios de períodos anteriores. Se houver histórico, prefira manter
        o registro e criar uma nova alíquota para outra vigência.
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
                Resumo
              </Typography>

              <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }} />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="name" label="Imposto" />
                <NumberField source="rate" label="Alíquota" options={{ style: 'percent', maximumFractionDigits: 2 }} />
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
                Metadados
              </Typography>

              <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }} />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="id" label="ID" />
                <TextField source="code" label="Código" />
                <TextField source="notes" label="Notas internas" />
              </SimpleShowLayout>

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                Se você só precisa desativar temporariamente, use um campo “active” no modelo (se existir) em vez de
                excluir.
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </ErpDelete>
);
