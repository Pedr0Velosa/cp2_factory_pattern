# Checkpoint 2 - Factory Pattern

### Requisitos para rodar o projeto:
1. Ter o node v10+, recomendado 16+, realizado 18.4.0.
2. Ter o python instalado.

## Para rodar:
1. Abra a pasta 'frontend' no terminal
2. Rode um `npm i`, para instalar as dependências do node.
3. Ainda no terminal rode o comando `npm run dev`.
4. Após isso é só abrir o navegador em `localhost:3000`, ou na porta indicada.

Como o 'backend' foi feito em um arquivo .txt as informações do front são estáticas e quando atualizada a pagina, perde-se o que foi mudado.   
O projeto usa o esquema **Factory Pattern** e para atualizar o backend, basta digitar no arquivo **main.py**:  
`Store(<Nome do cliente>).criar(<Pizzas escolhidas>)`   
Os dados são salvos no arquivo *data.txt*, em 'frontend\public\data.txt*
As pizzas escolhidas devem estar neste formato 'Pizza 1','Pizza 2',...,'Pizza n'.
No momento as *factorys* criadas são para as pizzas (Queijo, Calabresa, 4 Queijos, Portuguesa, Brasileira).
