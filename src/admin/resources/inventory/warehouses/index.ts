// src/admin/resources/inventory/warehouses/index.ts
import { WarehouseList } from './WarehouseList';
import { WarehouseCreate } from './WarehouseCreate';
import { WarehouseEdit } from './WarehouseEdit';
import { WarehouseDetails } from './WarehouseDetails';
import { WarehouseDelete } from './WarehouseDelete';

export { WarehouseList, WarehouseCreate, WarehouseEdit, WarehouseDetails, WarehouseDelete };

export const Warehouses = {
  list: WarehouseList,
  show: WarehouseDetails,
  create: WarehouseCreate,
  edit: WarehouseEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: WarehouseDelete,
};
