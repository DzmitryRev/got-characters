import React, { useEffect, useState } from "react";
import "./styles.css";
import { ValidationError } from "./ValidationError";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../ui";
import { UserApiInstanse } from "../../api/user-api";
import { useLanguage } from "../../utils/language";

export const RegistrationForm: React.FC = () => {
    const { language, translate } = useLanguage();

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<{
        username?: string;
        password?: string;
        confirmPassword?: string;
        apiError?: string;
    }>({});

    useEffect(() => {
        if (errors.username || errors.password || errors.confirmPassword || errors.apiError) {
            const newErrors: { username?: string; password?: string; confirmPassword?: string; apiError?: string } = {
                username: errors.username ? translate("auth_form_error_empty_username") : "",
                password: errors.password ? translate("auth_form_error_short_password") : "",
                confirmPassword: errors.confirmPassword ? translate("auth_form_error_repeat_password") : "",
            };
            setErrors({ ...newErrors });
        }
    }, [language]);

    const validate = () => {
        const newErrors: { username?: string; password?: string; confirmPassword?: string; apiError?: string } = {};

        if (!username.trim()) {
            newErrors.username = translate("auth_form_error_empty_username");
        }

        if (password.length < 6) {
            newErrors.password = translate("auth_form_error_short_password");
        }

        if (confirmPassword !== password) {
            newErrors.confirmPassword = translate("auth_form_error_repeat_password");
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validate()) {
            if (validate()) {
                const res = UserApiInstanse.register(username, password);
                if (res.message === "Успешная регистрация") {
                    navigate("/successful-registration", { state: { fromRegistration: true } });
                } else {
                    setErrors({ apiError: res.message });
                }
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
            <div className="auth-form__group">
                <label className="auth-form__label">{translate("auth_form_repeat_password")}</label>
                <Input type="password" value={confirmPassword} setValue={setConfirmPassword} />
                <ValidationError errorMessage={errors.confirmPassword} />
            </div>
            <ValidationError errorMessage={errors.apiError} />
            <div className="auth-form__submit-button-container">
                <Button color={"blue"} type="submit">
                    {translate("register")}
                </Button>
            </div>
        </form>
    );
};
