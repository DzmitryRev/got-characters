import React from "react";
import "./styles.css";

type CharactersListItemProps = {
    firstName: string;
    lastName: string;
    family: string;
    imageUrl: string;
};

export function CharactersListItem({ firstName, lastName, family, imageUrl }: CharactersListItemProps) {
    return (
        <div className="characters-list-item">
            <div className="characters-list-item__img-container">
                <img src={imageUrl} alt={firstName + " " + lastName} />
            </div>
            <p className="characters-list-item__family">{family}</p>
            <p className="characters-list-item__fullname">
                {firstName} {lastName}
            </p>
        </div>
    );
}
