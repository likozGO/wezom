import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */
export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { increment, decrement, incrementByAmount } = globalSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.global.value;

export default globalSlice.reducer;
