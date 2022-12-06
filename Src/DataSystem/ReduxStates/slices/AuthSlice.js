import { createSlice } from '@reduxjs/toolkit';
import { authenticate } from '../../API/API';

const username = "hopur26v2"
const password = "hopur26"

const initialState = authenticate(username, password);
console.log("initial state", initialState);


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateToken: (state, action) => {
            state.token = authenticate(username, password);
        }
    }
})

export const { updateToken } = authSlice.actions

export default authSlice.reducer