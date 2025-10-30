import React from "react";
import { useMenu } from "../contexts/MenuContext";
import DishCard from "./DishCard";

function Cart() {
  const { cart } = useMenu();

  if (cart.length === 0) {
    return <h2 className="text-center text-lg text-gray-600 mt-10">Your cart is empty</h2>;
  }

  const handleOrder = () => {
    alert("Your order has been placed successfully!");
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cart.map((dish) => (
          <DishCard key={dish.id} dish={dish} context="cart" />
        ))}
      </div>
      <button className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
       onClick={handleOrder}>
        🛍️ Order Now
      </button>
    </div>
  );
}

export default Cart;
