import React from "react";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../redux/RTK/characters/charactersApi";
import { Button } from "../../components/ui";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { withAuthCheck } from "../../hoc";
import { setFavoriteCharactersId } from "../../redux/slices/authSlice";
import { UserApiInstanse } from "../../api/user-api";
import { LoadingScreen } from "../../components/LoadingScreen";
import { ErrorScreen } from "../../components/ErrorScreen";
import { useLanguage } from "../../utils/language";

function Character() {
    const { translate } = useLanguage();

    const isAuth = useAppSelector((store) => store.auth.isAuth);
    const favoriteCharactersId = useAppSelector((store) => store.auth.favoriteCharactersId);
    const dispatch = useAppDispatch();

    const { characterId } = useParams<{ characterId: string }>();

    const { data, isLoading, isError } = useGetCharacterByIdQuery(characterId || "0");

    if (isLoading) return <LoadingScreen />;
    if (isError || characterId === undefined) return <ErrorScreen title={translate("data_loading_error")} />;

    const isThisCharacterInFavorite = favoriteCharactersId.includes(+characterId);

    const handleAddToFavorite = () => {
        UserApiInstanse.addCharacterToFavorite(+characterId);
        let updatedFavoriteCharactersId = UserApiInstanse.getCurrentUserFavoriteCharacters();
        if (Array.isArray(updatedFavoriteCharactersId)) {
            dispatch(setFavoriteCharactersId(updatedFavoriteCharactersId));
        }
    };

    const handleRemoveFromFavorite = () => {
        UserApiInstanse.removeCharacterFromFavorite(+characterId);
        let updatedFavoriteCharactersId = UserApiInstanse.getCurrentUserFavoriteCharacters();
        if (Array.isArray(updatedFavoriteCharactersId)) {
            dispatch(setFavoriteCharactersId(updatedFavoriteCharactersId));
        }
    };

    return (
        <div className="character-page">
            <div className="character-page__back-button-container">
                <Link to={"/"}>
                    <Button>
                        <div className="arrow"></div>
                        {translate("back")}
                    </Button>
                </Link>

                {isAuth &&
                    (isThisCharacterInFavorite ? (
                        <Button color={"blue"} onClick={handleRemoveFromFavorite}>
                            {translate("remove_from_favorite")}
                        </Button>
                    ) : (
                        <Button color={"blue"} onClick={handleAddToFavorite}>
                            {translate("add_to_favorite")}
                        </Button>
                    ))}
            </div>
            <div className="character-page__image-container">
                <img src={data?.imageUrl} alt="" />
            </div>
            <div className="character-page__description-container">
                <h2 className="character-page__fullname">{data?.fullName}</h2>
                <p className="character-page__family">{data?.family}</p>
                <p className="character-page__title">{data?.title}</p>
            </div>
        </div>
    );
}

export default withAuthCheck(Character);
