import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";

const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const { user } = useAuth();
  const uid = user?.uid || "guest";

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem(`cart_${uid}`)) || [];
  });

  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem(`favourites_${uid}`)) || [];
  });

  useEffect(() => {
    localStorage.setItem(`cart_${uid}`, JSON.stringify(cart));
  }, [cart, uid]);

  useEffect(() => {
    localStorage.setItem(`favourites_${uid}`, JSON.stringify(favourites));
  }, [favourites, uid]);

  const toggleCart = (dish) => {
    setCart((prev) =>
      prev.some((item) => item.id === dish.id)
        ? prev.filter((item) => item.id !== dish.id)
        : [...prev, dish]
    );
  };

  const toggleFavourite = (dish) => {
    setFavourites((prev) =>
      prev.some((item) => item.id === dish.id)
        ? prev.filter((item) => item.id !== dish.id)
        : [...prev, dish]
    );
  };

  const value = {
    cart,
    favourites,
    toggleCart,
    toggleFavourite,
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}
