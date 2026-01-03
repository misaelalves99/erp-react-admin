// src/admin/resources/inventory/stockMoves/StockMoveEdit.tsx
import * as React from 'react';
import {
  DateTimeInput,
  Edit,
  ListButton,
  NumberInput,
  ReferenceInput,
  required,
  SaveButton,
  SelectInput,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
} from 'react-admin';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './stockMoves.sx';

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

export const StockMoveEdit = () => (
  <Edit title="Editar movimentação" actions={<EditActions />} redirect="list" sx={erpListSx}>
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
          Editar movimentação de estoque
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize produto, depósito, tipo, quantidade e motivo da movimentação.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <Grid container spacing={2}>
          {/* Esquerda */}
          <Grid item xs={12} md={8}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Movimentação">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <ReferenceInput source="productId" reference="products" label="Produto">
                      <SelectInput optionText="name" fullWidth validate={required()} />
                    </ReferenceInput>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <ReferenceInput source="warehouseId" reference="warehouses" label="Depósito">
                      <SelectInput optionText="name" fullWidth validate={required()} />
                    </ReferenceInput>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <SelectInput
                      source="type"
                      label="Tipo"
                      validate={required()}
                      fullWidth
                      choices={[
                        { id: 'IN', name: 'Entrada (IN)' },
                        { id: 'OUT', name: 'Saída (OUT)' },
                        { id: 'ADJ', name: 'Ajuste (ADJ)' },
                      ]}
                      helperText="Entrada, saída ou ajuste."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <NumberInput
                      source="qty"
                      label="Quantidade"
                      validate={required()}
                      defaultValue={1}
                      fullWidth
                      helperText="Valor positivo."
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <DateTimeInput
                      source="createdAt"
                      label="Data"
                      fullWidth
                      helperText="Data/hora do evento."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextInput
                      source="reason"
                      label="Motivo"
                      fullWidth
                      helperText="Ex.: Ajuste inventário, avaria, reposição..."
                    />
                  </Grid>
                </Grid>
              </SectionCard>

              <SectionCard title="Notas internas">
                <TextInput
                  source="notes"
                  label="Notas (opcional)"
                  fullWidth
                  multiline
                  minRows={3}
                  helperText="Detalhes adicionais para auditoria."
                />
              </SectionCard>
            </Stack>
          </Grid>

          {/* Direita */}
          <Grid item xs={12} md={4}>
            <Stack sx={{ gap: 16 }}>
              <SectionCard title="Boas práticas">
                <Stack sx={{ gap: 16 }}>
                  <Box sx={{ color: colors.text.muted, fontSize: 13, lineHeight: 1.65 }}>
                    • Use <b>Ajuste</b> para correções de inventário. <br />
                    • Registre um <b>motivo</b> claro para auditoria. <br />
                    • Prefira manter histórico e evitar exclusões.
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
