import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Error from "../components/common/Error";
import SongLoading from "../components/common/SongLoading";

import SearchInput from "../components/Inputs/SearchInput";
import SelectGenre from "../components/Inputs/SelectGenre";
import SongCard from "../components/songs-card/SongCard";
import { useGetSongsByGenreQuery } from "../redux/data/Songs";

// ^^^^^ importing necessary components ^^^^^

const Explore = () => {
  // state to handle select input for genre
  const [selected, setSelected] = useState("ROCK");

  const { data, isFetching, isError } = useGetSongsByGenreQuery(selected);
  console.log(useGetSongsByGenreQuery(selected));

  // getting states from redux with selector
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //// jsx
  return (
    <ExploreStyling className="h-[100vh]">
      <div className="flex flex-col items-end h-[170px] w-full p-2 xl:p-5 z-40">
        <SearchInput />
        <SelectGenre selected={selected} setSelected={setSelected} />
      </div>
      <div>
        {isFetching && (
          <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[500px] flex items-center justify-center fixed">
            <SongLoading />
          </div>
        )}

        {isError && (
          <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[500px] flex items-center justify-center fixed">
            <Error />
          </div>
        )}

        {!isFetching && (
          <>
            {data && (
              <div className="text-xl text-gray-50 pl-5  font-mono  -mt-10">
                Discover By {selected}
              </div>
            )}

            <div className="overflow-y-scroll mt-10 flex flex-wrap justify-center mb-20 -z-20">
              {data?.map((d, i) => (
                <SongCard
                  key={d.key}
                  song={d}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={data}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </ExploreStyling>
  );
};

export default Explore;

/* ---------------------------- styled components --------------------------- */

const ExploreStyling = styled.div`
  div {
    font-family: "Montserrat Alternates", sans-serif;
  }
  font-family: "Montserrat Alternates", sans-serif;
`;
