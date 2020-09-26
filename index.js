class Account {
  constructor(id) {
    this.id = id;
    this.transactions = [];
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
  get balance() {
    // console.log(`---${this.transactions[0]}---`);
    return this.transactions.reduce((a, val) => a + val.amount, 0);
  }
}
class Transaction {
  constructor(amount, id) {
    this.amount = amount;
    this.id = id;
  }
  commit() {

    if (this.id.balance >= -this.value) {
      this.date = new Date();
      this.amount = this.value;
      this.id.addTransaction(this);
    }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
let guy = new Account('guy');
t1 = new Withdrawal(50.25, guy);
t1.commit();
// console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, guy);
t2.commit();
// console.log('Transaction 2:', t2);
let t3 = new Deposit(2000, guy);
t3.commit();

console.log('Balance:', guy.balance);
console.log(guy);
