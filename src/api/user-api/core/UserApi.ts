import { MessageResponse, UserDTO } from "./types";

interface UserApi {
    checkLogin(): UserDTO | null;
    login(username: string, password: string): UserDTO | MessageResponse;
    logout(): void;
    refreshCurrentSession(username: string): UserDTO | null;
    register(username: string, password: string): MessageResponse;
    addCharacterToFavorite(characterId: number): MessageResponse | void;
    removeCharacterFromFavorite(characterId: number): MessageResponse | void;
    getCurrentUserFavoriteCharacters(): number[] | MessageResponse;
}

export default UserApi;
