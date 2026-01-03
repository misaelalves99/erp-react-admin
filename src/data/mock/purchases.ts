// src/data/mock/purchases.ts
export const suppliers = [
  { id: 1, name: 'Distribuidora Alpha', document: '11.222.333/0001-44', email: 'vendas@alpha.com', phone: '(21) 97777-3333', city: 'Rio de Janeiro', status: 'approved' },
  { id: 2, name: 'Indústria Beta', document: '55.666.777/0001-88', email: 'contato@beta.com', phone: '(31) 96666-4444', city: 'Contagem', status: 'approved' },
];

export const purchaseOrders = [
  { id: 2001, supplierId: 1, number: 'PO-2001', status: 'approved', createdAt: '2025-12-01T10:00:00.000Z', total: 42000 },
  { id: 2002, supplierId: 2, number: 'PO-2002', status: 'open', createdAt: '2025-12-02T10:00:00.000Z', total: 12500 },
];

export const purchaseBills = [
  { id: 3001, supplierId: 1, number: 'BILL-3001', status: 'open', dueAt: '2025-12-20T10:00:00.000Z', total: 42000 },
];
