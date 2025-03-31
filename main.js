class Account {
    constructor(accountName, balance) {
        this.accountName = accountName;  
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        return this.balance; // returns as it is 
    }

    withdrawal(amount) {
        if (amount > 0 && this.balance >= amount) { 
            this.balance -= amount;
        }
        return this.balance;  // i could use else here 
    }

    getAccountName() {
        return this.accountName;
    }

    accountError() {
        if (!this.accountName || this.balance < 0) { 
            return "message error";
        }
        return "No error"; 
    }
}

// Test cases
let myAccount = new Account("John Doe", 1000);
console.log(myAccount.deposit(500));      // 1500
console.log(myAccount.withdrawal(200));   // 1300
console.log(myAccount.withdrawal(-50));   // 1300 (no change)
console.log(myAccount.getBalance());      // 1300
console.log(myAccount.accountError());    // No error
