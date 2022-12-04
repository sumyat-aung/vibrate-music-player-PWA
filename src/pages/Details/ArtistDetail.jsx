import React from "react";
import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../../redux/data/Songs";

import Error from "../../components/common/Error";
import SongLoading from "../../components/common/SongLoading";

const ArtistDetail = () => {
  // fetching Artists Details Base on Query ~

  let { artistsid } = useParams();

  ///////////////////////////////////////////

  // for development request ^^
  localStorage.setItem(
    "artistsData",
    JSON.stringify(useGetArtistDetailsQuery({ artistsid }))
  );
  const { data, isError, isFetching } = JSON.parse(
    localStorage.getItem("artistsData")
  );
  // for development request ^^

  ///////////////////////////////////////////

  // const { data, isError, isFetching } = useGetArtistDetailsQuery({ artistsid });

  console.log(data);

  console.log(data && Object.values(data?.songs));

  return (
    <div>
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

      {data && <div>jiji</div>}
    </div>
  );
};

export default ArtistDetail;
