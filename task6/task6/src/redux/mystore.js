import { configureStore, createSlice } from "@reduxjs/toolkit";
import en from "../local/en";
import ar from "../local/ar";

const langSlice = createSlice({
  name: "mylang",
  initialState: {
    lang: "en",
    content: en,
  },
  reducers: {
    toggleLang: (state) => {
      if (state.lang === "en") {
        state.lang = "ar";
        state.content = ar;
      } else {
        state.lang = "en";
        state.content = en;
      }
    },
  },
});

export const { toggleLang } = langSlice.actions;

const myStore = configureStore({
  reducer: {
    mylang: langSlice.reducer,
  },
});

export default myStore;
