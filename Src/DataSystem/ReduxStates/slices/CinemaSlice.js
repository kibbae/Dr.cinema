import { createSlice } from "@reduxjs/toolkit";
import { getCinemas } from "../../API/API";

const initialState = {
    Cinemas: []
}

export const CinemaSlice = createSlice({
    name: 'Cinemas',
    initialState,
    reducers: {
        getCinemasreducer: (state, action) => {
            state.Cinemas = getCinemas();
        }
    }
})

export const { getCinemasreducer } = CinemaSlice.actions

export default CinemaSlice.reducer