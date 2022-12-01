import React from "react";
import { useGetTopChartsQuery } from "../redux/data/Songs";

const Explore = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  

  return <div>Explore</div>;
};

export default Explore;
