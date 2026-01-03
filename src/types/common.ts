// src/types/common.ts
export type Id = number | string;

export type Status =
  | 'draft'
  | 'open'
  | 'approved'
  | 'paid'
  | 'cancelled'
  | 'delivered'
  | 'authorized'
  | string;
