import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMIN_EMAIL = "admin@menumate.com";
  const ADMIN_PASSWORD = "admin123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Check if admin
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      alert("Welcome, Admin!");
      localStorage.setItem("email", email);
      navigate("/admin");
      return;
    }

    // Normal user
    alert("Login successful!");
    localStorage.setItem("email", email);
    navigate("/menu");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
