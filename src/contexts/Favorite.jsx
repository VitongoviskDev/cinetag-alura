import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'Favorite';

export default function FavoritesProvider({children}){
    const [favorites, setFavorites] = useState([]);
    return(
        <FavoritesContext.Provider
            value={{ favorites, setFavorites}}>
            {
                children
            }
        </FavoritesContext.Provider>
    )
}


export function useFavoriteContext(){
    const {favorites, setFavorites} = useContext(FavoritesContext);

    function ToggleFavorite(newFavorite){
        const repeatedFavorite = favorites.some(favorite => favorite.id === newFavorite.id);

        console.log(newFavorite);
        if(!repeatedFavorite){
            return setFavorites([...favorites, {...newFavorite}]);
        }

        setFavorites(favorites.filter(favorite => favorite.id !== newFavorite.id))
    }

    return{
        favorites,
        ToggleFavorite
    }
}