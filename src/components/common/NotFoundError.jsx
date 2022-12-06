import React from "react";

const NotFoundError = () => {
  return (
    <div className="flex">
      <i className="fa-solid fa-circle-exclamation text-slate-500 text-xl sm:text-4xl mr-5"></i>
      <h1 className=" text-xl sm:text-4xl font-mono text-slate-500">
        Search Not Found
      </h1>
    </div>
  );
};

export default NotFoundError;
