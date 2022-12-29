import { configureStore } from "@reduxjs/toolkit";
import museumReducer from "./reducer/museum.reducer";
import userReducer from "./reducer/user.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    museum: museumReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
