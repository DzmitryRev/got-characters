import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button, Dropdown, Logo } from "../ui";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { UserApiInstanse } from "../../api/user-api";
import { setAsSignedOut } from "../../redux/slices/authSlice";
import { useLanguage } from "../../utils/language";

export function Header() {
    const { translate } = useLanguage();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isAuth, username } = useAppSelector((store) => store.auth);
    const dispatch = useAppDispatch();

    const logout = () => {
        UserApiInstanse.logout();
        dispatch(setAsSignedOut());
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleLogout = () => {
        logout();
        closeDropdown();
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo-container">
                    <Link to={"/"}>
                        <Logo />
                    </Link>
                </div>

                <div className="header__auth-block-container">
                    {isAuth ? (
                        <>
                            <Dropdown title={username} isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen}>
                                <li>
                                    <Link to={"favorite"} onClick={closeDropdown}>
                                        {translate("favorite")}
                                    </Link>
                                </li>
                                <li>
                                    <p onClick={handleLogout}>{translate("logout")}</p>
                                </li>
                            </Dropdown>
                        </>
                    ) : (
                        <>
                            <Link to={`login`}>
                                <Button>{translate("login")}</Button>
                            </Link>
                            <Link to={`registration`}>
                                <Button color={"blue"}>{translate("register")}</Button>
                            </Link>
                        </>
                    )}
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
