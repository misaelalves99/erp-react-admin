// src/admin/providers/demoUsersStore.ts
import type { DemoUser } from '../../data/mock/users';
import { defaultUsers } from '../../data/mock/users';
import { safeJsonParse } from '../../core/utils/storage';

const USERS_KEY = 'erp.users';
const SESSION_KEY = 'erp.session';

export type DemoSession = { email: string; role: DemoUser['role']; name: string };

export function ensureUsersSeeded() {
  const existing = safeJsonParse<DemoUser[]>(localStorage.getItem(USERS_KEY));
  if (existing && existing.length > 0) return;
  localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
}

export function listUsers(): DemoUser[] {
  ensureUsersSeeded();
  return safeJsonParse<DemoUser[]>(localStorage.getItem(USERS_KEY)) ?? [];
}

export function registerUser(input: { email: string; name: string; role: DemoUser['role']; password: string }) {
  ensureUsersSeeded();

  const email = input.email.trim().toLowerCase();
  if (!email) throw new Error('Email inválido.');

  const users = listUsers();
  if (users.some(u => u.email.toLowerCase() === email)) {
    throw new Error('Este email já está cadastrado.');
  }

  const user: DemoUser = {
    id: `u_${Math.random().toString(16).slice(2)}`,
    email,
    name: input.name.trim() || 'Usuário',
    role: input.role,
  };

  localStorage.setItem(USERS_KEY, JSON.stringify([user, ...users]));
  // Demo-only: password store (não faça isso em produção)
  localStorage.setItem(`erp.pass.${email}`, input.password);

  return user;
}

export function validateLogin(emailRaw: string, password: string): DemoSession {
  ensureUsersSeeded();
  const email = emailRaw.trim().toLowerCase();

  const users = listUsers();
  const user = users.find(u => u.email.toLowerCase() === email);
  if (!user) throw new Error('Usuário não encontrado.');

  const storedPass = localStorage.getItem(`erp.pass.${email}`) ?? 'admin';
  if (password !== storedPass) throw new Error('Senha inválida.');

  const session: DemoSession = { email: user.email, role: user.role, name: user.name };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function readSession(): DemoSession | null {
  return safeJsonParse<DemoSession>(localStorage.getItem(SESSION_KEY));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
