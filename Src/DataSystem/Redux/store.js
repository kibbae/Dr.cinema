const redux = require("redux");
const createStore = redux.createStore;
const thunk = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;
const axios = require("axios");

const ALL_DATA_LOADED = "ALL_DATA_LOADED";

const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST'
const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS'
const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE'

const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST'
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE'

const FETCH_CINEMAS_REQUEST = 'FETCH_CINEMAS_REQUEST'
const FETCH_CINEMAS_SUCCESS = 'FETCH_CINEMAS_SUCCESS'
const FETCH_CINEMAS_FAILURE = 'FETCH_CINEMAS_FAILURE'

const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST'
const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS'
const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE'

const FETCH_UPCOMING_REQUEST = 'FETCH_UPCOMING_REQUEST'
const FETCH_UPCOMING_SUCCESS = 'FETCH_UPCOMING_SUCCESS'
const FETCH_UPCOMING_FAILURE = 'FETCH_UPCOMING_FAILURE'

const putAllDataLoadedSuccess = () => {
    return {
        type: ALL_DATA_LOADED
    }
}

const fetchAuthRequest = () => {
    return {
        type: FETCH_AUTH_REQUEST
    }
}

const fetchAuthSuccess = Data => {
    return {
        type: FETCH_AUTH_SUCCESS,
        payload: Data
    }
}

const fetchAuthFailure = error => {
    return {
        type: FETCH_AUTH_FAILURE,
        payload: error
    }
}

const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

const fetchMoviesSuccess = Data => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: Data
    }
}

const fetchMoviesFailure = error => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}

const fetchCinemasRequest = () => {
    return {
        type: FETCH_CINEMAS_REQUEST
    }
}

const fetchCinemasSuccess = Data => {
    return {
        type: FETCH_CINEMAS_SUCCESS,
        payload: Data
    }
}

const fetchCinemasFailure = error => {
    return {
        type: FETCH_CINEMAS_FAILURE,
        payload: error
    }
}

const fetchGenresRequest = () => {
    return {
        type: FETCH_GENRES_REQUEST
    }
}

const fetchGenresSuccess = Data => {
    return {
        type: FETCH_GENRES_SUCCESS,
        payload: Data
    }
}

const fetchGenresFailure = error => {
    return {
        type: FETCH_GENRES_FAILURE,
        payload: error
    }
}

const fetchUpcomingRequest = () => {
    return {
        type: FETCH_UPCOMING_REQUEST
    }
}

const fetchUpcomingSuccess = Data => {
    return {
        type: FETCH_UPCOMING_SUCCESS,
        payload: Data
    }
}

const fetchUpcomingFailure = error => {
    return {
        type: FETCH_UPCOMING_FAILURE,
        payload: error
    }
}

const baseURL = "https://api.kvikmyndir.is/";

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
        case ALL_DATA_LOADED:
            return {
                ...state,
                loaded: true
            }
        default: return state
    }
}


export const Authreducer = (state = Authinitialstate, action) => {
    switch (action.type) {
        case FETCH_AUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case FETCH_AUTH_FAILURE:
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
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case FETCH_MOVIES_FAILURE:
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
        case FETCH_CINEMAS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CINEMAS_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case FETCH_CINEMAS_FAILURE:
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
        case FETCH_GENRES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_GENRES_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case FETCH_GENRES_FAILURE:
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
        case FETCH_UPCOMING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_UPCOMING_SUCCESS:
            return {
                ...state,
                loading: false,
                Data: action.payload,
                error: ''
            }
        case FETCH_UPCOMING_FAILURE:
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
    Upcoming: Upcomingreducer,
    AllDataLoaded: AllDataLoadedreducer
});



const fetchAuth = () => {
    return function (dispatch) {
        dispatch(fetchAuthRequest())
        axios.post(baseURL + "authenticate", {
            username: "hopur26v2",
            password: "hopur26"
        })
        .then(response => {
            const Data = response.data
            dispatch(fetchAuthSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchAuthFailure(errorMsg))
        })
    }
}

const fetchMovies = () => {
    return function (dispatch) {
        const state = store.getState()
        dispatch(fetchMoviesRequest())
        axios.get(baseURL + "movies?token=" + state.Auth.Data.token)
        .then(response => {
            const Data = response.data
            dispatch(fetchMoviesSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchMoviesFailure(errorMsg))
        })
    }
}

const fetchCinemas = () => {
    return function (dispatch) {
        const state = store.getState()
        dispatch(fetchCinemasRequest())
        axios.get(baseURL + "theaters" , {headers: {"x-access-token" : state.Auth.Data.token}})
        .then(response => {
            const Data = response.data
            dispatch(fetchCinemasSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchCinemasFailure(errorMsg))
        })
    }
}

const fetchGenres = () => {
    return function (dispatch) {
        const state = store.getState()
        dispatch(fetchGenresRequest())
        axios.get(baseURL + "genres" , {headers: {"x-access-token" : state.Auth.Data.token}})
        .then(response => {
            const Data = response.data
            dispatch(fetchGenresSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchGenresFailure(errorMsg))
        })
    }
}

const fetchUpcoming = () => {
    return function (dispatch) {
        const state = store.getState()
        dispatch(fetchUpcomingRequest())
        axios.get(baseURL + "upcoming?token=" + state.Auth.Data.token)
        .then(response => {
            const Data = response.data
            dispatch(fetchUpcomingSuccess(Data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUpcomingFailure(errorMsg))
        })
    }
}


const putAllDataLoaded = () => {
    return function (dispatch) {
        dispatch(putAllDataLoadedSuccess())
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
    store.dispatch(fetchMovies())
    store.dispatch(fetchCinemas())
    store.dispatch(fetchGenres())
    store.dispatch(fetchUpcoming())
    await waitforloading()
    store.dispatch(putAllDataLoaded())
    //console.log("everything is loaded", store.getState())
}

LoadEverything()

export default store;