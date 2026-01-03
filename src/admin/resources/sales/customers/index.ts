// src/admin/resources/sales/customers/index.ts
import { CustomerList } from './CustomerList';
import { CustomerCreate } from './CustomerCreate';
import { CustomerEdit } from './CustomerEdit';
import { CustomerDetails } from './CustomerDetails';
import { CustomerDelete } from './CustomerDelete';

// Re-export (útil pra imports diretos)
export { CustomerList, CustomerCreate, CustomerEdit, CustomerDetails, CustomerDelete };

// Mantém o mesmo padrão de "resource object" que você estava usando
export const Customers = {
  list: CustomerList,
  show: CustomerDetails,
  create: CustomerCreate,
  edit: CustomerEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se você quiser.
  delete: CustomerDelete,
};
