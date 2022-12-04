import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_KEY from "../../key/key";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // all the ends point from base url
    getTopCharts: builder.query({ query: () => "/charts/world" }),

    /* -------------------- */
    getSongsByGenre: builder.query({
      query: (genre) => {
        console.log("request Songs By Genre Details");
        `/charts/genre-world?genre_code=${genre}`;
      },
    }),

    /* -------------------- */
    getSongsDetails: builder.query({
      query: ({ songid }) => {
        console.log("request Songs Details");
        `tracks/details?track_id=${songid}`;
      },
    }),

    /* -------------------- */
    getRelatedSongsDetails: builder.query({
      query: ({ songid }) => {
        console.log("request related-Songs");
        return `tracks/related?track_id=${songid}`;
      },
    }),

    /* -------------------- */
    getArtistDetails: builder.query({
      query: ({ artistsid }) => {
        console.log("request artists Details");
        return `artists/details?artist_id=${artistsid}`;
      },
    }),
    // d //
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsDetailsQuery,
  useGetRelatedSongsDetailsQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
