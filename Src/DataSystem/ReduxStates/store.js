import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'                //þetta þannig seð þarf ekki að vera en kanski þæginlegra í framtíðinni
import authReducer from './slices/AuthSlice'
import movieReducer from './slices/MovieSlice'
import CinemaReducer from './slices/CinemaSlice'
import genresReducer from './slices/GenresSlice'
import upcomingMoviesReducer from './slices/UpcomingMoviesSlice'




const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
        movies: movieReducer,
        Cinemas: CinemaReducer,
        genres: genresReducer,
        upcomingMovies: upcomingMoviesReducer
    })
})

console.log(store.getState())

export default store
