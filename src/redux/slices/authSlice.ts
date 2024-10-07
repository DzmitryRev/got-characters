import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
    username: string;
    favoriteCharactersId: number[];
}

const initialState: AuthState = {
    isAuth: false,
    username: "",
    favoriteCharactersId: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAsSignedIn: (state, action: PayloadAction<{ username: string; favoriteCharacters: number[] }>) => {
            state.isAuth = true;
            state.username = action.payload.username;
            state.favoriteCharactersId = [...action.payload.favoriteCharacters];
        },
        setAsSignedOut: (state) => {
            state.isAuth = false;
            state.username = "";
            state.favoriteCharactersId = [];
        },
        checkSession() {},
        setFavoriteCharactersId(state, action: PayloadAction<number[]>) {
            state.favoriteCharactersId = [...action.payload];
        },
    },
});

export const { setAsSignedIn, setAsSignedOut, checkSession, setFavoriteCharactersId } = authSlice.actions;

export default authSlice.reducer;
