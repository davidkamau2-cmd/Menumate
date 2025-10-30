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
    <div className="min-h-screen bg-gray-50 px-4 py-6"> 
     <h2 className="text-2xl font-bold mb-4 text-center">Menu</h2>
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} context="menu" />
          ))}
      </div>
    </div>
  );
}

export default Menu;