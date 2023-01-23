import { createSlice } from '@reduxjs/toolkit';

const initialState = "";
//slice
export const sliceServer = createSlice({
    name: "serverData",
    //start state of reducer
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
export const { setData } = sliceServer.actions;

//reducers of slice
export const dataReducer =  sliceServer.reducer;

