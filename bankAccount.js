// bankAccount = conta bancária
// accountHolder = titular da conta
// balance = equilíbrio, saldo, balanço
// deposit = deposito
// amout = quantia
// Deposit successful! New balance: = Depósito bem-sucedido! Novo balanço
// withdraw = retirar
// Insufficient fnds: = Fundos insuficientes
// Withdrawal successful! New balance: = Retirada bem-sucedida! Novo balanço:
// depositMessage = mensagem de depósito
// withdrawalMessage = mensagem de retirada


const bankAccount = {
    accountHolder: "Arthur Morgan",
    balance: 1000,
    deposit: function(amout){
        this.balance += amout;
        return `Deposit successful! New balance: $${this.balance}`;
    },
    withdraw: function(amout){
        if(amout > this.balance){
            return "Insufficient fnds:";
        }
        this.balance -= amout;
        return `Withdrawal successful! New balance: $${this.balance}`;
    }
}

const depositMessage = bankAccount.deposit(500);
console.log(depositMessage); // Output: "Deposit successful! New balance: $1500"

const withdrawalMessage = bankAccount.withdraw(2000);
console.log(withdrawalMessage); // Output: "Insufficient funds."