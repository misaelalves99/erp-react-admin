// src/admin/resources/finance/journalEntries/JournalEntryCreate.tsx
import * as React from 'react';
import {
  Create,
  DateTimeInput,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  Toolbar,
  SaveButton,
  ListButton,
  TopToolbar,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { todayIso } from '../../../../core/utils/date';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './journalEntries.sx';

function CreateActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
    </TopToolbar>
  );
}

function CreateToolbar() {
  return (
    <Toolbar sx={{ px: 0, pb: 0 }}>
      <div style={{ display: 'flex', gap: 8, width: '100%', justifyContent: 'flex-end' }}>
        <ListButton label="Cancelar" />
        <SaveButton label="Salvar" alwaysEnable />
      </div>
    </Toolbar>
  );
}

export const JournalEntryCreate = () => (
  <Create title="Novo lançamento contábil" actions={<CreateActions />} redirect="list" sx={erpListSx}>
    <Box sx={{ mt: `${space[2]}px`, mx: 'auto', width: '100%', maxWidth: 1040 }}>
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
          Criar lançamento contábil
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Registre débitos/créditos com histórico para auditoria e relatórios.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados do lançamento">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <DateTimeInput
                      source="date"
                      label="Data"
                      defaultValue={todayIso()}
                      validate={required()}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <SelectInput
                      source="type"
                      label="Tipo"
                      defaultValue="manual"
                      fullWidth
                      choices={[
                        { id: 'manual', name: 'Manual' },
                        { id: 'adjustment', name: 'Ajuste' },
                        { id: 'reversal', name: 'Estorno' },
                      ]}
                      helperText="Classificação do lançamento."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="memo"
                      label="Histórico"
                      validate={required()}
                      fullWidth
                      helperText="Descreva o motivo do lançamento."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Valores">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="debit"
                      label="Débito"
                      defaultValue={0}
                      fullWidth
                      helperText="Informe 0 se não houver débito."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="credit"
                      label="Crédito"
                      defaultValue={0}
                      fullWidth
                      helperText="Informe 0 se não houver crédito."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="reference"
                      label="Referência (opcional)"
                      fullWidth
                      helperText="Ex.: NF-1023, pagamento #889, conciliação…"
                    />
                  </Grid>
                </Grid>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Validação">
                <Stack sx={{ gap: 16 }}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    Regra recomendada: preencher apenas <b>Débito</b> ou <b>Crédito</b> por lançamento (ou garantir
                    balanço em lançamentos complementares).
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="notes"
                    label="Notas (opcional)"
                    fullWidth
                    multiline
                    minRows={3}
                    helperText="Observações internas."
                  />
                </Stack>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
