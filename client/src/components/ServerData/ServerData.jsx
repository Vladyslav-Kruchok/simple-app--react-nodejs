//#region React-IMPORT #
    // useEffect for SLICE
    import React, { useEffect } from "react"; 
//#endregion #

//#region API - 1) RTK Query-IMPORT #
    import { rtkServerApi } from "../../services";
//#endregion #

//#region 2) SLICE-IMPORT #
    // useDispatch run operations, useSelector read value from the state by selector
    import { useDispatch, useSelector } from 'react-redux';
    // Slice
    import { sliceServer } from "../../redux/slices";
    // Selectors
    import { selectServer } from "../../redux/selectors";
    // Operation
    import { operationServer } from "../../redux/operations";
//#endregion #

//Two variants: 1) RTK Query 2) SLICE
const ServerData = () => {
    //#region 1) RTK Query, use internal state

        // Response - rtkServerApi
        const { data } = rtkServerApi.useGetDataQuery();

    //#endregion #

    //#region 2) SLICE #
    
        // Store selector: read value from the state => state.serverData.stateSliceData
        const stateServerData = useSelector(selectServer.getData);

        // Response - sliceServerApi 
        const dispatch = useDispatch();
        // Run to do when dispatch changes
        useEffect(() => {
            // When dispatch run operationServer.getData() as a result Return promise
            const dataPromise = dispatch(operationServer.getData());
            dataPromise
                .then(({payload}) => {
                    dispatch(sliceServer.setData(payload ? payload.message : "HARDCORE"));
                });
        }, [dispatch]);
    
    //#endregion #

    return (
        <>
            {/* RTK Query */}
            <p>{!data ? "Loading RTK..." : data.message}</p>

            {/* SLICE */}
            <p>{!stateServerData ? "Loading SLICE..." : stateServerData}</p>
        </>
    );
};

export default ServerData;