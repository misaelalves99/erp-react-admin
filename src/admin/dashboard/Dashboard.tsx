// src/admin/dashboard/Dashboard.tsx
import { Grid, Stack, Typography, Box } from '@mui/material';
import { useGetList } from 'react-admin';

import { PageHeader } from '../../ui/PageHeader';
import { MetricCard } from '../../ui/MetricCard';
import { SectionCard } from '../../ui/SectionCard';
import { formatCurrencyBRL } from '../../core/utils/money';
import { colors, space, typography } from '../../design/tokens';

export function Dashboard() {
  const customers = useGetList('customers', { pagination: { page: 1, perPage: 1 } });
  const salesOrders = useGetList('salesOrders', { pagination: { page: 1, perPage: 50 } });
  const purchaseOrders = useGetList('purchaseOrders', { pagination: { page: 1, perPage: 50 } });
  const payments = useGetList('payments', { pagination: { page: 1, perPage: 50 } });

  const totalSales = (salesOrders.data ?? []).reduce((acc, o: any) => acc + (o.total ?? 0), 0);
  const totalPurchases = (purchaseOrders.data ?? []).reduce((acc, o: any) => acc + (o.total ?? 0), 0);
  const totalPaid = (payments.data ?? []).reduce((acc, p: any) => acc + (p.amount ?? 0), 0);

  return (
    <Stack sx={{ gap: space[4], pb: space[4] }}>
      <PageHeader
        title="Visão geral"
        subtitle="KPIs principais do ERP (demo com dados em memória)."
        breadcrumbs={[
          { label: '🏠 Início', to: '/' },
          { label: 'Dashboard' },
        ]}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard label="Clientes" value={String(customers.total ?? 0)} hint="Base cadastrada" />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard label="Vendas (Total)" value={formatCurrencyBRL(totalSales)} hint="Pedidos de venda" />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard label="Compras (Total)" value={formatCurrencyBRL(totalPurchases)} hint="Pedidos de compra" />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <MetricCard label="Pagamentos" value={formatCurrencyBRL(totalPaid)} hint="Saídas registradas" />
        </Grid>

        <Grid item xs={12} lg={8}>
          <SectionCard title="Atalhos & boas práticas">
            <Stack sx={{ gap: space[2] }}>
              <Typography
                sx={{
                  color: colors.text.secondary,
                  fontFamily: typography.fontFamily,
                  lineHeight: typography.lineHeight.relaxed,
                }}
              >
                • Cadastre{' '}
                <Box component="b" sx={{ color: colors.text.primary }}>
                  Produtos
                </Box>{' '}
                e{' '}
                <Box component="b" sx={{ color: colors.text.primary }}>
                  Depósitos
                </Box>{' '}
                antes de movimentar estoque.
              </Typography>

              <Typography
                sx={{
                  color: colors.text.secondary,
                  fontFamily: typography.fontFamily,
                  lineHeight: typography.lineHeight.relaxed,
                }}
              >
                • Use{' '}
                <Box component="b" sx={{ color: colors.text.primary }}>
                  Pedidos de Venda
                </Box>{' '}
                para gerar{' '}
                <Box component="b" sx={{ color: colors.text.primary }}>
                  Faturas
                </Box>
                .
              </Typography>

              <Typography
                sx={{
                  color: colors.text.secondary,
                  fontFamily: typography.fontFamily,
                  lineHeight: typography.lineHeight.relaxed,
                }}
              >
                • Use{' '}
                <Box component="b" sx={{ color: colors.text.primary }}>
                  Pagamentos
                </Box>{' '}
                e{' '}
                <Box component="b" sx={{ color: colors.text.primary }}>
                  Lançamentos contábeis
                </Box>{' '}
                para conciliar o financeiro.
              </Typography>
            </Stack>
          </SectionCard>
        </Grid>

        <Grid item xs={12} lg={4}>
          <SectionCard title="Evolução do projeto">
            <Typography
              sx={{
                color: colors.text.muted,
                fontFamily: typography.fontFamily,
                lineHeight: typography.lineHeight.relaxed,
              }}
            >
              Estruture “itens do pedido”, aprovação em etapas, conciliação e trilha de auditoria.
            </Typography>
          </SectionCard>
        </Grid>
      </Grid>
    </Stack>
  );
}
