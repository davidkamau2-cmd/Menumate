import React from "react";
import { useMenu } from "../contexts/MenuContext";
import DishCard from "./DishCard";

function Favourites() {
  const { favourites } = useMenu();

  if (favourites.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No favourites yet</h2>;
  }

  return (
    <div className="favourites-container">
      <h2>Your Favourites</h2>
      <div className="dish-grid">
        {favourites.map((dish) => (
          <DishCard key={dish.id} dish={dish} context="favourites" />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
