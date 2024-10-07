import React from "react";

type ErrorScreenProps = {
    title: string;
    subtitle?: string;
    description?: string;
};

export function ErrorScreen({ title, subtitle, description }: ErrorScreenProps) {
    return (
        <div className="empty-page">
            <div>
                <h1>{title} &#128577;</h1>
                {subtitle && <h2>{subtitle}</h2>}
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}
