import { useState, createContext } from "react";

const FavoritesContext =  createContext({
    favorites: [],
    totalFevorites: 0
})

const FavoritesContextProvides = props =>{
    const [userFavorites, setUserFavorites]= useState([])

    const context = {
        favorites: userFavorites,
        totalFevorites: userFavorites.length
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}