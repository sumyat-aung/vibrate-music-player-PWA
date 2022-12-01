import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SongCard = ({ song }) => {
  console.log(song);
  return (
    <SongTitleStyling className="flex flex-col w-[250px] p-4 bg-opacity-80 animate-slideup rounded-lg m-5">
      <div className="relative w-full">
        {/* <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
        </div> */}
        <img
          alt="song_img"
          src={
            song.images?.coverart
              ? song.images?.coverart
              : "https://cdn.shopify.com/s/files/1/0361/0781/3004/products/orange_0637efbb-de32-476b-8061-856d2b770d98_150x150.png?v=1660785252"
          }
          className="w-full h-full rounded-3xl cursor-pointer"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate tracking-wide">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1 tracking-wide">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </SongTitleStyling>
  );
};

export default SongCard;

const SongTitleStyling = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
`;
