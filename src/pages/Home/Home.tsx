import React, { useEffect, useState } from "react";
import "./styles.css";
import { SortingOrder, SortingParams } from "../../utils/filterAndSortCharacters/types";
import { Character } from "../../redux/RTK/characters/types";
import { useDebounce } from "../../hooks";
import { useGetAllCharactersQuery } from "../../redux/RTK/characters/charactersApi";
import { searchCharacters } from "../../utils/filterAndSortCharacters/searchCharacters";
import { Input, Pagination } from "../../components/ui";
import { sortCharacters } from "../../utils/filterAndSortCharacters/sortCharacters";
import { CharactersList, SortingSwitcher } from "../../components/Characters";
import { withAuthCheck } from "../../hoc";
import { LoadingScreen } from "../../components/LoadingScreen";
import { ErrorScreen } from "../../components/ErrorScreen";
import { useLanguage } from "../../utils/language";

const CHARACTERS_PER_PAGE = 10;

function Home() {
    const { translate } = useLanguage();

    const [page, setPage] = useState<number>(1);
    const [sortBy, setSortBy] = useState<SortingParams>("firstName");
    const [sortingOrder, setSortingOrder] = useState<SortingOrder>("asc");
    const [searchValue, setSearchValue] = useState<string>("");
    const debouncedSearchTerm = useDebounce(searchValue, 1000);

    const { data, isLoading, isError } = useGetAllCharactersQuery();

    const [filtredCharacters, setFiltredCharacters] = useState<Character[]>([]);
    const [sortedAndPaginatedCharacters, setSortedAndPaginatedCharacters] = useState<Character[]>([]);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [page]);

    useEffect(() => {
        setFiltredCharacters([...(data || [])]);
    }, [data]);

    useEffect(() => {
        setFiltredCharacters(searchCharacters([...(data || [])], searchValue));
        setPage(1);
    }, [debouncedSearchTerm]);

    useEffect(() => {
        setSortedAndPaginatedCharacters(
            sortCharacters(filtredCharacters, sortBy, sortingOrder).slice(
                (page - 1) * CHARACTERS_PER_PAGE,
                page * CHARACTERS_PER_PAGE
            )
        );
    }, [sortBy, sortingOrder, page, filtredCharacters]);

    if (isLoading) return <LoadingScreen />;
    if (isError) return <ErrorScreen title={translate("data_loading_error")} />;

    const totalPages = Math.ceil((filtredCharacters?.length || 0) / CHARACTERS_PER_PAGE);

    return (
        <div className="main-page">
            <h1 className="main-page__title">{translate("title_got_characters")}</h1>
            <SortingSwitcher
                sortBy={sortBy}
                sortingOrder={sortingOrder}
                setSortBy={setSortBy}
                setSortingOrder={setSortingOrder}
            />
            <div className="main-page__search-input-container">
                <Input value={searchValue} setValue={setSearchValue} placeholder={translate("search_placeholder")} />
            </div>
            <CharactersList characters={sortedAndPaginatedCharacters} />
            <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
        </div>
    );
}

export default withAuthCheck(Home);
