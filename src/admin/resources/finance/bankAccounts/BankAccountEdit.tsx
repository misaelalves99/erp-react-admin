// src/admin/resources/finance/bankAccounts/BankAccountEdit.tsx
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
import { erpFormSx, erpListSx } from './bankAccounts.sx';

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

export const BankAccountEdit = () => (
  <Edit title="Editar conta bancária" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar conta bancária
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize o cadastro do banco e o saldo inicial/atual.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Cadastro">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={7}>
                    <TextInput
                      source="name"
                      label="Conta"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: Conta principal, Caixa, Banco Inter PJ..."
                    />
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <TextInput
                      source="bank"
                      label="Banco"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: Itaú, Nubank, Santander..."
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <NumberInput
                      source="balance"
                      label="Saldo"
                      fullWidth
                      helperText="Saldo em BRL. Use negativo se necessário."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Observações">
                <TextInput
                  source="notes"
                  label="Notas internas (opcional)"
                  fullWidth
                  multiline
                  minRows={3}
                  helperText="Ex.: agência/conta, regras de conciliação, responsável..."
                />
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Governança">
                <Stack sx={{ gap: 16 }}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                    Para auditoria e conciliação, prefira registrar movimentações (pagamentos/lançamentos) ao invés de
                    editar saldo manualmente com frequência.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="externalId"
                    label="Referência externa (opcional)"
                    fullWidth
                    helperText="Ex.: ID em sistema legado."
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
