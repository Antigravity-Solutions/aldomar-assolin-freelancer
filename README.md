# Portfólio Freelancer — Aldomar Assolin

MVP do portfólio pessoal, conforme PF-005 a PF-009. Projeto independente do site institucional da Assolin Tecnologia.

## Rodar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra a URL exibida pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Organização

- `src/content.js`: navegação, serviços, cases e etapas. Edite textos e links aqui.
- `src/main.jsx`: componentes, seções e menu mobile.
- `src/styles.css`: tokens visuais, layouts e responsividade.
- `public/images`: hero e três capturas autorizadas, convertidas para WebP.

## Escopo e próximos passos

Os projetos são identificados como cliente, demonstração própria e laboratório próprio. O contato comercial é por e-mail e LinkedIn; o botão de WhatsApp da demo não é um canal comercial deste portfólio. A hero usa a imagem editada aprovada na PF-007 V2/PF-008 V2; título e CTAs são HTML real.

O MVP (PF-009) está implementado. A PF-010 prepara metadados, HTML indexável e a decisão de mensuração; deploy (PF-011) e homologação completa, inclusive cliques externos (PF-012), são etapas separadas.

## SEO e mensuração — PF-010

O build inclui título, descrição, idioma, metadados sociais básicos e HTML estático das seções e cases; o React hidrata a página para o menu interativo. Confira `dist/index.html` após `npm run build`.

A URL de produção atual é `https://freelancer.assolintecnologia.com.br/`. `rel="canonical"`, `og:url`, imagem social, `public/robots.txt` e `public/sitemap.xml` apontam para ela. Se um domínio próprio for adotado depois, altere todos os endereços absolutos e configure o redirecionamento permanente antes de solicitar nova indexação. O Search Console requer verificação da propriedade pelo titular; envie `https://freelancer.assolintecnologia.com.br/sitemap.xml` após confirmar o deploy. A presença no índice não é automática.

**Decisão de mensuração inicial:** começar pelo Search Console para acompanhar desempenho de busca quando houver domínio. Nenhum script de GA4 ou GTM é instalado sem conta/ID e objetivo de evento definidos. Se métricas de contato forem necessárias depois, definir eventos para clique no e-mail e LinkedIn, testar no ambiente de homologação e revisar os requisitos de privacidade aplicáveis antes de ativar a coleta.
