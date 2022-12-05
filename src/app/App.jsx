import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "../components/common/Sidebar";
import MusicPlayer from "../components/MusicPlayer";

import Explore from "../pages/Explore";
import Suggest from "../pages/Suggest";
import TopCharts from "../pages/TopCharts";
import TopArtists from "../pages/TopArtists";

import Installation from "../pages/Installation";
import SongDetails from "../pages/Details/SongDetails";
import ArtistDetail from "../pages/Details/ArtistDetail";

import Search from "../pages/Search";

// ^^^^^ importing necessary components ^^^^^

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  ////  jsx
  return (
    <div className="flex relative">
      <div className="xl:w-[300px]">
        <Sidebar />
      </div>
      <div className="xl:w-[calc(100vw-300px)] w-[100vw]">
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/songs/:songid" element={<SongDetails />} />
          <Route path="/artists/:artistsid" element={<ArtistDetail />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </div>
      {activeSong?.title && (
        <div className="fixed h-20 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/20 to-[#13192C] backdrop-blur-lg rounded-t-3xl z-50">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
