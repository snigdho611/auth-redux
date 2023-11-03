import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const reducers = combineReducers({
    auth: authSlice,
});

const persistConfig = {
    key: "root",
    storage: localStorage,
    whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
