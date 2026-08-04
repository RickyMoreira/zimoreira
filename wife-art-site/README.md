# Site de pinturas — Next.js + Vercel

Site simples de portfólio (galeria + sobre + contato), pronto para publicar
na Vercel, feito para substituir o site atual no Wix.

## Estrutura

- `lib/artworks.ts` — **único arquivo que você precisa editar** para trocar
  nome da artista, bio, e-mail, Instagram e as obras (título, ano, técnica,
  dimensões, disponibilidade).
- `public/obras/` — coloque as fotos das pinturas aqui (mesmo nome de
  arquivo referenciado em `lib/artworks.ts`).
- `app/` — as 3 páginas do site (galeria, sobre, contato). Normalmente não
  precisa mexer aqui.

## 1. Rodar localmente (opcional, para conferir antes de publicar)

Requer [Node.js](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## 2. Publicar no GitHub

1. Crie um repositório novo (pode ser privado) no GitHub.
2. Dentro desta pasta:

```bash
git init
git add .
git commit -m "site inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

## 3. Publicar na Vercel

1. Crie uma conta em https://vercel.com (dá para entrar com a conta do GitHub).
2. Clique em **Add New → Project**.
3. Selecione o repositório que você acabou de criar.
4. A Vercel detecta o Next.js automaticamente — não precisa mudar nenhuma
   configuração. Clique em **Deploy**.
5. Em alguns minutos o site estará no ar num endereço tipo
   `seu-projeto.vercel.app`.

## 4. Migrar o domínio do Wix para a Vercel

Se vocês já têm um domínio próprio (ex: `nomedaartista.com`) sendo usado no
Wix, o site troca de "casa" sem precisar comprar o domínio de novo:

1. No painel da Vercel, abra o projeto → **Settings → Domains** → adicione
   `nomedaartista.com` (e/ou `www.nomedaartista.com`).
2. A Vercel vai mostrar registros DNS para configurar (geralmente um
   registro `A` apontando para `76.76.21.21` e/ou um `CNAME` para
   `cname.vercel-dns.com` no `www`).
3. Onde o domínio foi comprado (isso pode ser no próprio Wix, ou em outro
   lugar como GoDaddy/Registro.br — confira em Wix em **Configurações →
   Domínios** quem é o "registrar"):
   - Se o domínio foi comprado **na Wix**: em Wix, vá em Domínios →
     selecione o domínio → **Configurações avançadas de DNS** e adicione os
     registros que a Vercel pediu (não precisa transferir o domínio para
     fora da Wix, só apontar o DNS).
   - Se o domínio foi comprado **em outro registrador**: entre no painel
     desse registrador e adicione os mesmos registros lá.
4. Espere a propagação do DNS (de alguns minutos até ~24h). A Vercel emite
   HTTPS automaticamente assim que o DNS estiver correto.
5. Só depois de confirmar que o novo site está funcionando no domínio, você
   pode cancelar o plano pago do Wix (se houver).

## 5. Trocar fotos e textos depois de publicado

Sempre que editar `lib/artworks.ts` ou adicionar fotos em `public/obras/`,
basta:

```bash
git add .
git commit -m "atualiza obras"
git push
```

A Vercel publica a nova versão automaticamente em ~1 minuto.
