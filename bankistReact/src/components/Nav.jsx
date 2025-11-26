import logo from "../assets/logo.png";
import { useState } from "react";
function Nav({ isLoggedIn, onLogin, user, onLogout }) {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(username, pin);
    setUsername("");
    setPin("");
  }
  return (
    <nav>
      <p className="welcome">
        {isLoggedIn
          ? `Welcome, ${user.owner.split(" ")[0]}`
          : "Login to get Started"}
      </p>
      <img src={logo} alt="Logo" className="logo" />
      <form className="login" onSubmit={handleSubmit}>
        <input
          id="user"
          type="text"
          placeholder="user"
          value={username}
          className="login__input login__input--user"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="pin"
          type="text"
          placeholder="PIN"
          maxLength="4"
          value={pin}
          className="login__input login__input--pin"
          onChange={(e) => setPin(e.target.value)}
        />

        {!isLoggedIn && <button className="login__btn">&rarr;</button>}
        {isLoggedIn && (
          <button type="button" onClick={onLogout} className="logout__btn">
            Logout
          </button>
        )}
      </form>
    </nav>
  );
}

export default Nav;
