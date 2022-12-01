import React from "react";
import { useGetTopChartsQuery } from "../redux/data/Songs";

import SongLoading from "../components/loading/SongLoading";
import SongCard from "../components/songs-card/SongCard";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);

  return (
    <div>
      <h1 className="text-3xl text-gray-50 mt-10 ml-10">
        Top Charts <i className="fa-solid fa-chart-simple ml-2"></i>
      </h1>

      <div className="h-[86vh] overflow-y-scroll mt-10 flex flex-wrap justify-center">
        {isFetching && <SongLoading />}

        {data?.map((d) => (
          <SongCard key={d.key} song={d} />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
