// src/admin/resources/fiscal/taxRates/TaxRateEdit.tsx
import * as React from 'react';
import {
  Edit,
  ListButton,
  NumberInput,
  required,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './taxRates.sx';

function EditActions() {
  return (
    <TopToolbar>
      <ListButton label="Voltar" />
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

export const TaxRateEdit = () => (
  <Edit title="Editar imposto" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar imposto / alíquota
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize o nome e a alíquota. Use formato decimal (ex.: 0.18 = 18%).
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Cadastro">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextInput
                      source="name"
                      label="Imposto"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: ICMS, ISS, PIS/COFINS."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="rate"
                      label="Alíquota"
                      validate={required()}
                      fullWidth
                      helperText="Use decimal: 0.18 = 18%."
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ mt: `${space[2]}px`, opacity: 0.18, borderColor: colors.border.subtle }} />

                <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Dica: mantenha a nomenclatura consistente com seu plano fiscal e relatórios.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Exemplos rápidos">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.7 }}>
                  • 0.07 = 7% <br />
                  • 0.12 = 12% <br />
                  • 0.18 = 18% <br />
                  • 0.235 = 23,5%
                </Box>
              </SectionCard>

              <SectionCard title="Boas práticas">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Se houver histórico contábil, evite editar alíquotas antigas: crie um novo registro para vigência
                  diferente (ex.: “ICMS 18% (2025)”).
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Edit>
);
