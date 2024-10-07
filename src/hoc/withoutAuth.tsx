import { ComponentType, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

export function withoutAuth<T extends object>(Component: ComponentType<T>) {
    return function (props: T) {
        const navigate = useNavigate();
        const isAuth = useAppSelector((store) => store.auth.isAuth);
        useEffect(() => {
            if (isAuth) {
                return navigate("/");
            }
        }, [isAuth, navigate]);
        return !isAuth ? <Component {...props} /> : null;
    };
}
