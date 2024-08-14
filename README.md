Projeto Final M4


TEMA DA API: CANAL DE DENUNCIAS PARA CRIMES, abusos, etc.




 CONCEITO DA API:

Desenvolver uma API para gerenciar denúncias é uma tarefa essencial para criar um sistema eficaz de registro e acompanhamento de reclamações e incidentes. A API deve ser bem estruturada, permitindo que os usuários registrem denúncias, adicionem comentários, categorizem os tipos de denúncias e garantam a segurança e integridade dos dados através de um sistema robusto de autenticação e autorização. Abaixo, detalhamos como estruturar uma API de denúncias utilizando rotas claras e concisas, abordando cada aspecto necessário para seu desenvolvimento.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

REQUISITOS DO PROJETO:

- 1 CRUD PARA CADA USUÁRIO
- Deve-se usar um ORM (Foi recomendado o Sequelize)
- Teremos que fazer a hospedagem - (foi recomendado o render.com)
- Iremos usar o PostgreSQL 
- Na nossa API deveremos instalar o CORS, que deve estar configurado em um middleware.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

*Cada CRUD deve usar um modelo (tabela) diferente do ORM*

- Teremos que ter um CRUD para: 


* Denúncias(complaint): Todos os tipos de denúncias que são computados.


* Categoria da denúncia(category report): Qual foi o crime que foi denunciado. Exemplo: Lei Maria Da Penha, Abuso contraa idoso, Abuso contra animais, etc.


* Órgão responsavel (responsible authority): Para quem a denúncia é encaminhada. Exemplo: Polícia Da Mulher, Conselho Tutelar, etc


* Evidencias(Evidences): (Fotos ou videos do crime).


* Resolução da denuncia(Resolution): Status da denúncia, se está pendente ou se já foi resolvida.


* Local do crime(Crime scene): Localização de onde o crime aconteceu.


* Delator(Whistleblower): Pequenos dados de quem faz a denúncia. Ex: Telefone, nome, etc.




