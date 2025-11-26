import { useEffect, useState } from "react";

function LogoutTimer({ onLogout }) {
  const [timeLeft, setTimeLeft] = useState(0.25 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      onLogout();
    }
  }, [timeLeft, onLogout]);

  const min = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const sec = String(Math.floor(timeLeft % 60)).padStart(2, "0");

  return (
    <p className="logout-timer">
      You will be logged out in{" "}
      <span className="timer">
        {min}:{sec}
      </span>
    </p>
  );
}

export default LogoutTimer;
