function Summary({ summary }) {
  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{summary.In}€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{summary.Out}€</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">
        {String(summary.Interest).padStart(4,"0")}€
      </p>
      <button className="btn--sort">&darr;SORT</button>
    </div>
  );
}

export default Summary;
