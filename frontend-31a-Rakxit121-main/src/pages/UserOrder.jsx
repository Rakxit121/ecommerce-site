import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  //   useEffect(() => {
  //     getAllOrdersApi()
  //       .then((res) => {
  //         setOrders(res.data.orders);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching orders:", error);
  //       });
  //   }, []);

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <a href="#">Orders</a>
          </li>
        </ol>
      </nav>
      <h2 className="card-title">Orders</h2>
      <hr />

      <div className="profile container mt-4">
        <div className="col-md-8 mx-auto">
          <div className="container mt-5">
            <h2 className="mb-4">Your Orders</h2>

            <div className="row">
              {Array.isArray(orders) &&
                orders.map((order) => (
                  <div key={order.id} className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Order #{order.id}</h5>
                        <p className="card-text">Total: ${order.totalAmount}</p>
                        {/* Add other order details as needed */}
                        {/* For example, to display order date */}
                        <p className="card-text">Date: {order.date}</p>
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
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
