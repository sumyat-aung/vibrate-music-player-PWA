import React from "react";

import { useGetSongsByGenreQuery } from "../redux/data/Songs";

// ^^^^^ importing necessary components ^^^^^

const Explore = () => {
  const genreList = [
    "POP",
    "HIP_HOP_RAP",
    "DANCE",
    "ELECTRONIC",
    "SOUL_RNB",
    "ALTERNATIVE",
    "ROCK",
    "LATIN",
    "FILM_TV",
    "COUNTRY",
    "AFRO_BEATS",
    "WORLDWIDE",
    "REGGAE_DANCE_HALL",
    "HOUSE",
    "K_POP",
    "FRENCH_POP",
    "SINGER_SONGWRITER",
    "REG_MEXICO",
  ];

  // const { data, isFetching, isError } = useGetSongsByGenreQuery(genreList[2]);
  // console.log(useGetSongsByGenreQuery(genreList[2]));

  //// jsx
  return <div className="h-[100vh] flex">Explore</div>;
};

export default Explore;
