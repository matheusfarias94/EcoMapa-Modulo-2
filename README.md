🚧 Projeto em construção 🚧

# ECOMAPA
Este é um projeto de gerenciamento de locais de coleta seletiva, permitindo a criação, listagem, atualização e deleção de locais cadastrados pelos usuarios. 

# 📚 Introdução
O ECOMAPA visa facilitar a identificação e o gerenciamento de pontos de coleta seletiva, incentivando práticas sustentáveis e a redução do impacto ambiental através da reciclagem de materiais.


# 🛠️ Tecnologias Utilizadas
- Express: Framework para aplicativos web do Node.js.
- Sequelize: ORM utilizada para criar modelos(Models) em JavaScript.
- PostgreSQL: Banco de Dados relacional.
- jsonwebtoken: Biblioteca para gerar tokens assinados.
- bcryptjs: Biblioteca de criptografia de senhas.
- cors: Permite que aplicativos de um domínio possam acessar recursos de outro domínio.
- dotenv: Gerenciador de variáveis de ambiente.
- pg: Biblioteca usada para interagir com banco de dados PostgreSQL.
- swagger: Documentação de API.


# 🔨Funcionalidades do projeto

- Criar Local: Permite a criação de um novo local.
- Listar Locais do Usuário: Lista todos os locais cadastrados pelo usuário autenticado.
- Listar Local Específico: Lista um local específico cadastrado pelo usuário autenticado.
- Atualizar Local:Atualiza os dados de um local cadastrado pelo usuário autenticado.
- Deletar Local: Deleta um local cadastrado pelo usuário autenticado.
- Link do Google Maps: Fornece o link do Google Maps de um local cadastrado pelo usuário autenticado.


# 📁 Acesso ao projeto
 Para ter acesso ao projeto voce precisa ser adicionado como colaborador.

# 💻 Instalação
    1.Clone o repositorio:
       git clone https://github.com/matheusfarias94/EcoMapa-Modulo-2.git
    2.Instale as dependencias:
       npm install
   

# ⚙️ Configuração
1.Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias:
  PORT_API=3000
  DB_HOST=localhost
  DB_PORT=5432
  DB_NAME=api_EcoMapa
  DB_USER=postgres
  DB_PASSWORD=postgres
  DB_DIALECT=postgres
  JWT_SECRET=palavraSegura

# 🛠️ Como Abrir e Rodar o Projeto
 1.Execute a aplicação em modo desenvolvimento:
    npm run start:dev
 2.O servidor iniciará na porta:3000 - acesse <http://localhost:3000>

# 🌟 Melhorias e Futuras Implementações
- Autenticação: Adicionar suporte para facilitar o login com contas de terceiros (Google, Facebook, etc.).
- Feedback de Usuários: Implementar uma funcionalidade para os usuários avaliarem e comentarem sobre os pontos de coleta.
- Notificações: Sistema de notificações via email ou push notifications para lembrar os usuários sobre dias de coleta, eventos especiais, ou novas adições de pontos de coleta.
- Suporte a Dispositivos Móveis: Desenvolver um aplicativo móvel dedicado para facilitar o acesso e a usabilidade em smartphones e tablets.
- Páginas de Educação Ambiental: Criar páginas informativas e educativas sobre reciclagem e práticas sustentáveis.
- Melhorar a API de localização: Instalar uma API mais completa para buscar endereços mais precisos. 



