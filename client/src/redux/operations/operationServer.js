import { sliceServerApi } from "../../services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("serverData/setData", async () => {
    const data = await sliceServerApi.getData();
    return data;
});