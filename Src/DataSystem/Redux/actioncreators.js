import * as actionTypes from './actiontypes';


const fetchAuthRequest = () => {
    return {
        type: actionTypes.FETCH_AUTH_REQUEST
    }
}

const fetchAuthSuccess = auth => {
    return {
        type: actionTypes.FETCH_AUTH_SUCCESS,
        payload: auth
    }
}

const fetchAuthFailure = error => {
    return {
        type: actionTypes.FETCH_AUTH_FAILURE,
        payload: error
    }
}

const fetchMoviesRequest = () => {
    return {
        type: actionTypes.FETCH_MOVIES_REQUEST
    }
}

const fetchMoviesSuccess = movies => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

const fetchMoviesFailure = error => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILURE,
        payload: error
    }
}

const fetchCinemasRequest = () => {
    return {
        type: actionTypes.FETCH_CINEMAS_REQUEST
    }
}

const fetchCinemasSuccess = cinemas => {
    return {
        type: actionTypes.FETCH_CINEMAS_SUCCESS,
        payload: cinemas
    }
}

const fetchCinemasFailure = error => {
    return {
        type: actionTypes.FETCH_CINEMAS_FAILURE,
        payload: error
    }
}

const fetchGenresRequest = () => {
    return {
        type: actionTypes.FETCH_GENRES_REQUEST
    }
}

const fetchGenresSuccess = genres => {
    return {
        type: actionTypes.FETCH_GENRES_SUCCESS,
        payload: genres
    }
}

const fetchGenresFailure = error => {
    return {
        type: actionTypes.FETCH_GENRES_FAILURE,
        payload: error
    }
}

const fetchUpcomingMoviesRequest = () => {
    return {
        type: actionTypes.FETCH_UPCOMING_MOVIES_REQUEST
    }
}

const fetchUpcomingMoviesSuccess = upcomingMovies => {
    return {
        type: actionTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
        payload: upcomingMovies
    }
}

const fetchUpcomingMoviesFailure = error => {
    return {
        type: actionTypes.FETCH_UPCOMING_MOVIES_FAILURE,
        payload: error
    }
}

