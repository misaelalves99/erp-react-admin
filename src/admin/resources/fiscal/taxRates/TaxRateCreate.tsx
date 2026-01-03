// src/admin/resources/fiscal/taxRates/TaxRateCreate.tsx
import * as React from 'react';
import {
  Create,
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

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './taxRates.sx';

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

export const TaxRateCreate = () => (
  <Create title="Novo imposto" actions={<CreateActions />} redirect="list" sx={erpListSx}>
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
          Criar imposto / alíquota
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Cadastre impostos para aplicar em documentos e relatórios fiscais.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados do imposto">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <TextInput
                      source="name"
                      label="Imposto"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: ICMS, ISS, PIS, COFINS…"
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <SelectInput
                      source="kind"
                      label="Tipo"
                      defaultValue="percent"
                      fullWidth
                      choices={[
                        { id: 'percent', name: 'Percentual' },
                        { id: 'fixed', name: 'Valor fixo' },
                      ]}
                      helperText="Como a alíquota é aplicada."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="rate"
                      label="Alíquota"
                      defaultValue={0}
                      validate={required()}
                      fullWidth
                      helperText="Percentual em decimal. Ex.: 0.18 = 18%."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <SelectInput
                      source="status"
                      label="Status"
                      defaultValue="active"
                      fullWidth
                      validate={required()}
                      choices={[
                        { id: 'active', name: 'Ativo' },
                        { id: 'inactive', name: 'Inativo' },
                      ]}
                      helperText="Impostos inativos não devem ser usados."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="notes"
                      label="Observações (opcional)"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Detalhes internos (regras, UF, exceções)."
                    />
                  </Grid>
                </Grid>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Exemplo rápido">
                <Stack sx={{ gap: 16 }}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • 18% → informe <b>0.18</b> <br />
                    • 12% → informe <b>0.12</b> <br />
                    • 1,65% → informe <b>0.0165</b>
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    Dica: padronize nomes (ICMS, ISS) para facilitar filtros e relatórios.
                  </Box>
                </Stack>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
