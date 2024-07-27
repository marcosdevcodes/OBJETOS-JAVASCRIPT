


const student = {
    name: "Alice",  // Esta propriedade armazena o nome do estudante  Valor: "Alice".
    grades: [90, 85, 80, 88],//Esta propriedade armazena um array de notas do estudante Valor: [90, 85, 80, 88].

    //Método addGrade
    //Este método adiciona uma nova nota ao array de notas do estudante
    addGrade: function(grade){  //Parâmetro: grade - A nova nota a ser adicionada.
        this.grades.push(grade);//this.grades.push(grade); usa o método push para adicionar o valor grade ao array grades.
        //this refere-se ao objeto student, garantindo que estamos acessando e modificando o array grades corretamente.
    },

    //Método getAverageGrade
    //Este método calcula e retorna a média das notas do estudante.
    //Calcular e retornar a média das notas armazenadas na propriedade grades
    getAverageGrade: function(){//Esta linha define um método anônimo chamado getAverageGrade que pertence ao objeto student.
        //reduce é usado para somar todas as notas no array grades.
        //sum começa com 0 e, para cada grade, adiciona o valor de grade a sum.
        //total armazena a soma de todas as notas.
        //A função reduce é usada para iterar sobre o array grades e calcular a soma de seus elementos.
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        // Funcionamento do reduce:
        // Callback Function: (sum, grade) => sum + grade
        // Parâmetro sum: Acumulador que mantém a soma total até o momento.
        // Parâmetro grade: Valor do elemento atual do array sendo processado.
        // Operação: sum + grade adiciona o valor de grade ao acumulador sum.
        // Initial Value: 0 Define o valor inicial do acumulador sum como 0.
        // Processo de Iteração:
        // Primeira Iteração: sum é 0 (valor inicial), grade é 90 (primeiro elemento do array).
        // Novo sum: 0 + 90 = 90
        // Segunda Iteração: sum é 90, grade é 85 (segundo elemento do array).
        // Novo sum: 90 + 85 = 175
        // Terceira Iteração: sum é 175, grade é 80 (terceiro elemento do array).
        // Novo sum: 175 + 80 = 255
        // Quarta Iteração: sum é 255, grade é 88 (quarto elemento do array).
        // Novo sum: 255 + 88 = 343
        // Quinta Iteração: sum é 343, grade é 95 (quinto elemento do array, adicionado anteriormente).
        // Novo sum: 343 + 95 = 438
        // Resultado Final: 438, armazenado na variável total.

        //Divide o total pelo número de notas (this.grades.length) para obter a média.
        return total / this.grades.length;
        // Cálculo: Total das Notas: total é 438.
        // Número de Notas: this.grades.length retorna 5 (número de elementos no array grades).
        // Média: 438 / 5 = 87.6
        // Resultado: O método retorna o valor 87.6
        //this refere-se ao objeto student, garantindo que estamos acessando o array grades corretamente.
    }
}
//Usando os Métodos
student.addGrade(95);//Chama o método addGrade com o argumento 95
//95 é adicionado ao array grades.
//Novo valor de grades: [90, 85, 80, 88, 95].
const averageGrade = student.getAverageGrade();//Chama o método getAverageGrade para calcular a média das notas.
//Soma todas as notas: 90 + 85 + 80 + 88 + 95 = 438.
//Divide pelo número de notas: 438 / 5 = 87.6.
//averageGrade armazena o valor 87.6.
console.log(averageGrade);
// exibe 87.6 no console.

// Resumo da Execução
// Definição do Objeto: Criamos um objeto student com propriedades name e grades, e métodos addGrade e getAverageGrade.
// Adicionar Nota: Chamamos student.addGrade(95), que adiciona 95 ao array grades.
// Calcular Média: Chamamos student.getAverageGrade(), que calcula e retorna a média das notas atualizadas.
// Exibição do Resultado: console.log(averageGrade); exibe a média calculada no console.
// Este código demonstra como criar um objeto com propriedades e métodos que permitem manipular e acessar dados de maneira prática e dinâmica.