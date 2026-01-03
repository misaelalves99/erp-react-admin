// src/core/contexts/AppMetaContext.tsx
import { createContext, useContext } from 'react';

export type AppMeta = {
  appName: string;
  version: string;
};

const AppMetaContext = createContext<AppMeta | null>(null);

export function AppMetaProvider(props: { children: React.ReactNode; value: AppMeta }) {
  return <AppMetaContext.Provider value={props.value}>{props.children}</AppMetaContext.Provider>;
}

export function useAppMeta() {
  const ctx = useContext(AppMetaContext);
  if (!ctx) return { appName: 'ERP Admin Pro', version: '0.2.0' } satisfies AppMeta;
  return ctx;
}
