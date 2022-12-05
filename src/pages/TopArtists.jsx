import React from "react";
import styled from "styled-components";

import { useGetTopChartsQuery } from "../redux/data/Songs";
import ArtistsCard from "../components/songs-card/ArtistsCard";

import SongLoading from "../components/common/SongLoading";
import Error from "../components/common/Error";

// ^^^^^ importing necessary components ^^^^^

const TopArtists = () => {
  // fetching with redux func
  const { data, isFetching, isError } = useGetTopChartsQuery();

  return (
    <div>
      {isFetching && (
        <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[100vh] flex items-center justify-center fixed">
          <SongLoading />
        </div>
      )}

      {isError && (
        <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[100vh] flex items-center justify-center fixed">
          <Error />
        </div>
      )}

      {data && (
        <TitleStyling className="text-3xl text-gray-50 pt-5 pl-5 xl:pt-10 xl:pl-10 font-mono">
          Top Artists <i className="fa-solid fa-palette ml-2"></i>
        </TitleStyling>
      )}

      <div className="overflow-y-scroll mt-10 flex flex-wrap-reverse justify-center mb-20">
        {data?.map((track) => (
          <ArtistsCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;

/* ---------------------------- styled components --------------------------- */

const TitleStyling = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
`;
