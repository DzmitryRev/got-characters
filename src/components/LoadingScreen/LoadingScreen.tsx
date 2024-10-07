import React from "react";
import { Spinner } from "../ui";

export function LoadingScreen() {
    return (
        <div className="empty-page">
            <Spinner />
        </div>
    );
}
