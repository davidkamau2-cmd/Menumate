import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMenu } from "../contexts/MenuContext";
import { useAuth } from "../contexts/AuthProvider";

function Navbar() {
  const { cart, favourites } = useMenu();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">MenuMate</h1>
      <div className="flex gap-4 text-sm font-medium">
        <Link className="hover:text-blue-500" to="/">Home</Link>
        <Link className="hover:text-blue-500" to="/menu">Menu</Link>
        <Link className="hover:text-blue-500" to="/cart">Cart ({cart?.length || 0})</Link>
        <Link className="hover:text-blue-500" to="/favourites">Favourites ({favourites?.length || 0})</Link>
      </div>
      <div>
      {user ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="bg-blue-500 text-white px-3 py-1 rounded">
            Login
          </Link>
        )}
    </div>
  </nav>
);
}

export default Navbar;