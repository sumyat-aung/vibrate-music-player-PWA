import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ArtistsCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <ArtistCardStyling
      className="flex flex-col justify-center items-center w-[250px] lg:p-4 p-2 lg:m-5 m-0 animate-slideup cursor-default sm:cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <div className="relative">
        <img
          alt="song_img"
          src={track?.images?.coverart}
          className="lg:w-52 sm:w-[150px] w-[120px] rounded-full"
        />
        <img
          alt="song_img"
          src={track?.images?.coverart}
          className="lg:w-52 sm:w-[150px] w-[120px] rounded-full  absolute top-0 left-0 blur"
        />
      </div>
      <p className="mt-4 font-semibold sm:text-lg text-base text-center text-white truncate w-full">
        {track?.subtitle}
      </p>
    </ArtistCardStyling>
  );
};

export default ArtistsCard;

/* ---------------------------- styled components --------------------------- */

const ArtistCardStyling = styled.div`
  font-family: "Montserrat Alternates", sans-serif;

  img:hover ~ .blur {
    display: none;
  }

  .blur {
    filter: blur(5px);
    z-index: -1;
  }

  @media all and (max-width: 1029px) {
    .blur {
      filter: blur(5px);
    }
  }

  @media all and (max-width: 500px) {
    width: 160px;
  }
`;
