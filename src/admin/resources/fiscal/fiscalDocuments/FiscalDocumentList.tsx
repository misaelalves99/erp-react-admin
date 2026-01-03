// src/admin/resources/fiscal/fiscalDocuments/FiscalDocumentList.tsx
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

import { DateTimeField } from '../../../fields/DateTimeField';
import { StatusField } from '../../../fields/StatusField';

import { PageHeader } from '../../../../ui/PageHeader';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';

import {
  fiscalDocumentActionIconSx,
  fiscalDocumentDangerIconSx,
  fiscalDocumentDatagridSx,
  fiscalDocumentGhostBtnSx,
  fiscalDocumentListSx,
  fiscalDocumentPillBtnSx,
  fiscalDocumentPrimaryBtnSx,
  fiscalDocumentSearchWrapSx,
} from './fiscalDocuments.sx';

const filters = [
  <SearchInput
    key="q"
    source="q"
    alwaysOn
    placeholder="Buscar por tipo, número, status..."
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
      {/* ✅ Busca com pill + glass */}
      <Box
        sx={{
          ...fiscalDocumentSearchWrapSx,
          '& .MuiInputBase-root': {
            ...(fiscalDocumentSearchWrapSx as any)['& .MuiInputBase-root'],
            borderRadius: 999,
          },
        }}
      >
        <FilterForm filters={filters} />
      </Box>

      {/* ✅ Botões */}
      <Stack
        direction="row"
        justifyContent={{ xs: 'flex-end', sm: 'flex-start' }}
        sx={{ gap: `${space[2]}px` }} // ✅ gap em px
      >
        <CreateButton
          label="Novo"
          variant="contained"
          sx={{ ...fiscalDocumentPrimaryBtnSx, ...fiscalDocumentPillBtnSx }}
        />
        <ExportButton
          label="Exportar"
          variant="outlined"
          sx={{ ...fiscalDocumentGhostBtnSx, ...fiscalDocumentPillBtnSx }}
        />
      </Stack>
    </Stack>
  );
}

function FiscalDocumentRowActions() {
  const record = useRecordContext<any>();
  const resource = useResourceContext(); // "fiscalDocuments"
  if (!record?.id) return null;

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      sx={{ gap: `${space[1]}px`, pr: '4px' }} // ✅ gap em px
    >
      <Tooltip title="Detalhes" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}/show`}
          size="small"
          sx={fiscalDocumentActionIconSx}
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
          sx={fiscalDocumentActionIconSx}
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
          sx={fiscalDocumentDangerIconSx}
          aria-label="Excluir"
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export const FiscalDocumentList = () => (
  <List
    title="Documentos fiscais"
    sx={fiscalDocumentListSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ mb: `${space[3]}px` }}>
      <PageHeader
        title="Documentos fiscais"
        subtitle="NF-e/CT-e/NFS-e (demo). Evolua para integrações e validações reais."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Documentos fiscais' },
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
          Dica: use “Status” para acompanhar rascunho/emitida/cancelada.
        </Typography>
      }
    >
      <Datagrid
        sx={fiscalDocumentDatagridSx}
        rowClick={false as any}
        bulkActionButtons={false}
      >
        <TextField source="type" label="Tipo" />
        <TextField source="number" label="Número" />
        <StatusField source="status" label="Status" />
        <DateTimeField source="issuedAt" label="Emitido em" />
        <NumberField source="total" label="Total" options={{ style: 'currency', currency: 'BRL' }} />

        <FunctionField
          label="Ações"
          sortable={false}
          render={() => <FiscalDocumentRowActions />}
          sx={{ textAlign: 'right' }}
        />
      </Datagrid>
    </SectionCard>
  </List>
);
