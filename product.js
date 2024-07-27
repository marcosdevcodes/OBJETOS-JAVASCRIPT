
// Definicao ou criacao do objeto product
const product = {
    name: "Laptop", // Propriedade name e Valor Laptop
    price: 1200,    // Propriedade price e Valor 1200
//O objeto product tem um metodo discout que aceita
// discout é um metodo 
discout: function(percentagem){ //um parametro percentagem
//como é feita essa conta aqui 
return product.price * (percentagem / 100);
// percentagem é um parametro que foi passado para 
//o metodo discout da funcao, la dentro da variavel
//result ele esta armazenado com o objeto product.discout(10)
//entao o valor de percentagem é 10 dividido por 100 = 0.1
// depois ele é multiplicado pelo valor de this.price que é 1200
// resultado 120 de desconto
    }
};
const result = "Discout Laptop: " + product.discout(10);
console.log(result);
