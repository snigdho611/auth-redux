import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
    id: number | null;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    image: string | null;
    token: string | null;
}

const initialState: IAuthState = {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveLogin: (state, action: PayloadAction<IAuthState>) => {
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
