# Vidraçaria Oliveira - Landing Page

[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)](#)
[![Tecnologias](https://img.shields.io/badge/Tecnologias-HTML5_|_CSS3_|_Vanilla_JS_|_Vite-blue)](#)

Uma *Landing Page* estática, ultra-otimizada e totalmente responsiva desenvolvida para a **Vidraçaria Oliveira**. O objetivo deste projeto é atrair novos clientes, exibir o portfólio de obras de maneira imersiva e facilitar o contato direto via WhatsApp, operando sem a necessidade de um servidor backend complexo (ideal para hospedagem gratuita no GitHub Pages).

## 🚀 Funcionalidades

- **Design Premium e Responsivo:** A interface se adapta perfeitamente em telas de desktop, tablets e smartphones.
- **Integração Nativa com WhatsApp:** Formulário de captação de *leads* que converte os dados diretamente em um link customizado, redirecionando o usuário para o aplicativo do WhatsApp do dono do estabelecimento.
- **Galeria "Lightbox":** Visualizador interativo e em tela cheia das imagens do portfólio e carrossel de fotos.
- **Animações e Microinterações:** Animações fluidas no scroll da página (Intersection Observer) para proporcionar uma experiência de navegação premium.
- **SEO & Performance Máxima:** Estruturado com tags semânticas, `Open Graph` (para compartilhamento em redes sociais), imagens otimizadas com `lazy loading` (Lighthouse otimizado) e fontes carregadas de forma assíncrona para evitar gargalos de rede (Render-Blocking mitigado).

## 🛠️ Tecnologias Utilizadas

- **HTML5** Semântico.
- **CSS3** (Variáveis, Flexbox, Grid, Media Queries avançadas para responsividade).
- **JavaScript (ES6+)** - Interações do DOM sem frameworks pesados.
- **[Vite](https://vitejs.dev/)** - Ferramenta de *build* super-rápida usada para otimização de *assets* (CSS/JS) e ambiente de desenvolvimento local.

## 💻 Como Rodar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/vidracaria-oliveira.git
   cd vidracaria-oliveira
   ```

2. **Instale as dependências do Vite:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   > O servidor será iniciado (normalmente em `http://localhost:5173/`).

4. **Gerar arquivos para produção (Deploy):**
   ```bash
   npm run build
   ```
   > Uma pasta chamada `dist/` será criada com todos os arquivos otimizados e prontos para hospedagem.

## 🌐 Deploy (GitHub Pages)

O projeto foi estruturado para ser hospedado gratuitamente no **GitHub Pages**. Para fazer o deploy:

1. Modifique o arquivo `vite.config.js` (se necessário) ajustando a propriedade `base` para `/nome-do-repositorio/`.
2. Rode o comando `npm run build`.
3. Envie o conteúdo da pasta `dist/` para a branch `gh-pages` ou configure as *Actions* do GitHub para ler diretamente a pasta `dist/` ou o próprio repositório.

## 👨‍💻 Desenvolvido por

Desenvolvido com excelência por **Arthur**.
[Acesse meu Portfólio](https://arthurrv.dev)
