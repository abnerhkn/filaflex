# FilaFlex - Sistema de Gerenciamento de Filas

🚀 **FilaFlex** é um sistema de gerenciamento de filas em tempo real desenvolvido com **React (frontend)** e **Node.js + Express (backend)**. Oferece uma experiência fluida para clientes e funcionários através de recursos modernos e sincronização instantânea.

---

## 📌 Funcionalidades Principais
- **Geração de Senhas**: Clientes retiram senhas via interface intuitiva.
- **Chamada de Senhas**: Funcionários chamam próxima senha com um clique.
- **Tempo Real**: Sincronização automática entre dispositivos usando **Socket.IO**.
- **Controle de Fila**: Abrir/fechar fila conforme demanda.
- **Histórico Completo**: Registro de todas as senhas atendidas.
- **Exportação de Dados**: Exporte promoções e atendimentos em **CSV**.
- **Autenticação Segura**: Login de funcionários com **JWT**.

---

## 🛠 Tecnologias Utilizadas
### **Frontend (React)**
- React.js + Hooks
- React Router
- Axios (consumo de API)
- Socket.IO-Client (comunicação em tempo real)
- JSDoc (documentação)
- jsPDF (geração de PDF)

### **Backend (Node.js/Express)**
- Express.js
- Socket.IO (WebSockets)
- JWT (autenticação)
- SQLite (banco de dados)
- Sequelize (ORM)
- Axios (integração com APIs externas)

### **Ferramentas Auxiliares**
- `jq` (manipulação de JSON)
- `curl` (testes de API)
- Scripts Shell/Batch (automação)

---

## 📂 Estrutura do Projeto
```
filaflex/
├── backend/                  # Backend Node.js
│   ├── controllers/         # Lógica das rotas
│   ├── models/              # Modelos do banco de dados
│   ├── routes/              # Definições de endpoints
│   ├── services/            # Regras de negócio
│   ├── .env                 # Variáveis de ambiente
│   └── server.js            # Ponto de inicialização
│
├── frontend/                # Frontend React
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/               # Telas do sistema
│   ├── services/            # Chamadas à API
│   └── styles/              # Estilização CSS
│
└── scripts/                 # Scripts de automação
```

---

## ⚡ Instalação e Execução

### Pré-requisitos
- Node.js ≥ v14
- NPM/Yarn
- SQLite3

### Passo a Passo
1. **Clonar Repositório**
   ```bash
   git clone https://github.com/abnerhkn/filaflex.git
   cd filaflex
   ```

2. **Configurar Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env  # Edite o .env com suas configurações
   npx sequelize-cli db:migrate
   npm start
   ```

3. **Configurar Frontend**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

📌 Acesse o sistema em: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Endpoints da API (Backend)

### Autenticação
| Método | Endpoint          | Descrição               |
|--------|-------------------|-------------------------|
| POST   | `/api/auth/login` | Gera token JWT          |
| POST   | `/api/auth/logout`| Encerra sessão          |

### Gestão de Filas
| Método | Endpoint                | Descrição                     |
|--------|-------------------------|-------------------------------|
| POST   | `/api/fila/gerar-senha` | Gera nova senha               |
| POST   | `/api/fila/chamar-proximo` | Chama próxima senha        |
| GET    | `/api/fila/status`      | Verifica status da fila       |
| POST   | `/api/fila/alternar`    | Abre/fecha fila               |


---

## 📡 Comunicação em Tempo Real (Socket.IO)
- **Evento**: `atualizarFila`
- **Descrição**: Notifica todos os clientes quando há mudanças na fila (novas senhas, atendimentos, etc).

---

## 🚀 Melhorias Futuras
- Dashboard com métricas de atendimento
- Integração com WhatsApp para notificações
- Relatórios avançados em PDF/Excel
- Interface responsiva para dispositivos móveis

---

## 👨💻 Desenvolvedor
**Abner Lima**  
[![GitHub](https://img.shields.io/badge/GitHub-abnerhkn-blue)](https://github.com/abnerhkn)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abner_Lima-blue)](https://linkedin.com/in/abnerlima)

---

## 📄 Licença
Distribuído sob licença **MIT**. Consulte o arquivo `LICENSE` para detalhes.
