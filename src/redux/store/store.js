import { configureStore } from "@reduxjs/toolkit";

// slices
import playerReducer from "../features/playerSlice";

// fetch data
import { shazamCoreApi } from "../data/Songs";

/* ---------------------------------- store --------------------------------- */

const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export default store;
