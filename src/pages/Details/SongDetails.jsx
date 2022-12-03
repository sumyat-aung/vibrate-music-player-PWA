import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Error from "../../components/common/Error";
import SongLoading from "../../components/common/SongLoading";
import {
  useGetSongsDetailsQuery,
  useGetRelatedSongsDetailsQuery,
} from "../../redux/data/Songs";

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

  console.log(useGetRelatedSongsDetailsQuery({ songid }));

  return (
    <div>
      {isFetching && isFetchingRelatedSongs && (
        <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[100vh] flex items-center justify-center">
          <SongLoading />
        </div>
      )}

      {isError &&
        isErrorInRelatedSong(
          <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[100vh] flex items-center justify-center">
            <Error />
          </div>
        )}

      {data && (
        <div>
          {/***------------------------***/}
          <SongDetailsStyling>
            <div className="flex m-5 p-2  items-center ">
              <div className="relative">
                <img
                  src={data.images.background}
                  alt="song-image"
                  className="w-[150px] h-[150px] rounded-full"
                />
                <img
                  src={data.images.background}
                  alt="song-image"
                  className="w-[150px] h-[150px] rounded-full blur absolute top-0 left-0 "
                />
              </div>
              <div className="ml-5">
                <h1 className="text-3xl text-gray-50 tracking-wide">
                  {data.title}
                </h1>
                <h1 className="text-xl text-gray-400 tracking-wide">
                  {data.subtitle}
                </h1>
              </div>
            </div>
            <div className="mb-10">
              <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

              <div className="mt-5">
                {data?.sections[1].type === "LYRICS" ? (
                  data?.sections[1]?.text.map((line, i) => (
                    <p
                      key={`lyrics-${line}-${i}`}
                      className="text-gray-400 text-base my-1"
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
        </div>
      )}
    </div>
  );
};

export default SongDetails;

/* ---------------------------- styled components --------------------------- */

const SongDetailsStyling = styled.div`
  .blur {
    filter: blur(10px);
    z-index: -1;
  }
`;
