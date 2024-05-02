import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/users";

export default function Login({ setToken, displayLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await login(email, password);
      if (response.token) {
        setToken(response.token);
        console.log("You have successfully logged in!!!");
        navigate(`/events`);
      } else {
        console.error("Authentication failed:", response.error);
      }
    } catch (err) {
      console.error("Error logging in", err);
    }
  }

  const handleCloseClick = () => {
    setDisplayLogin(false);
  };

  return (
    <div className={`login-container ${displayLogin ? "show" : "hide"}`}>
      <div className="login-card">
        <button data-dismiss="modal" className="close" onClick={handleCloseClick}>&times;</button>
        <h3>Log in</h3>
        <form onSubmit={loginUser}>
          <p>email:</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <p>Password:</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button className="btn draw-border" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
