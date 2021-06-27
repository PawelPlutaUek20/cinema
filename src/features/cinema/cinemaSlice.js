import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seatsSelected: [],
  seatsNumber: 0,
  seatsNext: true,
}

export const cinemaSlice = createSlice({
  name: 'cinema',
  initialState,
  reducers: {
    makeReservation: (state, action) => {
      state.seatsSelected = []
      state.seatsNumber = action.payload.seatsNumber;
      state.seatsNext = action.payload.seatsNext;
    },
    select: (state, action) => {
      state.seatsSelected = [...state.seatsSelected, action.payload]
    },
    unselect: (state, action) => {
      state.seatsSelected = state.seatsSelected.filter(
        (seat) => seat.id !== action.payload.id
      );
    },
  },
});

export const { makeReservation, select, unselect } = cinemaSlice.actions;

export const getReservation = (state) => state.cinema;

export default cinemaSlice.reducer;
