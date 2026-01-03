// src/admin/resources/sales/salesOrders/index.ts
import { SalesOrderList } from './SalesOrderList';
import { SalesOrderCreate } from './SalesOrderCreate';
import { SalesOrderEdit } from './SalesOrderEdit';
import { SalesOrderDetails } from './SalesOrderDetails';
import { SalesOrderDelete } from './SalesOrderDelete';

export { SalesOrderList, SalesOrderCreate, SalesOrderEdit, SalesOrderDetails, SalesOrderDelete };

export const SalesOrders = {
  list: SalesOrderList,
  show: SalesOrderDetails,
  create: SalesOrderCreate,
  edit: SalesOrderEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se você quiser.
  delete: SalesOrderDelete,
};
