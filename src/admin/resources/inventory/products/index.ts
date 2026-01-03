// src/admin/resources/inventory/products/index.ts
import { ProductList } from './ProductList';
import { ProductCreate } from './ProductCreate';
import { ProductEdit } from './ProductEdit';
import { ProductDetails } from './ProductDetails';
import { ProductDelete } from './ProductDelete';

export { ProductList, ProductCreate, ProductEdit, ProductDetails, ProductDelete };

export const Products = {
  list: ProductList,
  show: ProductDetails,
  create: ProductCreate,
  edit: ProductEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: ProductDelete,
};
