
# Projeto React com API e Gráficos

Este é um projeto desenvolvido em React que interage com uma API para enviar e obter dados de participação, além de exibir gráficos de participações utilizando a biblioteca `chart.js`.

## Estrutura do Projeto

Abaixo está a estrutura de diretórios do projeto:

```
/public
  ├── index.html           # Arquivo HTML de entrada
  ├── manifest.json        # Configurações de manifesto da aplicação
  ├── robots.txt           # Arquivo para configurações de rastreamento por robôs de busca
/src
  ├── App.js               # Componente principal da aplicação
  ├── App.css              # Estilos principais da aplicação
  ├── index.js             # Arquivo de entrada do React
  ├── components
  │   ├── Header.js        # Componente do cabeçalho e formulário de envio de dados
  │   ├── Table.js         # Componente que exibe os dados e o gráfico
  │   ├── Data.js          # Componente responsável pela exibição de dados
  ├── default
  │   └── DefaultData.json # Dados padrões para exibição caso não haja conexão com a API
  ├── scss
  │   ├── Header.module.scss  # Estilos específicos do Header
  │   └── Table.module.scss   # Estilos específicos da Tabela e do gráfico
  ├── url.json             # URL da API para interação com o backend
  ├── reportWebVitals.js   # (Comentado) Função para medir performance do app
  ├── setupTests.js        # Configuração de testes
```

## Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd <diretorio-do-projeto>
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. O projeto estará disponível em `http://localhost:3000`.

## Funcionalidade

O projeto consiste em uma aplicação React que se conecta a uma API para realizar operações de envio e obtenção de dados:

- **Header**: Possui um formulário para enviar dados de nome, sobrenome e participação.
- **Table**: Exibe os dados de participantes e suas respectivas porcentagens de participação em uma tabela, além de um gráfico `Doughnut` mostrando visualmente as distribuições de participação.

### Principais Arquivos

- `Header.js`: Componente responsável pelo formulário onde o usuário insere seu nome, sobrenome e participação. Ao submeter, os dados são enviados para a API via `POST`.
- `Table.js`: Componente que solicita os dados da API via `GET` e exibe-os em uma tabela. Caso não consiga se conectar com a API, ele utiliza dados padrão definidos em `DefaultData.json`. Um gráfico `Doughnut` é renderizado com as porcentagens de participação.
- `DefaultData.json`: Contém dados padrão que são utilizados caso a API não esteja acessível.

## Tecnologias Utilizadas

- **React.js**: Framework JavaScript para construção de interfaces de usuário.
- **Chart.js**: Biblioteca para gráficos, utilizada para gerar o gráfico de participação.
- **CSS Modules e SCSS**: Para organização e estilização dos componentes.
- **React Hot Toast**: Para exibição de mensagens de sucesso e erro.

## Executando a API

Este projeto depende de uma API para enviar e buscar dados. Certifique-se de que a API esteja rodando localmente na URL `http://localhost:3001`.

Caso você precise de mais informações sobre a API, consulte o arquivo `url.json`.

## Contribuições

Se você deseja contribuir para este projeto, fique à vontade para enviar um pull request. Certifique-se de escrever testes e garantir que a aplicação funcione corretamente.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
