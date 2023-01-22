import { rtkBaseApi } from "./rtkBaseApi";

// Query - RTK Query
// Define endpoints
export const rtkServerApi = rtkBaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getServerData: builder.query({
            query: () => ({
                url: "api",
            }),
        })
    })
});

export const {
    useGetServerDataQuery
} = rtkServerApi;