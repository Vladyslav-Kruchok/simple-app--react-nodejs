import { configureStore } from '@reduxjs/toolkit';

import { sliceServer } from "./slices";

import { rtkBaseApi } from "../services/rtkBaseApi";


export const store = configureStore({
    reducer: {
        //Store - Slice
        serverData: sliceServer.dataReducer,
        //Store - RTK Query
        [rtkBaseApi.reducerPath]: rtkBaseApi.reducer
    },
    //Add additional middleware - RTK Query
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(rtkBaseApi.middleware)
});