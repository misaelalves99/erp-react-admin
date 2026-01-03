// src/admin/layout/ErpMenu.tsx
import * as React from 'react';
import { Box, Divider, Tooltip, Typography } from '@mui/material';
import { Menu, MenuItemLink, useCreatePath, useResourceDefinitions } from 'react-admin';
import { colors, space, typography } from '../../design/tokens';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';

import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import WarehouseRoundedIcon from '@mui/icons-material/WarehouseRounded';
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';

import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

type Props = { open: boolean };

function SectionLabel({ children, open }: { children: string; open: boolean }) {
  if (!open) return null;

  return (
    <Typography
      sx={{
        mt: `${space[4]}px`,
        mb: `${space[2]}px`,
        px: `${space[3]}px`,
        color: colors.text.muted,
        fontFamily: typography.fontFamily,
        fontWeight: typography.weight.black,
        letterSpacing: typography.tracking.wide,
        textTransform: 'uppercase',
        fontSize: 11,
        opacity: 0.8,
      }}
    >
      {children}
    </Typography>
  );
}

function NavItem(props: { to: string; label: string; icon: React.ReactElement; open: boolean }) {
  const isOpen = props.open;

  const item = (
    <MenuItemLink
      to={props.to}
      primaryText={isOpen ? props.label : ''}
      leftIcon={props.icon}
      aria-label={props.label}
      sx={{
        mx: `${space[2]}px`,
        my: '3px',
        px: isOpen ? `${space[3]}px` : 0,
        py: '10px',
        justifyContent: isOpen ? 'flex-start' : 'center',
        overflow: 'hidden',

        '& .MuiListItemIcon-root': {
          minWidth: isOpen ? 40 : 'auto',
          margin: 0,
          color: colors.text.secondary,
        },

        '& .MuiListItemText-root': {
          display: isOpen ? 'block' : 'none',
          margin: 0,
        },

        '& .MuiTypography-root': {
          display: isOpen ? 'block' : 'none',
          fontFamily: typography.fontFamily,
          fontWeight: 800,
          fontSize: 13,
          color: colors.text.secondary,
        },

        '&.RaMenuItemLink-active': {
          backgroundColor: colors.action.selected,
          '& .MuiListItemIcon-root': { color: colors.text.primary },
          '& .MuiTypography-root': { color: colors.text.primary },
        },
      }}
    />
  );

  if (isOpen) return item;

  return (
    <Tooltip title={props.label} placement="right" arrow>
      <Box>{item}</Box>
    </Tooltip>
  );
}

function useResolvedMenuPaths() {
  const defs = useResourceDefinitions();
  const createPath = useCreatePath();

  const has = (name: string) => Boolean((defs as any)?.[name]);

  const resolve = (preferred: string, fallbacks: string[] = []) => {
    const candidates = [preferred, ...fallbacks];
    const found = candidates.find((name) => has(name));
    const resource = found ?? preferred;
    return createPath({ resource, type: 'list' });
  };

  return {
    // Vendas
    customers: resolve('customers'),
    salesOrders: resolve('salesOrders'),
    salesInvoices: resolve('salesInvoices'),

    // Compras
    suppliers: resolve('suppliers'),
    purchaseOrders: resolve('purchaseOrders'),
    purchaseBills: resolve('purchaseBills'),

    // Estoque
    products: resolve('products'),
    categories: resolve('categories'),
    warehouses: resolve('warehouses'),
    stockMoves: resolve('stockMoves'),

    // Financeiro
    bankAccounts: resolve('bankAccounts'),
    payments: resolve('payments'),
    journalEntries: resolve('journalEntries'),

    // Fiscal
    taxRates: resolve('taxRates'),
    fiscalDocuments: resolve('fiscalDocuments'),
  };
}

export function ErpMenu({ open }: Props) {
  const paths = useResolvedMenuPaths();

  return (
    <Menu sx={{ width: '100%', pt: open ? `${space[1]}px` : `${space[2]}px` }}>
      <NavItem open={open} to="/" label="Dashboard" icon={<DashboardRoundedIcon />} />

      <SectionLabel open={open}>Vendas</SectionLabel>
      <NavItem open={open} to={paths.customers} label="Clientes" icon={<PeopleAltRoundedIcon />} />
      <NavItem open={open} to={paths.salesOrders} label="Pedidos de venda" icon={<ShoppingCartRoundedIcon />} />
      <NavItem open={open} to={paths.salesInvoices} label="Faturas (NF)" icon={<ReceiptLongRoundedIcon />} />

      {open ? <Divider sx={{ my: `${space[3]}px`, opacity: 0.18, borderColor: colors.border.subtle }} /> : null}

      <SectionLabel open={open}>Compras</SectionLabel>
      <NavItem open={open} to={paths.suppliers} label="Fornecedores" icon={<LocalShippingRoundedIcon />} />
      <NavItem open={open} to={paths.purchaseOrders} label="Pedidos de compra" icon={<AssignmentRoundedIcon />} />
      <NavItem open={open} to={paths.purchaseBills} label="Contas a pagar" icon={<AccountBalanceWalletRoundedIcon />} />

      {open ? <Divider sx={{ my: `${space[3]}px`, opacity: 0.18, borderColor: colors.border.subtle }} /> : null}

      <SectionLabel open={open}>Estoque</SectionLabel>
      <NavItem open={open} to={paths.products} label="Produtos" icon={<Inventory2RoundedIcon />} />
      <NavItem open={open} to={paths.categories} label="Categorias" icon={<CategoryRoundedIcon />} />
      <NavItem open={open} to={paths.warehouses} label="Depósitos" icon={<WarehouseRoundedIcon />} />
      <NavItem open={open} to={paths.stockMoves} label="Movimentações" icon={<SyncAltRoundedIcon />} />

      {open ? <Divider sx={{ my: `${space[3]}px`, opacity: 0.18, borderColor: colors.border.subtle }} /> : null}

      <SectionLabel open={open}>Financeiro</SectionLabel>
      <NavItem open={open} to={paths.bankAccounts} label="Contas bancárias" icon={<AccountBalanceRoundedIcon />} />
      <NavItem open={open} to={paths.payments} label="Pagamentos" icon={<PaidRoundedIcon />} />
      <NavItem open={open} to={paths.journalEntries} label="Lançamentos" icon={<DescriptionRoundedIcon />} />

      {open ? <Divider sx={{ my: `${space[3]}px`, opacity: 0.18, borderColor: colors.border.subtle }} /> : null}

      <SectionLabel open={open}>Fiscal</SectionLabel>
      <NavItem open={open} to={paths.taxRates} label="Impostos" icon={<GavelRoundedIcon />} />
      <NavItem open={open} to={paths.fiscalDocuments} label="Documentos fiscais" icon={<ArticleRoundedIcon />} />
    </Menu>
  );
}
