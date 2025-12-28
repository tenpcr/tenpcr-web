import { combineReducers } from "@reduxjs/toolkit";
import mediaModalReducer from "../slices/mediaModalSlice";

const rootReducer = combineReducers({
  mediaModal: mediaModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;