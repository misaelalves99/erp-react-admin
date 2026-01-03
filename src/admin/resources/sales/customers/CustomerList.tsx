// src/admin/resources/sales/customers/CustomerList.tsx
import * as React from 'react';
import {
  CreateButton,
  Datagrid,
  EmailField,
  ExportButton,
  FilterForm,
  FunctionField,
  List,
  SearchInput,
  TextField,
  useResourceContext,
} from 'react-admin';
import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { PageHeader } from '../../../../ui/PageHeader';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, radius, shadows, typography } from '../../../../design/tokens';

import {
  customerDatagridSx,
  customerGhostBtnSx,
  customerListShellSx,
  customerPrimaryBtnSx,
  customerSearchWrapSx,
} from './customers.sx';

const filters = [
  <SearchInput
    key="q"
    source="q"
    alwaysOn
    placeholder="Buscar por nome, documento, e-mail..."
    size="small"
  />,
];

const PAGE_GAP = '16px';
const ACTION_GAP = '12px';

function HeaderRight() {
  const pillBtnSx = {
    borderRadius: radius.pill,
    height: '42px',
    paddingLeft: '18px',
    paddingRight: '18px',
    fontWeight: 900,
    letterSpacing: '0.2px',
    boxShadow: shadows.soft,
    textTransform: 'none',
    '&:hover': { boxShadow: shadows.lift, transform: 'translateY(-1px)' },
    '&:active': { transform: 'translateY(0px)' },
    transition: 'transform 140ms ease, box-shadow 140ms ease',
  } as const;

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'stretch', sm: 'center' }}
      sx={{
        width: { xs: '100%', md: 'auto' },
        gap: ACTION_GAP, // ✅ gap em px real
      }}
    >
      {/* ✅ Busca “pill” */}
      <Box
        sx={{
          ...customerSearchWrapSx,
          '& .MuiInputBase-root': {
            borderRadius: radius.pill,
            backgroundColor: colors.glass.panel,
            border: `1px solid ${colors.border.default}`,
            boxShadow: shadows.soft,
            backdropFilter: colors.glass.blur,
            WebkitBackdropFilter: colors.glass.blur,
            transition:
              'border-color 140ms ease, box-shadow 140ms ease, background-color 140ms ease',
          },
          '& .MuiInputBase-root:hover': {
            borderColor: colors.border.strong,
            backgroundColor: colors.action.hover,
            boxShadow: shadows.lift,
          },
          '& .MuiInputBase-root.Mui-focused': {
            borderColor: colors.border.strong,
            boxShadow: shadows.lift,
          },
        }}
      >
        <FilterForm filters={filters} />
      </Box>

      <Stack
        direction="row"
        sx={{
          gap: '10px',
          justifyContent: { xs: 'flex-end', sm: 'flex-start' },
        }}
      >
        <CreateButton variant="contained" label="Novo" sx={{ ...customerPrimaryBtnSx, ...pillBtnSx }} />
        <ExportButton variant="outlined" label="Exportar" sx={{ ...customerGhostBtnSx, ...pillBtnSx }} />
      </Stack>
    </Stack>
  );
}

const actionIconSx = {
  width: '40px',
  height: '40px',
  borderRadius: radius.pill,
  border: `1px solid ${colors.border.default}`,
  backgroundColor: colors.glass.panel,
  boxShadow: shadows.soft,
  backdropFilter: colors.glass.blur,
  WebkitBackdropFilter: colors.glass.blur,

  '& svg': { opacity: 0.95 },

  '&:hover': {
    borderColor: colors.border.strong,
    backgroundColor: colors.action.hover,
    transform: 'translateY(-1px)',
    boxShadow: shadows.lift,
  },
  '&:active': { transform: 'translateY(0px)' },
  transition:
    'transform 140ms ease, box-shadow 140ms ease, background-color 140ms ease, border-color 140ms ease',
} as const;

const dangerIconSx = {
  ...actionIconSx,
  borderColor: 'rgba(255, 66, 66, 0.35)',
  '&:hover': {
    ...actionIconSx['&:hover'],
    borderColor: 'rgba(255, 66, 66, 0.70)',
    backgroundColor: 'rgba(255, 66, 66, 0.10)',
  },
} as const;

function CustomerRowActions(props: { record?: any }) {
  const record = props.record;
  const resource = useResourceContext(); // "customers"

  if (!record?.id) return null;

  return (
    <Stack direction="row" sx={{ gap: '8px', justifyContent: 'flex-end' }}>
      <Tooltip title="Detalhes" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}/show`}
          size="small"
          sx={actionIconSx}
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
          sx={actionIconSx}
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
          sx={dangerIconSx}
          aria-label="Excluir"
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

function CustomerStatusPill(props: { record?: any }) {
  const raw = String(props.record?.status ?? '').trim();
  const s = raw.toLowerCase();

  const tone =
    s.includes('ativo') ||
    s.includes('aberto') ||
    s.includes('open') ||
    s.includes('active')
      ? 'success'
      : s.includes('inativo') || s.includes('bloq') || s.includes('blocked') || s.includes('cancel')
        ? 'danger'
        : 'info';

  const toneStyles =
    tone === 'success'
      ? { fg: '#03CEA4', bg: 'rgba(3, 206, 164, 0.14)', bd: 'rgba(3, 206, 164, 0.35)' }
      : tone === 'danger'
        ? { fg: '#FF4242', bg: 'rgba(255, 66, 66, 0.12)', bd: 'rgba(255, 66, 66, 0.30)' }
        : { fg: '#03F7EB', bg: 'rgba(3, 247, 235, 0.12)', bd: 'rgba(3, 247, 235, 0.28)' };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        paddingLeft: '12px',
        paddingRight: '12px',
        height: '30px',
        borderRadius: radius.pill,
        border: `1px solid ${toneStyles.bd}`,
        backgroundColor: toneStyles.bg,
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
        whiteSpace: 'nowrap',
      }}
    >
      <Box
        sx={{
          width: '7px',
          height: '7px',
          borderRadius: radius.pill,
          backgroundColor: toneStyles.fg,
          boxShadow: `0 0 0 4px ${toneStyles.bg}`,
        }}
      />
      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: 12,
          fontWeight: 900,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: toneStyles.fg,
        }}
      >
        {raw || '—'}
      </Typography>
    </Box>
  );
}

export const CustomerList = () => (
  <List
    title="Clientes"
    sx={customerListShellSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ marginBottom: PAGE_GAP }}>
      <PageHeader
        title="Clientes"
        subtitle="Base de clientes e status (demo)."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Clientes' },
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
          Dica: clique em “Detalhes” para visualizar o registro completo.
        </Typography>
      }
    >
      <Datagrid
        sx={{
          ...customerDatagridSx,

          // ✅ coluna ações alinhada e com respiro
          '& .column-actions, & .column-actions *': {
            textAlign: 'right',
          },

          // ✅ melhora leitura: fonte do “Cliente” um pouco mais forte
          '& .RaDatagrid-rowCell.column-name': {
            color: colors.text.primary,
            fontWeight: 700,
          },
        }}
        rowClick={false as any}
        bulkActionButtons={false}
      >
        <TextField source="id" label="ID" />
        <TextField source="name" label="Cliente" />
        <TextField source="document" label="CNPJ/CPF" />
        <EmailField source="email" label="Email" />
        <TextField source="city" label="Cidade" />

        <FunctionField
          label="Status"
          sortable={false}
          render={(record) => <CustomerStatusPill record={record} />}
        />

        <FunctionField
          label="Ações"
          sortable={false}
          render={(record) => <CustomerRowActions record={record} />}
          sx={{ textAlign: 'right' }}
        />
      </Datagrid>
    </SectionCard>
  </List>
);
