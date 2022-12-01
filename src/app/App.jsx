import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/common/Sidebar";

import Explore from "../pages/Explore";
import Suggest from "../pages/Suggest";
import TopCharts from "../pages/TopCharts";
import TopArtists from "../pages/TopArtists";

const App = () => {
  return (
    <div className="flex relative">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="w-auto">
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
