// src/admin/resources/inventory/stockMoves/StockMoveCreate.tsx
import * as React from 'react';
import {
  Create,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
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
import { erpFormSx, erpListSx } from './stockMoves.sx';

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

export const StockMoveCreate = () => (
  <Create title="Nova movimentação" actions={<CreateActions />} redirect="list" sx={erpListSx}>
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
          Registrar movimentação de estoque
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Use para entrada, saída ou ajuste de estoque com rastreabilidade.
        </Typography>
      </Box>

      <SimpleForm toolbar={<CreateToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Referências">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <ReferenceInput source="productId" reference="products" label="Produto">
                      <SelectInput optionText="name" validate={required()} fullWidth />
                    </ReferenceInput>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <ReferenceInput source="warehouseId" reference="warehouses" label="Depósito">
                      <SelectInput optionText="name" validate={required()} fullWidth />
                    </ReferenceInput>
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Movimentação">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <SelectInput
                      source="type"
                      label="Tipo"
                      defaultValue="IN"
                      fullWidth
                      validate={required()}
                      choices={[
                        { id: 'IN', name: 'Entrada' },
                        { id: 'OUT', name: 'Saída' },
                        { id: 'ADJ', name: 'Ajuste' },
                      ]}
                      helperText="Entrada, saída ou ajuste."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <NumberInput
                      source="qty"
                      label="Quantidade"
                      defaultValue={1}
                      validate={required()}
                      fullWidth
                      helperText="Qtd movimentada."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <DateTimeInput
                      source="createdAt"
                      label="Data"
                      defaultValue={todayIso()}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="reason"
                      label="Motivo"
                      defaultValue="Ajuste"
                      fullWidth
                      helperText="Ex.: inventário, avaria, devolução, reposição…"
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
                    • Use motivo claro para auditoria. <br />
                    • Para ajustes, registre a razão e data correta. <br />
                    • Confirme depósito para evitar divergências.
                  </Box>

                  <Divider sx={{ opacity: 0.18, borderColor: colors.border.subtle }} />

                  <TextInput
                    source="reference"
                    label="Referência (opcional)"
                    fullWidth
                    helperText="Ex.: OS-1023, NF-9981, inventário #12…"
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
