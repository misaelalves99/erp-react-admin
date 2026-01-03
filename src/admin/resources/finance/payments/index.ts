// src/admin/resources/finance/payments/index.ts
import { PaymentList } from './PaymentList';
import { PaymentCreate } from './PaymentCreate';
import { PaymentEdit } from './PaymentEdit';
import { PaymentDetails } from './PaymentDetails';
import { PaymentDelete } from './PaymentDelete';

export { PaymentList, PaymentCreate, PaymentEdit, PaymentDetails, PaymentDelete };

export const Payments = {
  list: PaymentList,
  show: PaymentDetails,
  create: PaymentCreate,
  edit: PaymentEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: PaymentDelete,
};
