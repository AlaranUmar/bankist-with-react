import { useState } from "react";

function Loan({ onLoan }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLoan(amount);
    setAmount("");
  }
  return (
    <div className="operation operation--loan">
      <h2>Request loan</h2>
      <form className="form form--loan" onSubmit={handleSubmit}>
        <input
          type="number"
          className="form__input form__input--loan-amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="form__btn form__btn--loan">&rarr;</button>
        <label className="form__label form__label--loan">Amount</label>
      </form>
    </div>
  );
}

export default Loan;
