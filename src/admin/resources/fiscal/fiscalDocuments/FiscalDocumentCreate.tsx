// src/admin/resources/fiscal/fiscalDocuments/FiscalDocumentCreate.tsx
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
import { erpFormSx, erpListSx } from './fiscalDocuments.sx';

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

export const FiscalDocumentCreate = () => (
  <Create title="Novo documento fiscal" actions={<CreateActions />} redirect="list" sx={erpListSx}>
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
          Criar documento fiscal
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Registre tipo, numeração e valores para controle e auditoria fiscal.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados do documento">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SelectInput
                      source="type"
                      label="Tipo"
                      defaultValue="NF-e"
                      fullWidth
                      validate={required()}
                      choices={[
                        { id: 'NF-e', name: 'NF-e' },
                        { id: 'NFS-e', name: 'NFS-e' },
                        { id: 'CT-e', name: 'CT-e' },
                        { id: 'NFC-e', name: 'NFC-e' },
                      ]}
                      helperText="Selecione o tipo fiscal."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextInput
                      source="number"
                      label="Número"
                      validate={required()}
                      fullWidth
                      helperText="Numeração do documento."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <SelectInput
                      source="status"
                      label="Status"
                      defaultValue="authorized"
                      fullWidth
                      validate={required()}
                      choices={[
                        { id: 'authorized', name: 'Autorizado' },
                        { id: 'pending', name: 'Pendente' },
                        { id: 'denied', name: 'Negado' },
                        { id: 'canceled', name: 'Cancelado' },
                      ]}
                      helperText="Situação fiscal do documento."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Emissão e valores">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <DateTimeInput
                      source="issuedAt"
                      label="Emitido em"
                      defaultValue={todayIso()}
                      validate={required()}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="total"
                      label="Total"
                      defaultValue={0}
                      validate={required()}
                      fullWidth
                      helperText="Valor total do documento."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="notes"
                      label="Observações (opcional)"
                      fullWidth
                      multiline
                      minRows={3}
                      helperText="Notas internas / informações complementares."
                    />
                  </Grid>
                </Grid>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Boas práticas">
                <Stack sx={{ gap: 16 }}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    • Use numeração consistente para auditoria. <br />
                    • “Autorizado” deve ter data e total corretos. <br />
                    • “Cancelado” impede uso em relatórios operacionais.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="externalId"
                    label="Chave/ID externo (opcional)"
                    fullWidth
                    helperText="Ex.: chave de acesso, ID do emissor."
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
