// src/data/mock/inventory.ts
export const categories = [
  { id: 1, name: 'Informática' },
  { id: 2, name: 'Casa & Cozinha' },
];

export const products = [
  { id: 1, sku: 'NOTE-001', name: 'Notebook Pro 14', categoryId: 1, price: 5499.9, cost: 4200, stock: 12, status: 'open' },
  { id: 2, sku: 'MOUSE-010', name: 'Mouse Wireless', categoryId: 1, price: 129.9, cost: 70, stock: 200, status: 'open' },
  { id: 3, sku: 'CAF-200', name: 'Cafeteira Inox', categoryId: 2, price: 399.9, cost: 250, stock: 55, status: 'open' },
];

export const warehouses = [
  { id: 1, name: 'CD-SP', city: 'São Paulo', isMain: true },
  { id: 2, name: 'CD-MG', city: 'Belo Horizonte', isMain: false },
];

export const stockMoves = [
  { id: 1, productId: 1, warehouseId: 1, type: 'IN', qty: 10, reason: 'Compra', createdAt: '2025-12-01T10:00:00.000Z' },
  { id: 2, productId: 1, warehouseId: 1, type: 'OUT', qty: 2, reason: 'Venda', createdAt: '2025-12-02T10:00:00.000Z' },
];
