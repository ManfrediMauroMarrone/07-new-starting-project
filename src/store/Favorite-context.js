import { useState, createContext } from "react";

const FavoritesContext =  createContext({
    favorites: [],
    totalFevorites: 0
})

const FavoritesContextProvider = props =>{
    const [userFavorites, setUserFavorites]= useState([])

    const addFavoriteHandler = favoriteMeetup =>{
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    const removeFavoriteHandler = meetupId =>{
        setUserFavorites(prevUserFavorites =>{
            prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    const itemIsFavoriteHandler = meetupId =>{
        return userFavorites.some(meetup => meetup.id == meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFevorites: userFavorites.length
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}