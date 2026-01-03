// src/admin/layout/ErpAppBar.tsx
import { AppBar, TitlePortal, UserMenu, Logout, useSidebarState } from 'react-admin';
import { Box, IconButton, Tooltip } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { Link as RouterLink } from 'react-router-dom';

import { AppLogo } from '../../ui/AppLogo';
import { colors, radius, shadows, space, typography } from '../../design/tokens';
import { ERP_SIDEBAR_CLOSED_WIDTH, ERP_SIDEBAR_WIDTH } from '../styles/erpSx';

function ErpUserMenu() {
  return (
    <UserMenu>
      <Logout />
    </UserMenu>
  );
}

export function ErpAppBar(props: any) {
  const [sidebarOpen] = useSidebarState();
  const sidebarWidth = sidebarOpen ? ERP_SIDEBAR_WIDTH : ERP_SIDEBAR_CLOSED_WIDTH;

  return (
    <AppBar
      {...props}
      userMenu={<ErpUserMenu />}
      sx={{
        left: { xs: 0, md: `${sidebarWidth}px` },
        width: { xs: '100%', md: `calc(100% - ${sidebarWidth}px)` },

        bgcolor: 'transparent',
        background: colors.bg.gradient.hero,
        color: colors.text.primary,
        borderBottom: `1px solid ${colors.border.subtle}`,
        boxShadow: shadows.soft,
        backdropFilter: colors.glass.blur,
        WebkitBackdropFilter: colors.glass.blur,

        '& .RaAppBar-title, & .RaAppBar-title > span, & .RaAppBar-title > div': {
          fontFamily: typography.fontFamily,
          letterSpacing: typography.tracking.tight,
          fontWeight: typography.weight.semibold,
        },

        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        '& .RaAppBar-toolbar, & .MuiToolbar-root': {
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        },

        '& .MuiIconButton-root': {
          color: colors.icon.secondary,
          borderRadius: radius.md,
          transition: 'transform 120ms ease, background-color 120ms ease, color 120ms ease',
          '&:hover': {
            color: colors.brand.accent,
            backgroundColor: colors.action.hover,
            transform: 'translateY(-1px)',
          },
          '&:focus-visible': {
            outline: 'none',
            boxShadow: shadows.glowAqua,
          },
        },
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: space[2] }}>
        <AppLogo compact />
      </Box>

      <TitlePortal />
      <Box sx={{ flex: 1 }} />

      <Tooltip title="Relatórios">
        <IconButton component={RouterLink} to="/reports" size="small" sx={{ mr: space[1] }}>
          <AssessmentOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Ajuda">
        <IconButton component={RouterLink} to="/help" size="small">
          <HelpOutlineOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </AppBar>
  );
}
