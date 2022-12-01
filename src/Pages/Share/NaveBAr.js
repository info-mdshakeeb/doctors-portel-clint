import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthUser } from '../../Context/UserContext';

const NaveBAr = () => {
    const { user, logOut } = useContext(AuthUser)
    console.log(user)
    const heandelLogout = () => {
        console.log('logOut')
        logOut()
            .then(re => { console.log(re) })
    }
    const navItem = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Apoinment'>Apoinment</Link></li>
        <li><Link to='/Rewiews'>Rewiews</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={heandelLogout}>Sign out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>}

    </>

    return (
        <div className="">
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>

                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">Doctors Portl</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItem}
                    </ul>
                </div>
                <label tabIndex={2} htmlFor="side-nav" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default NaveBAr;