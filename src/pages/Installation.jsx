import React from "react";

import installImg from "../assests/pc-install.png";
import installPhImg from "../assests/ph-install.jpg";

// ^^^^^ importing necessary components ^^^^^

const Installation = () => {
  //// jsx
  return (
    <div className="flex justify-center items-center flex-col my-20">
      <div className="text-gray-50 font-mono flex lg:flex-row flex-col my-10 items-center mx-10">
        <div className="lg:mr-20 mb-10">
          <h1 className="mb-5">Installing on Windows or macOS</h1>
          <ul className="list-disc list-inside">
            <li>
              Go To Music Player{" "}
              <a
                href="https://vbra.netlify.app/"
                className="text-sky hover:underline"
                target={"_blank"}
              >
                Website
              </a>
            </li>
            <li>Click Install</li>
          </ul>
        </div>
        <img
          src={installImg}
          alt="Installation image"
          className="w-[500px] border-4  border-sb_bg shadow"
        />
      </div>
      <div className="text-gray-50 font-mono flex lg:flex-row flex-col mt-20 items-center mx-10 my-10">
        <div className="lg:mr-20 mb-10">
          <h1 className="mb-5">Installing on Mobile</h1>
          <ul className="list-disc list-inside">
            <li>
              Go To Music Player{" "}
              <a
                href="https://vbra.netlify.app/"
                className="text-sky hover:underline"
                target={"_blank"}
              >
                Website
              </a>
            </li>
            <li>Click 3 dots OR 3 line bar </li>
            <li>Click Install App</li>
          </ul>
        </div>
        <img
          src={installPhImg}
          alt="Installation image"
          className="w-[300px] border-4  border-sb_bg shadow"
        />
      </div>
    </div>
  );
};

export default Installation;
