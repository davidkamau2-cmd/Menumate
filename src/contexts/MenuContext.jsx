import { useAuth } from "./AuthProvider";
import React, { createContext, useContext, useState, useEffect } from "react";

const { user } = useAuth();
const uid = user?.uid || "guest";

const [cart, setCart] = useState(() =>
  JSON.parse(localStorage.getItem(`cart_${uid}`)) || []
);

const [favourites, setFavourites] = useState(() =>
  JSON.parse(localStorage.getItem(`favourites_${uid}`)) || []
);

useEffect(() => {
  localStorage.setItem(`cart_${uid}`, JSON.stringify(cart));
}, [cart, uid]);

useEffect(() => {
  localStorage.setItem(`favourites_${uid}`, JSON.stringify(favourites));
}, [favourites, uid]);