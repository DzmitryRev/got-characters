import { Character } from "../../redux/RTK/characters/types";

export function filterCharactersById(characters: Character[], idArray: number[]): Character[] {
    return characters.filter((character) => idArray.includes(character.id));
}
