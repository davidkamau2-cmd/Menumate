import React, { useEffect, useState } from "react";
import DishCard from "../components/DishCard";

function Menu() {
  const [dishes, setDishes] = useState([]);

    useEffect(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((res) => res.json())
       .then((data) => {
        const formatted = data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
           image: meal.strMealThumb,
          price: Math.floor(Math.random() * 1000) + 250,
        }));
        setDishes(formatted);
      });
    }, []);

  return (
    <div className ="menu-container"> 
     <h2>Menu</h2>
     <div className="dish-grid">
      {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} context="menu" />
          ))}
      </div>
    </div>
  );
}

export default Menu;