/* ---------------------------- BASE API FETCHING --------------------------- */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "40b2586751msh10227386d4d908ep1a4d5ejsnb5ad70612c11"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // all the ends point from base url
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    //
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    //
    getSongsDetails: builder.query({
      query: ({ songid }) => `tracks/details?track_id=${songid}`,
    }),
    // d //
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsDetailsQuery,
} = shazamCoreApi;
