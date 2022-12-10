const { combineReducers } = require("redux");
import * as actions from './ActionTypes'

const AllDataLoadedinitialstate = {
    loaded: false
}


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

export const AllDataLoadedreducer = (state = AllDataLoadedinitialstate, action) => {
    switch (action.type) {
        case actions.ALL_DATA_LOADED:
            return {
                ...state,
                loaded: true
            }
        default: return state
    }
}


export const Authreducer = (state = Authinitialstate, action) => {
    switch (action.type) {
        case actions.FETCH_AUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actions.FETCH_AUTH_FAILURE:
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
        case actions.FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actions.FETCH_MOVIES_FAILURE:
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
        case actions.FETCH_CINEMAS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_CINEMAS_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actions.FETCH_CINEMAS_FAILURE:
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
        case actions.FETCH_GENRES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actions.FETCH_GENRES_FAILURE:
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
        case actions.FETCH_UPCOMING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.FETCH_UPCOMING_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case actions.FETCH_UPCOMING_FAILURE:
            return {
                ...state,
                loading: false,
                Data: [],
                error: action.payload
            }
        default: return state
    }
}


export const rootReducer = combineReducers({
    Auth: Authreducer,
    Movies: Moviesreducer,
    Cinemas: Cinemasreducer,
    Genres: Genresreducer,
    Upcoming: Upcomingreducer,
    AllDataLoaded: AllDataLoadedreducer
});