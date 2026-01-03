// src/admin/resources/finance/journalEntries/JournalEntryDetails.tsx
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
import { erpDetailsSx, erpListSx } from './journalEntries.sx';

function ShowActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
      {/* Delete via rota custom /journalEntries/:id/delete (ícone na list) */}
    </TopToolbar>
  );
}

export const JournalEntryDetails = () => (
  <Show title="Lançamento contábil" actions={<ShowActions />} sx={erpListSx}>
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
          Detalhes do lançamento contábil
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Visualize data, histórico e valores do lançamento.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Esquerda */}
        <Grid item xs={12} md={8}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Lançamento">
              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="date" label="Data" />
                <TextField source="memo" label="Histórico" />
              </SimpleShowLayout>
            </SectionCard>

            <SectionCard title="Valores">
              <SimpleShowLayout sx={erpDetailsSx}>
                <NumberField source="debit" label="Débito" options={{ style: 'currency', currency: 'BRL' }} />
                <NumberField source="credit" label="Crédito" options={{ style: 'currency', currency: 'BRL' }} />
              </SimpleShowLayout>

              <Divider sx={{ mt: `${space[2]}px`, opacity: 0.18, borderColor: colors.border.subtle }} />

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                Observação: a regra de “débito/crédito” depende do seu modelo contábil. Ajuste a validação no backend
                quando necessário.
              </Box>
            </SectionCard>
          </Stack>
        </Grid>

        {/* Direita */}
        <Grid item xs={12} md={4}>
          <Stack sx={{ gap: 16 }}>
            <SectionCard title="Referência">
              <Stack sx={{ gap: 16 }}>
                <SimpleShowLayout sx={erpDetailsSx}>
                  <TextField source="externalId" label="ID externo" />
                  <TextField source="notes" label="Notas internas" />
                </SimpleShowLayout>

                <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Dica: use Pagamentos para registrar transações e Lançamentos para ajustes/contabilidade interna.
                </Box>
              </Stack>
            </SectionCard>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Show>
);
