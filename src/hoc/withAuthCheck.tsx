import { ComponentType, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { checkSession } from "../redux/slices/authSlice";

export function withAuthCheck<T extends object>(Component: ComponentType<T>) {
    return function ComponentWithAuthCheck(props: T) {
        const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch(checkSession());
        }, [dispatch]);

        return <Component {...props} />;
    };
}
