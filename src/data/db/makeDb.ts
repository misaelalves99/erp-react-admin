// src/data/db/makeDb.ts
import { customers, salesOrders, salesInvoices } from '../mock/sales';
import { suppliers, purchaseOrders, purchaseBills } from '../mock/purchases';
import { categories, products, warehouses, stockMoves } from '../mock/inventory';
import { bankAccounts, payments, journalEntries } from '../mock/finance';
import { taxRates, fiscalDocuments } from '../mock/fiscal';

export function makeDb() {
  return {
    customers,
    salesOrders,
    salesInvoices,
    suppliers,
    purchaseOrders,
    purchaseBills,
    categories,
    products,
    warehouses,
    stockMoves,
    bankAccounts,
    payments,
    journalEntries,
    taxRates,
    fiscalDocuments,
  } as const;
}
