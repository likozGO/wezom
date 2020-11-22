import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */
export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    navigationOpen: true,
  },
  reducers: {
    setNavigation: (state) => {
      state.navigationOpen = !state.navigationOpen;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { setNavigation } = globalSlice.actions;

export const selectNavigationOpen = (state) => state.global.navigationOpen;

export default globalSlice.reducer;
