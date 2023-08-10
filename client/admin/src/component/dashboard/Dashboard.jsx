import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import { RxDashboard } from "react-icons/rx";
import { LuFileEdit } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import white__logo from "../../assets/logo/logo__white.png";
import main__logo from "../../assets/logo/logo.png";

const Dashboard = () => {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );


  //  ONCLICK FUNCTIONALY FOR SIDEBAR
  const changeStyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        {/* This is Accordian sidebar */}
        <ul className={style} id="accordionSidebar">
          {/* <!-- Sidebar - Brand --> */}
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/dashboard"
          >
            <div className="navbar__logo">
               <img src={white__logo} alt="Main-logo-white" className="img-fluid" />
            </div>
            {/* <div className="sidebar-brand-text mx-1 mt-3">OSMOSSION</div> */}
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
          <div className="text-center d-none d-md-inline mt-5">
            <button
              onClick={changeStyle}
              className="rounded-circle border-0"
              id="sidebarToggle"
            ></button>
          </div>
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <button
                id="sidebarToggleTop"
                onClick={changeStyle1}
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              {/* <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  {/* <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  ></div>
                </li>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="{#!}"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Admin
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                      alt="user-pic"
                    />
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <NavLink className="dropdown-item" to="/">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </NavLink>
                  </div>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Topbar --> */}
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h4 className="dashboard__title">Dashboard</h4>
              </div>

              {/* <!-- Content Row --> */}
              <div className="row">
                <div className="col-md-12">
                  <div className="dashboard__left">
                    <div className="centered">
                      <img src={main__logo} className="img-fluid" alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Osmossion 2023</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
