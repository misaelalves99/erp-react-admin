// src/admin/providers/bootstrap.ts
import { ensureUsersSeeded } from './demoUsersStore';

export function bootstrapDemo() {
  ensureUsersSeeded();
}
