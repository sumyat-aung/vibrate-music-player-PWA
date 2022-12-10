import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../../redux/data/Songs";

import Error from "../../components/common/Error";
import SongLoading from "../../components/common/SongLoading";

// ^^^^^ importing necessary components ^^^^^

const ArtistDetail = () => {
  // fetching Data with redux func with followung params
  let { artistsid } = useParams();
  const { data, isError, isFetching } = useGetArtistDetailsQuery({ artistsid });

  console.log(useGetArtistDetailsQuery({ artistsid }));

  // navigating
  const navigate = useNavigate();

  let artist = data?.data[0]?.attributes;

  //// jsx
  return (
    <ArtistsDetailSongs>
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
        <div className="flex justify-center items-center relative">
          <div className="md:w-[700px] w-[100vw] flex flex-col justify-center items-center my-20">
            <div className="relative ">
              <img
                src={artist?.artwork?.url}
                alt={artist?.name}
                className="rounded-full z-10 relative"
              />
              <img
                src={artist?.artwork?.url}
                alt={artist?.name}
                className="rounded-full blur absolute top-0 left-0 z-0"
              />
            </div>
            <div className="flex justify-around items-center my-10 w-full">
              <h1 className="text-2xl text-gray-50">{artist?.name}</h1>
              <h2 className="text-lg text-gray-400">{artist?.bornOrFormed}</h2>
            </div>

            <div className="text-center">
              {artist?.genreNames.map((g) => (
                <span
                  className="text-2xl leading-4 tracking-wider text-gray-300 mx-2"
                  key={g}
                >
                  {g}
                </span>
              ))}
            </div>
            <h2
              dangerouslySetInnerHTML={{ __html: artist?.artistBio }}
              className="text-sm text-gray-400 md:w-[70vw] w-[100vw] text-center leading-6 mt-10 px-5"
            ></h2>
          </div>

          <button
            className="absolute top-5 left-5 cursor-default sm:cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left text-gray-50 text-xl "></i>
          </button>
        </div>
      )}
    </ArtistsDetailSongs>
  );
};

export default ArtistDetail;

/* ---------------------------- styled Component ---------------------------- */

const ArtistsDetailSongs = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  div {
    .blur {
      filter: blur(5px);
    }
  }
`;
