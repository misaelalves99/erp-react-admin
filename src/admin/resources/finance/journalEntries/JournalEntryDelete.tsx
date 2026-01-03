// src/admin/resources/finance/journalEntries/JournalEntryDelete.tsx
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
import { erpDetailsSx, erpListSx } from './journalEntries.sx';

function DeleteHeaderActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <EditButton label="Editar" />
    </TopToolbar>
  );
}

export const JournalEntryDelete = () => (
  <ErpDelete title="Excluir lançamento contábil" sx={erpListSx}>
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
          Excluir lançamento contábil
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
        Excluir lançamentos pode afetar conciliações e relatórios. Se possível, prefira registrar um lançamento reverso
        (estorno) para manter rastreabilidade.
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
                Resumo do lançamento
              </Typography>

              <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }} />

              <SimpleShowLayout sx={erpDetailsSx}>
                <TextField source="date" label="Data" />
                <TextField source="memo" label="Histórico" />
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
                Valores
              </Typography>

              <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle, mb: `${space[2]}px` }} />

              <SimpleShowLayout sx={erpDetailsSx}>
                <NumberField source="debit" label="Débito" options={{ style: 'currency', currency: 'BRL' }} />
                <NumberField source="credit" label="Crédito" options={{ style: 'currency', currency: 'BRL' }} />
              </SimpleShowLayout>

              <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                Se a intenção é corrigir erro, considere criar um lançamento compensatório ao invés de apagar.
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </ErpDelete>
);
