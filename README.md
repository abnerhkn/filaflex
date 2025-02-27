# **FilaFlex - Sistema de Gerenciamento de Filas**

🚀 **FilaFlex** é um sistema de gerenciamento de filas em tempo real, desenvolvido com **React (frontend)** e **Node.js + Express (backend)**. Ele permite a gestão eficiente de senhas de atendimento, garantindo uma experiência fluida tanto para os funcionários quanto para os clientes.

---

## **📌 Funcionalidades**
✅ **Geração de Senhas** → Clientes podem retirar uma senha via sistema.  
✅ **Chamada de Senhas** → Funcionários podem chamar a próxima senha da fila.  
✅ **Atualização em Tempo Real** → Uso de **Socket.IO** para sincronização automática.  
✅ **Gerenciamento de Filas** → Possibilidade de **abrir e fechar a fila** conforme necessário.  
✅ **Histórico de Atendimento** → Registra as senhas chamadas.  
✅ **Exportação de Dados** → Exporta as promoções e atendimentos em **CSV**.  
✅ **Autenticação Segura** → Uso de **JWT** para login de funcionários.  

---

## **🛠 Tecnologias Utilizadas**
### **Frontend (React)**
- React.js + Hooks
- React Router
- Axios
- Socket.IO-Client
- JSDoc (para documentação)
- jsPDF (para geração de senhas em PDF)

### **Backend (Node.js + Express)**
- Express.js
- Socket.IO (tempo real)
- JWT para autenticação
- Axios para consumo de APIs
- `jq` para manipulação de JSON
- `curl` para integração com APIs externas

### **Banco de Dados**
- SQLite (leve e sem necessidade de configuração adicional)

---

## **📂 Estrutura do Projeto**
- **backend/** → Backend Node.js + Express
  - **controllers/** → Controladores das rotas
  - **routes/** → Definição de rotas
  - **models/** → Modelos de banco de dados (SQLite)
  - **services/** → Lógica de negócios
  - `.env` → Variáveis de ambiente
  - `server.js` → Inicialização do servidor
  - `package.json` → Dependências do backend

- **frontend/** → Frontend React.js
  - **components/** → Componentes reutilizáveis
  - **pages/** → Páginas do sistema
  - **styles/** → Estilos CSS
  - **services/** → Comunicação com API
  - `package.json` → Dependências do frontend

- **scripts/** → Scripts auxiliares (Batch, Shell)  
- `README.md` → Documentação  

---

## **⚡ Como Rodar o Projeto?**

### **1️⃣ Clonar o Repositório**

git clone https://github.com/abnerhkn/filaflex.git
cd filaflex
cd backend
npm install

### **2️⃣ Clonar o Backend**
cd backend
npm install

### Crie um arquivo .env com as configurações do banco de dados e JWT
PORT=5000
DB_STORAGE=./database.sqlite
JWT_SECRET=sua_chave_secreta

### Rode as migrações do SQLite:
npx sequelize-cli db:migrate

### Inicie o backend:
npm start

### 3️⃣ Configurar o Frontend
cd frontend
npm install

### Inicie o frontend:
npm start

O sistema estará acessível em http://localhost:3000.

🌐 Endpoints da API
Autenticação
POST /api/auth/login → Autentica um usuário (JWT)
POST /api/auth/logout → Encerra a sessão
Gestão de Filas
POST /api/fila/gerar-senha → Gera uma nova senha
POST /api/fila/chamar-proximo → Chama a próxima senha
GET /api/fila/status → Obtém o status da fila (aberta/fechada)
POST /api/fila/alternar → Alterna entre abrir/fechar a fila
Promoções
POST /api/promocoes → Busca promoções ativas
POST /api/promocoes/produtos → Busca produtos vinculados a promoções
📡 Comunicação em Tempo Real (Socket.IO)
O sistema utiliza WebSockets para manter a sincronização automática entre Frontend e Backend.

Eventos emitidos:

"atualizarFila" → Sempre que a fila for alterada, todos os clientes são atualizados automaticamente.


🚀 Melhorias Futuras
🔹 Implementação de dashboard de estatísticas
🔹 Suporte para notificações via WhatsApp
🔹 Melhorias na interface do usuário
🔹 Exportação de relatórios avançados em PDF e Excel


👨‍💻 Desenvolvedor
Nome: Abner Lima
GitHub: abnerhkn
LinkedIn: linkedin.com/in/abnerlima
📄 Licença
Este projeto está licenciado sob a MIT License. Você pode usá-lo, modificá-lo e distribuí-lo conforme necessário.

