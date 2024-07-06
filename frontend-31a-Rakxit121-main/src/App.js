import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AdminBar from './components/AdminBar'; // Import AdminBar component
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddToCartPage from './pages/AddToCartPage';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import ProductPage from './pages/ProductPage';
import Profile from './pages/Profile';
import Registerpage from './pages/Registerpage';
import Shop from './pages/Shop';
import UserOrder from './pages/UserOrder';
import Admindashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import AdminOrderList from './pages/admin/AdminOrderList';
import AdminUserList from './pages/admin/AdminUserList';
import AdminRoutes from './pages/protected/AdminRoutes';
import UserRoutes from './pages/protected/UserRoutes';

function App() {
  // Retrieve user info from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      {/* Conditionally render Navbar or AdminBar based on user role */}
      {user && (user.isAdmin || user.isLoggedIn) ? <AdminBar /> : <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/* Protect routes for authenticated users */}
        <Route element={<UserRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<AddToCartPage />} />
          <Route path="/wishlist" element={<h1>wishlist</h1>} />
          <Route path="/orders" element={<UserOrder />} />
        </Route>
        {/* Protect routes for admin users */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<Admindashboard />} />
          <Route path="/admin/edit/:id" element={<AdminEditProduct />} />
          <Route path="/admin/orders" element={<AdminOrderList />} />
          <Route path="/adin/users" element={<AdminUserList />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
