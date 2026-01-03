// src/admin/resources/inventory/products/ProductList.tsx
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

import { PageHeader } from '../../../../ui/PageHeader';
import { SectionCard } from '../../../../ui/SectionCard';
import { colors, radius, space, typography } from '../../../../design/tokens';

import {
  productActionIconSx,
  productDangerIconSx,
  productDatagridSx,
  productGhostBtnSx,
  productListSx,
  productPillBtnSx,
  productPrimaryBtnSx,
  productSearchWrapSx,
} from './products.sx';

const filters = [
  <SearchInput
    key="q"
    source="q"
    alwaysOn
    placeholder="Buscar por SKU, nome, categoria..."
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
          ...productSearchWrapSx,
          '& .MuiInputBase-root': {
            ...(productSearchWrapSx as any)['& .MuiInputBase-root'],
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
        <CreateButton label="Novo" variant="contained" sx={{ ...productPrimaryBtnSx, ...productPillBtnSx }} />
        <ExportButton label="Exportar" variant="outlined" sx={{ ...productGhostBtnSx, ...productPillBtnSx }} />
      </Stack>
    </Stack>
  );
}

function ProductRowActions() {
  const record = useRecordContext<any>();
  const resource = useResourceContext(); // "products"
  if (!record?.id) return null;

  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ gap: `${space[1]}px`, pr: '4px' }}>
      <Tooltip title="Detalhes" arrow>
        <IconButton
          component={RouterLink}
          to={`/${resource}/${record.id}/show`}
          size="small"
          sx={productActionIconSx}
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
          sx={productActionIconSx}
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
          sx={productDangerIconSx}
          aria-label="Excluir"
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

/**
 * ✅ Status “enterprise” com pill + fundo.
 */
function ProductStatusPill() {
  const record = useRecordContext<any>();
  const raw = String(record?.status ?? '').trim();
  const s = raw.toLowerCase();

  const tone =
    s.includes('ativo') || s.includes('active') || s.includes('enabled') || s.includes('public')
      ? 'success'
      : s.includes('inativo') || s.includes('inactive') || s.includes('disabled')
        ? 'danger'
        : s.includes('rascun') || s.includes('draft')
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

export const ProductList = () => (
  <List
    title="Produtos"
    sx={productListSx}
    actions={false as any}
    perPage={25}
    sort={{ field: 'id', order: 'DESC' }}
  >
    <Box sx={{ mb: `${space[3]}px` }}>
      <PageHeader
        title="Produtos"
        subtitle="Catálogo + status + estoque (demo)."
        right={<HeaderRight />}
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard', to: '/' },
          { label: 'Produtos' },
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
          Dica: mantenha SKU único e atualize o estoque após movimentações.
        </Typography>
      }
    >
      <Datagrid sx={productDatagridSx} rowClick={false as any} bulkActionButtons={false}>
        <TextField source="sku" label="SKU" />
        <TextField source="name" label="Produto" />

        <ReferenceField source="categoryId" reference="categories" label="Categoria">
          <TextField source="name" />
        </ReferenceField>

        <NumberField source="price" label="Preço" options={{ style: 'currency', currency: 'BRL' }} />
        <NumberField source="cost" label="Custo" options={{ style: 'currency', currency: 'BRL' }} />
        <NumberField source="stock" label="Estoque" />

        <FunctionField label="Status" sortable={false} render={() => <ProductStatusPill />} />

        <FunctionField
          label="Ações"
          sortable={false}
          render={() => <ProductRowActions />}
          sx={{ textAlign: 'right' }}
        />
      </Datagrid>
    </SectionCard>
  </List>
);
