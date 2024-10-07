import React from "react";

type ValidationErrorProps = {
    errorMessage: string | undefined;
};

export function ValidationError({ errorMessage }: ValidationErrorProps) {
    return <p className={`auth-form__error ${errorMessage ? "error-visible" : ""}`}>{errorMessage}</p>;
}
