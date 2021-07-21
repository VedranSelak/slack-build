import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../features/appSlice';
import modalReducer from '../features/modalSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    modal: modalReducer,
  },
});
