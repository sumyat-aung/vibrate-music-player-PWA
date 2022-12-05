import React from "react";
import SearchInput from "../components/Inputs/SearchInput";

const Search = () => {
  return (
    <div className="h-[100vh] flex">
      <div className="flex flex-col items-end h-[100px] w-full p-2 xl:p-5 border">
        <SearchInput />
      </div>
    </div>
  );
};

export default Search;
