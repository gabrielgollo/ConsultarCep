Consultar CEP

# Oque é?

É um pequeno projeto feito em Node.js para realizar consultas na API do Viacep e retorna os dados para um pequeno front.


# Requisitos para funcionar:
- Express
- axios
- express-handlebars
- body-parser

# É possível utilizar no meu projeto?

Sim, basta que você importe a função CheckCep() que está no arquivo:
>./controllers/cepAPI.js

Após importar, basta chama-la passando um número de CEP e usando o await, exemplo:
> const cepInfo = await CheckCep(numeroDoCep)