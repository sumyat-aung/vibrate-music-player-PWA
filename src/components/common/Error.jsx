import React from "react";

const Error = () => {
  return (
    <div className="flex">
      <i className="fa-solid fa-circle-exclamation text-red-700 text-xl sm:text-4xl mr-5"></i>
      <h1 className=" text-xl sm:text-4xl font-mono text-red-700">
        Opps ! Somthing Went Wrong!
      </h1>
    </div>
  );
};

export default Error;
