import React, {Suspense} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import router from '../helpers/tabs.json';

const Layout = () => {
    return (
        <div>
            <header>
                {router
                    .sort((a, b) => a.order - b.order)
                    .map(({path, title}) => (
                        <NavLink to={path} key={path}>
                            {title}
                        </NavLink>
                    ))
                }
            </header>
            <main className="container">
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};

export default Layout;
