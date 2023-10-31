import React, {Suspense} from 'react';
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
          {router.map(({path, element}, idx) =>
            <Route path={path} element={
              <Suspense fallback={<p>Loading...</p>}>
                {element}
              </Suspense>
            } key={idx} />)}
        </Route>
      </Routes >
    </>

  );
}

export default App;

