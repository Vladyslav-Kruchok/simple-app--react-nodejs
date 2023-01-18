import PropTypes from "prop-types";
import React from "react";

const ServerData = ({data}) => {
    return (
        <p>{!data ? "Loading..." : data}</p>
    );
};

ServerData.protoType = {
    data: PropTypes.string.isRequired
};

export default ServerData;