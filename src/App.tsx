import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundaryLayout, MainLayout } from "./components/layouts";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import SuccessfulRegistration from "./pages/SuccessfulRegistration/SuccessfulRegistration";
import Character from "./pages/Character/Character";
import FavoriteCharacters from "./pages/FavoriteCharacters/FavoriteCharacters";
import { LoadingScreen } from "./components/LoadingScreen";

const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

export const router = createBrowserRouter([
    {
        element: <ErrorBoundaryLayout />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    },
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "registration",
                        element: <Registration />,
                    },
                    {
                        path: "successful-registration",
                        element: <SuccessfulRegistration />,
                    },
                    {
                        path: "characters/:characterId",
                        element: <Character />,
                    },
                    {
                        path: "favorite",
                        element: <FavoriteCharacters />,
                    },
                    {
                        path: "*",
                        element: (
                            <React.Suspense fallback={<LoadingScreen />}>
                                <NotFound />
                            </React.Suspense>
                        ),
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
