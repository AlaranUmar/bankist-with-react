'use strict';
// +=
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

export const accounts = [account1, account2, account3, account4];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

export const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const CreateUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};

CreateUsernames(accounts)

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  let currentAccount;
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  )
  
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${ currentAccount.owner.split(" ")[0]}`;
    
    containerApp.style.opacity = 1

    inputLoginPin.value = inputLoginUsername.value = ""
    inputLoginPin.blur();
    displayMovements(currentAccount.movements);
    CalcDisplaySummary(currentAccount);
    CalcDisplayBalance(currentAccount)
    startCountDown()
  }
  
});

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    // containerMovements = ""
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
      </div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html)
  });
};
displayMovements(movements);
const CalcDisplayBalance = function (acc) {acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

const CalcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
    console.log(income)
}
function displaySummary() {
  
}
let time = 0.125 * 60 
function startCountDown() {
  let intervalID = setInterval(function () {
    time--;
    let min = String(Math.floor(time / 60)).padStart(2, "0");
    let sec = String(Math.floor(time % 60)).padStart(2, "0");
    labelTimer.textContent = `${min}:${sec}`;
    if (time<0) {
      clearInterval(intervalID);
      labelTimer.textContent = "00:00"

    }
  }, 1000);
}

<main className="app">
  {/* <!-- BALANCE --> */}
  <div className="balance">
    <div>
      <p className="balance__label">Current balance</p>
      <p className="balance__date">
        As of <span className="date">05/03/2037</span>
      </p>
    </div>
    <p className="balance__value">0000€</p>
  </div>

  {/* <!-- MOVEMENTS --> */}
  <div className="movements">
    {/* <!-- <div className="movements__row">
          <div className="movements__type movements__type--deposit">2 deposit</div>
          <div className="movements__date">3 days ago</div>
          <div className="movements__value">4 000€</div>
        </div>
        <div className="movements__row">
          <div className="movements__type movements__type--withdrawal">
            1 withdrawal
          </div>
          <div className="movements__date">24/01/2037</div>
          <div className="movements__value">-378€</div>
        </div> --> */}
  </div>

  {/* <!-- SUMMARY --> */}
  <div className="summary">
    <p className="summary__label">In</p>
    <p className="summary__value summary__value--in">0000€</p>
    <p className="summary__label">Out</p>
    <p className="summary__value summary__value--out">0000€</p>
    <p className="summary__label">Interest</p>
    <p className="summary__value summary__value--interest">0000€</p>
    <button className="btn--sort">&downarrow; SORT</button>
  </div>

  {/* <!-- OPERATION: TRANSFERS --> */}
  <div className="operation operation--transfer">
    <h2>Transfer money</h2>
    <form className="form form--transfer">
      <input type="text" className="form__input form__input--to" />
      <input type="number" className="form__input form__input--amount" />
      <button className="form__btn form__btn--transfer">&rarr;</button>
      <label className="form__label">Transfer to</label>
      <label className="form__label">Amount</label>
    </form>
  </div>

  {/* <!-- OPERATION: LOAN --> */}
  <div className="operation operation--loan">
    <h2>Request loan</h2>
    <form className="form form--loan">
      <input type="number" className="form__input form__input--loan-amount" />
      <button className="form__btn form__btn--loan">&rarr;</button>
      <label className="form__label form__label--loan">Amount</label>
    </form>
  </div>

  {/* <!-- OPERATION: CLOSE --> */}
  <div className="operation operation--close">
    <h2>Close account</h2>
    <form className="form form--close">
      <input type="text" className="form__input form__input--user" />
      <input
        type="password"
        maxLength="6"
        className="form__input form__input--pin"
      />
      <button className="form__btn form__btn--close">&rarr;</button>
      <label className="form__label">Confirm user</label>
      <label className="form__label">Confirm PIN</label>
    </form>
  </div>

  {/* <!-- LOGOUT TIMER --> */}
  <p className="logout-timer">
    You will be logged out in <span className="timer">05:00</span>
  </p>
</main>;