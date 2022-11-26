import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="doc-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="doc-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard'>My Appointment</Link>
            </li>
            <li>
              <Link to='/dashboard/allusers'>All users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
