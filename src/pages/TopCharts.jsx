import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useGetTopChartsQuery } from "../redux/data/Songs";
import SongCard from "../components/songs-card/SongCard";
import SongLoading from "../components/common/SongLoading";
import Error from "../components/common/Error";

// ^^^^^ importing necessary components ^^^^^

const TopCharts = () => {
  // fetching with redux func
  const { data, isFetching, isError } = useGetTopChartsQuery();

  // getting states from redux with selector
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //// jsx

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
          Top Charts <i className="fa-solid fa-chart-simple ml-2"></i>
        </TitleStyling>
      )}

      <div className="overflow-y-scroll mt-10 flex flex-wrap justify-center mb-20">
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
    </div>
  );
};

export default TopCharts;

/* ---------------------------- styled-components --------------------------- */

const TitleStyling = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
`;
