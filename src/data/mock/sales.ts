// src/data/mock/sales.ts
export const customers = [
  { id: 1, name: 'ACME Comércio LTDA', document: '12.345.678/0001-99', email: 'compras@acme.com', phone: '(31) 99999-1111', city: 'Belo Horizonte', status: 'open' },
  { id: 2, name: 'Nova Opção Eletros', document: '45.987.654/0001-10', email: 'financeiro@novaopcao.com', phone: '(11) 98888-2222', city: 'São Paulo', status: 'open' },
];

export const salesOrders = [
  { id: 1001, customerId: 1, number: 'SO-1001', status: 'open', createdAt: '2025-12-03T10:00:00.000Z', total: 5759.7 },
  { id: 1002, customerId: 2, number: 'SO-1002', status: 'approved', createdAt: '2025-12-04T10:00:00.000Z', total: 399.9 },
];

export const salesInvoices = [
  { id: 9001, salesOrderId: 1002, number: 'NF-9001', status: 'paid', issuedAt: '2025-12-05T10:00:00.000Z', total: 399.9 },
];
