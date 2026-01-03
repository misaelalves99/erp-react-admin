// src/admin/resources/inventory/warehouses/WarehouseCreate.tsx
import * as React from 'react';
import {
  BooleanInput,
  Create,
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
import { erpFormSx, erpListSx } from './warehouses.sx';

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

export const WarehouseCreate = () => (
  <Create title="Novo depósito" actions={<CreateActions />} redirect="list" sx={erpListSx}>
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
          Cadastro de depósito
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Crie depósitos para segmentar estoque por local e facilitar movimentações.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Dados do depósito">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={7}>
                    <TextInput
                      source="name"
                      label="Depósito"
                      validate={required()}
                      fullWidth
                      helperText="Ex.: Central, Loja 01, CD-SP…"
                    />
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <TextInput source="city" label="Cidade" validate={required()} fullWidth />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="address"
                      label="Endereço (opcional)"
                      fullWidth
                      helperText="Rua, número, complemento."
                    />
                  </Grid>
                </Grid>
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Configuração">
                <Stack sx={{ gap: 16 }}>
                  <BooleanInput source="isMain" label="Depósito principal" defaultValue={false} />

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                    Marque como principal para usar como padrão em movimentações e recebimentos.
                  </Box>
                </Stack>
              </SectionCard>

              <SectionCard title="Dica">
                <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
                  Nomeie depósitos com padrão (ex.: CD-SP, LOJA-01) para manter consistência em
                  relatórios.
                </Box>
              </SectionCard>
            </Stack>
          </Grid>
        </Grid>
      </SimpleForm>
    </Box>
  </Create>
);
