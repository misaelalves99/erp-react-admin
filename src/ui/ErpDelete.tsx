// src/admin/ui/ErpDelete.tsx
import * as React from 'react';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import {
  RecordContextProvider,
  SimpleShowLayout,
  useDelete,
  useGetOne,
  useNotify,
  useRedirect,
  useResourceContext,
  useUnselectAll,
} from 'react-admin';
import { useNavigate, useParams } from 'react-router-dom';

import { SectionCard } from './SectionCard';
import { colors, radius, shadows, space, typography } from '../design/tokens';

type ErpDeleteProps = {
  title: string;

  /**
   * Se você usar o Delete fora do contexto de Resource, passe o resource manualmente.
   * Ex: resource="products"
   */
  resource?: string;

  sx?: any;

  confirmTitle?: string;
  cancelLabel?: string;
  confirmLabel?: string;

  /**
   * Para onde redirecionar após excluir. Padrão: list
   */
  redirectTo?: 'list' | 'show' | 'edit' | false;

  /**
   * Conteúdo do layout (normalmente um <SimpleShowLayout> com Fields).
   */
  children: React.ReactNode;
};

const dangerBtnSx = {
  borderRadius: radius.button,
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.black,
  letterSpacing: typography.tracking.wide,
  textTransform: 'none',
  backgroundColor: colors.status.danger,
  boxShadow: shadows.soft,
  '&:hover': { filter: 'brightness(1.05)', boxShadow: shadows.lift, transform: 'translateY(-1px)' },
  '&:active': { transform: 'translateY(0px)' },
  transition: 'transform 120ms ease, box-shadow 120ms ease, filter 120ms ease',
} as const;

const ghostBtnSx = {
  borderRadius: radius.button,
  fontFamily: typography.fontFamily,
  fontWeight: typography.weight.semibold,
  textTransform: 'none',
  color: colors.text.secondary,
  border: `1px solid ${colors.border.default}`,
  backgroundColor: 'transparent',
  '&:hover': { borderColor: colors.border.strong, backgroundColor: colors.action.hover, color: colors.text.primary },
} as const;

export function ErpDelete(props: ErpDeleteProps) {
  const {
    title,
    resource: resourceProp,
    sx,
    confirmTitle = 'Confirmar exclusão',
    cancelLabel = 'Cancelar',
    confirmLabel = 'Excluir',
    redirectTo = 'list',
    children,
  } = props;

  // ⚠️ useResourceContext pode ser string | undefined (depende do contexto)
  const resourceFromCtx = useResourceContext();
  const resource = resourceProp ?? resourceFromCtx;

  const params = useParams<{ id: string }>();
  const id = params.id;

  const canLoad = Boolean(resource && id);

  const notify = useNotify();
  const redirect = useRedirect();
  const navigate = useNavigate();

  /**
   * ✅ CORREÇÃO DO ERRO:
   * Em várias versões do react-admin, `useUnselectAll(resource)` devolve uma função
   * `unselectAll(permanent?: boolean)`.
   * Logo: você passa o `resource` no hook, e depois chama `unselectAll()`.
   */
  const unselectAll = useUnselectAll(resource);

  /**
   * ✅ CORREÇÃO DO ERRO:
   * `useGetOne` exige `resource: string`, então passamos um fallback quando não houver resource.
   * O `enabled` impede a query de rodar sem resource/id.
   */
  const { data, isLoading, error } = useGetOne(
    (resource ?? '__noop__') as string,
    { id: (id ?? '') as any },
    { enabled: canLoad }
  );

  const [deleteOne, { isLoading: isDeleting }] = useDelete();

  const handleCancel = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    if (resource) {
      redirect('list', resource);
      return;
    }

    notify('Não foi possível voltar para a lista (resource indefinido).', { type: 'warning' });
  };

  const handleConfirm = () => {
    if (!resource || !id) return;

    deleteOne(
      resource,
      { id, previousData: data },
      {
        onSuccess: () => {
          // ✅ agora chama sem passar resource
          unselectAll();
          notify('Excluído com sucesso.', { type: 'success' });

          if (redirectTo === false) return;
          redirect(redirectTo, resource);
        },
        onError: (e: any) => {
          notify(e?.message ?? 'Erro ao excluir.', { type: 'error' });
        },
      }
    );
  };

  return (
    <Box sx={sx}>
      <Box sx={{ mt: space[2] }}>
        <SectionCard title={title}>
          <Box sx={{ px: space[2], pt: space[2] }}>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontWeight: typography.weight.black,
                color: colors.text.primary,
                mb: space[2],
              }}
            >
              {confirmTitle}
            </Typography>

            {!canLoad && (
              <Typography sx={{ color: colors.text.muted, fontFamily: typography.fontFamily }}>
                Não foi possível determinar o resource/id para excluir.
              </Typography>
            )}

            {canLoad && isLoading && (
              <Stack direction="row" spacing={2} alignItems="center">
                <CircularProgress size={18} />
                <Typography sx={{ color: colors.text.muted, fontFamily: typography.fontFamily }}>
                  Carregando registro…
                </Typography>
              </Stack>
            )}

            {canLoad && !isLoading && error && (
              <Typography sx={{ color: colors.status.danger, fontFamily: typography.fontFamily }}>
                Erro ao carregar registro.
              </Typography>
            )}

            {canLoad && !isLoading && data && (
              <RecordContextProvider value={data}>
                {/* você passa aqui um <SimpleShowLayout> com fields */}
                {children}
              </RecordContextProvider>
            )}

            <Stack direction="row" spacing={space[2]} justifyContent="flex-end" sx={{ mt: space[3], pb: space[2] }}>
              <Button variant="outlined" onClick={handleCancel} sx={ghostBtnSx} disabled={isDeleting}>
                {cancelLabel}
              </Button>
              <Button variant="contained" onClick={handleConfirm} sx={dangerBtnSx} disabled={isDeleting || !data}>
                {isDeleting ? 'Excluindo…' : confirmLabel}
              </Button>
            </Stack>
          </Box>
        </SectionCard>
      </Box>
    </Box>
  );
}

// helper opcional: se quiser padronizar
export function ErpDeleteShowLayout(props: { children: React.ReactNode; sx?: any }) {
  return <SimpleShowLayout sx={props.sx}>{props.children}</SimpleShowLayout>;
}
