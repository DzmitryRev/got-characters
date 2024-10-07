import React from "react";
import "./styles.css";
import { RegistrationForm } from "../../components/Auth";
import { withAuthCheck, withoutAuth } from "../../hoc";

function Registration() {
    return (
        <div className="registration-page">
            <RegistrationForm />
        </div>
    );
}

export default withAuthCheck(withoutAuth(Registration));
