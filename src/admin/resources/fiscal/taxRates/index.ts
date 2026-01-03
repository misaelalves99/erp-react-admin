// src/admin/resources/fiscal/taxRates/index.ts
import { TaxRateList } from './TaxRateList';
import { TaxRateCreate } from './TaxRateCreate';
import { TaxRateEdit } from './TaxRateEdit';
import { TaxRateDetails } from './TaxRateDetails';
import { TaxRateDelete } from './TaxRateDelete';

export { TaxRateList, TaxRateCreate, TaxRateEdit, TaxRateDetails, TaxRateDelete };

export const TaxRates = {
  list: TaxRateList,
  show: TaxRateDetails,
  create: TaxRateCreate,
  edit: TaxRateEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: TaxRateDelete,
};
