import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "./types";

const BASE_URL = "https://thronesapi.com/api/v2/";

export const charactersApi = createApi({
    reducerPath: "charactersApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllCharacters: builder.query<Character[], void>({
            query: () => "characters",
        }),
        getCharacterById: builder.query<Character, string>({
            query: (id) => `characters/${id}`,
        }),
    }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = charactersApi;
