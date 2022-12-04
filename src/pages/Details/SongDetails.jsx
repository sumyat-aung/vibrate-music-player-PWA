import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Error from "../../components/common/Error";
import SongLoading from "../../components/common/SongLoading";
import {
  useGetSongsDetailsQuery,
  useGetRelatedSongsDetailsQuery,
} from "../../redux/data/Songs";
import RelatedSongsCard from "../../components/songs-card/RelatedSongsCard";

const SongDetails = () => {
  // fetching songDetails Base on Query ~
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
        <div className="flex">
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
                <h1 className="text-lg text-gray-400 tracking-wide">
                  {data.subtitle}
                </h1>
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
          <RelatedStyling className=" bg-sb_bg w-1/4 h-[100vh] overflow-auto">
            <h1 className="text-2xl text-gray-50 p-5"> Related Songs </h1>
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
          </RelatedStyling>
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
`;

const RelatedStyling = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  .blur {
    filter: blur(5px);
  }
`;
