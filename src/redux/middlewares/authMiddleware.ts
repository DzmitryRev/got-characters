import { Middleware } from "@reduxjs/toolkit";
import { setAsSignedIn, setAsSignedOut } from "../slices/authSlice";
import { UserApiInstanse } from "../../api/user-api";

export const authMiddleware: Middleware = (api) => (next) => (action) => {
    if (typeof action === "object" && action !== null && "type" in action && action.type === "auth/checkSession") {
        const store = api.getState();
        const currentSession = UserApiInstanse.checkLogin();
        if (!store.auth.isAuth) {
            if (currentSession) {
                const favoriteCharactersId = UserApiInstanse.getCurrentUserFavoriteCharacters();
                api.dispatch(
                    setAsSignedIn({
                        username: currentSession.username,
                        favoriteCharacters: Array.isArray(favoriteCharactersId) ? favoriteCharactersId : [],
                    })
                );
            }
        } else {
            if (!currentSession) {
                api.dispatch(setAsSignedOut());
            }
        }
    }

    return next(action);
};
