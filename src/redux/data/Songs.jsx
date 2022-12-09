import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../../key/key";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  // base url
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // all the ends point from base url
    getTopCharts: builder.query({
      query: () => "v1/charts/world",
    }),

    /* -------------------- */
    getSongsByGenre: builder.query({
      query: (genre) => `v1/charts/genre-world?genre_code=${genre}`,
    }),

    /* -------------------- */
    getSongsDetails: builder.query({
      query: ({ songid }) => `v1/tracks/details?track_id=${songid}`,
    }),

    /* -------------------- */
    getRelatedSongsDetails: builder.query({
      query: ({ songid }) => `v1/tracks/related?track_id=${songid}`,
    }),

    /* -------------------- */
    getArtistDetails: builder.query({
      query: ({ artistsid }) => `v2/artists/details?artist_id=${artistsid}`,
    }),
    /* -------------------- */

    getSongsByCountry: builder.query({
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    }),

    /* -------------------- */

    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `v1/search/multi?query=${searchTerm}&search_type=SONGS_ARTISTS`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsDetailsQuery,
  useGetRelatedSongsDetailsQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
