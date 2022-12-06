import { configureStore } from "@reduxjs/toolkit";
import SerializableStateInvariantMiddleware from "redux-devtools-instrument";

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
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    const middleware = defaultMiddleware.filter(
      (middleware) => middleware !== SerializableStateInvariantMiddleware
    );
    return middleware.concat(shazamCoreApi.middleware);
  },
});

export default store;
