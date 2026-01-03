// src/admin/resources/finance/payments/PaymentList.tsx
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
import { StatusField } from '../../../fields/StatusField';

import { PageHeader } from '../../../../ui/PageHeader';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, space, typography } from '../../../../design/tokens';

import {
  paymentActionIconSx,
  paymentDangerIconSx,
  paymentDatagridSx,
  paymentGhostBtnSx,
  paymentListSx,
  paymentPillBtnSx,
  paymentPrimaryBtnSx,
  paymentSearchWrapSx,
} from './payments.sx';

const filters = [
  <SearchInput
    key="q"
    source="q"
    alwaysOn
    placeholder="Buscar por referência, conta, status..."
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
          ...paymentSearchWrapSx,
          '& .MuiInputBase-root': {
            ...(paymentSearchWrapSx as any)['& .MuiInputBase-root'],
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
          sx={{ ...paymentPrimaryBtnSx, ...paymentPillBtnSx }}
        />
        <ExportButton
          label="Exportar"
          variant="outlined"
          sx={{ ...paymentGhostBtnSx, ...paymentPillBtnSx }}
        />
      </Stack>
    </Stack>
  );
}

function PaymentRowActions() {
  const record = useRecordContext<any>();
  const resource = useResourceContext(); // "payments"
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
          sx={paymentActionIconSx}
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
          sx={paymentActionIconSx}
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
          sx={paymentDangerIconSx}
          aria-label="Excluir"
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export const PaymentList = () => (
  <List
    title="Pagamentos"
    sx={paymentListSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ mb: `${space[3]}px` }}>
      <PageHeader
        title="Pagamentos"
        subtitle="Registre entradas/saídas e concilie por conta (demo)."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Pagamentos' },
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
          Dica: use “Status” para acompanhar pendências e conciliação.
        </Typography>
      }
    >
      <Datagrid
        sx={paymentDatagridSx}
        rowClick={false as any}
        bulkActionButtons={false}
      >
        <TextField source="kind" label="Entrada/Saída" />

        <ReferenceField source="bankAccountId" reference="bankAccounts" label="Conta">
          <TextField source="name" />
        </ReferenceField>

        <TextField source="reference" label="Referência" />

        <StatusField source="status" label="Status" />

        <DateTimeField source="paidAt" label="Pago em" />

        <NumberField source="amount" label="Valor" options={{ style: 'currency', currency: 'BRL' }} />

        <FunctionField
          label="Ações"
          sortable={false}
          render={() => <PaymentRowActions />}
          sx={{ textAlign: 'right' }}
        />
      </Datagrid>
    </SectionCard>
  </List>
);
