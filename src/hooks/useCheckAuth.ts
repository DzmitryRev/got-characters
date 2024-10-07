import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { checkSession } from "../redux/slices/authSlice";

export function useCheckAuth() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(checkSession());
    }, [dispatch]);
}
