import React from "react";
import DishCard from "./DishCard";
import "./DishList.css";

function DishList({ meals, cart, favourites, onCartToggle, onFavouriteToggle }) {
  if (!meals || meals.length === 0) {
    return <p className="no-meals">No meals found.</p>;
  }

  return (
    <div className="dish-grid">
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
