import React from "react";
import DishCard from "./DishCard";

function DishList({ meals, cart, favourites, onCartToggle, onFavouriteToggle }) {
  if (!meals || meals.length === 0) {
    return <p className="text-center text-gray-500 text-lg mt-6">No meals found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {meals.map((meal) => (
        <DishCard
          key={meal.idMeal}
          meal={meal}
          inCart={cart.some((item) => item.idMeal === meal.idMeal)}
          isFavourite={favourites.some((item) => item.idMeal === meal.idMeal)}
          onCartToggle={onCartToggle}
          onFavouriteToggle={onFavouriteToggle}
        />
      ))}
    </div>
  );
}

export default DishList;
