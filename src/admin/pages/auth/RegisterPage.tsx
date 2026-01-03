// src/admin/pages/auth/RegisterPage.tsx
import { useMemo, useState, type FormEvent } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Box, Button, Card, CardContent, Divider, Link, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { AppLogo } from '../../../ui/AppLogo';
import { registerUser } from '../../providers/demoUsersStore';
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
  authHintSx,
  authFormCardSx,
  authTopAccentAltSx,
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
  authLinkSx,
  authBulletListSx,
  authBulletItemSx,
  authMobileHintSx,
} from './auth.sx';

const ROLES = [
  { value: 'admin', label: 'Admin' },
  { value: 'finance', label: 'Financeiro' },
  { value: 'sales', label: 'Vendas' },
  { value: 'purchases', label: 'Compras' },
  { value: 'inventory', label: 'Estoque' },
  { value: 'fiscal', label: 'Fiscal' },
] as const;

type RoleValue = (typeof ROLES)[number]['value'];

export function RegisterPage() {
  const notify = useNotify();
  const login = useLogin();
  const navigate = useNavigate();

  const [name, setName] = useState('Novo Usuário');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<RoleValue>('admin');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(
    () => name.trim().length >= 2 && email.trim().length > 0 && password.trim().length >= 4,
    [name, email, password],
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    try {
      registerUser({ email: email.trim(), name: name.trim(), role, password });
      await login({ username: email.trim(), password });
      navigate('/');
    } catch (err: any) {
      notify(err?.message ?? 'Falha ao registrar.', { type: 'warning' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={authRootSx}>
      <Box sx={authShellSx}>
        {/* BRAND / INFO */}
        <Box sx={authInfoColSx}>
          <Stack sx={authInfoStackSx}>
            <AppLogo />

            <Stack sx={{ gap: '10px' }}>
              <Typography sx={authHeroTitleSx}>Crie sua conta e comece.</Typography>

              <Typography sx={authHeroTextSx}>
                Cadastro local (demo). Em produção, conecte ao seu backend e aplique regras reais
                (senha forte, confirmação de e-mail, MFA, etc.).
              </Typography>
            </Stack>

            <Box sx={authDemoCardSx}>
              <Typography sx={authDemoTitleSx}>Perfis disponíveis</Typography>

              <Stack sx={authBulletListSx}>
                {ROLES.map((r) => (
                  <Typography key={r.value} sx={authBulletItemSx}>
                    • {r.label}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Typography sx={authHintSx}>Seus usuários ficam no navegador (localStorage) nesta demo.</Typography>
          </Stack>
        </Box>

        {/* FORM */}
        <Card sx={authFormCardSx}>
          <Box sx={authTopAccentAltSx} />

          <CardContent sx={authCardContentSx}>
            <Box sx={authMobileLogoWrapSx}>
              <AppLogo />
            </Box>

            <Stack component="form" onSubmit={onSubmit} sx={authFormSx}>
              <Stack sx={authFormHeaderSx}>
                <Typography sx={authFormTitleSx}>Criar conta</Typography>

                <Typography sx={authFormSubtitleSx}>Preencha seus dados para acessar o painel.</Typography>
              </Stack>

              <Stack sx={authFieldsWrapSx}>
                <TextField
                  label="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  autoComplete="name"
                  variant="outlined"
                  sx={authFieldSx}
                  helperText="Como você quer aparecer no painel."
                />

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
                  label="Senha (mín. 4)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  type="password"
                  autoComplete="new-password"
                  variant="outlined"
                  sx={authFieldSx}
                  helperText="Na demo, a validação é simples. Em produção, use senha forte."
                />

                <TextField
                  select
                  label="Perfil"
                  value={role}
                  onChange={(e) => setRole(e.target.value as RoleValue)}
                  fullWidth
                  variant="outlined"
                  sx={authFieldSx}
                  helperText="Define os menus e permissões (demo)."
                >
                  {ROLES.map((r) => (
                    <MenuItem key={r.value} value={r.value}>
                      {r.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Button type="submit" variant="contained" size="large" disabled={!canSubmit || loading} sx={authSubmitBtnSx}>
                {loading ? 'Criando…' : 'Criar conta'}
              </Button>

              <Divider sx={authDividerSx} />

              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={authFooterRowSx}>
                <Typography sx={{ ...authBulletItemSx, fontSize: 12, color: colors.text.muted }}>
                  Já tem conta?
                </Typography>

                <Link component={RouterLink} to="/login" underline="hover" sx={authLinkSx}>
                  Voltar para o login
                </Link>
              </Stack>

              <Typography sx={authMobileHintSx}>Demo local • Usuários armazenados no navegador (localStorage)</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
