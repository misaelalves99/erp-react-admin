// src/admin/pages/auth/LoginPage.tsx
import { useMemo, useState, type FormEvent } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Box, Button, Card, CardContent, Divider, Link, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { AppLogo } from '../../../ui/AppLogo';
import { colors } from '../../../design/tokens';
import {
  authRootSx,
  authShellSx,
  authInfoColSx,
  authInfoStackSx,
  authHeroTitleSx,
  authHeroTextSx,
  authDemoCardSx,
  authDemoTitleSx,
  authDemoTextSx,
  authHintSx,
  authFormCardSx,
  authTopAccentSx,
  authCardContentSx,
  authMobileLogoWrapSx,
  authFormSx,
  authFormHeaderSx,
  authFormTitleSx,
  authFormSubtitleSx,
  authFieldsWrapSx,
  authFieldSx,
  authSubmitBtnSx,
  authDividerSx,
  authFooterRowSx,
  authDemoInlineSx,
  authLinkSx,
} from './auth.sx';

export function LoginPage() {
  const login = useLogin();
  const notify = useNotify();

  const [email, setEmail] = useState('admin@erp.local');
  const [password, setPassword] = useState('admin');
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(
    () => email.trim().length > 0 && password.trim().length >= 1,
    [email, password],
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    try {
      await login({ username: email, password });
    } catch (err: any) {
      notify(err?.message ?? 'Falha ao entrar.', { type: 'warning' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={authRootSx}>
      <Box sx={authShellSx}>
        {/* INFO / BRAND */}
        <Box sx={authInfoColSx}>
          <Stack sx={authInfoStackSx}>
            <AppLogo />

            <Stack sx={{ gap: '10px' }}>
              <Typography sx={authHeroTitleSx}>Acesse o painel com segurança.</Typography>

              <Typography sx={authHeroTextSx}>
                Gestão com visual premium, navegação rápida e componentes consistentes. Demo local pronta para evoluir para API.
              </Typography>
            </Stack>

            <Box sx={authDemoCardSx}>
              <Typography sx={authDemoTitleSx}>Credenciais demo</Typography>

              <Typography sx={authDemoTextSx}>
                Email:{' '}
                <Box component="b" sx={{ color: colors.text.primary }}>
                  admin@erp.local
                </Box>
                <br />
                Senha:{' '}
                <Box component="b" sx={{ color: colors.text.primary }}>
                  admin
                </Box>
              </Typography>
            </Box>

            <Typography sx={authHintSx}>
              Dica: depois do login, você pode ligar isso num backend real e manter o mesmo layout.
            </Typography>
          </Stack>
        </Box>

        {/* FORM */}
        <Card sx={authFormCardSx}>
          <Box sx={authTopAccentSx} />

          <CardContent sx={authCardContentSx}>
            <Box sx={authMobileLogoWrapSx}>
              <AppLogo />
            </Box>

            <Stack component="form" onSubmit={onSubmit} sx={authFormSx}>
              <Stack sx={authFormHeaderSx}>
                <Typography sx={authFormTitleSx}>Entrar</Typography>

                <Typography sx={authFormSubtitleSx}>
                  Use suas credenciais para acessar o painel.
                </Typography>
              </Stack>

              <Stack sx={authFieldsWrapSx}>
                <TextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  autoComplete="email"
                  variant="outlined"
                  sx={authFieldSx}
                />

                <TextField
                  label="Senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  autoComplete="current-password"
                  variant="outlined"
                  sx={authFieldSx}
                />
              </Stack>

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={!canSubmit || loading}
                sx={authSubmitBtnSx}
              >
                {loading ? 'Entrando…' : 'Entrar'}
              </Button>

              <Divider sx={authDividerSx} />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={authFooterRowSx}
              >
                <Typography sx={authDemoInlineSx}>
                  Demo:{' '}
                  <Box component="b" sx={{ color: colors.text.primary }}>
                    admin@erp.local
                  </Box>{' '}
                  /{' '}
                  <Box component="b" sx={{ color: colors.text.primary }}>
                    admin
                  </Box>
                </Typography>

                <Stack direction="row" sx={{ gap: '8px', alignItems: 'center' }}>
                  <Link
                    component={RouterLink}
                    to="/register"
                    underline="hover"
                    sx={authLinkSx}
                  >
                    Criar conta
                  </Link>

                  <Typography sx={{ color: colors.text.soft, fontSize: 12 }}>•</Typography>

                  <Link
                    component="button"
                    type="button"
                    underline="hover"
                    onClick={() => notify('Recuperação de senha (demo).', { type: 'info' })}
                    sx={{ ...authLinkSx, cursor: 'pointer' }}
                  >
                    Esqueci a senha
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
