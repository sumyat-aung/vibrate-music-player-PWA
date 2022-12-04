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

  console.log(useGetSongsDetailsQuery({ songid }));
  console.log(useGetRelatedSongsDetailsQuery({ songid }));

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
          <SongDetailsStyling className="w-2/3 h-[100vh] flex flex-col items-center px-20">
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
          <div className="border">
            <h1> Related Songs </h1>
          </div>
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

// create a horizontal song card with tailwind?
{
  /* <template>
  <div class="py-20">
    <div class="flex flex-col items-center">
      <!-- Image emplacement -->
      <div class="bg-white h-32 w-32 rounded-full relative -mb-16">
        <button class="z-50">
          <img src="../assets/person.svg" alt="" />
        </button>
      </div>
      <!-- Content Card emplacement -->
      <div class="shadow-2xl rounded-xl w-96 h-96 pb-8 px-8 relative pt-24">
        <div>
          <p class="text-center bt-smalltitle font-bold pb-4">Name Surname</p>

          <div class="flex items-center justify-center pb-4">
            <button
              class="bg-black rounded-2xl text-center text-white bt-book px-2 py-1.5"
            >
              40$ Per session
            </button>
          </div>

          <div class="flex flex-row items-stretch justify-between pb-5">
            <p>Example</p>

            <p>Example</p>
          </div>

          <p class="text-center bt-smalltext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum placeat
            aperiam tempora.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

 */
}
