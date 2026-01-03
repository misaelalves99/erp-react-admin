// src/admin/resources/finance/journalEntries/JournalEntryEdit.tsx
import * as React from 'react';
import {
  Edit,
  ListButton,
  NumberInput,
  required,
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './journalEntries.sx';

function EditActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
      <ShowButton label="Detalhes" />
    </TopToolbar>
  );
}

function EditToolbar() {
  return (
    <Toolbar sx={{ px: 0, pb: 0 }}>
      <div style={{ display: 'flex', gap: 8, width: '100%', justifyContent: 'flex-end' }}>
        <ListButton label="Cancelar" />
        <SaveButton label="Salvar alterações" alwaysEnable />
      </div>
    </Toolbar>
  );
}

export const JournalEntryEdit = () => (
  <Edit title="Editar lançamento contábil" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar lançamento contábil
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize a data, histórico e valores de débito/crédito.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Lançamento">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="date"
                      label="Data"
                      validate={required()}
                      fullWidth
                      helperText="Formato livre (ex.: 2025-12-27) ou conforme seu backend."
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <TextInput
                      source="memo"
                      label="Histórico"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: Ajuste de saldo, tarifa bancária, estorno..."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Valores">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <NumberInput source="debit" label="Débito" fullWidth helperText="Valor em BRL (saída)." />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput source="credit" label="Crédito" fullWidth helperText="Valor em BRL (entrada)." />
                  </Grid>
                </Grid>

                <Divider sx={{ mt: `${space[2]}px`, opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Boas práticas: para evitar inconsistências, utilize apenas um dos campos (débito OU crédito) por
                  lançamento — conforme a regra do seu domínio.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Governança">
                <Stack sx={{ gap: 16 }}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                    Lançamentos contábeis impactam relatórios e conciliação. Evite edições repetidas.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="externalId"
                    label="Referência externa (opcional)"
                    fullWidth
                    helperText="Ex.: ID do sistema legado."
                  />

                  <TextInput
                    source="notes"
                    label="Notas internas (opcional)"
                    fullWidth
                    multiline
                    minRows={3}
                    helperText="Ex.: motivo detalhado, evidências, anexos (quando houver)."
                  />
                </Stack>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Edit>
);
