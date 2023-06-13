import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Header() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    getHomeData2();
  }, []);

  const getHomeData2 = async () => {
    const userid = localStorage.getItem("_id");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const data = {
      _id: userid,
    };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/view_profile",
        data,
        options
      );
      setLists([response.data.data]);
      
    } catch (err) {
      console.error(err);
    }
  };



  const userId = localStorage.getItem("_id");
  const location = useLocation();
  const isProtectedPage = [
    // "/cart",
    // "/wishlist",
    // "/addcart",
    // "/myaccount",
    // "/addresslist",
    // "/checkout",
    // "/transactions",
    // "/profile",
    // "/referral",
    // "/setting",
    // "/myaccount2",
    // "/working",
    // "/forgotpassword",
  ].includes(location.pathname);

  const removeToken = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("confirm_password");
    localStorage.removeItem("gender");
    
    //localStorage.removeItem("phone");
    localStorage.removeItem("role");
    //localStorage.removeItem("info");
    //localStorage.removeItem("pro_id");
    localStorage.removeItem("userId");
    //localStorage.removeItem("item_id");
    //localStorage.removeItem("sub_id");
    //localStorage.removeItem("productCount");
    //localStorage.removeItem("productcount");
    //localStorage.removeItem("userId");
    //localStorage.removeItem("shipingid");
    //localStorage.removeItem("wishCount");
    //localStorage.removeItem("wishCount");
    //localStorage.removeItem("productType");
  };

  if (!userId && isProtectedPage) {
    return <Navigate to="/login" />;
  }




  return (
    <>
      {userId ? (
        <nav
          className="navbar navbar-expand navbar-light bg-dark static-top osahan-nav sticky-top"
          style={{ zIndex: "1" }}
        >
          &nbsp;&nbsp;
          <button
            className="btn btn-link btn-sm text-secondary order-1 order-sm-0"
            id="sidebarToggle"
          >
            <i className="fas fa-bars" />
          </button>{" "}
          &nbsp;&nbsp;
          <Link className="navbar-brand mr-1" to="/">
            <img className="img-fluid" alt="" src="img/logo.png" />
          </Link>
          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
              <div className="input-group-append">
                <button className="btn btn-light" type="button">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
          <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/upload">
                <i className="fas fa-plus-circle fa-fw" />
                Upload Video
              </Link>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw" />
                <span className="badge badge-danger">9+</span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Action
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
                  action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-star " /> &nbsp; Something else
                  here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-envelope fa-fw" />
                <span className="badge badge-success">7</span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="messagesDropdown"
              >
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Action
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
                  action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-star " /> &nbsp; Something else
                  here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
              <Link
                className="nav-link dropdown-toggle user-dropdown-link"
                to="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                
{lists.map((list) => {
  return (
    <>
      {list.profile_image && list.profile_image.filename ? (
        <img
          alt="Avatar"
          src={"http://16.16.91.234:3003/uploads/" + list.profile_image.filename}
        />
      ) : (
        <img
          alt="Avatar"
          src="img/logo.png" // Replace with your default image URL
        />
      )}
    </>
  );
})}




                Osahan
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <Link className="dropdown-item" to="/myaccount">
                  <i className="fas fa-fw fa-user-circle" /> &nbsp; My Account
                </Link>
                {/* <Link className="dropdown-item" to="/subscriptions"><i className="fas fa-fw fa-video" /> &nbsp; Subscriptions</Link> */}
                <Link className="dropdown-item" to="/setting">
                  <i className="fas fa-fw fa-cog" /> &nbsp; Settings
                </Link>
                <div className="dropdown-divider" />
                <Link onClick={removeToken}
                  className="dropdown-item"
                  to="/login"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Logout
                </Link>
              </div>
            </li>
          </ul>
          {/* <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <Link class="btn btn-primary" to="/login">Logout</Link>
                </div>
            </div>
        </div>
    </div> */}
        </nav>
      ) : (
        <nav
          className="navbar navbar-expand navbar-light bg-dark static-top osahan-nav sticky-top"
          style={{ zIndex: "1" }}
        >
          &nbsp;&nbsp;
          <button
            className="btn btn-link btn-sm text-secondary order-1 order-sm-0"
            id="sidebarToggle"
          >
            <i className="fas fa-bars" />
          </button>{" "}
          &nbsp;&nbsp;
          <Link className="navbar-brand mr-1" to="/">
            <img className="img-fluid" alt="" src="img/logo.png" />
          </Link>
          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
              <div className="input-group-append">
                <button className="btn btn-light" type="button">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
          <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/upload">
                <i className="fas fa-plus-circle fa-fw" />
                Upload Video
              </Link>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw" />
                <span className="badge badge-danger">9+</span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Action
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
                  action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-star " /> &nbsp; Something else
                  here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-envelope fa-fw" />
                <span className="badge badge-success">7</span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="messagesDropdown"
              >
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Action
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
                  action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  <i className="fas fa-fw fa-star " /> &nbsp; Something else
                  here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
              <Link
                className="nav-link dropdown-toggle user-dropdown-link"
                to="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img alt="Avatar" src="img/user.png" />
                Osahan
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <Link className="dropdown-item" to="/myaccount">
                  <i className="fas fa-fw fa-user-circle" /> &nbsp; My Account
                </Link>
                {/* <Link className="dropdown-item" to="/subscriptions"><i className="fas fa-fw fa-video" /> &nbsp; Subscriptions</Link> */}
                <Link className="dropdown-item" to="/setting">
                  <i className="fas fa-fw fa-cog" /> &nbsp; Settings
                </Link>
                <div className="dropdown-divider" />
                <Link
                  className="dropdown-item"
                  to="/login"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Login
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;
