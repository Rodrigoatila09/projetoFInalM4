# Reportify API 🗣️📣

A API de denúncias foi desenvolvida com o objetivo de fornecer uma plataforma segura e eficiente para o registro e gerenciamento de denúncias relacionados a irregularidades, crimes e outros incidentes. Em um mundo onde a integridade e a transparência são cada vez mais valorizadas, é crucial oferecer às pessoas uma maneira acessível e confiável de reportar problemas e compartilhar informações importantes.

Com essa Reportify API, buscamos facilitar o processo de denúncia, garantindo que as informações sejam coletadas de forma confidencial e processadas com eficiência. Ela oferece uma estrutura robusta para que os usuários possam registrar denúncias, acompanhar seu status e interagir com as autoridades responsáveis, promovendo a justiça e a responsabilidade.

Além disso, a API foi projetada para integrar-se facilmente com outros sistemas e plataformas, possibilitando a criação de soluções personalizadas que atendam às necessidades específicas de diferentes organizações e comunidades. Através da nossa API, pretendemos contribuir para um ambiente mais seguro e justo, onde as denúncias são tratadas com seriedade e agilidade.

# 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

# 📋 Pré-requisitos

* Node.js  (v22.1.0)
* npm (v10.7.0)
* Express.js (v4.19.2)
* Sequelize (v6.37.3)
* Cors (v2.8.5)
* uuid (v6.2.13)

# 🔧 Instalação
Clone o repositório

```
git clone https://github.com/Rodrigoatila09/projetoFInalM4 
```
Inicialize o projeto
```
npm init -y 
```
Instale Express.js
```
npm i express
```
Instale a ORM Sequelize
```
npm i sequelize
```
Instale o CORS
```
npm i cors
```
Instale a biblioteca uuid
```
npm i uuid
```
Inicialize o servidor
```
npm run dev
```
# ⚙️ Executando a API Localmente
Após a instalação, e inicialização, por padrão, a API estará disponível em http://localhost:4000


# 📋 CRUD's

1. Whistleblower (Delator)

    * Descrição: Gerencia as informações dos delatores, que são indivíduos ou entidades que relatam atividades ilegais, ilícitas ou antiéticas. Este CRUD permite criar, visualizar, atualizar e excluir informações como nome, email, telefone, e status de anonimato dos delatores.

2. Complaint (Denúncia)

    * Descrição: Responsável pela gestão das denúncias feitas pelos delatores. Este CRUD permite a criação, visualização, atualização e exclusão de denúncias, armazenando detalhes como a descrição do incidente.

3. CrimeScene (Local do Crime)

    * Descrição: Gerencia os dados relacionados às cenas de crime reportadas. O CRUD permite adicionar, visualizar, editar e remover informações sobre as cenas de crime, incluindo localização, descrição, data e evidências associadas.

4. CategoryReport (Categoria da denúncia)

    * Descrição: Manipula as categorias de crimes ou infrações reportadas nas denúncias. Este CRUD possibilita a criação, leitura, atualização e remoção de categorias, organizando as denúncias por tipos específicos, como fraude, corrupção, violência, etc.

5. Evidence (Evidência)

    * Descrição: Administra as evidências coletadas ou fornecidas em relação a uma denúncia ou cena do crime. O CRUD permite inserir, visualizar, atualizar e excluir evidências, como fotos, vídeos, documentos, ou outros tipos de provas.

6. ResponsibleAuthority (Autoridade Responsável)

    * Descrição: Gerencia as autoridades ou entidades responsáveis pela investigação e resolução das denúncias. O CRUD permite cadastrar, visualizar, atualizar e remover informações sobre autoridades responsáveis, como polícia, departamentos internos, ou outras agências.

7. Resolution (Resolução da Denúncia)

    * Descrição: Controla as resoluções tomadas após a investigação das denúncias. Este CRUD permite criar, visualizar, atualizar e excluir resoluções, registrando detalhes sobre as ações tomadas, resultados alcançados, e o fechamento de casos.

# 📍 Endpoints

## Whisteblower (Delator)

#### Registrar Delator
* Endpoint: ```/delator```
* Método HTTP: POST
* Descrição: Registrar um delator

#### Buscar Todos Delatores
* Endpoint: ```/delator```
* Método HTTP: GET
* Descrição: Lista todos delatores

#### Atualizar Delator
* Endpoint: ```/delator/:id```
* Método HTTP: PUT
* Descrição: Atualiza o delator pelo ID

#### Deletar Delator
* Endpoint: ```/delator/:id```
* Método HTTP: DELETE
* Descrição: Deleta delator pelo ID

### Exemplo de Requisição

Este é um exemplo de um JSON para criar um novo delator que não é anônimo:
```
{
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "phone": "+123456789",
    "isAnonymous": false
  }
```
Este é um exemplo de um JSON para criar um novo delator que é anônimo:
```
{
  "name": null,
  "email": null,
  "phone": null,
  "isAnonymous": true
}
```

## Complaint (Denúncia)

#### Registrar Denúncia
* Endpoint: ```/denuncia```
* Método HTTP: POST
* Descrição: Registrar uma denúncia

#### Buscar Todas Denúncias
* Endpoint: ```/denuncia```
* Método HTTP: GET
* Descrição: Lista todas denúncias

#### Atualizar Denúncia
* Endpoint: ```/denuncia/:id```
* Método HTTP: PUT
* Descrição: Atualiza a denúncia pelo ID

#### Deletar Denúncia
* Endpoint: ```/denuncia/:id```
* Método HTTP: DELETE
* Descrição: Deleta a denúncia pelo ID

### Exemplo de Requisição
Este é um exemplo JSON para criar uma nova denúncia:

Obs.: Verifique se os ID's são correspondentes
```
{
  "description": "Roubo em loja de eletrônicos.",
  "whistleBlowerID": "e7bca6a1-58a6-4b94-a2d6-82b485d3d650",
  "responsibleAuthorityID": "c4a19b8d-9d82-4e77-80d3-0b5ed9a92765",
  "evidenceID": "b9e2d1b5-6f1e-4d09-9f7e-7f1a9d6b1c4b",
  "resolutionID": "a5f12b4d-28c3-4e8d-bd89-fd1e3c4d5b7e",
  "categoryReportID": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
  "crimeSceneID": "3d7e8f9a-0b1c-2d3e-4f5g-6h7i8j9k0l1m",
}
```

## CrimeScene (Local do Crime)

#### Registrar Local do Crime
* Endpoint: ```/cena-crime```
* Método HTTP: POST
* Descrição: Registrar um local de crime

#### Buscar Todos Locais de Crime
* Endpoint: ```/cena-crime```
* Método HTTP: GET
* Descrição: Lista todas locais de crime

#### Atualizar Local do Crime
* Endpoint: ```/cena-crime/:id```
* Método HTTP: PUT
* Descrição: Atualiza o local do crime pelo ID

#### Deletar Local do Crime
* Endpoint: ```/cena-crime/:id```
* Método HTTP: DELETE
* Descrição: Deleta o local do crime pelo ID

### Exemplo de Requisição
Este é um exemplo JSON para criar uma novo local do crime:

Obs.: Verifique se os ID's são correspondentes

```
{
  "location": "Rua das Flores, 123, São Paulo, SP, Brasil",
  "description": "Um incidente ocorreu em uma loja de eletrônicos onde vários itens foram roubados. A loja estava fechada quando o crime aconteceu.",
  "dateOfCrime": "2024-08-14T03:30:00Z",
  "whistleblowerId": "e7bca6a1-58a6-4b94-a2d6-82b485d3d650",
  "responsibleAuthorityId": "c4a19b8d-9d82-4e77-80d3-0b5ed9a92765"
}
```
## CategoryReport (Categoria da denúncia)

#### Registrar Categoria da denúncia
* Endpoint: ```/categoria```
* Método HTTP: POST
* Descrição: Registrar uma categoria de denúncia

#### Buscar Todas Categorias de denúncia
* Endpoint: ```/categoria```
* Método HTTP: GET
* Descrição: Lista todas categorias de denúncia

#### Atualizar Categoria da denúncia
* Endpoint: ```/categoria/:id```
* Método HTTP: PUT
* Descrição: Atualiza a categoria de denúncia pelo ID

#### Deletar Categoria da denúncia
* Endpoint: ```/categoria/:id```
* Método HTTP: DELETE
* Descrição: Deleta categoria de denúncia pelo ID

### Exemplo de Requisição

Este é um exemplo JSON para criar uma nova categoria de denúncia:
```
{
    "name": "Roubos",
    "description": "Categoria para incidentes de roubo, incluindo furtos e assaltos em residências e comércios."
}
```

## Evidence (Evidência)

#### Registrar Evidência
* Endpoint: ```/evidencia```
* Método HTTP: POST
* Descrição: Registrar uma evidência

#### Buscar Todas Categorias
* Endpoint: ```/evidencia```
* Método HTTP: GET
* Descrição: Lista todas evidências

#### Atualizar Categoria
* Endpoint: ```/evidencia/:id```
* Método HTTP: PUT
* Descrição: Atualiza a evidência pelo ID

#### Deletar Categoria
* Endpoint: ```/evidencia/:id```
* Método HTTP: DELETE
* Descrição: Deleta evidência pelo ID

### Exemplo de Requisição

Este é um exemplo JSON para criar uma nova evidência:

Obs.: Verifique se os ID's são correspondentes
```
{
  "resolutionId": "a5f12b4d-28c3-4e8d-bd89-fd1e3c4d5b7e",
  "responsibleAuthorityId": "c4a19b8d-9d82-4e77-80d3-0b5ed9a92765",
  "evidenceContent": "base64_encoded_binary_data_here",
  "resolutionDate": "2024-08-14T15:00:00Z",
  "resolutionDetails": "Após a investigação, foi concluído que o crime foi cometido por um grupo de indivíduos que foram identificados e detidos. A evidência inclui imagens das câmeras de segurança e depoimentos das testemunhas."
}
```
## ResponsibleAuthority (Autoridade Responsável)

#### Registrar Autoridade Responsável
* Endpoint: ```/autoridade-responsavel```
* Método HTTP: POST
* Descrição: Registrar uma autoridade responsável

#### Buscar Todas Autoridades Responsáveis
* Endpoint: ```/autoridade-responsavel```
* Método HTTP: GET
* Descrição: Lista todas autoridades responsáveis

#### Atualizar Autoridade Responsável
* Endpoint: ```/autoridade-responsavel/:id```
* Método HTTP: PUT
* Descrição: Atualiza autoridade responsável pelo ID

#### Deletar Autoridade Responsável
* Endpoint: ```/autoridade-responsavel/:id```
* Método HTTP: DELETE
* Descrição: Deleta autoridade responsável pelo ID

### Exemplo de Requisição

Este é um exemplo JSON para criar uma nova autoridade responsável:

```
{
  "nameAuthority": "Polícia Civil",
  "typeAuthority": "Força de Segurança",
  "activity": "Investigações criminais e manutenção da ordem pública",
  "address": "Avenida dos Estados, 1234, São Paulo, SP, Brasil",
  "email": "contato@policiacivil.sp.gov.br",
  "phone": "+55 11 1234-5678"
}
```
## Resolution (Resolução da Denúncia)

#### Registrar Resolução da Denúncia
* Endpoint: ```/resolucao```
* Método HTTP: POST
* Descrição: Registrar uma resolução de denúncia

#### Buscar Todas Resoluções de Denúncia
* Endpoint: ```/resolucao```
* Método HTTP: GET
* Descrição: Lista todas resoluções de denúncia

#### Atualizar Resolução da Denúncia
* Endpoint: ```/resolucao/:id```
* Método HTTP: PUT
* Descrição: Atualiza resolução de denúncia pelo ID

#### Deletar RResolução da Denúncia
* Endpoint: ```/resolucao/:id```
* Método HTTP: DELETE
* Descrição: Deleta resolução de denúncia pelo ID

### Exemplo de Requisição

Este é um exemplo JSON para criar uma nova resolução de denúncia:

Obs.: Verifique se os ID's são correspondentes

```
{
  "responsibleAuthorityId": "c4a19b8d-9d82-4e77-80d3-0b5ed9a92765",
  "evidenceContent": "base64_encoded_binary_data_here",
  "resolutionDate": "2024-08-14T15:00:00Z",
  "resolutionDetails": "Após a investigação, concluímos que o crime foi solucionado. A evidência inclui registros de câmeras de segurança e depoimentos de testemunhas.",
  "status": "Pendente"
}
```

# ⚙️ Executando os testes
Utilize ferramentas de desenvolvimento e teste de API's como Postman ou Insomina para enviar solicitações HTTP e visualizar respostas.

![alt text](img/image.png)
![alt text](img/image-1.png)

# 🛠️ Construído com
* #### Node.js  (v22.1.0)
* #### Express.js (v4.19.2)
* #### Sequelize (v6.37.3)
* #### PostgreSQL
* #### Padrão MVC 

#

#### 🖇️ Aplicação desenvolvida como Projeto Final para o M4 da Programadores do Amanhã
































