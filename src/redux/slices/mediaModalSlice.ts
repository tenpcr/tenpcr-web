/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MediaModalState {
  show: boolean;
  title: string;
  detail?: string;
  tools: string[];
  button: any;
  imagesSrcList: string[];
  imagesDetailList: string[];
  type?: string;
  youtube?: string;
}

const initialState: MediaModalState = {
  show: false,
  title: "",
  detail: "",
  tools: [],
  button: [],
  imagesSrcList: [],
  imagesDetailList: [],
  youtube: "",
  type: "",
};

const mediaModalSlice = createSlice({
  name: "mediaModal",
  initialState,
  reducers: {
    openMediaModal: (
      state: any,
      action: PayloadAction<Omit<MediaModalState, "show">>
    ) => {
      state.show = true;
      state.title = action.payload.title;
      state.detail = action.payload.detail;
      state.button = action.payload.button;
      state.tools = action.payload.tools;
      state.imagesSrcList = action.payload.imagesSrcList;
      state.imagesDetailList = action.payload.imagesDetailList;
      state.type = action.payload.type;
      state.youtube = action.payload.youtube;
    },

    closeMediaModal: (state: any) => {
      state.show = false;
      state.title = "";
      state.detail = "";
      state.button = [];
      state.tools = [];
      state.imagesSrcList = [];
      state.imagesDetailList = [];
      state.type = "";
      state.youtube = "";
    },
  },
});

export const { openMediaModal, closeMediaModal } = mediaModalSlice.actions;

export default mediaModalSlice.reducer;
