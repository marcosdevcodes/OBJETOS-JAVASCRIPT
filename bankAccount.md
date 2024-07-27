# Vamos analisar e explicar detalhadamente cada parte do código do objeto bankAccount, incluindo suas propriedades, métodos e o uso desses métodos na prática.

## Definição do Objeto bankAccount.
```
const bankAccount = {
  accountHolder: "Arthur Morgan",
  balance: 1000,
  deposit: function(amount) {
    this.balance += amount;
    return `Deposit successful! New balance: $${this.balance}`;
  },
  withdraw: function(amount) {
    if (amount > this.balance) {
      return "Insufficient funds.";
    }
    this.balance -= amount;
    return `Withdrawal successful! New balance: $${this.balance}`;
  }
};
```
### Propriedade accountHolder.
```
accountHolder: "Arthur Morgan"
```
### Descrição: Esta propriedade armazena o nome do titular da conta. Valor: "Arthur Morgan".

### Propriedade balance.
```
balance: 1000
```
### Descrição: Esta propriedade armazena o saldo atual da conta bancária.
### Valor: 1000 (representa o saldo inicial em dólares)

### Método deposit.
```
deposit: function(amount) {
  this.balance += amount;
  return `Deposit successful! New balance: $${this.balance}`;
}
```
### Descrição: Este método adiciona um valor ao saldo da conta.
### Parâmetro: amount - O valor a ser depositado.
### Funcionamento:
### this.balance += amount;:
### Usa this para referenciar o objeto bankAccount.
### Adiciona o valor de amount ao saldo atual (balance).
### return Deposit successful! New balance: $${this.balance};:
### Retorna uma mensagem confirmando o depósito e mostrando o novo saldo

### Método withdraw.
```
ithdraw: function(amount) {
  if (amount > this.balance) {
    return "Insufficient funds.";
  }
  this.balance -= amount;
  return `Withdrawal successful! New balance: $${this.balance}`;
}
```

### Descrição: Este método subtrai um valor do saldo da conta, se houver fundos suficientes.
### Parâmetro: amount - O valor a ser sacado.
### Funcionamento:
### if (amount > this.balance) { return "Insufficient funds."; }:
### Verifica se o valor a ser sacado é maior que o saldo atual.
### Se for, retorna uma mensagem indicando fundos insuficientes.
### this.balance -= amount;:
### Usa this para referenciar o objeto bankAccount.
### Subtrai o valor de amount do saldo atual (balance).
### return Withdrawal successful! New balance: $${this.balance};:
### Retorna uma mensagem confirmando o saque e mostrando o novo saldo

## Uso dos Métodos.
```
const depositMessage = bankAccount.deposit(500);
console.log(depositMessage);
```
### Descrição: Chama o método deposit com o valor 500.
### Funcionamento:
### bankAccount.deposit(500); adiciona 500 ao saldo atual (1000).
### Novo saldo: 1000 + 500 = 1500.
### return "Deposit successful! New balance: $1500"; retorna a mensagem de sucesso.
### console.log(depositMessage); exibe a mensagem: "Deposit successful! New balance: $1500".

## Saque
```
const withdrawalMessage = bankAccount.withdraw(2000);
console.log(withdrawalMessage);
```

### Descrição: Chama o método withdraw com o valor 2000.
### Funcionamento:
### bankAccount.withdraw(2000); verifica se 2000 é maior que o saldo atual (1500).
### Como 2000 é maior que 1500, a condição if (amount > this.balance) é verdadeira.
### return "Insufficient funds."; retorna a mensagem de fundos insuficientes.
### console.log(withdrawalMessage); exibe a mensagem: "Insufficient funds.".
### Resumo da Execução
### Definição do Objeto: Criamos um objeto bankAccount com propriedades accountHolder e balance, e métodos deposit e withdraw.
### Depósito: Chamamos bankAccount.deposit(500), que adiciona 500 ao saldo e retorna uma mensagem confirmando o depósito.
### Saque: Chamamos bankAccount.withdraw(2000), que verifica se há fundos suficientes e retorna uma mensagem indicando fundos insuficientes, pois o valor do saque é maior que o saldo.
### Este código demonstra como criar um objeto com propriedades e métodos para gerenciar uma conta bancária de maneira prática e dinâmica, incluindo a verificação de saldo antes de realizar saques.