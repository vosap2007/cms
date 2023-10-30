import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import {router} from './helpers/tabs';
import Layout from './components/Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {router.map(({path, component}, idx) =>
            <Route path={path} element={component} key={idx} />)}
        </Route>
      </Routes>
    </>

  );
}

export default App;

