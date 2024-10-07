import React from "react";
import "./styles.css";
import { ErrorScreen } from "../../components/ErrorScreen";
import { useLanguage } from "../../utils/language";

function NotFound() {
    const { translate } = useLanguage();

    return <ErrorScreen title="404" subtitle={translate("page_not_found")} />;
}

export default NotFound;
