// import React, { useEffect, useState } from "react";
// import { getAllOrdersApi, getSingleProductApi } from "../../apis/api";

// const AdminOrderList = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch all orders when the component mounts
//         const ordersResponse = await getAllOrdersApi();

//         // Update the local state with order details
//         setOrders(ordersResponse.data.orders);

//         // Fetch additional user and product details for each order
//         const updatedOrders = await Promise.all(
//           ordersResponse.data.orders.map(async (order) => {
//             // Fetch user details based on user ID
//             // const userDetailsResponse = await getUserDetailsApi(order.userId);
//             // const userDetails = userDetailsResponse.data; // Replace with actual data structure

//             // Fetch product details based on product ID
//             const productDetailsResponse = await getSingleProductApi(
//               order.productId
//             );
//             const productDetails = productDetailsResponse.data; // Replace with actual data structure

//             // Calculate total product price based on quantity
//             const totalProductPrice =
//               order.quantity * productDetails.productPrice;

//             return {
//               ...order,
//               //   userName: userDetails.fullName, // Replace with actual property
//               //   userEmail: userDetails.email, // Replace with actual property
//               productName: productDetails.productName, // Replace with actual property
//               productPrice: totalProductPrice, // Update with the calculated total price
//             };
//           })
//         );

//         // Update the local state with additional details
//         setOrders(updatedOrders);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Admin Order List</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Customer Name</th>
//             <th>Email</th>
//             <th>Product Name</th>
//             <th>Product Price</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.userName}</td>
//               <td>{order.userEmail}</td>
//               <td>{order.productName}</td>
//               <td>${order.productPrice}</td>
//               <td>{order.status}</td>
//               <td>{/* Your action button or dropdown goes here */}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminOrderList;

import React, { useEffect, useState } from "react";

const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // For testing purposes, using static data instead of API calls
    const staticOrders = [
      {
        id: 1,
        userName: "John Doe",
        userEmail: "john@example.com",
        productName: "Product A",
        productPrice: 50,
        quantity: 2,
        status: "pending",
      },
      {
        id: 2,
        userName: "Jane Doe",
        userEmail: "jane@example.com",
        productName: "Product B",
        productPrice: 30,
        quantity: 1,
        status: "shipped",
      },
      // Add more static orders as needed
    ];

    setOrders(staticOrders);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Order List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.userName}</td>
              <td>{order.userEmail}</td>
              <td>{order.productName}</td>
              <td>${order.productPrice}</td>
              <td>{order.status}</td>
              <td>
                <div className="form-group">
                  <select
                    className="form-control"
                    value={order.status}
                    // onChange={(e) =>
                    // //   handleStatusUpdate(order.id, e.target.value)
                    // }
                  >
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderList;
