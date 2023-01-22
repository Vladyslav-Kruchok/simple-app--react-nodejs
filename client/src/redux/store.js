import { configureStore } from '@reduxjs/toolkit';

import { serverDataReducer } from "./slices/serverDataSlice";

import { rtkBaseApi } from "../services/rtkBaseApi";


export const store = configureStore({
    reducer: {
        serverData: serverDataReducer,
        //Store - RTK Query
        [rtkBaseApi.reducerPath]: rtkBaseApi.reducer
    },
    //Add additional middleware - RTK Query
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(rtkBaseApi.middleware)
});