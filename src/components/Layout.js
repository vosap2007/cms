import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <NavLink to='/'>Dummy Table</NavLink>
                <NavLink to='/dummyChart'>Dummy Chart</NavLink>
                <NavLink to='/dummyList'>Dummy List</NavLink>
            </header>
            <main className="container"><Outlet /></main>
        </div>);
};

export default Layout;