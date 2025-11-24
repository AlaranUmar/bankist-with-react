import "./App.css";
// import { useState } from "react";
import Nav from "./sections/Nav";
function App() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(0);
  // const date = new Date();
  // date.setDate(date.getDate() + count);

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
      console.log(acc)
    });
  }

  const accounts = [account1, account2, account3, account4];
  CreateUserName(accounts);
  function handleLogin(username, pin) {
    console.log(username, pin);
    const current = accounts.find(
      (acc) => acc.username === username && acc.pin === Number(pin)
    );

    console.log(current);
  }

  return (
    <>
      {/* <!-- TOP NAVIGATION --> */}
      <Nav onLogin={handleLogin} />

      {/* <div className="days">
        <div className="a">
          <div>
            <button
              onClick={() => {
                if (step < 1) return setStep(0);
                setStep(step - 1);
              }}
            >
              -
            </button>
            <span>Step:</span>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
            >
              +
            </button>
            {step}
          </div>
          <div>
            <button
              onClick={() => {
                setCount((s) => s - step);
              }}
            >
              -
            </button>
            <span>Count:</span>
            <button
              onClick={() => {
                setCount((s) => s + step);
              }}
            >
              +
            </button>
            {count}
          </div>

          <div className="p">
            {count !== 0 ? Math.abs(count) : ""}
            {count > 0 ? "days to go" : count < 0 ? "days ago" : "today"}
            <p>{date.toDateString()}</p>
          </div>
        </div>
      </div> */}
      {/* HOW TO USE NAVIGATE IN REACT */}
      {/* I WANT TO LET THE COUNTER EDIT THE DATE */}
      {/* <!-- <footer>
      &copy; by Jonas Schmedtmann. Don't claim as your own :)
    </footer> --> */}
    </>
  );
}

export default App;
