import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src="logo_brown.png" alt="Logo" height="50" width="40" />
          ScrubsNepal
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Products
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/categories"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/categories/scrubs">
                  Scrubs
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/categories/bliss">
                  Bliss
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/categories/soap">
                  Soap
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isNavbarCollapsed ? "" : "show"
          }`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <div className="d-flex align-items-center"> */}
              <div class="input-group">
                {/* <button
                  type="button"
                  class="btn btn-outline-primary"
                  data-mdb-ripple-init
                >
                  search
                </button> */}
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                ></input>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <BiCart /> Cart
              </Link>
            </li>

            <li className="nav-item">
              {user ? (
                <div className="dropdown">
                  <button
                    className="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Welcome, {user.firstName}
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/changingpp">
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="dropdown-item"
                        to="/logout"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="d-flex">
                  <Link className="btn btn-outline-primary me-2" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-success" to="/register">
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
