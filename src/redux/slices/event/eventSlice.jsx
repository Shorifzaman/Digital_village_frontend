import { createSlice } from '@reduxjs/toolkit';

const events = [
  {
    title: 'event 1',
    description:
      'With less than a month to go before the European Union enacts',
    image: 'this is a good website',
    date: '22 feb 2023',
  },
  {
    title: 'event 1',
    description: 3,
    image: 'this is a good website',
    date: '22 feb 2023',
  },
];

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: events,
  },
  reducers: {
    addEvent: (state, { payload }) => {
      state.events.push(payload);
    },
  },
});

export default eventSlice.reducer;
