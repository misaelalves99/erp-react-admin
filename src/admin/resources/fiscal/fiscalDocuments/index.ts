// src/admin/resources/fiscal/fiscalDocuments/index.ts
import { FiscalDocumentList } from './FiscalDocumentList';
import { FiscalDocumentCreate } from './FiscalDocumentCreate';
import { FiscalDocumentEdit } from './FiscalDocumentEdit';
import { FiscalDocumentDetails } from './FiscalDocumentDetails';
import { FiscalDocumentDelete } from './FiscalDocumentDelete';

export { FiscalDocumentList, FiscalDocumentCreate, FiscalDocumentEdit, FiscalDocumentDetails, FiscalDocumentDelete };

export const FiscalDocuments = {
  list: FiscalDocumentList,
  show: FiscalDocumentDetails,
  create: FiscalDocumentCreate,
  edit: FiscalDocumentEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: FiscalDocumentDelete,
};
