// src/types/sales.ts
import type { Id, Status } from './common';

export type Customer = {
  id: Id;
  name: string;
  document: string;
  email: string;
  phone: string;
  city: string;
  status: Status;
};

export type SalesOrder = {
  id: Id;
  customerId: Id;
  number: string;
  status: Status;
  createdAt: string;
  total: number;
};

export type SalesInvoice = {
  id: Id;
  salesOrderId: Id;
  number: string;
  status: Status;
  issuedAt: string;
  total: number;
};
