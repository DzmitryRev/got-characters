import React from "react";
import "./styles.css";
import { useGetAllCharactersQuery } from "../../redux/RTK/characters/charactersApi";
import { useAppSelector } from "../../redux/hooks";
import { CharactersList } from "../../components/Characters";
import { withAuth, withAuthCheck } from "../../hoc";
import { LoadingScreen } from "../../components/LoadingScreen";
import { ErrorScreen } from "../../components/ErrorScreen";
import { useLanguage } from "../../utils/language";

function FavoriteCharacters() {
    const { translate } = useLanguage();

    const { data, isLoading, isError } = useGetAllCharactersQuery();
    const favoriteCharactersId = useAppSelector((store) => store.auth.favoriteCharactersId);

    if (isLoading) return <LoadingScreen />;
    if (isError) return <ErrorScreen title={translate("data_loading_error")} />;

    const favoriteCharacters = data?.filter((character) => favoriteCharactersId.includes(character.id)) || [];

    return (
        <div className="favorite-characters-page">
            <h1 className="favorite-characters-page__title">{translate("favorite_title")}</h1>
            {!favoriteCharacters.length && (
                <p className="favorite-characters-page__no-characters">{translate("favorite_empty")}</p>
            )}
            <CharactersList characters={favoriteCharacters} />
        </div>
    );
}

export default withAuthCheck(withAuth(FavoriteCharacters));
