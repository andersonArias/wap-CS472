class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  set interest(newInterest) {
    this._interest = newInterest;
  }

  get interest() {
    return this._interest;
  }

  addInterest() {
    let int = (this._balance * this._interest) / 100;
    super.deposit(int);
    return int;
  }

  toString() {
    return super.toString() + " interest " + this._interest;
  }

  endOfMonth() {
    let addedInt = this.addInterest();
    return (
      "Interest added SavingsAccount " +
      this._number +
      ": balance: " +
      this._balance +
      " interest: " +
      addedInt
    );
  }
}
