# EXPLICAÇÃO DO ARQUIVO  student.js!

## Definição do Objeto student
```
    const student = {
  name: "Alice",
  grades: [90, 85, 80, 88],
  addGrade: function(grade) {
    this.grades.push(grade);
  },
  getAverageGrade: function() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }
};
student.addGrade(95);
const averageGrade = student.getAverageGrade();
console.log(averageGrade);
```
### Propriedade name.
```
name: "Alice"
```
### Descrição: Esta propriedade armazena o nome do estudante. Valor: "Alice".
## Propriedade grades
```
grades: [90, 85, 80, 88]
```
### Descrição: Esta propriedade armazena um array de notas do estudante. Valor: [90, 85, 80, 88].

## Método addGrade.
```
addGrade: function(grade) {
  this.grades.push(grade);
}
```
### Descrição: Este método adiciona uma nova nota ao array de notas do estudante.
### Parâmetro: grade - A nova nota a ser adicionada.
### Funcionamento:this.grades.push(grade); usa o método push para adicionar o valor grade ao array grades.
### this refere-se ao objeto student, garantindo que estamos acessando e modificando o array grades corretamente.

## Método getAverageGrade.
```
getAverageGrade: function() {
  const total = this.grades.reduce((sum, grade) => sum + grade, 0);
  return total / this.grades.length;
}
```
##  Uso do Método reduce.
```
const total = this.grades.reduce((sum, grade) => sum + grade, 0);
```
# EXPLICAÇÃO BEM DETALHADA DESSE MÉTODO REDUCE().
## Descrição: A função reduce é usada para iterar sobre o array grades e calcular a soma de seus elementos.
## Parâmetro sum: Acumulador que mantém a soma total até o momento.
## Parâmetro grade: Valor do elemento atual do array sendo processado.
## Operação: sum + grade adiciona o valor de grade ao acumulador sum.
## Initial Value: 0
## Define o valor inicial do acumulador sum como 0.
## Processo de Iteração:
## Primeira Iteração: sum é 0 (valor inicial), grade é 90 (primeiro elemento do array).
## Novo sum: 0 + 90 = 90
## Segunda Iteração: sum é 90, grade é 85 (segundo elemento do array).
## Novo sum: 90 + 85 = 175
## Terceira Iteração: sum é 175, grade é 80 (terceiro elemento do array).
## Novo sum: 175 + 80 = 255
## Quarta Iteração: sum é 255, grade é 88 (quarto elemento do array).
## Novo sum: 255 + 88 = 343
## Quinta Iteração: sum é 343, grade é 95 (quinto elemento do array, adicionado anteriormente).
## Novo sum: 343 + 95 = 438
## Resultado Final: 438, armazenado na variável total

#  Cálculo da Média.
```
return total / this.grades.length;
```
### Descrição: Esta linha calcula a média das notas dividindo o valor total das notas pelo número de elementos no array grades.
### Cálculo: Total das Notas: total é 438.
### Número de Notas: this.grades.length retorna 5 (número de elementos no array grades).
### Média: 438 / 5 = 87.6
### Resultado: O método retorna o valor 87.6.
### Explicação Final
### Propriedade grades: Armazena as notas [90, 85, 80, 88, 95].
### Método getAverageGrade:
### Utiliza reduce para somar todas as notas.
### Divide a soma total pelo número de notas para calcular a média.
### Retorna a média das notas.
### Contexto na Prática Quando o método getAverageGrade é chamado, ele:
### Soma as Notas: Usa reduce para somar todas as notas no array grades.
### Calcula a Média: Divide a soma total pelo número de notas.
### Retorna a Média: O valor resultante é a média das notas do estudante.
### Assim, ao chamar student.getAverageGrade(), o valor 87.6 é calculado e retornado como a média das notas no array grades

### Descrição: Este método calcula e retorna a média das notas do estudante.
### Funcionamento:const total = this.grades.reduce((sum, grade) => sum + grade, 0);:
### reduce é usado para somar todas as notas no array grades.
### sum começa com 0 e, para cada grade, adiciona o valor de grade a sum.
### total armazena a soma de todas as notas.
### return total / this.grades.length;:
### Divide o total pelo número de notas (this.grades.length) para obter a média.
### this refere-se ao objeto student, garantindo que estamos acessando o array grades corretamente.

## Usando os Métodos
```
student.addGrade(95);
```

### Descrição: Chama o método addGrade com o argumento 95.
### Funcionamento: 95 é adicionado ao array grades.
### Novo valor de grades: [90, 85, 80, 88, 95].
```
const averageGrade = student.getAverageGrade();
console.log(averageGrade);
```
### Descrição: Chama o método getAverageGrade para calcular a média das notas.
### Funcionamento: Soma todas as notas: 90 + 85 + 80 + 88 + 95 = 438.
### Divide pelo número de notas: 438 / 5 = 87.6.
### averageGrade armazena o valor 87.6.
### console.log(averageGrade); exibe 87.6 no console.