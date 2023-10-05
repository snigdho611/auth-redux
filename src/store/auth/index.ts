import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    user: string | null;
}

const initialState: AuthState = {
    user: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string; password: string }>) => {
            state.user = action.payload.email;
        },
        getUser: (state) => {
            // if (state.user) {
            state.user = localStorage.getItem("user");
            // }
            // state.user;
        },
    },
});

export const { login, getUser } = authSlice.actions;
export default authSlice.reducer;
