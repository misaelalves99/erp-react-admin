// src/types/inventory.ts
import type { Id, Status } from './common';

export type Category = { id: Id; name: string };

export type Product = {
  id: Id;
  sku: string;
  name: string;
  categoryId: Id;
  price: number;
  cost: number;
  stock: number;
  status: Status;
};

export type Warehouse = {
  id: Id;
  name: string;
  city: string;
  isMain: boolean;
};

export type StockMove = {
  id: Id;
  productId: Id;
  warehouseId: Id;
  type: 'IN' | 'OUT';
  qty: number;
  reason: string;
  createdAt: string;
};
