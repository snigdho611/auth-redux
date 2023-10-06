import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
    auth: {
        email: string | null;
        token: string | null;
    };
}

const initialState: { email: string | null; token: string | null } = {
    email: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveLogin: (state, action: PayloadAction<{ email: string; token: string }>) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
    },
});

export const { saveLogin } = authSlice.actions;
export default authSlice.reducer;
