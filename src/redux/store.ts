import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { charactersApi } from "./RTK/characters/charactersApi";
import { authMiddleware } from "./middlewares/authMiddleware";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware, charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
