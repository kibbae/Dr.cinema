import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../../API/API";

const initialState = {
    genres: []
}

export const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        getGenresreducer: (state, action) => {
            state.genres = getGenres();
        }
    }
})

export const { getGenresreducer } = genresSlice.actions

export default genresSlice.reducer
