// src/admin/resources/inventory/stockMoves/StockMoveList.tsx
import {
  CreateButton,
  Datagrid,
  ExportButton,
  FilterForm,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  SearchInput,
  TextField,
  useRecordContext,
  useResourceContext,
} from 'react-admin';
import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { DateTimeField } from '../../../fields/DateTimeField';
import { PageHeader } from '../../../../ui/PageHeader';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';

import {
  stockMoveActionIconSx,
  stockMoveDangerIconSx,
  stockMoveDatagridSx,
  stockMoveGhostBtnSx,
  stockMoveListSx,
  stockMovePillBtnSx,
  stockMovePrimaryBtnSx,
  stockMoveSearchWrapSx,
} from './stockMoves.sx';

const filters = [
  <SearchInput
    key="q"
    source="q"
    alwaysOn
    placeholder="Buscar por produto, depósito, tipo, motivo..."
    size="small"
  />,
];

function HeaderRight() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'stretch', sm: 'center' }}
      sx={{
        width: { xs: '100%', md: 'auto' },
        gap: { xs: '12px', sm: `${space[2]}px` }, // ✅ gap em px (sem theme.spacing)
      }}
    >
      <Box
        sx={{
          ...stockMoveSearchWrapSx,
          '& .MuiInputBase-root': {
            ...(stockMoveSearchWrapSx as any)['& .MuiInputBase-root'],
            borderRadius: 999, // pill
          },
        }}
      >
        <FilterForm filters={filters} />
      </Box>

      <Stack
        direction="row"
        justifyContent={{ xs: 'flex-end', sm: 'flex-start' }}
        sx={{ gap: `${space[2]}px` }}
      >
        <CreateButton
          label="Novo"
          variant="contained"
          sx={{ ...stockMovePrimaryBtnSx, ...stockMovePillBtnSx }}
        />
        <ExportButton
          label="Exportar"
          variant="outlined"
          sx={{ ...stockMoveGhostBtnSx, ...stockMovePillBtnSx }}
        />
      </Stack>
    </Stack>
  );
}

function StockMoveRowActions() {
  const record = useRecordContext<any>();
  const resource = useResourceContext(); // "stockMoves"
  if (!record?.id) return null;

  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ gap: `${space[1]}px`, pr: '4px' }}>
      <Tooltip title="Detalhes" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}/show`}
          size="small"
          sx={stockMoveActionIconSx}
          aria-label="Detalhes"
        >
          <VisibilityOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Editar" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}`}
          size="small"
          sx={stockMoveActionIconSx}
          aria-label="Editar"
        >
          <EditOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Excluir" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}/delete`}
          size="small"
          sx={stockMoveDangerIconSx}
          aria-label="Excluir"
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export const StockMoveList = () => (
  <List
    title="Movimentações"
    sx={stockMoveListSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ mb: `${space[3]}px` }}>
      <PageHeader
        title="Movimentações"
        subtitle="Entradas/saídas/ajustes de estoque (demo)."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Movimentações' },
        ]}
      />
    </Box>

    <SectionCard
      title="Lista"
      subtitle="Registre entradas, saídas e ajustes com histórico e motivo para auditoria."
      right={
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: 12,
            color: colors.text.muted,
            lineHeight: 1.4,
          }}
        >
          Dica: mantenha o “Motivo” sempre preenchido para rastreabilidade.
        </Typography>
      }
    >
      <Datagrid sx={stockMoveDatagridSx} rowClick={false as any} bulkActionButtons={false}>
        <ReferenceField source="productId" reference="products" label="Produto">
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField source="warehouseId" reference="warehouses" label="Depósito">
          <TextField source="name" />
        </ReferenceField>

        <TextField source="type" label="Tipo" />
        <NumberField source="qty" label="Qtd" />
        <TextField source="reason" label="Motivo" />
        <DateTimeField source="createdAt" label="Data" />

        <FunctionField
          label="Ações"
          sortable={false}
          render={() => <StockMoveRowActions />}
          sx={{ textAlign: 'right' }}
        />
      </Datagrid>
    </SectionCard>
  </List>
);
