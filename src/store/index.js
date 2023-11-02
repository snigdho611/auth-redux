import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: localStorage,
    whitelist: ["auth"],
};

const reducers = combineReducers({
    auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);
export { store, persistor };
