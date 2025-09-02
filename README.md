🎬 DevMovies React
Uma aplicação web moderna para descobrir e explorar filmes, desenvolvida com React e integrada com APIs de filmes.
📋 Sobre o Projeto
O DevMovies é uma aplicação que permite aos usuários navegar por uma vasta coleção de filmes, visualizar detalhes, trailers e informações relevantes. O projeto foi desenvolvido como parte do aprendizado em desenvolvimento Full Stack, focando em tecnologias modernas do front-end.
✨ Funcionalidades

🔍 Busca de filmes por título
🎭 Visualização de filmes populares e em cartaz
📊 Detalhes completos dos filmes (sinopse, elenco, avaliação)
🎥 Reprodução de trailers
📱 Design responsivo para dispositivos móveis
⭐ Sistema de avaliação e favoritos

🚀 Tecnologias Utilizadas
Front-end

React - Biblioteca JavaScript para construção de interfaces
JavaScript ES6+ - Linguagem de programação moderna
CSS3 - Estilização e responsividade
React Router - Navegação entre páginas
Axios - Cliente HTTP para requisições à API

APIs

The Movie Database (TMDb) API - Dados dos filmes e imagens
YouTube API - Integração com trailers dos filmes

📦 Instalação e Execução
Pré-requisitos

Node.js (versão 16 ou superior)
npm ou yarn
Conta no TMDb para obter API Key

Passo a passo

Clone o repositório

bashgit clone https://github.com/RondneyLoiola/devmovies_react.git
cd devmovies_react

Instale as dependências
yarn install

Configure as variáveis de ambiente

bash# Crie um arquivo .env na raiz do projeto
cp .env.example .env

Adicione sua API Key do TMDb no arquivo .env

envREACT_APP_TMDB_API_KEY=sua_api_key_aqui
REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3

Execute o projeto:
yarn dev

Acesse a aplicação
Abra seu navegador e acesse: http://localhost:3000

🗂️ Estrutura do Projeto
devmovies_react/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── services/       # Serviços e APIs
│   ├── styles/         # Arquivos de estilo
│   ├── utils/          # Funções utilitárias
│   ├── App.js          # Componente principal
│   └── index.js        # Ponto de entrada
│
├── .env.example        # Exemplo de variáveis de ambiente
├── package.json        # Dependências do projeto
└── README.md          # Este arquivo



Design responsivo
Boas práticas de desenvolvimento

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
