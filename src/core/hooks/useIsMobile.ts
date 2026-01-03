// src/core/hooks/useIsMobile.ts
import { useMediaQuery } from '@mui/material';

export function useIsMobile() {
  return useMediaQuery('(max-width: 899px)');
}
