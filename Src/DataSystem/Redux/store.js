const redux = require("redux");
const createStore = redux.createStore;
const thunk = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;
//const combineReducers = redux.combineReducers;
const axios = require("axios");
//import * as actions from "./ActionTypes";
import * as creators from "./ActionCreators";
import { rootReducer } from "./Reducers";


const baseURL = "https://api.kvikmyndir.is/";


const fetchAuth = () => {
    return function (dispatch) {
        dispatch(creators.fetchAuthRequest())
        axios.post(baseURL + "authenticate", {
            username: "hopur26v2",
            password: "hopur26"
        })
        .then(response => {
            const Data = response.data
            dispatch(creators.fetchAuthSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(creators.fetchAuthFailure(errorMsg))
        })
    }
}

const fetchMovies = () => {
    return function (dispatch) {
        const state = store.getState()
        dispatch(creators.fetchMoviesRequest())
        axios.get(baseURL + "movies?token=" + state.Auth.Data.token)
        .then(response => {
            const Data = response.data
            dispatch(creators.fetchMoviesSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(creators.fetchMoviesFailure(errorMsg))
        })
    }
}

const fetchCinemas = () => {
    return function (dispatch) {
        const state = store.getState()
        dispatch(creators.fetchCinemasRequest())
        axios.get(baseURL + "theaters" , {headers: {"x-access-token" : state.Auth.Data.token}})
        .then(response => {
            const Data = response.data
            dispatch(creators.fetchCinemasSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(creators.fetchCinemasFailure(errorMsg))
        })
    }
}

const fetchGenres = () => {
    return function (dispatch) {
        const state = store.getState()
        dispatch(creators.fetchGenresRequest())
        axios.get(baseURL + "genres" , {headers: {"x-access-token" : state.Auth.Data.token}})
        .then(response => {
            const Data = response.data
            dispatch(creators.fetchGenresSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(creators.fetchGenresFailure(errorMsg))
        })
    }
}

const fetchUpcoming = () => {
    return function (dispatch) {
        const state = store.getState()
        dispatch(creators.fetchUpcomingRequest())
        axios.get(baseURL + "upcoming?token=" + state.Auth.Data.token)
        .then(response => {
            const Data = response.data
            dispatch(creators.fetchUpcomingSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(creators.fetchUpcomingFailure(errorMsg))
        })
    }
}


const putAllDataLoaded = () => {
    return function (dispatch) {
        dispatch(creators.putAllDataLoadedSuccess())
    }
}


async function waitforauth() {
    const state = store.getState()
    
    while (store.getState().Auth.Data.token === undefined) 
    {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}



// a function that gets the state of every loading variable
async function waitforloading() {
    const state = store.getState()
    while (  store.getState().Auth.loading === true ||
             store.getState().Movies.loading === true ||
             store.getState().Cinemas.loading === true ||
             store.getState().Genres.loading === true ||
             store.getState().Upcoming.loading === true)
    {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}




const store = createStore(rootReducer, applyMiddleware(thunk));

async function LoadEverything() {
    store.dispatch(fetchAuth())
    await waitforauth()
    store.dispatch(putAllDataLoaded())
    store.dispatch(fetchMovies())
    store.dispatch(fetchCinemas())
    //await waitforloading()
    store.dispatch(fetchGenres())
    store.dispatch(fetchUpcoming())
}

LoadEverything()

export default store;