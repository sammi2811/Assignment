module.exports = {
  account: [],

  createAccount(
    accountNumber,
    accountName,
    initialBalance,
    investment_amt,
    spending_amt
  ) {
    if (!this.account[accountNumber]) {
      this.account[accountNumber] = {
        accountName,
        balance: initialBalance || 0,
        invest: investment_amt || 0,
        spend: spending_amt || 0,
      };
      return `Bank Account created successfully for ${accountName}`;
    } else {
      return `There is a Bank Account exist for ${accountNumber}.`;
    }
  },
  Salary(accountNumber, salary_amt) {
    if (this.account[accountNumber]) {
      this.account[accountNumber].balance += salary_amt;
      return `Bank Account managed to get this month salary $${salary_amt} successfully for acc no. ${accountNumber}. New balance : $${this.account[accountNumber].balance} `;
    } else {
      return `Invalid Bank Account.`;
    }
  },
  SpendingAmount(accountNumber, spending_percentage) {
    if (this.account[accountNumber]) {
      this.account[accountNumber].balance *= spending_percentage;
      this.account[accountNumber].spend += this.account[accountNumber].balance;
      return `Your spending amount is $${this.account[accountNumber].spend}`;
    } else {
      return `Invalid Bank Account.`;
    }
  },
  Spend(accountNumber, spend_amt) {
    if (this.account[accountNumber]) {
      this.account[accountNumber].balance -= spend_amt;
      return `Bank Account managed to withdraw $${spend_amt} successfully from acc no. ${accountNumber}. New balance : $${this.account[accountNumber].balance}`;
    } else {
      return `Invalid Bank Account.`;
    }
  },
  Investment(accountNumber, investment_percentage) {
    if (this.account[accountNumber]) {
      this.account[accountNumber].invest *= investment_percentage;
      this.account[accountNumber].balance += this.account[accountNumber].invest;
      return `Investment return amount is $${this.account[accountNumber].invest} for ${accountNumber}. Total balance will be $${this.account[accountNumber].balance}`;
    } else {
      return `Invalid bank account hence there is no investment return amount.`;
    }
  },
  CheckBalance(accountNumber) {
    if (this.account[accountNumber]) {
      return `Account ${accountNumber} balance is $${this.account[accountNumber].balance}`;
    } else {
      return `Invalid bank account hence not able to retrieve account balance.`;
    }
  },
};

console.log(module.exports.createAccount("1234567", "Test1", 100, 50));
//console.log(module.exports.createAccount("1234567", "Test2")); // When execute this line there will be a message stating "Bank Account exists for the bank account number that has been created"
console.log(module.exports.Salary("1234567", 20));
console.log(module.exports.SpendingAmount("1234567", 0.2));
console.log(module.exports.Spend("1234567", 20));
console.log(module.exports.Investment("1234567", 0.2));
console.log(module.exports.CheckBalance("1234567"));
//console.log(module.exports)
