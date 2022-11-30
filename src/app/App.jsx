import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[100%] bg-sb_bg">
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/suggest" element={<h1>suggest</h1>} />
          <Route path="/top-charts" element={<h1>top-charts</h1>} />
          <Route path="/top-artists" element={<h1>top-artists</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// useEffect(() => {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "40b2586751msh10227386d4d908ep1a4d5ejsnb5ad70612c11",
//       "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//     },
//   };

//   fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// }, []);
