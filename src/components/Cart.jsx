import React from "react";
import { useMenu } from "../contexts/MenuContext";
import DishCard from "./DishCard";

function Cart() {
  const { cart } = useMenu();

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>;
  }

  const handleOrder = () => {
    alert("Your order has been placed successfully!");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="dish-grid">
        {cart.map((dish) => (
          <DishCard key={dish.id} dish={dish} context="cart" />
        ))}
      </div>
      <button className="order-btn" onClick={handleOrder}>
        🛍️ Order Now
      </button>
    </div>
  );
}

export default Cart;
