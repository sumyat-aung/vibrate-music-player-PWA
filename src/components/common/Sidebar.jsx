import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Admin from "../../administrator/Admin";

// ^^^^^ importing necessary components ^^^^^

const Sidebar = () => {
  const [click, setClick] = useState(false);

  // close side bar func

  function closeSideBar() {
    setClick(false);
  }

  // disable the window scroll when click is true

  function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  click && disableScroll();
  click === false && enableScroll();

  //// jsx

  return (
    <>
      <SidebarStyling
        className="w-[300px] h-[100vh] bg-sb_bg text-gray-50 flex flex-col items-center justify-between fixed"
        click={click}
      >
        <div>
          <Link
            to={"/"}
            className="flex items-center my-10 icon uppercase"
            onClick={closeSideBar}
          >
            <i className="fa-solid fa-guitar mr-4 text-4xl"></i>
            <div>
              <h1 className="text-xl"> Vibrate </h1>
              <h1 className=" text-sm"> Music Player </h1>
            </div>
          </Link>

          <div className="mt-20">
            <Link
              to={"/"}
              className="flex my-10 items-center "
              onClick={closeSideBar}
            >
              <i className="fa-solid fa-volume-low mr-5"></i>
              <h1> Explore </h1>
            </Link>
            <Link
              to={"/suggest"}
              className="flex my-10 items-center "
              onClick={closeSideBar}
            >
              <i className="fa-solid fa-music mr-5"></i>
              <h1> Suggest </h1>
            </Link>
            <Link
              to={"/top-charts"}
              className="flex my-10 items-center"
              onClick={closeSideBar}
            >
              <i className="fa-solid fa-chart-simple mr-5"></i>
              <h1> Top Charts </h1>
            </Link>
            <Link
              to={"/top-artists"}
              className="flex my-10 items-center"
              onClick={closeSideBar}
            >
              <i className="fa-solid fa-palette mr-5"></i>
              <h1> Top Artists </h1>
            </Link>
            <Link
              to={"/installation"}
              className="flex my-10 items-center"
              onClick={closeSideBar}
            >
              <i className="fa-solid fa-download mr-5"></i>
              <h1> Installtion </h1>
            </Link>
          </div>
          <div className="absolute bottom-0">
            <a
              className="admin w-full text-zinc-50 font-mono no-underline hover:text-sky flex items-center justify-center text-sm font-extralight cursor-default md:cursor-pointer mb-5"
              href="https://www.github.com/sumyat-aung"
              target="_blank"
            >
              Designed & built by - Su Myat Aung
            </a>
          </div>
        </div>
      </SidebarStyling>

      {!click && (
        <BarStyling
          className="fa-solid fa-bars absolute top-[20px] right-[30px]  text-gray-50 text-2xl hidden bar z-50"
          onClick={() => setClick(true)}
        ></BarStyling>
      )}
      {click && (
        <BarStyling
          className="fa-solid fa-xmark absolute top-[20px] right-[30px] text-gray-50 text-3xl hidden bar z-50"
          onClick={closeSideBar}
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
  @media all and (max-width: 1280px) {
    width: 250px;
    display: ${(props) => (props.click ? "flex" : "none")};
    position: fixed;
    z-index: 100;
    background-color: #13192cf8;
    animation: ${SmallScreenAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }

  a {
    font-family: "Roboto Slab", serif;
    letter-spacing: 1px;
    color: white;
    font-size: 14px;

    :hover {
      color: rgb(146, 203, 252);
    }
  }

  .admin {
    font-size: 10px;
  }

  .icon i {
    color: rgb(146, 203, 252);
  }

  .icon div h1 {
    color: rgb(146, 203, 252);
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 900;
  }
`;

const BarStyling = styled.i`
  @media all and (max-width: 1280px) {
    display: flex;
  }
`;
