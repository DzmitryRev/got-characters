import { Character } from "../../redux/RTK/characters/types";
import { SortingOrder, SortingParams } from "./types";

export function sortCharacters(characters: Character[], sortBy: SortingParams, sortingOrder: SortingOrder) {
    return characters.sort((a, b) => {
        if (sortingOrder === "asc") {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
    });
}
