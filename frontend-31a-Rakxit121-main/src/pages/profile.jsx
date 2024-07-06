import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { Col, Row } from "react-bootstrap";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const user = JSON.parse(localStorage.getItem("user"));
  const [activeTab, setActiveTab] = useState("accountDetails");
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    currentPassword: "",
  });

  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   getAllOrdersApi()
  //     .then((res) => {
  //       setOrders(res.data.orders);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching orders:", error);
  //     });
  // }, []);
  useEffect(() => {
    // Fetch user details from localStorage and populate the state
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserDetails({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phoneNumber: user.phoneNumber || "",
        emailAddress: user.emailAddress || "",
        currentPassword: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("User details updated:", userDetails);
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      password: "",
      confirmPassword: "",
      currentPassword: "",
    }));
  };

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <a href="#">Account Settings</a>
          </li>
          {/* <li className="breadcrumb-item active" aria-current="page">
            Orders
          </li> */}
        </ol>
      </nav>
      <h2 className="card-title">Account Settings</h2>
      <hr />

      <div className="profile container mt-4">
        <div className="col-md-20"></div>
        <div className="col-md-8 mx-auto">
          <div className="container mt-5">
            {/* <h2 className="mb-4">Your Orders</h2>
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Poster</h5>
                      <p className="card-text">Price: $220</p>
                      <p className="card-text">Quantity: 1</p>
                      <p className="card-text">Total: $220</p>
                      <Link
                        variant="primary"
                        onClick={() => alert("View Details clicked")}
                      >
                        View Details
                      </Link>
                    </div>
                  </div> */}
            <div className="row">
              {Array.isArray(orders) &&
                orders.map((order) => (
                  <div key={order.id} className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Order #{order.id}</h5>
                        <p className="card-text">Total: ${order.totalAmount}</p>
                        {/* Add other order details as needed */}
                        <Link
                          to={`/order/${order.id}`}
                          className="btn btn-primary"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="container active">
            <div className="mb-5 card">
              <div className="" style={{ padding: "10px" }}>
                <Row>
                  <Col md={6}>
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={userDetails.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </Col>
                </Row>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    maxLength={10}
                    name="phoneNumber"
                    value={userDetails.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="emailAddress"
                    value={userDetails.emailAddress}
                    onChange={handleInputChange}
                    placeholder="Eg. example@gmail.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="currentPassword"
                    value={userDetails.currentPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={userDetails.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={userDetails.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleFormSubmit}
                >
                  Update Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
