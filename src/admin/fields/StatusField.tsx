// src/admin/fields/StatusField.tsx
import { FunctionField } from 'react-admin';
import { Box } from '@mui/material';

import { StatusChip } from '../../ui/StatusChip';
import { radius } from '../../design/tokens';

export function StatusField(props: { source: string; label?: string }) {
  return (
    <FunctionField
      {...props}
      render={(record: any) => (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            // ✅ força pill radius no chip (sem depender do StatusChip)
            '& .MuiChip-root': { borderRadius: radius.pill },
          }}
        >
          <StatusChip status={record?.[props.source]} />
        </Box>
      )}
    />
  );
}
