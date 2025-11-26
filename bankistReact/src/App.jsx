import "./App.css";
import { accounts } from "./data";
import Nav from "./components/Nav";
import Balance from "./components/Balance";
import Movements from "./components/Movements";
import { useReducer } from "react";
import Summary from "./components/Summary";
import Transfer from "./components/Operations/Transfer";
import Loan from "./components/Operations/Loan";
import Close from "./components/Operations/Close";
import LogoutTimer from "./components/LogoutTimer";

const initialState = {
  isLoggedIn: false,
  currentUser: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, currentUser: action.payload };
    case "LOGOUT":
      return initialState;
    case "TRANSFER":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          movements: [...state.currentUser.movements, -action.payload.amount],
        },
      };
    case "LOAN":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          movements: [...state.currentUser.movements, action.payload.amount],
        },
      };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const movements = state.currentUser?.movements;

  function handleLogin(username, pin) {
    const user = accounts.find(
      (acc) =>
        acc.username === username.toLowerCase() && acc.pin === Number(pin)
    );
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    } else {
      alert("Wrong username or pin");
    }
  }

  function autoLogout() {
    dispatch({ type: "LOGOUT" });
  }
  function confirmLogout() {
    const ok = confirm("Are you sure you want to logout?");
    if (ok) {
      dispatch({ type: "LOGOUT" });
    }
  }
  function calcBalance() {
    return movements.reduce((sum, mov) => sum + mov, 0);
  }
  function calcSummary() {
    const positive = [];
    const negative = [];
    const Summary = {};
    movements.forEach((mov) => {
      mov > 0 ? positive.push(mov) : negative.push(mov);
    });
    Summary.In = positive.reduce((sum, mov) => sum + mov, 0);
    Summary.Out = Math.abs(negative.reduce((sum, mov) => sum + mov, 0));
    Summary.Interest = Math.abs(calcBalance() - (Summary.In - Summary.Out));
    return Summary;
  }
  function handleTransfer(recipient, amount) {
    amount = Number(amount);
    if (calcBalance() >= amount) {
      dispatch({ type: "TRANSFER", payload: { amount } });
      alert(`transfer successful`);
    } else {
      alert("Not enough money");
    }
  }
  function handleLoan(amount) {
    amount = Number(amount);
    dispatch({ type: "LOAN", payload: { amount } });
    alert(`Loan recieved`);
  }
  return (
    <>
      <Nav
        isLoggedIn={state.isLoggedIn}
        onLogin={handleLogin}
        user={state.currentUser}
        onLogout={() => confirmLogout()}
      />
      {state.isLoggedIn && (
        <main className="app">
          <Balance balance={calcBalance()} />
          <Movements user={state.currentUser} />
          <Summary summary={calcSummary()} />
          <Transfer onTransfer={handleTransfer} />
          <Loan onLoan={handleLoan} />
          <Close />
          <LogoutTimer onLogout={() => autoLogout()} />
        </main>
      )}
    </>
  );
}

export default App;
