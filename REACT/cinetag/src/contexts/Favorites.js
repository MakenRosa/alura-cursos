import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const {favorites, setFavorites } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const duplicateFavorites = favorites.some((item) => item.id === newFavorite.id);
    let newFavorites = [...favorites];
    if (!duplicateFavorites) {
      newFavorites.push(newFavorite);
      setFavorites(newFavorites);
    } else {
      newFavorites = newFavorites.filter((item) => item.id !== newFavorite.id);
      setFavorites(newFavorites);
    }
  }

  return { favorites, addFavorite };
}
