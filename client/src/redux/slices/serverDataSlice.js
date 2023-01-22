import { createSlice } from '@reduxjs/toolkit';

const initialState = "initialState";
//slice
export const serverDataSlice = createSlice({
    name: "serverData",
    //start state of reducer and variable = stateData
    initialState: {
        stateSliceData: initialState
    },
    //Object of reducers
    reducers: {
        setData: (state, { payload }) => {
            state.stateSliceData = payload;
        }
    }
});

//actions: serverData/setData
export const { setData } = serverDataSlice.actions;

//reducers of slice
export const serverDataReducer =  serverDataSlice.reducer;

