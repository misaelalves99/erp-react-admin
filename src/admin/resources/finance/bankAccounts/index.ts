// src/admin/resources/finance/bankAccounts/index.ts
import { BankAccountList } from './BankAccountList';
import { BankAccountCreate } from './BankAccountCreate';
import { BankAccountEdit } from './BankAccountEdit';
import { BankAccountDetails } from './BankAccountDetails';

// ✅ precisa existir e exportar `BankAccountDelete` (veja o arquivo acima)
import { BankAccountDelete } from './BankAccountDelete';

export { BankAccountList, BankAccountCreate, BankAccountEdit, BankAccountDetails, BankAccountDelete };

/**
 * ✅ IMPORTANTE:
 * <Resource /> do react-admin NÃO aceita `delete` como prop.
 * ➜ O Delete fica exportado (BankAccountDelete) para rotas custom (CustomRoutes).
 */
export const BankAccounts = {
  list: BankAccountList,
  show: BankAccountDetails,
  create: BankAccountCreate,
  edit: BankAccountEdit,
};
