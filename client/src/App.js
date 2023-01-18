// client/src/App.js
/**
 * Since ES2020
 * React.lazy() for dynamic, async loading of element
 * React.Suspense Show message in property "fallback" while dynamic component is loaded
 */
import React, { lazy, Suspense }from "react";
import { Routes, Route } from 'react-router-dom';

//Dynamic
const LayoutView = lazy(() => import("./views/LayoutView/LayoutView.jsx" /* webpackChunkName: "LayoutView" */));
const ServerDataView = lazy(() => import("./views/ServerDataView/ServerDataView.jsx" /* webpackChunkName: "ServerDataView" */));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route path="/api" element={<ServerDataView />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
