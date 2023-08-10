import React from "react";
import { RxDashboard } from "react-icons/rx";
import { LuFileEdit } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";
import  navbar__logo from "../../assets/logo/logo__white.png";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
        >
          <div className="sidebar-brand-text mx-1 mt-3">
            <img src={navbar__logo} alt="Navbar-logo" className="img-fluid"/>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href={"/dashboard"}>
            <span className="mr-1">
              <RxDashboard />
            </span>
            <span>Dashboard</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">BLOG</div>

        {/* <!-- Blogpost --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="{#!}"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <span>
              <LuFileEdit />{" "}
            </span>
            <span>Blog Settings</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <NavLink className="collapse-item" to="/add-blog-category">
                <span className="mr-1">
                  <RxDotFilled />{" "}
                </span>
                Add Blog Category
              </NavLink>
              <NavLink className="collapse-item" to="/view-blog-category">
                <span className="mr-1">
                  <RxDotFilled />{" "}
                </span>
                View Blog Category
              </NavLink>
              <NavLink className="collapse-item" to="/add-new-blog">
                <span className="mr-1">
                  <RxDotFilled />{" "}
                </span>
                Add New Blog
              </NavLink>
              <NavLink className="collapse-item" to="/view-all-blogs">
                {" "}
                <span className="mr-1">
                  <RxDotFilled />{" "}
                </span>
                View All Blogs
              </NavLink>
            </div>
          </div>
        </li>

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        {/* <div className="text-center d-none d-md-inline mt-5">
          <button
            onClick={changeStyle}
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div> */}
      </ul>
    </>
  );
};

export default Sidebar;
