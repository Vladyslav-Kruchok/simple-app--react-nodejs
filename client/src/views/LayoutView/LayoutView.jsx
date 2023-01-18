//React
import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

//static
import logo from "../../images/logo.svg";
import Layout from "../../components/Layout"


//Dynamic import
const Header = lazy(() => import('../../components/Header/Header.jsx' /* webpackChunkName: "Header" */));

const LayoutView = () => { 
    return (
        <Layout>
            <Suspense>
                <Header logo={logo} />
            </Suspense>
            <Outlet />
        </Layout>
    );
};

export default LayoutView;