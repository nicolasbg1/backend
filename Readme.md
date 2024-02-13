# Backend Barber Shop 

## Funcionalidades

### Cliente

- **Agendamento de Serviços**: Os clientes podem agendar serviços escolhendo o funcionário, data, horário e serviço desejado.
- **Remarcação e Cancelamento de Agendamentos**: Os clientes podem remarcar ou cancelar seus agendamentos existentes.

### Admin

- **Login de Administrador**: Os administradores podem fazer login no sistema com um email e senha previamente cadastrados.
- **Visualização de Todos os Agendamentos**: Os administradores podem visualizar todos os agendamentos de todos os clientes e funcionários.
- **Cancelamento de Agendamentos**: Os administradores têm a capacidade de cancelar agendamentos específicos.
- **Gerenciamento de Clientes**: Os administradores podem visualizar informações detalhadas sobre os clientes, incluindo seus agendamentos e informações de contato.

## Instalação e Configuração

1. Clone este repositório para sua máquina local.
2. Instale as dependências do projeto usando `npm install`.
3. Configure as variáveis de ambiente necessárias, como chaves de API, URLs do banco de dados, etc.
4. Execute o servidor usando `npm run dev`.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Prisma ORM
- TypeScript
- JWT para autenticação

##Em caso de erro na execução deletar node modules e iniciar com npm install (alguns pacotes cracham seu usar a base yarn ou pnpm ``não sei o porque)
