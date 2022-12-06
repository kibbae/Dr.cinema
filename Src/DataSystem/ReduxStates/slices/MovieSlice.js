import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../API/API";
import useSelector from "react-redux";




const initialState = {
    movies: []
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMoviesreducer: (state, action) => {
            state.movies = getMovies(token);
        }
    }
});

export const { getMoviesreducer } = movieSlice.actions;

export default movieSlice.reducer;



