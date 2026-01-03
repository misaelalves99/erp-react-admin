// src/types/fiscal.ts
import type { Id, Status } from './common';

export type TaxRate = {
  id: Id;
  name: string;
  rate: number;
};

export type FiscalDocument = {
  id: Id;
  type: 'NF-e' | 'NFS-e' | 'NFC-e' | 'CT-e' | string;
  number: string;
  status: Status;
  issuedAt: string;
  total: number;
};
