import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const BASE_URL = "http://localhost:5000";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axios({
        baseUrl: BASE_URL,
        headers: {"Content-Type" : "application/json; charset=utf-8"}
        })
});

// Export hooks for usage in functional components, which are
