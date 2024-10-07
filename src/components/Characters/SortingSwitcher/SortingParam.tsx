import React, { PropsWithChildren } from "react";
import "./styles.css";
import { SortingOrder } from "../../../utils/filterAndSortCharacters/types";

type SortingParamProps = {
    isActive: boolean;
    sortingOrder: SortingOrder;
} & React.ComponentProps<"input">;

export function SortingParamItem({ isActive, sortingOrder, children, ...props }: PropsWithChildren<SortingParamProps>) {
    return (
        <span className={"sorting__param " + (isActive ? "sorting__param_active" : "")} {...props}>
            {children}
            {isActive &&
                (sortingOrder === "asc" ? <span className="arrow-up"></span> : <span className="arrow-down"></span>)}
        </span>
    );
}
