// src/admin/resources/fiscal/fiscalDocuments/FiscalDocumentEdit.tsx
import * as React from 'react';
import {
  DateTimeInput,
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
import { erpFormSx, erpListSx } from './fiscalDocuments.sx';

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

export const FiscalDocumentEdit = () => (
  <Edit title="Editar documento fiscal" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar documento fiscal
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize tipo, número, status, data de emissão e total.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Identificação">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <TextInput
                      source="type"
                      label="Tipo"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: NF-e, NFC-e, NFS-e."
                    />
                  </Grid>

                  <Grid item xs={12} md={7}>
                    <TextInput
                      source="number"
                      label="Número"
                      validate={required()}
                      fullWidth
                      helperText="Número do documento (série/numeração conforme padrão)."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Emissão e status">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="status"
                      label="Status"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: authorized, denied, canceled..."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <DateTimeInput
                      source="issuedAt"
                      label="Emitido em"
                      validate={required()}
                      fullWidth
                      helperText="Data/hora de emissão."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="total"
                      label="Total"
                      validate={required()}
                      fullWidth
                      helperText="Valor total do documento (BRL)."
                    />
                  </Grid>
                </Grid>

                <Divider
                  sx={{
                    mt: `${space[2]}px`,
                    opacity: 0.18,
                    borderColor: colors.border.subtle,
                  }}
                />

                <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Dica: para auditoria, evite alterar “number” e “issuedAt” após contabilização/fechamento.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Observações">
                <TextInput
                  source="notes"
                  label="Notas internas (opcional)"
                  fullWidth
                  multiline
                  minRows={3}
                  helperText="Ex.: motivo de cancelamento, referência do XML, observações contábeis."
                />
              </SectionCard>

              <SectionCard title="Conformidade">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                  Documentos fiscais costumam ter trilha de auditoria. Se precisar corrigir, prefira emissão de
                  documento complementar ou estorno conforme regra do seu processo.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Edit>
);
