// src/admin/resources/finance/bankAccounts/BankAccountList.tsx
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
  bankAccountActionIconSx,
  bankAccountDangerIconSx,
  bankAccountDatagridSx,
  bankAccountGhostBtnSx,
  bankAccountListSx,
  bankAccountPillBtnSx,
  bankAccountPrimaryBtnSx,
  bankAccountSearchWrapSx,
} from './bankAccounts.sx';

const filters = [
  <SearchInput key="q" source="q" alwaysOn placeholder="Buscar por conta, banco..." size="small" />,
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
          ...bankAccountSearchWrapSx,
          '& .MuiInputBase-root': {
            ...(bankAccountSearchWrapSx as any)['& .MuiInputBase-root'],
            borderRadius: 999, // pill
          },
        }}
      >
        <FilterForm filters={filters} />
      </Box>

      <Stack direction="row" justifyContent={{ xs: 'flex-end', sm: 'flex-start' }} sx={{ gap: `${space[2]}px` }}>
        <CreateButton
          label="Nova"
          variant="contained"
          sx={{ ...bankAccountPrimaryBtnSx, ...bankAccountPillBtnSx }}
        />
        <ExportButton
          label="Exportar"
          variant="outlined"
          sx={{ ...bankAccountGhostBtnSx, ...bankAccountPillBtnSx }}
        />
      </Stack>
    </Stack>
  );
}

function BankAccountRowActions() {
  const record = useRecordContext<any>();
  const resource = useResourceContext(); // "bankAccounts"
  if (!record?.id) return null;

  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ gap: `${space[1]}px`, pr: '4px' }}>
      <Tooltip title="Detalhes" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}/show`}
          size="small"
          sx={bankAccountActionIconSx}
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
          sx={bankAccountActionIconSx}
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
          sx={bankAccountDangerIconSx}
          aria-label="Excluir"
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export const BankAccountList = () => (
  <List
    title="Contas bancárias"
    sx={bankAccountListSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ mb: `${space[3]}px` }}>
      <PageHeader
        title="Contas bancárias"
        subtitle="Cadastre contas e acompanhe saldos (demo in-memory)."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Contas bancárias' },
        ]}
      />
    </Box>

    <SectionCard
      title="Lista"
      subtitle="Use a busca para filtrar por conta ou banco. Ações por linha à direita."
      right={
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: 12,
            color: colors.text.muted,
            lineHeight: 1.4,
          }}
        >
          Dica: mantenha nomes curtos e padronize o banco para facilitar relatórios.
        </Typography>
      }
    >
      <Datagrid sx={bankAccountDatagridSx} rowClick={false as any} bulkActionButtons={false}>
        <TextField source="name" label="Conta" />
        <TextField source="bank" label="Banco" />
        <NumberField source="balance" label="Saldo" options={{ style: 'currency', currency: 'BRL' }} />

        <FunctionField
          label="Ações"
          sortable={false}
          render={() => <BankAccountRowActions />}
          sx={{ textAlign: 'right' }}
        />
      </Datagrid>
    </SectionCard>
  </List>
);
