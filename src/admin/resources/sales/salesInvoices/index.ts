// src/admin/resources/sales/salesInvoices/index.ts
import { SalesInvoiceList } from './SalesInvoiceList';
import { SalesInvoiceCreate } from './SalesInvoiceCreate';
import { SalesInvoiceEdit } from './SalesInvoiceEdit';
import { SalesInvoiceDetails } from './SalesInvoiceDetails';
import { SalesInvoiceDelete } from './SalesInvoiceDelete';

export { SalesInvoiceList, SalesInvoiceCreate, SalesInvoiceEdit, SalesInvoiceDetails, SalesInvoiceDelete };

export const SalesInvoices = {
  list: SalesInvoiceList,
  show: SalesInvoiceDetails,
  create: SalesInvoiceCreate,
  edit: SalesInvoiceEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se você quiser.
  delete: SalesInvoiceDelete,
};
