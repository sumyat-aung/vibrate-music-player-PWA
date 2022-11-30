import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export default playerSlice.reducer;
export const { increment, decrement } = playerSlice.actions;

/* -------------------------------------------------------------------------- */
/*                                    redux                                   */
/* -------------------------------------------------------------------------- */

// if we need redux data -> we import 2 line below nd use it in components

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../redux/features/counter/playerSlice";

// const count = useSelector((state) => state.counter.count);
// const dispatch = useDispatch();
