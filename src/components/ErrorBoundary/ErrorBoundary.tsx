import React, { Component, ErrorInfo, ReactNode } from "react";
import "./styles.css";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(error: Error): State {
        console.error(error);
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="empty-page">
                    <div className="error-boundary">
                        <h1 className="error-boundary__heading">Ошибка &#128577;</h1>
                        <h2 className="error-boundary__description">Что-то пошло не так</h2>
                        <p className="error-boundary__try-later">Попробуйте зайти позже</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
