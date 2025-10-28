import React from 'react';
import dishcard from './DishCard.css';
import { useMenu } from '../context/MenuContext';

function DishCard({ dish, context }) {
    const { toogleFavourite, tooglecart } = useMenu();

    const renderButtons = () => {
        switch (context) {
            case "menu":
                return (
                    <>
                        <button className="cart btn" onClick={() => tooglecart (dish)}>
                            Add to Cart </button>
                        <button className="favourite btn" onClick={() => toogleFavourite(dish)}>
                            Add to Favourites</button>
                    </>
                );
            case "cart":
                return (
                    <button className="remove btn" onClick={() => tooglecart(dish)}>
                        Remove from Cart</button>);
            case "favourites":
                return (
                    <button className="remove btn" onClick={() => toogleFavourite(dish)}>
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