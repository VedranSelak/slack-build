import { createSlice } from '@reduxjs/toolkit';


export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: false
  },
  reducers: {
    showModal: (state) => {
      state.modal = true
    },
    hideModal: (state) => {
      state.modal = false
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.modal;

export default modalSlice.reducer;
