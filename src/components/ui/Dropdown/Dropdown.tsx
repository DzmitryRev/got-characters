import React, { PropsWithChildren } from "react";
import "./styles.css";

type DropdownProps = {
    title: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

export function Dropdown({ title, isOpen, setIsOpen, children }: PropsWithChildren<DropdownProps>) {
    return (
        <div className="dropdown__container">
            <p
                className="dropdown__title"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {title}
            </p>
            <ul className={"dropdown__list " + (isOpen ? "open" : " ")}>{children}</ul>
        </div>
    );
}
