//React
import React, { lazy, Suspense } from "react";

//Dynamic import
const ServerData = lazy(() => import("../../components/ServerData/ServerData.jsx" /* webpackChunkName: "ServerData" */));

const ServerDataView = () => {
    return (
        <Suspense>
            <ServerData />
        </Suspense>
    );
};

export default ServerDataView;