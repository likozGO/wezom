import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */
export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    navigationOpen: true,
    loginPopup: false,
    callbackPopup: false,
    successPopup: false,
    email: '',
    cart: 0,
    favorites: 0,
    compare: 0,
  },
  reducers: {
    setNavigation: (state) => {
      state.navigationOpen = !state.navigationOpen;
    },
    setLoginPopup: (state) => {
      state.loginPopup = !state.loginPopup;
    },
    setCallbackPopup: (state) => {
      state.callbackPopup = !state.callbackPopup;
    },
    setSuccessPopup: (state) => {
      state.successPopup = !state.successPopup;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    addToCart: (state, action) => {
      if (action.payload === 'add') {
        state.cart += 1;
      }
      if (action.payload === 'remove') {
        state.cart -= 1;
      }
    },
    addToFavorites: (state, action) => {
      if (action.payload === 'add') {
        state.favorites += 1;
      }
      if (action.payload === 'remove') {
        state.favorites -= 1;
      }
    },
    addToCompare: (state, action) => {
      if (action.payload === 'add') {
        state.compare += 1;
      }
      if (action.payload === 'remove') {
        state.compare -= 1;
      }
    },
  },
});
/* eslint-enable no-param-reassign */

export const {
  setNavigation, setLoginPopup, setCallbackPopup, setSuccessPopup, setEmail,
  addToCart, addToFavorites, addToCompare,
} = globalSlice.actions;

export const selectNavigationOpen = (state) => state.global.navigationOpen;
export const selectLoginPopup = (state) => state.global.loginPopup;
export const selectCallbackPopup = (state) => state.global.callbackPopup;
export const selectSuccessPopup = (state) => state.global.successPopup;
export const selectEmail = (state) => state.global.email;

export const selectFavorites = (state) => state.global.favorites;
export const selectCart = (state) => state.global.cart;
export const selectCompare = (state) => state.global.compare;

export default globalSlice.reducer;
