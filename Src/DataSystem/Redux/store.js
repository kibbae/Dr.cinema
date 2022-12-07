const redux = require("redux");
const createStore = redux.createStore;
const thunk = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;
const axios = require("axios");
import * as actionTypes from "./actionTypes";
import * as actionCreators from "./actioncreators";


const baseURL = "https://api.kvikmyndir.is/";

const Authinitialstate = {
    loading: false,
    Data: [],
    error: ''
}

const Moviesinitialstate = {
    loading: false,
    Data: [],
    error: ''
}

const Cinemasinitialstate = {
    loading: false,
    Data: [],
    error: ''
}

const Genresinitialstate = {
    loading: false,
    Data: [],
    error: ''
}

const Upcominginitialstate = {
    loading: false,
    Data: [],
    error: ''
}

export const Authreducer = (state = Authinitialstate, action) => {
    switch (action.type) {
        case actionTypes.FETCH_AUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actionTypes.FETCH_AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                Data: [],
                error: action.payload
            }
        default: return state
    }
}

export const Moviesreducer = (state = Moviesinitialstate, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actionTypes.FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                Data: [],
                error: action.payload
            }
        default: return state
    }
}

export const Cinemasreducer = (state = Cinemasinitialstate, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CINEMAS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_CINEMAS_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actionTypes.FETCH_CINEMAS_FAILURE:
            return {
                ...state,
                loading: false,
                Data: [],
                error: action.payload
            }
        default: return state
    }
}

export const Genresreducer = (state = Genresinitialstate, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENRES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actionTypes.FETCH_GENRES_FAILURE:
            return {
                ...state,
                loading: false,
                Data: [],
                error: action.payload
            }
        default: return state
    }
}

export const Upcomingreducer = (state = Upcominginitialstate, action) => {
    switch (action.type) {
        case actionTypes.FETCH_UPCOMING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_UPCOMING_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actionTypes.FETCH_UPCOMING_FAILURE:
            return {
                ...state,
                loading: false,
                Data: [],
                error: action.payload
            }
        default: return state
    }
}


const rootReducer = combineReducers({
    Auth: Authreducer,
    Movies: Moviesreducer,
    Cinemas: Cinemasreducer,
    Genres: Genresreducer,
    Upcoming: Upcomingreducer
});



const fetchAuth = () => {
    return function (dispatch) {
        dispatch(actionCreators.fetchAuthRequest())
        axios.post(baseURL + "authenticate", {
            username: "hopur26v2",
            password: "hopur26"
        })
        .then(response => {
            const Data = response.data
            dispatch(actionCreators.fetchAuthSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(actionCreators.fetchAuthFailure(errorMsg))
        })
    }
}





const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchAuth())


export default store;