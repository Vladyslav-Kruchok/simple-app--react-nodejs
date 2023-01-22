import * as sliceServerApi from "../../services/sliceServerApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const operationGetServerData = createAsyncThunk("serverData/setData", async () => {
    const data = await sliceServerApi.getServerData();
    return data;
});