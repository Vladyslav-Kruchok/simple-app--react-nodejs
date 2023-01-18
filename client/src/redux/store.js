import { configureStore } from '@reduxjs/toolkit';

import serverDataReducer from "./slices/serverDataSlice";

export const store = configureStore({
    reducer: {
        serverData: serverDataReducer
    }
});