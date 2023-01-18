//React
import { lazy, Suspense, useEffect, useState } from 'react';

//Dynamic import
const ServerData = lazy(() => import('../../components/ServerData/ServerData.jsx' /* webpackChunkName: "ServerData" */));

const ServerDataView = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    
    return (
        <Suspense>
            <ServerData data={data} />
        </Suspense>
    );
};

export default ServerDataView;