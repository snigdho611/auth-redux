import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveLogin: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.gender = action.payload.gender;
            state.image = action.payload.image;
            state.token = action.payload.token;
        },
        removeLogin: (state) => {
            state.id = null;
            state.username = null;
            state.firstName = null;
            state.lastName = null;
            state.gender = null;
            state.image = null;
            state.token = null;
        },
    },
});

export const { saveLogin, removeLogin } = authSlice.actions;
export default authSlice.reducer;
