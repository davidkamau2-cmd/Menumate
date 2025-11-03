import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function Navbar() {
  const { user, signout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <Link to="/" className="text-xl font-bold">MenuMate</Link>

      <div className="flex items-center gap-4">

        {user && (
          <>
            <Link to="/menu" className="hover:underline">Menu</Link>
            <Link to="/favorites" className="hover:underline">Favorites</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>

            <button
              onClick={async () => {
                await signout();
                window.location.href = "/login"; 
              }}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        )}

        {!user && (
          <Link
            to="/login"
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
