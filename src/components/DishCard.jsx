import React from 'react';
import { useMenu } from '../contexts/MenuContext';

function DishCard({ dish, context }) {
    const { toggleFavourite, toggleCart } = useMenu();

    const renderButtons = () => {
        switch (context) {
            case "menu":
                return (
                    <>
                        <button className="cart btn" onClick={() => toggleCart (dish)}>
                            Add to Cart </button>
                        <button className="favourite btn" onClick={() => toggleFavourite(dish)}>
                            Add to Favourites</button>
                    </>
                );
            case "cart":
                return (
                    <button className="remove btn" onClick={() => toggleCart(dish)}>
                        Remove from Cart</button>);
            case "favourites":
                return (
                    <button className="remove btn" onClick={() => toggleFavourite(dish)}>
                        Remove from Favourites </button>);
            default:
                return null;
        }
    };

    return (
        <div className="dish-card">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <h3>{dish.name}</h3>
            <p>Ksh. {dish.price}</p>
            <div className="dish-buttons">{renderButtons()}</div>
        </div>
    );
}

export default DishCard;