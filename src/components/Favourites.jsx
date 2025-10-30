import React from "react";
import { useMenu } from "../contexts/MenuContext";
import DishCard from "./DishCard";

function Favourites() {
  const { favourites } = useMenu();

  if (favourites.length === 0) {
    return <h2 className="text-center text-gray-600 text-xl mt-6">No favourites yet</h2>;
  }

  return (
    <div className ="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Your Favourites</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {favourites.map((dish) => (
          <DishCard key={dish.id} dish={dish} context="favourites" />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
