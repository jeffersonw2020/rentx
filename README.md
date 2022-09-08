# Cadastro de Carro

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro.

**Regras de Negócio**
[x] Não deve ser possivel cadastrar um carro com uma placa ja existente.
O carro deve ser cadastrado por padrão, com disponibilidade.

- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de Carros

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponiveis
Deve ser possível listar todos os carros disponiveis pelo nome da categoria
Deve ser possível listar todos os carros disponiveis pelo nome da marca
Deve ser possível listar todos os carros disponiveis pelo nome do carro

**Regras de Negócio**
O usuário não precisar estar logado no sistema

# Cadastro de Especificações no carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**Regras de Negócio**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação ja existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de Imagens do carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros.

**Requisitos Não Funcionais**
Utilizar o multer para upload dos arquivos

**Regras de Negócio**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um aluguel

**Regras de Negócio**
O aluguel deve ter duração minima de 24 horas
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
