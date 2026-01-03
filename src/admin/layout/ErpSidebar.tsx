// src/admin/layout/ErpSidebar.tsx
import { useEffect, useRef } from 'react';
import { Sidebar, useSidebarState } from 'react-admin';

import { ErpMenu } from './ErpMenu';
import { colors, space } from '../../design/tokens';
import { ERP_SIDEBAR_CLOSED_WIDTH, ERP_SIDEBAR_WIDTH } from '../styles/erpSx';

export function ErpSidebar(props: any) {
  const [open, setOpen] = useSidebarState();
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    if (!open) setOpen(true);
  }, [open, setOpen]);

  return (
    <Sidebar
      {...props}
      open={open}
      width={ERP_SIDEBAR_WIDTH}
      closedSize={ERP_SIDEBAR_CLOSED_WIDTH}
      sx={{
        flexShrink: 0,

        // ✅ POSIÇÃO igual ao exemplo: sidebar “grudado” no topo (não abaixo do AppBar)
        '& .RaSidebar-fixed': {
          top: '0 !important',
          height: '100vh !important',
        },

        '& .MuiDrawer-paper': {
          top: '0 !important',
          height: '100vh !important',
          width: open ? ERP_SIDEBAR_WIDTH : ERP_SIDEBAR_CLOSED_WIDTH,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: 'width 180ms ease',
        },

        '& .RaSidebar-drawerPaper': {
          top: '0 !important',
          height: '100vh !important',
          width: open ? ERP_SIDEBAR_WIDTH : ERP_SIDEBAR_CLOSED_WIDTH,
          boxSizing: 'border-box',
          overflowX: 'hidden',

          background: 'rgba(0,0,0,0.55)',
          borderRight: `1px solid ${colors.border.subtle}`,
          backdropFilter: colors.glass.blur,
          WebkitBackdropFilter: colors.glass.blur,

          paddingTop: `${space[1]}px`,
          paddingBottom: `${space[2]}px`,

          transition: 'width 180ms ease',
        },

        '& .RaSidebar-fixed .MuiList-root': {
          paddingTop: 0,
          paddingBottom: 0,
        },

        '& .RaMenu-root, & .RaMenu-open, & .RaMenu-closed': {
          width: '100% !important',
          maxWidth: 'none !important',
        },
      }}
    >
      <ErpMenu open={open} />
    </Sidebar>
  );
}
