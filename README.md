# 🎓 Quiz Integrador

Aplicação web desenvolvida como projeto acadêmico do curso Técnico em Desenvolvimento de Sistemas da ETEC.

O **Quiz Integrador** tem como objetivo disponibilizar quizzes educacionais organizados por matéria, permitindo que alunos respondam questões, acompanhem sua pontuação e consultem o ranking geral.

O sistema também contará com uma área destinada aos professores para acompanhamento do desempenho dos alunos.

---

## 🚧 Status do Projeto

🛠️ **Em desenvolvimento**

O frontend está sendo desenvolvido utilizando **React**, **JavaScript** e **Tailwind CSS**.

### Funcionalidades já implementadas

- [x] Configuração inicial com React e Vite
- [x] Integração com Tailwind CSS
- [x] Organização inicial da estrutura do projeto
- [x] Configuração do React Router
- [x] Tela de login
- [x] Tela de cadastro
- [x] Navegação entre login e cadastro
- [x] Tela de seleção de matérias
- [x] Navegação para o quiz conforme a matéria selecionada
- [x] Exibição das questões
- [x] Seleção de alternativas
- [x] Destaque visual da alternativa selecionada
- [x] Validação de respostas
- [x] Feedback visual para respostas corretas e incorretas
- [x] Controle de pontuação
- [x] Contagem de acertos e erros
- [x] Navegação entre questões
- [x] Tela de resultado

### Próximas etapas

- [ ] Implementar cronômetro das questões
- [ ] Implementar finalização automática por tempo
- [ ] Criar confirmação para refazer o quiz
- [ ] Implementar sorteio de novas questões ao refazer o quiz
- [ ] Criar tela de ranking
- [ ] Destacar a posição do aluno no ranking
- [ ] Criar área do professor
- [ ] Criar tela de desempenho dos alunos
- [ ] Implementar autenticação real
- [ ] Diferenciar acesso de aluno e professor
- [ ] Integrar frontend com o backend
- [ ] Integrar frontend com o banco de dados
- [ ] Implementar tratamento de erros da API
- [ ] Realizar testes de responsividade

---

## 🧰 Tecnologias Utilizadas

### Frontend

- **React**
- **JavaScript**
- **Tailwind CSS**
- **React Router**
- **Vite**

### Ferramentas

- **Git**
- **GitHub**
- **VS Code**
- **Oxlint**

---

## 🏗️ Estrutura do Projeto

```text
src/
├── assets/
├── components/
├── data/
├── pages/
│   ├── Cadastro/
│   │   └── Cadastro.jsx
│   ├── Login/
│   │   └── Login.jsx
│   ├── Materias/
│   │   └── Materias.jsx
│   ├── Quiz/
│   │   └── Quiz.jsx
│   └── Resultado/
│       └── Resultado.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── services/
├── App.jsx
├── index.css
└── main.jsx
```

A estrutura foi organizada visando separar páginas, componentes, rotas, dados e serviços, facilitando a manutenção e evolução da aplicação.

---

## 🔄 Fluxo da Aplicação

### Aluno

```text
Cadastro
   ↓
Login
   ↓
Seleção de Matéria
   ↓
Quiz
   ↓
Resultado
   ↓
Ranking
   ↓
Logout
```

### Professor

```text
Login
   ↓
Ranking Geral
   ↓
Desempenho dos Alunos
   ↓
Logout
```

---

## 🧠 Funcionamento do Quiz

O aluno seleciona uma matéria e responde às questões apresentadas individualmente.

Cada questão possui:

- Enunciado
- Alternativas
- Nível de dificuldade
- Pontuação
- Cronômetro

### Pontuação por dificuldade

| Dificuldade | Pontuação |
|-------------|-----------|
| Fácil       | 5 pontos  |
| Média       | 10 pontos |
| Difícil     | 15 pontos |

Durante o desenvolvimento atual, as questões estão sendo utilizadas por meio de dados simulados no frontend.

Posteriormente, os dados serão fornecidos pela API do sistema.

---

## 📋 Regras do Quiz

- Cada questão possui apenas uma resposta correta.
- O aluno deve selecionar uma alternativa antes de responder.
- Respostas corretas acrescentam os pontos correspondentes à dificuldade.
- Respostas incorretas exibem visualmente a alternativa correta.
- Após uma resposta incorreta, o sistema avança automaticamente.
- Uma questão respondida incorretamente não pode ser respondida novamente.
- O tempo mínimo previsto é de 15 segundos por questão.
- Quando o tempo acabar, o sistema deverá avançar automaticamente.
- Ao finalizar o quiz, o aluno visualiza sua pontuação, acertos e erros.
- Ao refazer um quiz, a tentativa anterior será substituída.
- Novas questões deverão ser sorteadas na nova tentativa.

---

## 📊 Resultado

Ao finalizar todas as questões, o sistema apresenta:

- Pontuação total
- Quantidade de respostas corretas
- Quantidade de respostas incorretas
- Total de questões respondidas

A próxima evolução dessa tela será permitir acesso ao ranking e a opção de refazer o quiz.

---

## 🏆 Ranking

O ranking será responsável por apresentar a classificação geral dos alunos.

O sistema deverá:

- Exibir todos os alunos
- Ordenar da maior para a menor pontuação
- Destacar a posição do aluno autenticado
- Permitir visualização também pelo professor

---

## 👨‍🏫 Área do Professor

O perfil de professor terá acesso a informações adicionais sobre o desempenho dos alunos.

Entre as funcionalidades previstas estão:

- Visualização do ranking geral
- Listagem de alunos
- Consulta individual de desempenho
- Visualização de questões corretas e incorretas por aluno

---

## 📱 Responsividade

A interface está sendo desenvolvida com **Tailwind CSS** e deverá funcionar adequadamente em:

- Computadores
- Tablets
- Smartphones

O projeto segue uma abordagem responsiva, utilizando breakpoints e utilitários do Tailwind CSS.

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

É necessário possuir instalado:

- Node.js
- npm
- Git

### Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd quiz-integrador
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

---

## 🌿 Versionamento

O projeto utiliza **Git** para controle de versão.

O desenvolvimento está sendo registrado em commits separados por funcionalidade, permitindo acompanhar a evolução da aplicação.

Exemplos:

```text
chore: configura projeto React com Vite e Tailwind CSS

feat: adiciona login, cadastro e navegação inicial

feat: adiciona tela de seleção de matérias

feat: implementa fluxo e lógica inicial do quiz

feat: adiciona tela de resultado do quiz
```

---

## 🎯 Objetivos do Projeto

Além de atender aos requisitos acadêmicos, o projeto também tem como objetivo aplicar na prática conceitos de:

- Desenvolvimento frontend com React
- Componentização
- Gerenciamento de estado
- Navegação com React Router
- Estilização responsiva com Tailwind CSS
- Integração com APIs
- Arquitetura frontend
- Git e GitHub
- Desenvolvimento colaborativo
- Banco de dados
- Desenvolvimento full stack

---

## 📚 Contexto Acadêmico

Projeto desenvolvido durante o curso **Técnico em Desenvolvimento de Sistemas — ETEC**, integrando conhecimentos adquiridos nas disciplinas do curso.

O sistema está sendo desenvolvido de forma colaborativa, com equipes responsáveis pelas diferentes áreas da aplicação, incluindo:

- Análise e documentação
- Frontend
- Backend
- Banco de dados

---

## 📌 Observação

O projeto ainda está em desenvolvimento.

A implementação poderá sofrer alterações conforme a evolução do sistema, integração com o backend e decisões tomadas pela equipe durante o desenvolvimento.