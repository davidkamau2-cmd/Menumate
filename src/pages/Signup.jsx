import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider"; 

function Signup() {
  const { signUpWithEmail } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

  try {
    await signUpWithEmail(email, password);
    navigate("/menu");
  } catch (err) {
    setError("Error creating account. Try again.");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="block font-medium mb-1">Confirm Password:</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Sign Up</button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
