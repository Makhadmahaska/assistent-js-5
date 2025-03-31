class Account {
    constructor(accountName, balance) {
        if (typeof accountName !== "string") {
            throw new Error("Account name must be a string.");
        }
        if (typeof balance !== "number" || isNaN(balance)) {
            throw new Error("Balance must be a valid number.");
        }
        this.accountName = accountName;
        this.balance = balance;
    }

    getBalance() {
        console.log(`Current Balance: $${this.balance}`);
        return this.balance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
            console.log("Invalid deposit amount.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
            console.log("Invalid withdrawal amount.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn: $${amount}. New Balance: $${this.balance}`);
    }

    getAccountName() {
        console.log(`Account Name: ${this.accountName}`);
        return this.accountName;
    }

    accountError() {
        if (!this.accountName) {
            return "Error: Account name is missing.";
        }
        if (this.balance < 0) {
            return "Error: Negative balance detected.";
        }
        return "No errors.";
    }

    exitAccount() {
        console.log("Exiting account... Thank you for using our service!");
        return;
    }

    atm() {
        let exitFlag = false;
        while (!exitFlag) {
            let choice = parseInt(prompt(
                "Select an option:\n1. View Balance\n2. Deposit\n3. Withdraw\n4. View Account Name\n5. Check for Errors\n6. Exit"
            ));

            switch (choice) {
                case 1:
                    this.getBalance();
                    break;
                case 2:
                    let depositAmount = parseFloat(prompt("Enter deposit amount:"));
                    this.deposit(depositAmount);
                    break;
                case 3:
                    let withdrawAmount = parseFloat(prompt("Enter withdrawal amount:"));
                    this.withdraw(withdrawAmount);
                    break;
                case 4:
                    this.getAccountName();
                    break;
                case 5:
                    console.log(this.accountError());
                    break;
                case 6:
                    this.exitAccount();
                    exitFlag = true;
                    break;
                default:
                    console.log("Invalid choice, please try again.");
            }
        }
    }
}

let myAccount = new Account("John Doe", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(-50);
myAccount.getBalance();
console.log(myAccount.accountError());
