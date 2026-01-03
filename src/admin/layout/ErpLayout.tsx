// src/admin/layout/ErpLayout.tsx
import { CheckForApplicationUpdate, Layout as RALayout, type LayoutProps } from 'react-admin';

import { ErpAppBar } from './ErpAppBar';
import { ErpSidebar } from './ErpSidebar';
import { erpLayoutContentSx } from '../styles/erpSx';

export function ErpLayout(props: LayoutProps) {
  return (
    <RALayout
      {...props}
      appBar={ErpAppBar as any}
      sidebar={ErpSidebar as any}
      sx={erpLayoutContentSx}
    >
      {/* ✅ ESSENCIAL: devolve as páginas do react-admin (List/Show/Edit/Create) */}
      {props.children}

      {/* opcional, mas ok ficar aqui */}
      <CheckForApplicationUpdate />
    </RALayout>
  );
}
