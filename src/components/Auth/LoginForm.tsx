import React, { useEffect, useState } from "react";
import "./styles.css";
import { useAppDispatch } from "../../redux/hooks";
import { setAsSignedIn } from "../../redux/slices/authSlice";
import { UserApiInstanse } from "../../api/user-api";
import { Button, Input } from "../ui";
import { ValidationError } from "./ValidationError";
import { useLanguage } from "../../utils/language";

export function LoginForm() {
    const { language, translate } = useLanguage();

    const dispatch = useAppDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ username?: string; password?: string; apiError?: string }>({});

    useEffect(() => {
        if (errors.username || errors.password || errors.apiError) {
            const newErrors: { username?: string; password?: string; apiError?: string } = {
                username: errors.username ? translate("auth_form_error_empty_username") : "",
                password: errors.password ? translate("auth_form_error_short_password") : "",
            };
            setErrors({ ...newErrors });
        }
    }, [language]);

    const validate = () => {
        const newErrors: { username?: string; password?: string; apiError?: string } = {};
        if (!username.trim()) {
            newErrors.username = translate("auth_form_error_empty_username");
        }
        if (password.length < 6) {
            newErrors.password = translate("auth_form_error_short_password");
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
            const res = UserApiInstanse.login(username, password);
            if ("message" in res) {
                setErrors({ apiError: res.message });
            } else {
                dispatch(setAsSignedIn({ username: res.username, favoriteCharacters: res.favoriteCharacters }));
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-form__group">
                <label className="auth-form__label">{translate("auth_form_username")}</label>
                <Input type="text" value={username} setValue={setUsername} />
                <ValidationError errorMessage={errors.username} />
            </div>
            <div className="auth-form__group">
                <label className="auth-form__label">{translate("auth_form_password")}</label>
                <Input type="password" value={password} setValue={setPassword} />
                <ValidationError errorMessage={errors.password} />
            </div>
            <ValidationError errorMessage={errors.apiError} />
            <div className="auth-form__submit-button-container">
                <Button color={"blue"} type="submit">
                    {translate("login")}
                </Button>
            </div>
        </form>
    );
}
