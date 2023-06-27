import { createContext, useContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosArmazenados = localStorage.getItem("favoritos");
    if (favoritosArmazenados) {
      setFavoritos(JSON.parse(favoritosArmazenados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritosContext() {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritosRepetidos = favoritos.some((item) => item.id === novoFavorito.id);
    let novosFavoritos = [...favoritos];
    if (!favoritosRepetidos) {
      novosFavoritos.push(novoFavorito);
      setFavoritos(novosFavoritos);
    } else {
      novosFavoritos = novosFavoritos.filter((item) => item.id !== novoFavorito.id);
      setFavoritos(novosFavoritos);
    }
  }

  return { favoritos, adicionarFavorito };
}
