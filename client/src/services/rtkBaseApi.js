import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "http://localhost:3000";

// Configure Query - RTK Query
// Define a service using a base URL and expected endpoints
export const rtkBaseApi = createApi({
    reducerPath: "rtkBaseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: () => ({})

});

// Export hooks for usage in functional components, which are
