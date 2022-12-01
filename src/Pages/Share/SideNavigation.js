import React from 'react';

const SideNavigation = () => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="side-nav" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">

            </div>
            <div className="drawer-side">
                <label htmlFor="side-navb" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SideNavigation;