import { Character } from "../../redux/RTK/characters/types";

export function searchCharacters(characters: Character[], query: string): Character[] {
    const lowerCaseQuery = query.toLowerCase();

    return characters.filter((character) => {
        return (
            character.firstName.toLowerCase().includes(lowerCaseQuery) ||
            character.lastName.toLowerCase().includes(lowerCaseQuery) ||
            character.fullName.toLowerCase().includes(lowerCaseQuery) ||
            character.title.toLowerCase().includes(lowerCaseQuery) ||
            character.family.toLowerCase().includes(lowerCaseQuery)
        );
    });
}
