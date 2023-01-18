import { createSlice } from '@reduxjs/toolkit';

//slice
export const serverDataSlice = createSlice({
    name: "serverData",
    initialState: {
        data: ""
    },
    reducers: {
        getRoot: (state, { payload }) => {
            state.data = payload;
        }
    }
});

//actions: serverData/getData
export const { getRoot } = serverDataSlice.actions;

//reducers
export default serverDataSlice.reducer;

