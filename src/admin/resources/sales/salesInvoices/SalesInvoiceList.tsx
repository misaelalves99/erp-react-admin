// src/admin/resources/sales/salesInvoices/SalesInvoiceList.tsx
import * as React from 'react';
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
import { colors, radius, shadows, space, typography } from '../../../../design/tokens';

import {
  salesInvoiceDatagridSx,
  salesInvoiceGhostBtnSx,
  salesInvoiceListShellSx,
  salesInvoicePrimaryBtnSx,
  salesInvoiceSearchWrapSx,
} from './salesInvoices.sx';

const filters = [
  <SearchInput
    key="q"
    source="q"
    alwaysOn
    placeholder="Buscar por número, pedido..."
    size="small"
  />,
];

function HeaderRight() {
  const pillBtnSx = {
    borderRadius: radius.pill,
    height: 42,
    px: 2.2,
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
      spacing={space[2]}
      alignItems={{ xs: 'stretch', sm: 'center' }}
      sx={{ width: { xs: '100%', md: 'auto' } }}
    >
      {/* ✅ Barra de busca “pill” + glass (igual Clientes/SalesOrders) */}
      <Box
        sx={{
          ...salesInvoiceSearchWrapSx,
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

      {/* ✅ Ações com botões em pill */}
      <Stack direction="row" spacing={space[2]} justifyContent={{ xs: 'flex-end', sm: 'flex-start' }}>
        <CreateButton
          variant="contained"
          label="Novo"
          sx={{ ...salesInvoicePrimaryBtnSx, ...pillBtnSx }}
        />
        <ExportButton
          variant="outlined"
          label="Exportar"
          sx={{ ...salesInvoiceGhostBtnSx, ...pillBtnSx }}
        />
      </Stack>
    </Stack>
  );
}

const actionIconSx = {
  width: 40,
  height: 40,
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
  borderColor: `rgba(255, 66, 66, 0.35)`,
  '&:hover': {
    ...actionIconSx['&:hover'],
    borderColor: `rgba(255, 66, 66, 0.70)`,
    backgroundColor: 'rgba(255, 66, 66, 0.10)',
  },
} as const;

function SalesInvoiceRowActions() {
  const record = useRecordContext<any>();
  const resource = useResourceContext(); // "salesInvoices"

  if (!record?.id) return null;

  return (
    <Stack direction="row" spacing={space[1]} justifyContent="flex-end" sx={{ pr: 0.5 }}>
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

/**
 * ✅ Status “enterprise” (pill com fundo)
 * (substitui StatusField para garantir o visual profissional)
 */
function SalesInvoiceStatusPill() {
  const record = useRecordContext<any>();
  const raw = String(record?.status ?? '').trim();
  const s = raw.toLowerCase();

  const tone =
    s.includes('emit') ||
    s.includes('issued') ||
    s.includes('aprov') ||
    s.includes('pago') ||
    s.includes('final')
      ? 'success'
      : s.includes('cancel') || s.includes('reprov') || s.includes('erro')
        ? 'danger'
        : s.includes('pend') || s.includes('process') || s.includes('andamento')
          ? 'warning'
          : 'info';

  const toneStyles =
    tone === 'success'
      ? { fg: '#03CEA4', bg: 'rgba(3, 206, 164, 0.14)', bd: 'rgba(3, 206, 164, 0.35)' }
      : tone === 'danger'
        ? { fg: '#FF4242', bg: 'rgba(255, 66, 66, 0.12)', bd: 'rgba(255, 66, 66, 0.30)' }
        : tone === 'warning'
          ? { fg: '#FFD400', bg: 'rgba(255, 212, 0, 0.14)', bd: 'rgba(255, 212, 0, 0.28)' }
          : { fg: '#03F7EB', bg: 'rgba(3, 247, 235, 0.12)', bd: 'rgba(3, 247, 235, 0.28)' };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        height: 30,
        borderRadius: radius.pill,
        border: `1px solid ${toneStyles.bd}`,
        backgroundColor: toneStyles.bg,
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
        whiteSpace: 'nowrap',
      }}
    >
      <Box
        sx={{
          width: 7,
          height: 7,
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

export const SalesInvoiceList = () => (
  <List
    title="Faturas (NF)"
    sx={salesInvoiceListShellSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ mb: space[3] }}>
      <PageHeader
        title="Faturas (NF)"
        subtitle="Notas/faturas emitidas (demo)."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Faturas (NF)' },
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
          Dica: exporte a lista para CSV e valide a conciliação com o pedido.
        </Typography>
      }
    >
      <Datagrid
        sx={{
          ...salesInvoiceDatagridSx,

          // ✅ TABELA ARREDONDADA (wrapper) + visual premium
          '& .RaDatagrid-tableWrapper': {
            borderRadius: radius.lg,
            overflow: 'hidden',
            border: `1px solid ${colors.border.subtle}`,
            backgroundColor: colors.bg.surface[1],
            boxShadow: shadows.soft,
          },

          '& .RaDatagrid-headerCell': {
            fontWeight: 900,
            color: colors.text.muted,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            fontSize: 11,
            backgroundColor: colors.bg.surface[2],
            borderBottom: `1px solid ${colors.border.subtle}`,
          },

          '& .RaDatagrid-rowCell': {
            verticalAlign: 'middle',
            borderBottom: `1px solid ${colors.border.subtle}`,
            color: colors.text.secondary,
            fontFamily: typography.fontFamily,
          },

          '& .RaDatagrid-row': { transition: 'background-color 140ms ease' },
          '& .RaDatagrid-row:hover': { backgroundColor: colors.action.hover },
        }}
        rowClick={false as any}
        bulkActionButtons={false}
      >
        <TextField source="number" label="Fatura/NF" />

        <ReferenceField source="salesOrderId" reference="salesOrders" label="Pedido">
          <TextField source="number" />
        </ReferenceField>

        <DateTimeField source="issuedAt" label="Emitida em" />

        {/* ✅ Status com fundo */}
        <FunctionField label="Status" sortable={false} render={() => <SalesInvoiceStatusPill />} />

        <NumberField source="total" label="Total" options={{ style: 'currency', currency: 'BRL' }} />

        <FunctionField
          label="Ações"
          sortable={false}
          render={() => <SalesInvoiceRowActions />}
          sx={{ textAlign: 'right' }}
        />
      </Datagrid>
    </SectionCard>
  </List>
);
