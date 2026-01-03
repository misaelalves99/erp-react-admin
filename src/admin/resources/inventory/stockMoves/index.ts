// src/admin/resources/inventory/stockMoves/index.ts
import { StockMoveList } from './StockMoveList';
import { StockMoveCreate } from './StockMoveCreate';
import { StockMoveEdit } from './StockMoveEdit';
import { StockMoveDetails } from './StockMoveDetails';
import { StockMoveDelete } from './StockMoveDelete';

export { StockMoveList, StockMoveCreate, StockMoveEdit, StockMoveDetails, StockMoveDelete };

export const StockMoves = {
  list: StockMoveList,
  show: StockMoveDetails,
  create: StockMoveCreate,
  edit: StockMoveEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: StockMoveDelete,
};
