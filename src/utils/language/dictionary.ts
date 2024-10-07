export enum Languages {
    EN = "en",
    RU = "ru",
}

export type Keys =
    | "favorite"
    | "login"
    | "logout"
    | "register"
    | "auth_form_username"
    | "auth_form_password"
    | "auth_form_repeat_password"
    | "title_got_characters"
    | "sort_title"
    | "sort_param_firstname"
    | "sort_param_lastname"
    | "search_placeholder"
    | "auth_form_error_empty_username"
    | "auth_form_error_short_password"
    | "auth_form_error_login_api_error"
    | "auth_form_error_repeat_password"
    | "favorite_title"
    | "favorite_empty"
    | "add_to_favorite"
    | "remove_from_favorite"
    | "back"
    | "page_not_found"
    | "successful_registration"
    | "data_loading_error";

export const dictionary = {
    [Languages.EN]: {
        favorite: "favorite",
        login: "login",
        logout: "logout",
        register: "register",
        auth_form_username: "Username:",
        auth_form_password: "Password:",
        auth_form_repeat_password: "Repeat password:",
        title_got_characters: "Game of Thrones characters",
        sort_title: "Sort by:",
        sort_param_firstname: "First name",
        sort_param_lastname: "Last name",
        search_placeholder: "Search",
        auth_form_error_empty_username: "Field can't be empty",
        auth_form_error_short_password: "Password must contain at least 6 characters",
        auth_form_error_repeat_password: "Passwords don't match",
        favorite_title: "Favorite characters",
        favorite_empty: "You don't have any favorite heroes",
        add_to_favorite: "Add to favorite",
        remove_from_favorite: "Remove from favorite",
        back: "back",
        page_not_found: "This page was not found",
        successful_registration: "Successful registration",
        data_loading_error: "Error loading data",
    },
    [Languages.RU]: {
        favorite: "избранное",
        login: "войти",
        logout: "выйти",
        register: "регистрация",
        auth_form_username: "Имя пользователя:",
        auth_form_password: "Пароль:",
        auth_form_repeat_password: "Повторите пароль:",
        title_got_characters: "Герои сериала Game of Thrones",
        sort_title: "Сортировать по:",
        sort_param_firstname: "Имени",
        sort_param_lastname: "Фамилии",
        search_placeholder: "Поиск",
        auth_form_error_empty_username: "Поле не может быть пустым",
        auth_form_error_short_password: "Пароль должен содержать не менее 6 символов",
        auth_form_error_repeat_password: "Пароли не совпадают",
        favorite_title: "Избранные герои",
        favorite_empty: "У вас нет избранных героев",
        add_to_favorite: "Добавить в избранные",
        remove_from_favorite: "Удалить из избранных",
        back: "назад",
        page_not_found: "Такая страница не найдена",
        successful_registration: "Успешная регистрация",
        data_loading_error: "Ошибка при загрузке данных",
    },
} as Record<Languages, Record<Keys, string>>;
