import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Character } from "../../../redux/RTK/characters/types";
import { CharactersListItem } from "./CharactersListItem";

type CharactersListProps = {
    characters: Character[];
};

export function CharactersList({ characters }: CharactersListProps) {
    return (
        <div className="characters-list">
            {characters.map((character) => {
                return (
                    <Link key={character.id} to={`/characters/${character.id}`}>
                        <CharactersListItem
                            firstName={character.firstName}
                            lastName={character.lastName}
                            family={character.family}
                            imageUrl={character.imageUrl}
                        />
                    </Link>
                );
            })}
        </div>
    );
}
