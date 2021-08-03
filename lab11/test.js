"use strict";

describe("Account", function () {
  let number = 1214567;
  let account = new Account(number);
  describe("Get account number", function () {
    it(`Get account must return ${number}`, function () {
      assert.equal(account.getNumber(), number);
    });
  });
  describe("The method deposit returns a value when I put a positive value", function () {
    it(`The method deposit return an 11`, function () {
      account.deposit(11.0);
      assert.equal(account.getBalance(), 11);
    });
  });
  describe("The method withdraw returns a value when I put a positive value", function () {
    it(`The method withdraw return an 5`, function () {
      account.withdraw(6);
      assert.equal(account.getBalance(), 5);
    });
  });
  describe("The method withdraw returns the to string", function () {
    let expected = "Account " + account.getNumber() + ": balance 5";
    it(`The method deposit the toString`, function () {
      assert.equal(account.toString(), expected);
    });
  });
});

describe("savings account", function () {
  let number = 1214567;
  let interest = 2;
  let savingsAccount = new SavingsAccount(number, interest);
  describe("Checking of add interest method", function () {
    savingsAccount.deposit(4);
    it(`The method add Int return 0.08`, function () {
      assert.equal(savingsAccount.addInterest(), 0.08);
    });
  });
});

describe("checking accout", function () {
  let number = 1214567;
  let overdraftLimit = 6;
  let checkingAccount = new CheckingAccount(number, overdraftLimit);
  checkingAccount.withdraw(5.0);
  it(`The method withdraw return -5`, function () {
    assert.equal(checkingAccount.getBalance(), -5);
  });
});

describe("Bank", function () {
  let bank = new Bank();

  describe("Creates a bank with 3 accounts", function () {
    it("bank with starting account number initialized = 0", function () {
      assert.equal(Bank.nextNumber, 0);
    });

    it("Adds 1 normal account", function () {
      assert.equal(bank.addAccount(), 1);
    });
    it("Adds 1 savings account", function () {
      assert.equal(bank.addSavingsAccount(), 2);
    });
    it("Adds 1 checking account", function () {
      assert.equal(bank.addCheckingAccount(), 3);
    });

    it("closes the normal account ", function () {
      bank.closeAccount(1);
      assert.equal(bank.findAccount(1), undefined);
    });

  });
});
