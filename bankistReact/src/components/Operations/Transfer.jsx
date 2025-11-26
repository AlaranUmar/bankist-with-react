import { useState } from "react";

function Transfer({ onTransfer }) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onTransfer(recipient, amount);
    setRecipient("")
    setAmount("")
  }
  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form form--transfer" onSubmit={handleSubmit}>
        <input
          type="text"
          value={recipient}
          className="form__input form__input--to"
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          className="form__input form__input--amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="form__btn form__btn--transfer">&rarr;</button>
        <label className="form__label">Transfer to</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
}

export default Transfer;
