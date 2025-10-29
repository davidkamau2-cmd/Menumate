import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../contexts/MenuContext";
import "./Navbar.css";

function Navbar() {
  const { cart, favourites } = useMenu() || {}; 

  return (
    <nav className="navbar">
      <h1>MenuMate</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart ({cart?.length || 0})</Link>
        <Link to="/favourites">Favourites ({favourites?.length || 0})</Link>
      </div>
    </nav>
  );
}

export default Navbar;