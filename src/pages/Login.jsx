import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Normal user
    alert("Login successful!");
    localStorage.setItem("email", email);
    navigate("/menu");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-2xl font-bold text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block font-medium mb-1">Email:</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block font-medium mb-1">Password:</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</button>
        </form>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup" className="text-blue-600 font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
