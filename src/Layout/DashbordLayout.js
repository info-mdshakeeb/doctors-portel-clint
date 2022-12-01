import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NaveBAr from '../Pages/Share/NaveBAr';

const DashbordLayout = () => {
    return (
        <div>
            <NaveBAr />
            <div className="drawer drawer-mobile ">
                <input id="side-nav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="side-navb" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li ><Link to='/dashboard'>My Appionments</Link></li>
                        <li ><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li ><Link to='/dashboard/adddoctors'>Add doctors</Link></li>
                        <li ><Link to='/dashboard/manageDoctor'>Doctors</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;