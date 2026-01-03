// src/admin/resources/purchases/suppliers/index.ts
import { SupplierList } from './SupplierList';
import { SupplierCreate } from './SupplierCreate';
import { SupplierEdit } from './SupplierEdit';
import { SupplierDetails } from './SupplierDetails';
import { SupplierDelete } from './SupplierDelete';

export { SupplierList, SupplierCreate, SupplierEdit, SupplierDetails, SupplierDelete };

export const Suppliers = {
  list: SupplierList,
  show: SupplierDetails,
  create: SupplierCreate,
  edit: SupplierEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: SupplierDelete,
};
