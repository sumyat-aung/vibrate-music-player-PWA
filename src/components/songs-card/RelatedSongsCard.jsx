import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import PlayPause from "./PlayPause";

// ^^^^^ importing necessary components ^^^^^

const RelatedSongsCard = ({ d, data, i, isPlaying, activeSong }) => {
  // use Dispatch to use function from redux store
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song: d, data, i }));
    dispatch(playPause(true));
  };

  //// jsx
  return (
    <div className="flex flex-col items-center mx-5 my-8 animate-slideup">
      <div className="relative group">
        <img
          alt="song_img"
          src={
            d?.images?.coverart
              ? d?.images?.coverart
              : "https://cdn.shopify.com/s/files/1/0361/0781/3004/products/orange_0637efbb-de32-476b-8061-856d2b770d98_150x150.png?v=1660785252"
          }
          className="h-32 w-32 rounded-full relative z-20 -mb-16 cursor-default lg:cursor-pointer"
        />
        <img
          alt="song_img"
          src={
            d?.images?.coverart
              ? d?.images?.coverart
              : "https://cdn.shopify.com/s/files/1/0361/0781/3004/products/orange_0637efbb-de32-476b-8061-856d2b770d98_150x150.png?v=1660785252"
          }
          className="h-32 w-32 rounded-full -mb-16 absolute top-0 left-0 blur z-0"
        />

        <PlayPauseLayerStyling
          activeSong={activeSong}
          song={d}
          className={`absolute h-32 w-32 rounded-full top-0 left-0 justify-center items-center bg-black bg-opacity-50 hidden group-hover:flex layer z-30`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={d}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </PlayPauseLayerStyling>
      </div>

      <div className="shadow rounded-lg w-[300px] sm:w-[350px] lg:w-full  px-2 relative pt-20 pb-5 bg-main">
        <div>
          <Link
            to={`/songs/${d?.key}`}
            className="text-center text-gray-50 font-bold block hover:text-gray-300"
          >
            {d?.title}
          </Link>

          <Link
            to={`/artists/${d?.artists[0]?.adamid}`}
            className="flex items-center justify-center pb-4 text-gray-300"
          >
            {d?.subtitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedSongsCard;

/* ---------------------------- styled components --------------------------- */

const PlayPauseLayerStyling = styled.div`
  display: ${(props) =>
    props.activeSong?.title === props.song.title ? "flex" : "hidden"};
`;
