// src/admin/resources/inventory/categories/CategoryEdit.tsx
import * as React from 'react';
import {
  Edit,
  ListButton,
  required,
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';
import { erpFormSx, erpListSx } from './categories.sx';

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

export const CategoryEdit = () => (
  <Edit title="Editar categoria" actions={<EditActions />} redirect="list" sx={erpListSx}>
    <Box sx={{ mt: `${space[2]}px`, mx: 'auto', width: '100%', maxWidth: 720 }}>
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
          Editar categoria
        </Typography>
        <Typography sx={{ mt: '4px', color: colors.text.muted, fontSize: 13 }}>
          Atualize o nome da categoria usada para classificar produtos.
        </Typography>
      </Box>

      <SimpleForm toolbar={<EditToolbar />} sx={erpFormSx}>
        <SectionCard title="Dados da categoria">
          <TextInput
            source="name"
            label="Categoria"
            validate={required()}
            fullWidth
            helperText="Ex.: Bebidas, Higiene, Limpeza..."
          />
        </SectionCard>

        <Box sx={{ mt: `${space[2]}px`, color: colors.text.muted, fontSize: 13, lineHeight: 1.6 }}>
          Dica: mantenha nomes consistentes e curtos para facilitar filtros e relatórios.
        </Box>
      </SimpleForm>
    </Box>
  </Edit>
);
