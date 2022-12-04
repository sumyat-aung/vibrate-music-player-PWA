import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Error from "../../components/common/Error";
import SongLoading from "../../components/common/SongLoading";
import {
  useGetSongsDetailsQuery,
  useGetRelatedSongsDetailsQuery,
} from "../../redux/data/Songs";
import RelatedSongsCard from "../../components/songs-card/RelatedSongsCard";

// ^^^^^ importing necessary components ^^^^^

const SongDetails = () => {
  // fetching with redux func base on query
  const { songid } = useParams();
  const { data, isError, isFetching } = useGetSongsDetailsQuery({
    songid,
  });
  const {
    data: relatedSongData,
    isError: isErrorInRelatedSong,
    isFetching: isFetchingRelatedSongs,
  } = useGetRelatedSongsDetailsQuery({
    songid,
  });

  // getting state from redux
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // navigating
  const navigate = useNavigate();

  //// jsx
  return (
    <div>
      {isFetching && isFetchingRelatedSongs && (
        <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[100vh] flex items-center justify-center">
          <SongLoading />
        </div>
      )}

      {isError && isErrorInRelatedSong && (
        <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[100vh] flex items-center justify-center">
          <Error />
        </div>
      )}

      {data && relatedSongData && (
        <div className="flex flex-col lg:flex-row lg:h-[100vh] overflow-auto relative">
          {/***------------------------***/}
          <SongDetailsStyling className="w-3/4 h-[100vh] flex flex-col items-center px-20">
            <div className="flex flex-col m-5 items-center">
              <div className="relative">
                <img
                  src={data.images.background}
                  alt="song-image"
                  className="w-[450px] h-[450px] rounded-full"
                />
                <img
                  src={data.images.background}
                  alt="song-image"
                  className="w-[450px] h-[450px] rounded-full blur absolute top-0 left-0 "
                />
              </div>
              <div className="mt-5 truncate text-center">
                <h1 className="text-2xl text-gray-50 tracking-wide">
                  {data.title}
                </h1>
                <Link
                  to={`/artists/${data?.artists[0].adamid}`}
                  className="text-lg text-gray-400 tracking-wide block"
                >
                  {data.subtitle}
                </Link>
              </div>
            </div>
            <div className="mb-10 overflow-auto mt-5 text-center">
              <h2 className="text-gray-50 text-3xl font-bold ">Lyrics:</h2>

              <div className="mt-5">
                {data?.sections[1].type === "LYRICS" ? (
                  data?.sections[1]?.text.map((line, i) => (
                    <p
                      key={`lyrics-${line}-${i}`}
                      className="text-gray-300 text-base my-1 leading-8"
                    >
                      {line}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-400 text-base my-1">
                    Sorry, No lyrics found!
                  </p>
                )}
              </div>
            </div>
          </SongDetailsStyling>
          {/***------------------------***/}
          <RelatedStyling className=" bg-sb_bg w-1/4 h-[100vh]  overflow-auto">
            <h1 className="text-2xl text-gray-50 p-5 sticky top-0 z-50 bg-sb_bg">
              Related Songs
            </h1>
            <div className="flex flex-wrap flex-row justify-center items-center lg:block sm:m-0 mx-5">
              {relatedSongData?.map((d, i) => (
                <RelatedSongsCard
                  d={d}
                  key={d.key}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={relatedSongData}
                />
              ))}
            </div>
          </RelatedStyling>

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

export default SongDetails;

/* ---------------------------- styled components --------------------------- */

const SongDetailsStyling = styled.div`
  font-family: "Montserrat Alternates", sans-serif;

  .blur {
    filter: blur(5px);
    z-index: -1;
  }
  @media all and (max-width: 1600px) {
    width: 60%;

    img {
      width: 350px;
      height: 350px;
    }
  }

  @media all and (max-width: 1024px) {
    width: 100%;
  }

  @media all and (max-width: 700px) {
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media all and (max-width: 450px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const RelatedStyling = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  .blur {
    filter: blur(5px);
  }

  @media all and (max-width: 1600px) {
    width: 40%;
  }

  @media all and (max-width: 1024px) {
    width: 100%;
  }
`;
