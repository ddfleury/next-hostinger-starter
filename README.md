# Next Hostinger Starter

Base profissional para iniciar uma aplicação **Next.js 16**, com TypeScript, App Router e publicação gerenciada na Hostinger.

## Requisitos

- Node.js `20.9` ou superior. Recomenda-se Node.js `22`.
- npm `10` ou superior.
- Plano Hostinger Business ou Cloud com suporte a aplicações Node.js.

## Executar localmente

```bash
# Instale as dependências bloqueadas pelo package-lock.json
npm ci

# Copie e ajuste as variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`.

## Validar antes de publicar

```bash
# Executa lint, checagem de tipos e build de produção
npm run check
```

## Publicar na Hostinger pelo GitHub

1. Crie um repositório privado no GitHub.
2. Envie todo o projeto, exceto os arquivos ignorados pelo `.gitignore`.
3. No hPanel, acesse **Websites → Add Website → Deploy Web App**.
4. Selecione **Import Git Repository** e autorize sua conta GitHub.
5. Escolha o repositório e a branch `main`.
6. Confirme o framework **Next.js** e use Node.js `22.x`.
7. Use o comando de build `npm run build` e o comando de inicialização `npm start` caso sejam solicitados.
8. Cadastre as variáveis de `.env.example` em **Environment Variables**, usando valores reais.
9. Clique em **Deploy**.

Cada novo `push` na branch configurada poderá disparar uma nova publicação automática.

O workflow `.github/workflows/ci.yml` valida o projeto no GitHub antes da publicação, e o Dependabot propõe atualizações periódicas das dependências.

> A Hostinger armazena a saída de aplicações Next.js fora de `public_html` e cria o `.htaccess` de roteamento automaticamente. Não copie manualmente a pasta `.next` para `public_html`.

## Estrutura

```text
next-hostinger-starter/
├── public/                    # Arquivos estáticos
├── src/
│   ├── app/                   # Rotas, páginas, layouts e APIs
│   │   ├── (public)/          # Site público
│   │   ├── api/health/        # Endpoint de monitoramento
│   │   └── painel/            # Área administrativa demonstrativa
│   ├── components/            # Componentes reutilizáveis
│   └── config/                # Configurações da aplicação
├── .env.example               # Modelo de variáveis, sem segredos
├── next.config.ts             # Next.js e cabeçalhos de segurança
├── package.json               # Scripts e dependências
└── tsconfig.json              # TypeScript estrito
```

## Segurança

- Nunca envie `.env` ou `.env.local` ao GitHub.
- Variáveis prefixadas com `NEXT_PUBLIC_` são incluídas no código do navegador; não coloque senhas ou tokens nelas.
- Autorização de usuários deve ser validada no servidor, inclusive nas Route Handlers.
- Valide dados no servidor antes de acessar o banco.
- Restrinja tipo, extensão, tamanho e conteúdo de uploads.
- Revise a política CSP em `next.config.ts` ao adicionar serviços externos.
- Mantenha Next.js e dependências atualizados após revisar as mudanças.

## Próximos módulos sugeridos

1. Autenticação com sessão segura e perfis de acesso.
2. Banco MySQL usando Prisma ou Drizzle ORM.
3. Validação com Zod nas entradas da API.
4. Logs de auditoria para alterações administrativas.
5. Testes automatizados com Vitest e Playwright.
