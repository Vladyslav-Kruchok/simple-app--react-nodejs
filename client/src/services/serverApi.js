import { baseApi } from "./baseApi";

//rtk query
// Define endpoints for notices
const serverDataApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getRoot: builder.query({
            query: () => ({
            url: "/api",
            method: 'GET',
            }),
        })
    })
});

export const {
    useGetRoot
} = serverDataApi;