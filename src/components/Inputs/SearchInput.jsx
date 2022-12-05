import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  // handling search input
  const [searchTerm, setSearchTerm] = useState("");
  const SearchInputHandle = (e) => {
    setSearchTerm(e.target.value);
  };

  // navigating to search page
  const navigate = useNavigate();

  // hanling submit
  const SubmitHandle = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  //// jsx
  return (
    <SearchInputStyling
      className="relative w-full"
      onSubmit={(e) => SubmitHandle(e)}
    >
      <input
        type="text"
        placeholder="Search ... "
        className="px-14 py-3 bg-[#1d243b7a] shadow text-gray-50 focus:outline-none text-lg  w-full mb-5 font-bold tracking-wide border border-slate-800"
        value={searchTerm}
        onChange={SearchInputHandle}
      />
      <i
        className="fa-solid fa-magnifying-glass absolute top-5 left-5 text-gray-50 cursor-default md:cursor-pointer hover:text-gray-300"
        onClick={SubmitHandle}
      ></i>
    </SearchInputStyling>
  );
};

export default SearchInput;

/* ---------------------------- styled components --------------------------- */

const SearchInputStyling = styled.form`
  font-family: "Montserrat Alternates", sans-serif;
`;
