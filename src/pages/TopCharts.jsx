import React from "react";
import { useGetTopChartsQuery } from "../redux/data/Songs";

import SongLoading from "../components/loading/SongLoading";
import SongCard from "../components/songs-card/SongCard";
import { useSelector } from "react-redux";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="h-[100vh]">
      {data && (
        <h1 className="text-3xl text-gray-50 pt-5 ml-5">
          Top Charts <i className="fa-solid fa-chart-simple ml-2"></i>
        </h1>
      )}
      <div className="h-[86vh] md:h- overflow-y-scroll mt-10 flex flex-wrap justify-center">
        {isFetching && <SongLoading />}

        {data?.map((d, i) => (
          <SongCard
            key={d.key}
            song={d}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
