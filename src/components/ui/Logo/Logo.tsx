import React from "react";
import "./styles.css";
import logoImg from "../../../assets/logo.png";

export function Logo() {
    return <img className="logo" src={logoImg} alt="logo" />;
}
