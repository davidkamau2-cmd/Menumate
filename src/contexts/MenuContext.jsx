import { createContext, useContext, useState, useEffect } from "react";

const MenuContext = createContext();
export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  // Load saved states from localStorage
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("favourites")) || [];
  });

  const [dishes, setDishes] = useState([]);

  // Save updates back to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // ✅ Toggle Cart
  const toggleCart = (dish) => {
    setCart((prev) =>
      prev.some((item) => item.id === dish.id)
        ? prev.filter((item) => item.id !== dish.id)
        : [...prev, dish]
    );
  };

  // ✅ Toggle Favourites
  const toggleFavourite = (dish) => {
    setFavourites((prev) =>
      prev.some((item) => item.id === dish.id)
        ? prev.filter((item) => item.id !== dish.id)
        : [...prev, dish]
    );
  };

  return (
    <MenuContext.Provider
      value={{
        dishes,
        setDishes,
        cart,
        toggleCart,
        favourites,
        toggleFavourite,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
