// src/data/mock/users.ts
export type DemoUser = {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'finance' | 'sales' | 'purchases' | 'inventory' | 'fiscal';
};

export const defaultUsers: DemoUser[] = [
  { id: 'u_admin', email: 'admin@erp.local', name: 'Admin', role: 'admin' },
];
