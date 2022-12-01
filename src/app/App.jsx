import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/common/Sidebar";

import Explore from "../pages/Explore";
import Suggest from "../pages/Suggest";
import TopCharts from "../pages/TopCharts";
import TopArtists from "../pages/TopArtists";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[100%] h-[100vh] bg-sb_bg">
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/top-artists" element={<TopArtists />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
