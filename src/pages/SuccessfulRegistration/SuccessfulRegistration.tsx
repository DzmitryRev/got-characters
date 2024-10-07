import React, { useEffect } from "react";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../utils/language";

function SuccessfulRegistration() {
    const { translate } = useLanguage();

    const navigate = useNavigate();

    const location = useLocation();
    const fromRegistration = location.state?.fromRegistration;

    useEffect(() => {
        if (!fromRegistration) {
            return navigate("/");
        }
    }, [fromRegistration, navigate]);

    return (
        <div className="empty-page">
            <div className="successful-registration-page">
                <h1 className="successful-registration-page__heading">
                    {translate("successful_registration")} &#128522;
                </h1>
            </div>
        </div>
    );
}

export default SuccessfulRegistration;
