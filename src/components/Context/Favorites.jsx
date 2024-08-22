

import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const favoriteRepeated = favorite.some(item => item.id === newFavorite.id);

        let newList = [...favorite];

        if (!favoriteRepeated) {
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        // newList = favorite.filter((favorite) => favorite.id !== newFavorite.id);
        newList.splice(newList.findIndex(item => item.id === newList.find(item => item.id === newFavorite.id).id),1);
        return setFavorite(newList);
    }
    return {
        favorite,
        addFavorite
    }
}

