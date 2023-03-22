import { createSlice } from '@reduxjs/toolkit';

import lang from '../config/lang';

const frState = { ...lang.french };
const enState = {
  ...lang.english,
};

const langSlice = createSlice({
  name: 'lang',
  initialState: frState,
  reducers: {
    changeLang: (state, action) => {
      let newState = frState;
      console.log(action);
      if (action.payload === lang.english.id) {
        newState = enState;
      }
      return newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
