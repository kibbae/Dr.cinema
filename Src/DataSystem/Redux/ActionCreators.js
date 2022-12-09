import * as actions from './ActionTypes'

export const putAllDataLoadedSuccess = () => {
    return {
        type: actions.ALL_DATA_LOADED
    }
}

export const fetchAuthRequest = () => {
    return {
        type: actions.FETCH_AUTH_REQUEST
    }
}

export const fetchAuthSuccess = Data => {
    return {
        type: actions.FETCH_AUTH_SUCCESS,
        payload: Data
    }
}

export const fetchAuthFailure = error => {
    return {
        type: actions.FETCH_AUTH_FAILURE,
        payload: error
    }
}

export const fetchMoviesRequest = () => {
    return {
        type: actions.FETCH_MOVIES_REQUEST
    }
}

export const fetchMoviesSuccess = Data => {
    return {
        type: actions.FETCH_MOVIES_SUCCESS,
        payload: Data
    }
}

export const fetchMoviesFailure = error => {
    return {
        type: actions.FETCH_MOVIES_FAILURE,
        payload: error
    }
}

export const fetchCinemasRequest = () => {
    return {
        type: actions.FETCH_CINEMAS_REQUEST
    }
}

export const fetchCinemasSuccess = Data => {
    return {
        type: actions.FETCH_CINEMAS_SUCCESS,
        payload: Data
    }
}

export const fetchCinemasFailure = error => {
    return {
        type: actions.FETCH_CINEMAS_FAILURE,
        payload: error
    }
}

export const fetchGenresRequest = () => {
    return {
        type: actions.FETCH_GENRES_REQUEST
    }
}

export const fetchGenresSuccess = Data => {
    return {
        type: actions.FETCH_GENRES_SUCCESS,
        payload: Data
    }
}

export const fetchGenresFailure = error => {
    return {
        type: actions.FETCH_GENRES_FAILURE,
        payload: error
    }
}

export const fetchUpcomingRequest = () => {
    return {
        type: actions.FETCH_UPCOMING_REQUEST
    }
}

export const fetchUpcomingSuccess = Data => {
    return {
        type: actions.FETCH_UPCOMING_SUCCESS,
        payload: Data
    }
}

export const fetchUpcomingFailure = error => {
    return {
        type: actions.FETCH_UPCOMING_FAILURE,
        payload: error
    }
}