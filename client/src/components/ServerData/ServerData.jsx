// React
import React from "react";
import PropTypes from "prop-types";
// import { useDispatch, useSelector } from 'react-redux';

// API - RTK Query
import { useGetServerDataQuery } from "../../services";

// reducers
// import { setData } from "../../redux/slices/serverDataSlice";

// Selectors
// import { selectGetServerData } from "../../redux/selectors/selectServerData"


const ServerData = () => {
    // Response - RTK Query
    const { data } = useGetServerDataQuery();

    // const dispatch = useDispatch();
    // dispatch(setData(data ? data.message : "HARDCORE"));

    //value from the state => state.serverData.stateSliceData
    // const stateServerData = useSelector(selectGetServerData);

    // console.log(stateServerData);

    return (
        <>
            <p>{!data ? "Loading RTK..." : data.message}</p>
            <p>{!data ? "Loading SLICE..." : "HARDCORE"}</p>
        </>
    );
};

ServerData.protoType = {
    data: PropTypes.shape({
        message: PropTypes.string
    }).isRequired
};

export default ServerData;