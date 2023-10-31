import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    _id: string | null;
    email: string | null;
    role: string | null;
    verified: boolean | null;
    token: string | null;
    user: {
        _id: string | null;
        name: string | null;
        phone: string | null;
    };
}
export interface IAuthState {
    auth: AuthState;
}

const initialState: AuthState = {
    _id: null,
    email: null,
    role: null,
    verified: null,
    token: null,
    user: {
        _id: null,
        name: null,
        phone: null,
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveLogin: (state, action: PayloadAction<AuthState>) => {
            state._id = action.payload._id;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.verified = action.payload.verified;
            state.user._id = action.payload.user?._id;
            state.user.name = action.payload.user?.name;
            state.user.phone = action.payload.user?.phone;
        },
        removeLogin: (state) => {
            state._id = null;
            state.email = null;
            state.role = null;
            state.token = null;
            state.verified = null;
            state.user._id = null;
            state.user.name = null;
            state.user.phone = null;
        },
    },
});

export const { saveLogin, removeLogin } = authSlice.actions;
export default authSlice.reducer;
