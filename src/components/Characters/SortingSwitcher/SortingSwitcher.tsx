import React from "react";
import "./styles.css";
import { SortingOrder, SortingParams } from "../../../utils/filterAndSortCharacters/types";
import { SortingParamItem } from "./SortingParam";
import { useLanguage } from "../../../utils/language/LanguageContext";

type SortingProps = {
    sortBy: SortingParams;
    sortingOrder: SortingOrder;
    setSortBy: (value: SortingParams) => void;
    setSortingOrder: (value: SortingOrder) => void;
};

export function SortingSwitcher({ sortBy, sortingOrder, setSortBy, setSortingOrder }: SortingProps) {
    const { translate } = useLanguage();

    const handleSortingParam = (sortingParamName: SortingParams) => {
        if (sortBy === sortingParamName) {
            setSortingOrder(sortingOrder === "asc" ? "desc" : "asc");
        } else {
            setSortingOrder("asc");
            setSortBy(sortingParamName);
        }
    };
    return (
        <div className="sorting">
            <span className="sorting__heading">{translate("sort_title")}</span>
            <div className="sorting__params-container">
                <SortingParamItem
                    isActive={sortBy === "firstName"}
                    sortingOrder={sortingOrder}
                    onClick={() => {
                        handleSortingParam("firstName");
                    }}
                >
                    {translate("sort_param_firstname")}
                </SortingParamItem>
                <SortingParamItem
                    isActive={sortBy === "lastName"}
                    sortingOrder={sortingOrder}
                    onClick={() => {
                        handleSortingParam("lastName");
                    }}
                >
                    {translate("sort_param_lastname")}
                </SortingParamItem>
            </div>
        </div>
    );
}
