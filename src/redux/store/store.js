import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "../features/playerSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;
