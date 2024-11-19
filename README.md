
# Backend - CRUD de Usuários com Node.js

Este é um projeto backend que implementa um CRUD (Create, Read, Update, Delete) para gerenciamento de usuários, utilizando **Node.js**, **Express**, autenticação via **JWT**, e um repositório de dados em memória.

---

## **Pré-requisitos**

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (v12 ou superior)
- **npm** (ou **yarn**)

---

## **Instruções de Configuração**

1. **Clone o Repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as Dependências**:
   Execute o seguinte comando para instalar as dependências necessárias:
   ```bash
   npm install
   ```

3. **Configure o Ambiente**:
   Crie um arquivo `.env` na raiz do projeto e adicione a seguinte configuração:
   ```env
   JWT_SECRET=your_secret_key
   PORT=3000
   ```
   - Substitua `your_secret_key` por uma chave secreta de sua escolha.

4. **Inicie o Servidor**:
   Para iniciar o servidor em modo de desenvolvimento (com recarregamento automático), use:
   ```bash
   npx nodemon server.js
   ```
   Ou, para iniciar em modo de produção:
   ```bash
   node server.js
   ```

   O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

---

## **Rotas Disponíveis**

### **Autenticação**
- **POST** `/api/users/login`  
  Autentica um usuário existente (necessário para acessar outras rotas).  
  **Body** (JSON):
  ```json
  {
    "email": "admin@spsgroup.com.br",
    "password": "1234"
  }
  ```
  **Resposta**:
  ```json
  {
    "token": "JWT_TOKEN_AQUI"
  }
  ```

---

### **Usuários**

#### **Listar Usuários**
- **GET** `/api/users`  
  Retorna todos os usuários cadastrados (autenticado).  
  **Headers**:
  ```
  Authorization: Bearer JWT_TOKEN_AQUI
  ```

#### **Criar Usuário**
- **POST** `/api/users`  
  Adiciona um novo usuário (autenticado).  
  **Body** (JSON):
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "type": "user",
    "password": "password123"
  }
  ```

#### **Atualizar Usuário**
- **PUT** `/api/users/:email`  
  Atualiza os dados de um usuário pelo e-mail (autenticado).  
  **Body** (JSON):
  ```json
  {
    "name": "John Updated",
    "type": "admin",
    "password": "newpassword"
  }
  ```

#### **Excluir Usuário**
- **DELETE** `/api/users/:email`  
  Remove um usuário pelo e-mail (autenticado).

---

## **Recursos Utilizados**
- **Node.js**: Runtime para JavaScript no servidor.
- **Express.js**: Framework para criação de APIs REST.
- **jsonwebtoken**: Implementação de autenticação via JWT.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **cors**: Habilitação de CORS para comunicação com o frontend.
- **nodemon** (dev): Monitoramento de alterações no código durante o desenvolvimento.

---

## **Licença**
Este projeto é licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## **Contato**
Caso tenha dúvidas ou sugestões, entre em contato:
- **Email**: jmepereira2010@gmail.com
- **LinkedIn**: [João Marcos Esteves](https://www.linkedin.com/in/joao-marcos-esteves-pereira-a5b2b317a/)

---

