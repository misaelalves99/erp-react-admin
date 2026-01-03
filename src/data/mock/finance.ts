// src/data/mock/finance.ts
export const bankAccounts = [
  { id: 1, name: 'Banco do Brasil • 1234-5', bank: 'Banco do Brasil', balance: 150000 },
  { id: 2, name: 'Itaú • 7890-1', bank: 'Itaú', balance: 82000 },
];

export const payments = [
  { id: 1, bankAccountId: 1, kind: 'OUT', reference: 'BILL-3001', status: 'paid', paidAt: '2025-12-10T10:00:00.000Z', amount: 12000 },
  { id: 2, bankAccountId: 2, kind: 'IN', reference: 'NF-9001', status: 'paid', paidAt: '2025-12-12T10:00:00.000Z', amount: 399.9 },
];

export const journalEntries = [
  { id: 1, date: '2025-12-10', memo: 'Pagamento parcial BILL-3001', debit: 12000, credit: 12000 },
  { id: 2, date: '2025-12-12', memo: 'Recebimento NF-9001', debit: 399.9, credit: 399.9 },
];
