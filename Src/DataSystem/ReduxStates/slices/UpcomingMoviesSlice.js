import { createSlice } from "@reduxjs/toolkit";
import { getUpcomingMovies } from "../../API/API";

const initialState = {
    upcomingMovies: []
}

export const upcomingMoviesSlice = createSlice({
    name: 'upcomingMovies',
    initialState,
    reducers: {
        getUpcomingMoviesreducer: (state, action) => {
            state.upcomingMovies = getUpcomingMovies();
        }
    }
})

export const { getUpcomingMoviesreducer } = upcomingMoviesSlice.actions

export default upcomingMoviesSlice.reducer