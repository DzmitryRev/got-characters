import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function MainLayout() {
    return (
        <>
            <Header />
            <div className="container">
                <main className="content">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}
