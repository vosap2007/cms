import React, {lazy} from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import router from './helpers/tabs.json';
import Layout from './components/Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {router.map(({path, element, order}) => {
            const Component = lazy(() => import(`${element}`))
            return < Route path={path} element={<Component />}
              key={order} />
          }
          )}
        </Route>
      </Routes >
    </>

  );
}

export default App;

