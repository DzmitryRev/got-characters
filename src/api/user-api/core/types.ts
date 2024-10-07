export type User = {
    username: string;
    password: string;
    favoriteCharacters: number[];
};

export type UserDTO = Omit<User, "password">;

export type MessageResponse = {
    message: string;
};
