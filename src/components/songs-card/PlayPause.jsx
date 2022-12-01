import React from "react";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <i
      className={`fa-solid fa-pause text-3xl text-gray-300 absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
        activeSong?.title === song.title
          ? "flex bg-black bg-opacity-70"
          : "hidden"
      }`}
      onClick={handlePause}
    ></i>
  ) : (
    <i
      className={`fa-solid fa-play text-gray-300 text-3xl absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
        activeSong?.title === song.title
          ? "flex bg-black bg-opacity-70"
          : "hidden"
      }`}
      onClick={handlePlay}
    ></i>
  );

export default PlayPause;
