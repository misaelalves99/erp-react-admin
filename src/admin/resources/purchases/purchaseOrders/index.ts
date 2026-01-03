// src/admin/resources/purchases/purchaseOrders/index.ts
import { PurchaseOrderList } from './PurchaseOrderList';
import { PurchaseOrderCreate } from './PurchaseOrderCreate';
import { PurchaseOrderEdit } from './PurchaseOrderEdit';
import { PurchaseOrderDetails } from './PurchaseOrderDetails';
import { PurchaseOrderDelete } from './PurchaseOrderDelete';

export { PurchaseOrderList, PurchaseOrderCreate, PurchaseOrderEdit, PurchaseOrderDetails, PurchaseOrderDelete };

export const PurchaseOrders = {
  list: PurchaseOrderList,
  show: PurchaseOrderDetails,
  create: PurchaseOrderCreate,
  edit: PurchaseOrderEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: PurchaseOrderDelete,
};
