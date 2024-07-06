import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Sidebar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/orders" className="nav-link">
                Orders
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/admin/products" className="nav-link">
                Products
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/admin/users" className="nav-link">
                Customers
              </Link>
            </li>
          </ul>
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>{user.firstName}</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownMenuLink"
            >
              {/* <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li> */}
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={handleLogout}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminBar;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "react-datepicker/dist/react-datepicker.css";

// const AdminBar = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();
//   const [isSideNavOpen, setSideNavOpen] = useState(true);

//   const toggleSideNav = () => {
//     setSideNavOpen(!isSideNavOpen);
//   };

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     // <div>
//     //   {/* Right side of the navbar */}
//     //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     //     <div className="container-fluid">
//     //       {/* Your logo or brand */}
//     //       <Link className="navbar-brand" to="/">
//     //         <img
//     //           src="https://i.ibb.co/7zV1Wk2/logo.png"
//     //           alt="Logo"
//     //           height="50"
//     //           width="50"
//     //           className="d-inline-block align-text-top"
//     //         />
//     //       </Link>

//     //       <div className="ml-auto">
//     //         <form className="d-flex" role="search">
//     //           {/* ... your existing right side content ... */}
//     //           {user ? (
//     //             <div className="dropdown ms-3">
//     //               <button
//     //                 className="btn btn-outline-primary dropdown-toggle"
//     //                 type="button"
//     //                 id="dropdownMenuButton1"
//     //                 data-bs-toggle="dropdown"
//     //                 aria-expanded="false"
//     //               >
//     //                 Welcome, {user.firstName}
//     //               </button>
//     //               <ul
//     //                 className="dropdown-menu"
//     //                 aria-labelledby="dropdownMenuButton1"
//     //               >
//     //                 <li>
//     //                   <Link className="dropdown-item" to="/profile">
//     //                     Profile
//     //                   </Link>
//     //                 </li>
//     //                 <li>
//     //                   <Link className="dropdown-item" to="/changingpp">
//     //                     Change Password
//     //                   </Link>
//     //                 </li>
//     //                 <li>
//     //                   <hr className="dropdown-divider" />
//     //                 </li>
//     //                 <li>
//     //                   <button
//     //                     onClick={handleLogout}
//     //                     className="dropdown-item"
//     //                     to="/logout"
//     //                   >
//     //                     Logout
//     //                   </button>
//     //                 </li>
//     //               </ul>
//     //             </div>
//     //           ) : (
//     //             <div className="d-flex ms-3">
//     //               <Link className="btn btn-outline-primary me-2" to="/login">
//     //                 Login
//     //               </Link>
//     //               <Link className="btn btn-outline-success" to="/register">
//     //                 Register
//     //               </Link>
//     //             </div>
//     //           )}
//     //         </form>
//     //       </div>
//     //     </div>
//     //   </nav>
//     //   {/* Left side navigation bar */}
//     //   <nav
//     //     className={`navbar navbar-expand-lg navbar-light bg-light ${
//     //       isSideNavOpen ? "toggled" : "true"
//     //     }`}
//     //   >
//     //     <div className="container-fluid">
//     //       <button
//     //         className="navbar-toggler"
//     //         type="button"
//     //         onClick={toggleSideNav}
//     //       >
//     //         <span className="navbar-toggler-icon"></span>
//     //       </button>
//     //       <div className="collapse navbar-collapse">
//     //         <ul className="navbar-nav">
//     //           <li className="nav-item">
//     //             <Link className="nav-link" to="/admin/dashboard">
//     //               Dashboard
//     //             </Link>
//     //           </li>
//     //           <li className="nav-item">
//     //             <Link className="nav-link" to="/admin/dashboard">
//     //               Manage Products
//     //             </Link>
//     //           </li>
//     //           <li className="nav-item">
//     //             <Link className="nav-link" to="/admin/orders">
//     //               Manage Orders
//     //             </Link>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </nav>

//     //   {/* Main Content
//     //   <div className="page-header">
//     //     <h3 className="page-title">
//     //       <span className="page-title-icon bg-gradient-primary text-white mr-2">
//     //         <i className="mdi mdi-home"></i>
//     //       </span>{" "}
//     //       Dashboard
//     //     </h3>
//     //     <nav aria-label="breadcrumb">
//     //       <ul className="breadcrumb">
//     //         <li className="breadcrumb-item active" aria-current="page">
//     //           <span></span>Overview{" "}
//     //           <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
//     //         </li>
//     //       </ul>
//     //     </nav>
//     //   </div> */}

//     //   {/* ... rest of your dashboard content ... */}

//     // </div>

//     <div>
//       <div
//         className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
//         style="width: 280px;"
//       >
//         <a
//           href="/"
//           className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
//         >
//           {/* <svg className="bi pe-none me-2" width="40" height="32">
//             <use xlink:href="#bootstrap"></use>
//           </svg> */}
//           <span className="fs-4">Sidebar</span>
//         </a>
//         <hr />
//         <ul className="nav nav-pills flex-column mb-auto">
//           <li className="nav-item">
//             <a href="#" className="nav-link active" aria-current="page">
//               {/* <svg className="bi pe-none me-2" width="16" height="16">
//                 <use xlink:href="#home"></use>
//               </svg> */}
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               {/* <svg className="bi pe-none me-2" width="16" height="16">
//                 <use xlink:href="#speedometer2"></use>
//               </svg> */}
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               {/* <svg className="bi pe-none me-2" width="16" height="16">
//                 <use xlink:href="#table"></use>
//               </svg> */}
//               Orders
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               {/* <svg className="bi pe-none me-2" width="16" height="16">
//                 <use xlink:href="#grid"></use>
//               </svg> */}
//               Products
//             </a>
//           </li>
//           <li>
//             <a href="#" className="nav-link text-white">
//               {/* <svg className="bi pe-none me-2" width="16" height="16">
//                 <use xlink:href="#people-circle"></use>
//               </svg> */}
//               Customers
//             </a>
//           </li>
//         </ul>
//         <hr />
//         <div className="dropdown">
//           <a
//             href="#"
//             className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <img
//               src="https://github.com/mdo.png"
//               alt=""
//               width="32"
//               height="32"
//               className="rounded-circle me-2"
//             />
//             <strong>mdo</strong>
//           </a>
//           <ul
//             className="dropdown-menu dropdown-menu-dark text-small shadow"
//             style=""
//           >
//             <li>
//               <a className="dropdown-item" href="#">
//                 New project...
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Settings
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Profile
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Sign out
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminBar;
