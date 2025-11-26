function Movements({ user }) {
  const movements = user.movements;
  return (
    <div className="movements">
      {movements.map((mov, index) => (
        <div className="movements__row" key={index}>
          <div
            className={`movements__type movements__type--${
              mov > 0 ? "deposit" : "withdrawal"
            }`}
          >
            {index + 1} {mov > 0 ? "deposit" : "withdrawal"}
          </div>
          <div className="movements__date">3 days ago</div>
          <div className="movements__value">{mov}€</div>
        </div>
      ))}
    </div>
  );
}

export default Movements;
