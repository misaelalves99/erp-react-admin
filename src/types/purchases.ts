// src/types/purchases.ts
import type { Id, Status } from './common';

export type Supplier = {
  id: Id;
  name: string;
  document: string;
  email: string;
  phone: string;
  city: string;
  status: Status;
};

export type PurchaseOrder = {
  id: Id;
  supplierId: Id;
  number: string;
  status: Status;
  createdAt: string;
  total: number;
};

export type PurchaseBill = {
  id: Id;
  supplierId: Id;
  number: string;
  status: Status;
  dueAt: string;
  total: number;
};
