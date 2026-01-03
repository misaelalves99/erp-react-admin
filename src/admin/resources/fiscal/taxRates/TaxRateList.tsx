// src/admin/resources/fiscal/taxRates/TaxRateList.tsx
import {
  CreateButton,
  Datagrid,
  ExportButton,
  FilterForm,
  FunctionField,
  List,
  NumberField,
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

import { PageHeader } from '../../../../ui/PageHeader';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';

import {
  taxRateActionIconSx,
  taxRateDangerIconSx,
  taxRateDatagridSx,
  taxRateGhostBtnSx,
  taxRateListSx,
  taxRatePillBtnSx,
  taxRatePrimaryBtnSx,
  taxRateSearchWrapSx,
} from './taxRates.sx';

const filters = [
  <SearchInput key="q" source="q" alwaysOn placeholder="Buscar por imposto..." size="small" />,
];

function HeaderRight() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'stretch', sm: 'center' }}
      sx={{
        width: { xs: '100%', md: 'auto' },
        gap: { xs: '12px', sm: `${space[2]}px` }, // ✅ gap em px
      }}
    >
      <Box
        sx={{
          ...taxRateSearchWrapSx,
          '& .MuiInputBase-root': {
            ...(taxRateSearchWrapSx as any)['& .MuiInputBase-root'],
            borderRadius: 999,
          },
        }}
      >
        <FilterForm filters={filters} />
      </Box>

      <Stack direction="row" justifyContent={{ xs: 'flex-end', sm: 'flex-start' }} sx={{ gap: `${space[2]}px` }}>
        <CreateButton label="Novo" variant="contained" sx={{ ...taxRatePrimaryBtnSx, ...taxRatePillBtnSx }} />
        <ExportButton label="Exportar" variant="outlined" sx={{ ...taxRateGhostBtnSx, ...taxRatePillBtnSx }} />
      </Stack>
    </Stack>
  );
}

function TaxRateRowActions() {
  const record = useRecordContext<any>();
  const resource = useResourceContext(); // "taxRates"
  if (!record?.id) return null;

  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ gap: `${space[1]}px`, pr: '4px' }}>
      <Tooltip title="Detalhes" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}/show`}
          size="small"
          sx={taxRateActionIconSx}
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
          sx={taxRateActionIconSx}
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
          sx={taxRateDangerIconSx}
          aria-label="Excluir"
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export const TaxRateList = () => (
  <List
    title="Impostos / Alíquotas"
    sx={taxRateListSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ mb: `${space[3]}px` }}>
      <PageHeader
        title="Impostos / Alíquotas"
        subtitle="Cadastre impostos e taxas (demo)."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Impostos / Alíquotas' },
        ]}
      />
    </Box>

    <SectionCard
      title="Lista"
      subtitle="Use a busca para filtrar rapidamente. Ações por linha à direita."
      right={
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: 12,
            color: colors.text.muted,
            lineHeight: 1.4,
          }}
        >
          Dica: cadastre ICMS/ISS/PIS/COFINS e use em documentos.
        </Typography>
      }
    >
      <Datagrid sx={taxRateDatagridSx} rowClick={false as any} bulkActionButtons={false}>
        <TextField source="name" label="Imposto" />
        <NumberField source="rate" label="Alíquota" options={{ style: 'percent', maximumFractionDigits: 2 }} />

        <FunctionField label="Ações" sortable={false} render={() => <TaxRateRowActions />} sx={{ textAlign: 'right' }} />
      </Datagrid>
    </SectionCard>
  </List>
);
