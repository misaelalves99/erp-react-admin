// src/admin/resources/purchases/purchaseBills/index.ts
import { PurchaseBillList } from './PurchaseBillList';
import { PurchaseBillCreate } from './PurchaseBillCreate';
import { PurchaseBillEdit } from './PurchaseBillEdit';
import { PurchaseBillDetails } from './PurchaseBillDetails';
import { PurchaseBillDelete } from './PurchaseBillDelete';

export { PurchaseBillList, PurchaseBillCreate, PurchaseBillEdit, PurchaseBillDetails, PurchaseBillDelete };

export const PurchaseBills = {
  list: PurchaseBillList,
  show: PurchaseBillDetails,
  create: PurchaseBillCreate,
  edit: PurchaseBillEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: PurchaseBillDelete,
};
