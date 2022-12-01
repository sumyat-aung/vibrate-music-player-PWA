import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const SongCard = ({ song, data, i, activeSong, isPlaying }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <SongTitleStyling className="flex flex-col w-[250px] p-4 bg-opacity-80 animate-slideup rounded-lg m-0 lg:m-3 2xl:m-5">
      <div className="relative w-full">
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />

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
        <p className="font-semibold text-lg text-white tracking-wide truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm text-gray-300 mt-1 tracking-wide truncate">
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

  @media all and (max-width: 900px) {
    width: 200px;
  }

  @media all and (max-width: 700px) {
    width: 180px;
  }

  @media all and (max-width: 550px) {
    flex-direction: row;
    width: 500px;
    justify-content: center;
    align-items: center;

    div:first-child {
      width: 30%;

      img {
        width: 100px;
      }
    }

    div:last-child {
      width: 75%;
    }

    // TODO : wtf is this tho

    @media all and (max-width: 450px) {
      width: 350px;
      justify-content: space-between;

      div:last-child {
        width: 60%;
      }
    }
  }
`;
