import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import NotFoundError from "../components/common/NotFoundError";
import SongLoading from "../components/common/SongLoading";

import SearchInput from "../components/Inputs/SearchInput";
import SongCard from "../components/songs-card/SongCard";
import { useGetSongsBySearchQuery } from "../redux/data/Songs";

const Search = () => {
  let { searchTerm } = useParams();

  let { data, isError, isFetching } = useGetSongsBySearchQuery(searchTerm);

  console.log(useGetSongsBySearchQuery(searchTerm));

  let songs = data?.tracks?.hits;
  let artists = data?.artists?.hits;
  console.log(artists);

  // getting states from redux with selector
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <SearchStyling className="h-[100vh]">
      <div className="flex flex-col items-end h-[100px] w-full p-2 xl:p-5">
        <SearchInput />
      </div>
      <div>
        {isFetching && (
          <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[50vh] flex items-center justify-center fixed">
            <SongLoading />
          </div>
        )}

        {isError && (
          <div className="xl:w-[calc(100vw-300px)] w-[100vw] h-[50vh] flex items-center justify-center fixed">
            <NotFoundError />
          </div>
        )}

        {!isFetching && !isError && (
          <div className="text-xl text-gray-50 py-5 pl-5 sticky top-0 z-30 bg-main">
            Search Result for : {searchTerm}
          </div>
        )}

        {!isFetching && data && (
          <div className="flex lg:flex-row flex-col ">
            <div className="flex flex-wrap justify-center lg:w-2/3 w-full lg:h-[calc(100vh-60px)] h-auto pb-5 lg:pb-0 shadow overflow-auto border-b border-sb_bg">
              {songs?.map((d, i) => (
                <SongCard
                  key={d.key}
                  song={d.track}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={data}
                />
              ))}
            </div>

            <div className="flex mb-20 lg:w-1/3 w-full lg:pr-10 px-3 lg:-mt-5 mt-10">
              <div className=" py-3 lg:h-[calc(100vh-60px)]  h-auto overflow-auto flex flex-wrap justify-center">
                {artists.map((a) => (
                  <div className="md:m-10 m-3">
                    <Link to={`/artists/${a?.artist?.adamid}`}>
                      <div className="relative lg:w-auto w-[200px]">
                        <img
                          src={
                            a?.artist?.avatar
                              ? a?.artist?.avatar
                              : "https://cdn.shopify.com/s/files/1/0361/0781/3004/products/orange_0637efbb-de32-476b-8061-856d2b770d98_150x150.png?v=1660785252"
                          }
                          alt="artists"
                          className="rounded-xl "
                        />
                        <img
                          src={
                            a?.artist?.avatar
                              ? a?.artist?.avatar
                              : "https://cdn.shopify.com/s/files/1/0361/0781/3004/products/orange_0637efbb-de32-476b-8061-856d2b770d98_150x150.png?v=1660785252"
                          }
                          alt="artists"
                          className="rounded-xl absolute -z-10 top-0 left-0 blur-[5px]"
                        />
                      </div>
                    </Link>
                    <h1 className="text-2xl text-white my-5">
                      {a?.artist?.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </SearchStyling>
  );
};

export default Search;

/* ---------------------------- styled components --------------------------- */

const SearchStyling = styled.div`
  div {
    font-family: "Montserrat Alternates", sans-serif;
  }
  font-family: "Montserrat Alternates", sans-serif;
`;
