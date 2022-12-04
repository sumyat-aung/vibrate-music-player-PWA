import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../../redux/data/Songs";

import Error from "../../components/common/Error";
import SongLoading from "../../components/common/SongLoading";
import ArtistDetailSongsCard from "../../components/songs-card/ArtistsSongCard";
import { useSelector } from "react-redux";

const ArtistDetail = () => {
  // fetching Artists Details Base on Query ~

  let { artistsid } = useParams();

  const { data, isError, isFetching } = useGetArtistDetailsQuery({ artistsid });

  // navigating
  const navigate = useNavigate();

  // getting state from redux
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  let songs = data && Object.values(data?.songs);
  let albums = data && Object.values(data?.albums);
  let artists = data && Object.values(data?.artists);

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

      {data && (
        <div className="flex flex-col lg:flex-row lg:h-[100vh] relative">
          <ArtistsDetailSongs className="xl:w-1/2 lg:w-[40%] w-full overflow-auto">
            <div className="h-[500px] flex flex-col justify-center items-center">
              <div className="relative">
                <img
                  className="rounded-full w-[300px]"
                  src={artists[0]?.attributes?.artwork?.url}
                  alt={artists[0]?.attributes?.name}
                />
                <img
                  className="rounded-full absolute top-0 left-0 blur -z-10 w-[300px]"
                  src={artists[0]?.attributes?.artwork?.url}
                />
              </div>
              <h1 className="text-gray-50 text-3xl tracking-wider mt-4">
                {artists[0]?.attributes?.name}
              </h1>
            </div>

            <div>
              <h1 className="text-2xl text-gray-30 text-gray-200 font-semibold tracking-wide sticky top-0 z-50 bg-main p-5">
                {artists[0]?.attributes?.name}'s Songs
              </h1>
              <div className="flex flex-wrap justify-center overflow-auto">
                {songs.map((song) => (
                  <ArtistDetailSongsCard d={song} />
                ))}
              </div>
            </div>
          </ArtistsDetailSongs>

          {/* -------------------- */}

          <AlbumsStyling className="xl:w-1/2 lg:w-[60%] w-full overflow-auto">
            <h1 className="text-2xl text-gray-30 text-gray-200 font-semibold tracking-wide sticky top-0 z-20 bg-main py-5 px-10">
              {artists[0]?.attributes?.name}'s Albums
            </h1>
            <div className="flex flex-col mt-10 sm:px-10 px-1 justify-center wrapper">
              {albums.map((al) => (
                <div className="bg-sb_bg rounded shadow flex my-5">
                  <div className="relative">
                    <img
                      className="rounded w-[250px] h-full object-cover "
                      src={artists[0]?.attributes?.artwork?.url}
                      alt={artists[0]?.attributes?.name}
                    />
                  </div>
                  <div className="py-5 px-5 w-full">
                    <h1 className="font-wide text-md sm:text-2xl text-white mb-2">
                      {al?.attributes?.name}
                    </h1>
                    <h1 className="font-wide text-sm sm:text-xl text-gray-50">
                      {al?.attributes?.artistName}
                    </h1>
                    <h1 className="font-wide text-xs lg:text-md  text-gray-400">
                      Release Date : {al?.attributes?.releaseDate}
                    </h1>
                    <a
                      href={al?.attributes?.url}
                      target="_blank"
                      className="font-wide text-md  text-gray-300 hover:translate-x-1 no-underline flex justify-end font-mono duration-500"
                    >
                      See More ⇀
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AlbumsStyling>
          <button
            className="absolute top-5 left-5 cursor-default sm:cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left text-gray-50 text-xl "></i>
          </button>
        </div>
      )}
    </div>
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

const AlbumsStyling = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
`;
