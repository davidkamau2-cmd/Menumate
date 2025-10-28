import { createContext, useContext, useState } from "react";

const MenuContext = createContext();
export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  return (
    <MenuContext.Provider value={{ dishes, setDishes, cart, setCart, favourites, setFavourites }}>
      {children}
    </MenuContext.Provider>
  );
};
