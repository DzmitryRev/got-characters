import React from "react";
import "./styles.css";

type InputProps = { setValue: (value: string) => void } & React.ComponentProps<"input">;

export function Input({ setValue, ...props }: InputProps) {
    return (
        <input
            className="input"
            onChange={(e) => {
                setValue(e.target.value);
            }}
            {...props}
        />
    );
}
