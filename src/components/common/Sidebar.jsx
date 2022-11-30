import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarStyling className="w-[300px] h-[100vh] bg-sb_bg border-r-2 border-line text-gray-50 flex flex-col items-center justify-between">
      <div>
        <Link
          to={"/"}
          className="flex items-center my-10 text-green font-bold tracking-widest"
        >
          <i className="fa-solid fa-guitar mr-4 text-4xl"></i>
          <div>
            <h1 className="font-mono text-xl"> Vibrate </h1>
            <h2 className="font-mono text-sm"> Music Player </h2>
          </div>
        </Link>

        <div className="mt-20">
          <Link
            to={"/"}
            className="flex my-10 items-center text-lg  text-gray-400 hover:text-gray-100"
          >
            <i className="fa-solid fa-volume-low mr-5"></i>
            <h1> Explore </h1>
          </Link>
          <Link
            to={"/suggest"}
            className="flex my-10 items-center text-lg text-gray-400 hover:text-gray-100"
          >
            <i className="fa-solid fa-music mr-5"></i>
            <h1> Suggest </h1>
          </Link>
          <Link
            to={"/top-charts"}
            className="flex my-10 items-center text-lg text-gray-400 hover:text-gray-100"
          >
            <i className="fa-solid fa-chart-simple mr-5"></i>
            <h1> Top Charts </h1>
          </Link>
          <Link
            to={"/top-artists"}
            className="flex my-10 items-center text-lg text-gray-400 hover:text-gray-100"
          >
            <i className="fa-solid fa-palette mr-5"></i>
            <h1> Top Artists </h1>
          </Link>
        </div>
      </div>
      <Link
        to={"/"}
        className="flex my-10 items-center text-lg text-gray-400 hover:text-gray-100"
      >
        <i className="fa-solid fa-download mr-5"></i>
        <h1> Installtion </h1>
      </Link>
    </SidebarStyling>
  );
};

export default Sidebar;

/* ---------------------------- styled components --------------------------- */

const SidebarStyling = styled.div`
  a {
    font-family: "Roboto Slab", serif;
    letter-spacing: 1px;
  }
`;
