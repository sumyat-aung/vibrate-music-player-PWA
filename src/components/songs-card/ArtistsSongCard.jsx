import React from "react";

const ArtistDetailSongsCard = ({ d }) => {
  return (
    <a
      href={d?.attributes?.url}
      target="_blank"
      className="flex flex-col items-center mx-5 my-8 animate-slideup shadow px-10 py-5 cursor-default lg:cursor-pointer w-[300px] bg-sb_bg"
    >
      <div className="relative group">
        <img
          alt="song_img"
          src={
            d?.attributes?.artwork?.url
              ? d?.attributes?.artwork?.url
              : "https://cdn.shopify.com/s/files/1/0361/0781/3004/products/orange_0637efbb-de32-476b-8061-856d2b770d98_150x150.png?v=1660785252"
          }
          className="h-32 w-32 rounded-full relative z-20"
        />
        <img
          alt="song_img"
          src={
            d?.attributes?.artwork?.url
              ? d?.attributes?.artwork?.url
              : "https://cdn.shopify.com/s/files/1/0361/0781/3004/products/orange_0637efbb-de32-476b-8061-856d2b770d98_150x150.png?v=1660785252"
          }
          className="h-32 w-32 rounded-full absolute top-0 left-0 blur z-"
        />
      </div>

      <div className="py-5 text-center">
        <div>
          <h1 className=" text-gray-50 font-bold block hover:text-gray-300">
            {d?.attributes?.name}
          </h1>

          <h1 className=" text-gray-300">{d?.attributes?.artistName}</h1>
        </div>
      </div>
    </a>
  );
};

export default ArtistDetailSongsCard;
