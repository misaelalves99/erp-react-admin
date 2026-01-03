// src/admin/fields/DateTimeField.tsx
import { FunctionField } from 'react-admin';
import { formatDateTimeBR } from '../../core/utils/date';
import { colors, typography } from '../../design/tokens';

export function DateTimeField(props: { source: string; label?: string }) {
  return (
    <FunctionField
      {...props}
      render={(record: any) => (
        <span
          style={{
            color: colors.text.secondary,
            fontFamily: typography.fontFamily,
            fontWeight: typography.weight.medium,
          }}
        >
          {formatDateTimeBR(record?.[props.source])}
        </span>
      )}
    />
  );
}
