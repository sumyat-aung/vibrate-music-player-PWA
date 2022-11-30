import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Sidebar = () => {
  const [click, setClick] = useState(false);

  /* ----------------------------------- jsx ---------------------------------- */

  return (
    <>
      <SidebarStyling
        className="w-[300px] h-[100vh] bg-sb_bg border-r-2 border-line text-gray-50 flex flex-col items-center justify-between"
        click={click}
      >
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

      {!click && (
        <BarStyling
          className="fa-solid fa-bars absolute top-[20px] right-[30px] text-green text-2xl hidden bar"
          onClick={() => setClick(true)}
        ></BarStyling>
      )}
      {click && (
        <BarStyling
          className="fa-solid fa-xmark absolute top-[20px] right-[30px] text-green text-3xl hidden bar"
          onClick={() => setClick(false)}
        ></BarStyling>
      )}
    </>
  );
};

export default Sidebar;

/* ---------------------------- styled components --------------------------- */

const SmallScreenAnimation = keyframes`
 0% {
    -webkit-transform: translateX(-75%);
            transform: translateX(-75%);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  } 
`;

const SidebarStyling = styled.div`
  @media all and (max-width: 1200px) {
    display: ${(props) => (props.click ? "flex" : "none")};
    position: absolute;
    z-index: 100;
    background-color: #191a1fc9;
    animation: ${SmallScreenAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }

  a {
    font-family: "Roboto Slab", serif;
    letter-spacing: 1px;
  }
`;

const BarStyling = styled.i`
  @media all and (max-width: 1200px) {
    display: flex;
  }
`;
