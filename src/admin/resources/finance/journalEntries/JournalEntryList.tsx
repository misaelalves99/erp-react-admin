// src/admin/resources/finance/journalEntries/JournalEntryList.tsx
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
  journalEntryActionIconSx,
  journalEntryDangerIconSx,
  journalEntryDatagridSx,
  journalEntryGhostBtnSx,
  journalEntryListSx,
  journalEntryPillBtnSx,
  journalEntryPrimaryBtnSx,
  journalEntrySearchWrapSx,
} from './journalEntries.sx';

const filters = [
  <SearchInput
    key="q"
    source="q"
    alwaysOn
    placeholder="Buscar por histórico, data, valores..."
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
        gap: { xs: '12px', sm: `${space[2]}px` },
      }}
    >
      <Box
        sx={{
          ...journalEntrySearchWrapSx,
          '& .MuiInputBase-root': {
            ...(journalEntrySearchWrapSx as any)['& .MuiInputBase-root'],
            borderRadius: 999, // pill
          },
        }}
      >
        <FilterForm filters={filters} />
      </Box>

      <Stack direction="row" justifyContent={{ xs: 'flex-end', sm: 'flex-start' }} sx={{ gap: `${space[2]}px` }}>
        <CreateButton
          label="Novo"
          variant="contained"
          sx={{ ...journalEntryPrimaryBtnSx, ...journalEntryPillBtnSx }}
        />
        <ExportButton
          label="Exportar"
          variant="outlined"
          sx={{ ...journalEntryGhostBtnSx, ...journalEntryPillBtnSx }}
        />
      </Stack>
    </Stack>
  );
}

function JournalEntryRowActions() {
  const record = useRecordContext<any>();
  const resource = useResourceContext(); // "journalEntries"
  if (!record?.id) return null;

  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ gap: `${space[1]}px`, pr: '4px' }}>
      <Tooltip title="Detalhes" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}/show`}
          size="small"
          sx={journalEntryActionIconSx}
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
          sx={journalEntryActionIconSx}
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
          sx={journalEntryDangerIconSx}
          aria-label="Excluir"
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export const JournalEntryList = () => (
  <List
    title="Lançamentos contábeis"
    sx={journalEntryListSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ mb: `${space[3]}px` }}>
      <PageHeader
        title="Lançamentos contábeis"
        subtitle="Registre débitos/créditos para conciliação (demo)."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Lançamentos contábeis' },
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
          Dica: registre “memo” de forma padronizada para facilitar auditoria e conciliação.
        </Typography>
      }
    >
      <Datagrid sx={journalEntryDatagridSx} rowClick={false as any} bulkActionButtons={false}>
        <TextField source="date" label="Data" />
        <TextField source="memo" label="Histórico" />
        <NumberField source="debit" label="Débito" options={{ style: 'currency', currency: 'BRL' }} />
        <NumberField source="credit" label="Crédito" options={{ style: 'currency', currency: 'BRL' }} />

        <FunctionField
          label="Ações"
          sortable={false}
          render={() => <JournalEntryRowActions />}
          sx={{ textAlign: 'right' }}
        />
      </Datagrid>
    </SectionCard>
  </List>
);
