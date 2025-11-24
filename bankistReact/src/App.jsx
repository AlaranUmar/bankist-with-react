import "./App.css";
import { useState } from "react";
import Nav from "./sections/Nav";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentAcc, setCurrentAcc] = useState(null);

  const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };

  const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };

  const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };

  const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

  function CreateUserName(accs) {
    accs.forEach((acc) => {
      acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((a) => a[0])
        .join("");
      acc.id = Date.now().toString().slice(3);
      console.log(acc);
    });
  }

  const accounts = [account1, account2, account3, account4];
  CreateUserName(accounts);
  function handleLogin(username, pin) {
    const current = accounts.find(
      (acc) => acc.username === username && acc.pin === Number(pin)
    );
    setIsLoggedIn(true);
    setCurrentAcc(current);
  }

  return (
    <>
      {/* <!-- TOP NAVIGATION --> */}
      {/* <nav>
        <p className="welcome">Log in to get started</p>
        <img src={logo} alt="Logo" className="logo" />
        <form className="login" onSubmit={loginSubmit}>
          <input
            ref={username}
            type="text"
            placeholder="user"
            className="login__input login__input--user"
          />
          <input
            ref={pin}
            type="number"
            placeholder="PIN"
            maxLength="4"
            className="login__input login__input--pin"
          />
          <button className="login__btn">&rarr;</button>
        </form>
      </nav> */}
      <h1>
        {isLoggedIn
          ? `Welcome, ${currentAcc.owner.split(" ")[0]} `
          : "Pls log in to witness your paradise"}
      </h1>

      <main class="app">
        <div class="balance">
          <div>
            <p class="balance__label">Current balance</p>
            <p class="balance__date">
              As of <span class="date">05/03/2037</span>
            </p>
          </div>
          <p class="balance__value">0000€</p>
        </div>

        <div class="movements">
          <div class="movements__row">
            <div class="movements__type movements__type--deposit">
              2 deposit
            </div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">4 000€</div>
          </div>
          <div class="movements__row">
            <div class="movements__type movements__type--withdrawal">
              1 withdrawal
            </div>
            <div class="movements__date">24/01/2037</div>
            <div class="movements__value">-378€</div>
          </div>
        </div>

        <div class="summary">
          <p class="summary__label">In</p>
          <p class="summary__value summary__value--in">0000€</p>
          <p class="summary__label">Out</p>
          <p class="summary__value summary__value--out">0000€</p>
          <p class="summary__label">Interest</p>
          <p class="summary__value summary__value--interest">0000€</p>
          <button class="btn--sort">&downarrow; SORT</button>
        </div>

        <div class="operation operation--transfer">
          <h2>Transfer money</h2>
          <form class="form form--transfer">
            <input type="text" class="form__input form__input--to" />
            <input type="number" class="form__input form__input--amount" />
            <button class="form__btn form__btn--transfer">&rarr;</button>
            <label class="form__label">Transfer to</label>
            <label class="form__label">Amount</label>
          </form>
        </div>

        <div class="operation operation--loan">
          <h2>Request loan</h2>
          <form class="form form--loan">
            <input type="number" class="form__input form__input--loan-amount" />
            <button class="form__btn form__btn--loan">&rarr;</button>
            <label class="form__label form__label--loan">Amount</label>
          </form>
        </div>

        <div class="operation operation--close">
          <h2>Close account</h2>
          <form class="form form--close">
            <input type="text" class="form__input form__input--user" />
            <input
              type="password"
              maxlength="6"
              class="form__input form__input--pin"
            />
            <button class="form__btn form__btn--close">&rarr;</button>
            <label class="form__label">Confirm user</label>
            <label class="form__label">Confirm PIN</label>
          </form>
        </div>

        <p class="logout-timer">
          You will be logged out in <span class="timer">05:00</span>
        </p>
      </main>

      {/* <!-- <footer>
      &copy; by Jonas Schmedtmann. Don't claim as your own :)
    </footer> --> */}
    </>
  );
}

export default App;
