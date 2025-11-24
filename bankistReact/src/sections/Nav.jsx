import { useRef } from "react";
import logo from "../assets/logo.png";

function Nav({onLogin}) {
    const username = useRef(null);
    const pin = useRef(null);
    const loginSubmit = (e) => {
      e.preventDefault();
      onLogin(username.current.value, pin.current.value)
      username.current.value =""
      pin.current.value =""
    }
  return (
    <nav>
      <p className="welcome">Log in to get started</p>
      <img src={logo} alt="Logo" className="logo" />
      <form  className="login" onSubmit={loginSubmit}>
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
    </nav>
  );
}

export default Nav;
