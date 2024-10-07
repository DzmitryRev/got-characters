import { MessageResponse, User, UserDTO } from "./core/types";
import UserApi from "./core/UserApi";

class UserApiImp implements UserApi {
    private session_storage_name: string = "session";
    private users_storage_name: string = "users";

    private getAllUsers(): User[] {
        const allUsers: User[] | null = JSON.parse(localStorage.getItem(this.users_storage_name) || "null");
        if (!allUsers) {
            localStorage.setItem(this.users_storage_name, "[]");
        }
        return allUsers || [];
    }

    private findUserByUsername(username: string): User | null {
        const allUsers = this.getAllUsers();
        const requiredUser = allUsers.find((user) => user.username === username);
        return requiredUser || null;
    }
    private createUser(username: string, password: string): UserDTO | null {
        const allUsers = this.getAllUsers();
        localStorage.setItem(
            this.users_storage_name,
            JSON.stringify([...allUsers, { username, password, favoriteCharacters: [] }])
        );
        return this.findUserByUsername(username);
    }

    private getCurrentSession(): UserDTO | null {
        return JSON.parse(sessionStorage.getItem(this.session_storage_name) || "null");
    }

    private setCurrentSession(username: string): void {
        sessionStorage.setItem(this.session_storage_name, JSON.stringify({ username }));
    }

    private deleteCurrentSession(): void {
        sessionStorage.removeItem(this.session_storage_name);
    }

    checkLogin(): UserDTO | null {
        return this.getCurrentSession();
    }

    login(username: string, password: string): UserDTO | MessageResponse {
        const requiredUser = this.findUserByUsername(username);
        if (!requiredUser || requiredUser.password !== password) {
            return { message: "Неправильное имя пользователя или пароль" };
        }
        this.setCurrentSession(username);
        return requiredUser;
    }

    logout(): void {
        this.deleteCurrentSession();
    }

    refreshCurrentSession(username: string): UserDTO | null {
        this.setCurrentSession(username);
        return this.getCurrentSession();
    }

    register(username: string, password: string): MessageResponse {
        const isUserExist = this.findUserByUsername(username);
        if (isUserExist) {
            return { message: "Пользователь уже существует" };
        }
        this.createUser(username, password);
        return { message: "Успешная регистрация" };
    }

    addCharacterToFavorite(characterId: number): MessageResponse | void {
        let currentSession = this.getCurrentSession();
        if (!currentSession) return { message: "Ошибка авторизации" };
        let currentUser = this.findUserByUsername(currentSession.username);
        if (!currentUser) return { message: "Такого пользователя не существует" };
        currentUser.favoriteCharacters.push(characterId);
        let { username } = currentUser;
        localStorage.setItem(
            this.users_storage_name,
            JSON.stringify([...this.getAllUsers().filter((user) => user.username !== username), { ...currentUser }])
        );
    }
    removeCharacterFromFavorite(characterId: number): MessageResponse | void {
        let currentSession = this.getCurrentSession();
        if (!currentSession) return { message: "Ошибка авторизации" };
        let currentUser = this.findUserByUsername(currentSession.username);
        if (!currentUser) return { message: "Такого пользователя не существует" };
        currentUser.favoriteCharacters = currentUser.favoriteCharacters.filter((id) => id !== characterId);
        let { username } = currentUser;
        localStorage.setItem(
            this.users_storage_name,
            JSON.stringify([...this.getAllUsers().filter((user) => user.username !== username), { ...currentUser }])
        );
    }

    getCurrentUserFavoriteCharacters(): number[] | MessageResponse {
        let currentSession = this.getCurrentSession();
        if (!currentSession) return { message: "Ошибка авторизации" };
        let currentUser = this.findUserByUsername(currentSession.username);
        if (!currentUser) return { message: "Такого пользователя не существует" };
        return currentUser.favoriteCharacters;
    }
}

export default UserApiImp;
