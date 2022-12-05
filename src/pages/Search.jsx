import React from "react";
import { useParams } from "react-router-dom";
import SearchInput from "../components/Inputs/SearchInput";
import { useGetSongsBySearchQuery } from "../redux/data/Songs";

const Search = () => {
  let params = useParams();

  // let {} = useGetSongsBySearchQuery(params.searchTerm)

  console.log(useGetSongsBySearchQuery(params.searchTerm));

  return (
    <div className="h-[100vh] flex">
      <div className="flex flex-col items-end h-[100px] w-full p-2 xl:p-5 border">
        <SearchInput />
      </div>
    </div>
  );
};

export default Search;
