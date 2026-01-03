// src/admin/resources/inventory/categories/index.ts
import { CategoryList } from './CategoryList';
import { CategoryCreate } from './CategoryCreate';
import { CategoryEdit } from './CategoryEdit';
import { CategoryDetails } from './CategoryDetails';
import { CategoryDelete } from './CategoryDelete';

export { CategoryList, CategoryCreate, CategoryEdit, CategoryDetails, CategoryDelete };

export const Categories = {
  list: CategoryList,
  show: CategoryDetails,
  create: CategoryCreate,
  edit: CategoryEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: CategoryDelete,
};
