import React from "react";
import "./styles.css";
import { LoginForm } from "../../components/Auth";
import { withAuthCheck, withoutAuth } from "../../hoc";

function Login() {
    return (
        <div className="login-page">
            <LoginForm />
        </div>
    );
}

export default withAuthCheck(withoutAuth(Login));
