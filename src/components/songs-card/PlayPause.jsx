import React from "react";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <i
      className="fa-solid fa-pause text-4xl text-gray-50 cursor-default sm:cursor-pointer"
      onClick={handlePause}
    ></i>
  ) : (
    <i
      className="fa-solid fa-play text-4xl text-gray-50 cursor-default sm:cursor-pointer"
      onClick={handlePlay}
    ></i>
  );

export default PlayPause;
