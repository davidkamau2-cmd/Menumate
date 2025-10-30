import React from 'react';
import { useMenu } from '../contexts/MenuContext';

function DishCard({ dish, context }) {
    const { toggleFavourite, toggleCart } = useMenu();

    const renderButtons = () => {
        switch (context) {
            case "menu":
                return (
                    <>
                        <button className="w-full py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                        onClick={() => toggleCart (dish)}>
                            Add to Cart </button>
                        <button className="w-full py-1 bg-pink-600 text-white rounded-lg text-sm hover:bg-pink-700"
                         onClick={() => toggleFavourite(dish)}>
                            Add to Favourites</button>
                    </>
                );
            case "cart":
                return (
                    <button className="w-full py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700" onClick={() => toggleCart(dish)}>
                        Remove from Cart</button>);
            case "favourites":
                return (
                    <button  className="w-full py-1 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600" onClick={() => toggleFavourite(dish)}>
                        Remove from Favourites </button>);
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center text-center hover:shadow-lg transition">
            <img src={dish.image} alt={dish.name} className="w-full h-28 object-cover rounded-lg mb-2" />
            <h3 className="font-semibold text-gray-800">{dish.name}</h3>
            <p className="text-green-600 font-bold">Ksh. {dish.price}</p>
            <div className="mt-2 flex flex-col gap-2 w-full">{renderButtons()}</div>
        </div>
    );
}

export default DishCard;