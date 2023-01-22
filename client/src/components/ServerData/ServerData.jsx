// React
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';

// API - RTK Query
import { useGetServerDataQuery } from "../../services";

// reducers
import { setData } from "../../redux/slices/serverDataSlice";

// Selectors
import { selectGetServerData } from "../../redux/selectors/selectServerData"

// Operation
import { serverDataOperation } from "../../redux/operations";

const ServerData = () => {
    // Response - RTK Query
    const { data } = useGetServerDataQuery();
    
    // Store selector: read value from the state => state.serverData.stateSliceData
    const stateServerDataSelector = useSelector(selectGetServerData);

    // Response - sliceServerApi 
    const dispatch = useDispatch();
    useEffect(() => {
        const dataPromise = dispatch(serverDataOperation.operationGetServerData());
        dataPromise
            .then(({payload}) => {
                dispatch(setData(payload ? payload.message : "HARDCORE"));
            });
    }, [dispatch]);

    return (
        <>
            <p>{!data ? "Loading RTK..." : data.message}</p>
            <p>{!stateServerDataSelector ? "Loading SLICE..." : stateServerDataSelector}</p>
        </>
    );
};

ServerData.protoType = {
    data: PropTypes.shape({
        message: PropTypes.string
    }).isRequired
};

export default ServerData;