// src/types/finance.ts
import type { Id, Status } from './common';

export type BankAccount = {
  id: Id;
  name: string;
  bank: string;
  balance: number;
};

export type Payment = {
  id: Id;
  bankAccountId: Id;
  kind: 'IN' | 'OUT';
  reference: string;
  status: Status;
  paidAt: string;
  amount: number;
};

export type JournalEntry = {
  id: Id;
  date: string;
  memo: string;
  debit: number;
  credit: number;
};
