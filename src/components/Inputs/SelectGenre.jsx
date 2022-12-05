import React, { useState } from "react";

const SelectGenre = ({ selected, setSelected }) => {
  // Genre List For Drop DOwn
  const genreList = [
    "POP",
    "HIP_HOP_RAP",
    "DANCE",
    "ELECTRONIC",
    "SOUL_RNB",
    "ALTERNATIVE",
    "ROCK",
    "LATIN",
    "FILM_TV",
    "COUNTRY",
    "AFRO_BEATS",
    "WORLDWIDE",
    "REGGAE_DANCE_HALL",
    "HOUSE",
    "K_POP",
    "FRENCH_POP",
    "SINGER_SONGWRITER",
    "REG_MEXICO",
  ];

  // state handling opening and closing
  const [open, setOpen] = useState(false);

  //// jsx
  return (
    <div>
      <div className="w-72 font-medium h-80">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-[#1d243b7a] text-gray-50 w-full px-5 py-3 flex items-center justify-between rounded border border-slate-800 ${
            !selected && "text-white"
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Select Genre"}
          <i className={`fa-solid fa-caret-down ${open && "rotate-180"}`}></i>
        </div>
        <ul
          className={`bg-sb_bg text-gray-50 mt-2 overflow-y-auto max-h-60 rounded-lg z-20 relative ${
            open ? "max-h-60" : "max-h-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white "></div>
          {genreList?.map((g) => (
            <li
              key={g}
              className={`px-5 py-3 text-sm hover:bg-[#24283adc] hover:text-white
            ${
              g.toLowerCase() === selected?.toLowerCase() &&
              "bg-[#262c4271] text-white"
            }`}
              onClick={() => {
                if (g.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(g);
                  setOpen(false);
                }
              }}
            >
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectGenre;
