// src/admin/providers/authProvider.ts
import type { AuthProvider } from 'react-admin';
import { clearSession, readSession, validateLogin } from './demoUsersStore';

export const authProvider: AuthProvider = {
  async login(params) {
    const email = String(params.username ?? '');
    const password = String(params.password ?? '');
    validateLogin(email, password);
  },

  async logout() {
    clearSession();
  },

  async checkAuth() {
    const session = readSession();
    if (!session) throw new Error('Não autenticado');
  },

  async checkError(error: any) {
    if (error?.status === 401 || error?.status === 403) {
      clearSession();
      throw new Error('Sessão expirada');
    }
  },

  async getIdentity() {
    const session = readSession();
    if (!session) return { id: 'anonymous', fullName: 'Convidado' };
    return { id: session.email, fullName: session.name };
  },

  async getPermissions() {
    const session = readSession();
    return session?.role ?? null;
  },
};
