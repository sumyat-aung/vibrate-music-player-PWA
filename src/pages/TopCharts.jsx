import React from "react";
import { useGetTopChartsQuery } from "../redux/data/Songs";

import SongCard from "../components/songs-card/SongCard";
import SongLoading from "../components/loading/SongLoading";
import Error from "../components/common/Error";
import { useSelector } from "react-redux";

const TopCharts = () => {
  const { data, isFetching, isError } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="h-[100vh]">
      {isFetching && (
        <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[100vh] flex items-center justify-center">
          <SongLoading />
        </div>
      )}

      {isError && (
        <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[100vh] flex items-center justify-center">
          <Error />
        </div>
      )}

      {data && (
        <h1 className="text-3xl text-gray-50 pt-5 pl-5 xl:pt-10 xl:pl-10 font-mono">
          Top Charts <i className="fa-solid fa-chart-simple ml-2"></i>
        </h1>
      )}

      <div className="overflow-y-scroll mt-10 flex flex-wrap justify-center">
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
