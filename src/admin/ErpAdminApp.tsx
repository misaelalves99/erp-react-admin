// src/admin/ErpAdminApp.tsx
import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from 'react-router-dom';

import { dataProvider } from './providers/dataProvider';
import { authProvider } from './providers/authProvider';
import { ErpLayout } from './layout/ErpLayout';
import { erpTheme } from './theme/theme';
import { Dashboard } from './dashboard/Dashboard';

import { HelpPage } from './pages/HelpPage';
import { ReportsPage } from './pages/ReportsPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';

import { Customers, SalesOrders, SalesInvoices } from './resources/sales';
import { Suppliers, PurchaseOrders, PurchaseBills } from './resources/purchases';
import { Products, Categories, Warehouses, StockMoves } from './resources/inventory';
import { BankAccounts, Payments, JournalEntries } from './resources/finance';
import { TaxRates, FiscalDocuments } from './resources/fiscal';

// DELETE (CustomRoutes)
import { CustomerDelete } from './resources/sales/customers/CustomerDelete';
import { SalesOrderDelete } from './resources/sales/salesOrders/SalesOrderDelete';
import { SalesInvoiceDelete } from './resources/sales/salesInvoices/SalesInvoiceDelete';
import { SupplierDelete } from './resources/purchases/suppliers/SupplierDelete';
import { PurchaseOrderDelete } from './resources/purchases/purchaseOrders/PurchaseOrderDelete';
import { PurchaseBillDelete } from './resources/purchases/purchaseBills/PurchaseBillDelete';
import { ProductDelete } from './resources/inventory/products/ProductDelete';
import { CategoryDelete } from './resources/inventory/categories/CategoryDelete';
import { WarehouseDelete } from './resources/inventory/warehouses/WarehouseDelete';
import { StockMoveDelete } from './resources/inventory/stockMoves/StockMoveDelete';
import { BankAccountDelete } from './resources/finance/bankAccounts/BankAccountDelete';
import { PaymentDelete } from './resources/finance/payments/PaymentDelete';
import { JournalEntryDelete } from './resources/finance/journalEntries/JournalEntryDelete';
import { TaxRateDelete } from './resources/fiscal/taxRates/TaxRateDelete';
import { FiscalDocumentDelete } from './resources/fiscal/fiscalDocuments/FiscalDocumentDelete';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import { AppMetaProvider } from '../core/contexts/AppMetaContext';

export function ErpAdminApp() {
  return (
    <AppMetaProvider value={{ appName: 'ERP Admin Pro', version: '0.2.0' }}>
      <Admin
        title="ERP Admin Pro"
        dataProvider={dataProvider}
        authProvider={authProvider}
        dashboard={Dashboard}
        layout={ErpLayout}
        theme={erpTheme}
        loginPage={LoginPage}
        requireAuth
      >
        <CustomRoutes noLayout>
          <Route path="/register" element={<RegisterPage />} />
        </CustomRoutes>

        <CustomRoutes>
          <Route path="/help" element={<HelpPage />} />
          <Route path="/reports" element={<ReportsPage />} />

          {/* ✅ Delete via rotas custom (um por resource) */}
          <Route path="/customers/:id/delete" element={<CustomerDelete />} />
          <Route path="/salesOrders/:id/delete" element={<SalesOrderDelete />} />
          <Route path="/salesInvoices/:id/delete" element={<SalesInvoiceDelete />} />

          <Route path="/suppliers/:id/delete" element={<SupplierDelete />} />
          <Route path="/purchaseOrders/:id/delete" element={<PurchaseOrderDelete />} />
          <Route path="/purchaseBills/:id/delete" element={<PurchaseBillDelete />} />

          <Route path="/products/:id/delete" element={<ProductDelete />} />
          <Route path="/categories/:id/delete" element={<CategoryDelete />} />
          <Route path="/warehouses/:id/delete" element={<WarehouseDelete />} />
          <Route path="/stockMoves/:id/delete" element={<StockMoveDelete />} />

          <Route path="/bankAccounts/:id/delete" element={<BankAccountDelete />} />
          <Route path="/payments/:id/delete" element={<PaymentDelete />} />
          <Route path="/journalEntries/:id/delete" element={<JournalEntryDelete />} />

          <Route path="/taxRates/:id/delete" element={<TaxRateDelete />} />
          <Route path="/fiscalDocuments/:id/delete" element={<FiscalDocumentDelete />} />
        </CustomRoutes>

        {/* VENDAS */}
        <Resource name="customers" {...Customers} icon={PeopleAltOutlinedIcon} />
        <Resource name="salesOrders" {...SalesOrders} icon={ShoppingCartOutlinedIcon} />
        <Resource name="salesInvoices" {...SalesInvoices} icon={ReceiptLongOutlinedIcon} />

        {/* COMPRAS */}
        <Resource name="suppliers" {...Suppliers} icon={LocalShippingOutlinedIcon} />
        <Resource name="purchaseOrders" {...PurchaseOrders} icon={FormatListBulletedOutlinedIcon} />
        <Resource name="purchaseBills" {...PurchaseBills} icon={ReceiptLongOutlinedIcon} />

        {/* ESTOQUE */}
        <Resource name="categories" {...Categories} icon={FormatListBulletedOutlinedIcon} />
        <Resource name="products" {...Products} icon={Inventory2OutlinedIcon} />
        <Resource name="warehouses" {...Warehouses} icon={AccountBalanceOutlinedIcon} />
        <Resource name="stockMoves" {...StockMoves} icon={Inventory2OutlinedIcon} />

        {/* FINANCEIRO */}
        <Resource name="bankAccounts" {...BankAccounts} icon={AccountBalanceOutlinedIcon} />
        <Resource name="payments" {...Payments} icon={PaidOutlinedIcon} />
        <Resource name="journalEntries" {...JournalEntries} icon={DescriptionOutlinedIcon} />

        {/* FISCAL */}
        <Resource name="taxRates" {...TaxRates} icon={GavelOutlinedIcon} />
        <Resource name="fiscalDocuments" {...FiscalDocuments} icon={DescriptionOutlinedIcon} />
      </Admin>
    </AppMetaProvider>
  );
}
