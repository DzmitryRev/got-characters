import React from "react";
import "./styles.css";

type ButtonProps = {
    color?: "transparent" | "blue";
} & React.ComponentProps<"button">;

export function Button({ color = "transparent", children, ...props }: ButtonProps) {
    return (
        <button className={"button button_" + color} {...props}>
            {children}
        </button>
    );
}
