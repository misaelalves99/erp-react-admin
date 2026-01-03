// src/admin/pages/ReportsPage.tsx
import { Grid, Stack, Typography } from '@mui/material';
import { useGetList } from 'react-admin';

import { PageHeader } from '../../ui/PageHeader';
import { MetricCard } from '../../ui/MetricCard';
import { SectionCard } from '../../ui/SectionCard';
import { formatCurrencyBRL } from '../../core/utils/money';
import { colors, space, typography } from '../../design/tokens';

export function ReportsPage() {
  const salesOrders = useGetList('salesOrders', { pagination: { page: 1, perPage: 500 } });
  const purchaseOrders = useGetList('purchaseOrders', { pagination: { page: 1, perPage: 500 } });

  const salesTotal = (salesOrders.data ?? []).reduce((a, b: any) => a + (b.total ?? 0), 0);
  const purchasesTotal = (purchaseOrders.data ?? []).reduce((a, b: any) => a + (b.total ?? 0), 0);

  return (
    <Stack spacing={space[4]}>
      <PageHeader
        title="Relatórios"
        subtitle="Resumo rápido (demo). Evolua para DRE/Fluxo de Caixa/Conciliação."
      />

      <Grid container spacing={2}>
        <Grid xs={12} sm={6} lg={4}>
          <MetricCard label="Total de vendas" value={formatCurrencyBRL(salesTotal)} hint="Pedidos de venda" />
        </Grid>

        <Grid xs={12} sm={6} lg={4}>
          <MetricCard label="Total de compras" value={formatCurrencyBRL(purchasesTotal)} hint="Pedidos de compra" />
        </Grid>

        <Grid xs={12} lg={4}>
          <MetricCard
            label="Resultado (bruto)"
            value={formatCurrencyBRL(salesTotal - purchasesTotal)}
            hint="Sem impostos"
          />
        </Grid>

        <Grid xs={12}>
          <SectionCard title="Próximos passos">
            <Typography
              sx={{
                color: colors.text.secondary,
                fontFamily: typography.fontFamily,
                lineHeight: typography.lineHeight.relaxed,
              }}
            >
              Troque o DataProvider in-memory por REST/GraphQL, adicione RBAC por módulo e trilha de auditoria.
            </Typography>
          </SectionCard>
        </Grid>
      </Grid>
    </Stack>
  );
}
