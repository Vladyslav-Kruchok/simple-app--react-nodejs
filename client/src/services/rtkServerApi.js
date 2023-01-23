import { rtkBaseApi } from "./rtkBaseApi";

// Query - RTK Query
// Define endpoints
export const rtkServerApi = rtkBaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => ({
                url: "api",
            }),
        })
    })
});

export const {
    useGetDataQuery
} = rtkServerApi;