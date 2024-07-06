import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../apis/api";
import "../style/Login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      const res = await loginUserApi({ email, password });
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.userData));
      }
    } catch (err) {
      toast.error("Server error");
      console.error(err.message);
    }
  };

  return (
    // <div className="content">
    //   <div className="container_login card">
    //     <div className="col-md-6 contents_login">
    //       <div className="mb-4">
    //         <h3>Sign In</h3>
    //         <p className="mb-4">
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
    //           sit aut eos consectetur adipisicing.
    //         </p>
    //       </div>
    //       <form className="m-4 w-100">
    //         <div className="form-group">
    //           <label htmlFor="username">Email</label>
    //           <input
    //             onChange={changeEmail}
    //             type="text"
    //             className="form-control mb-3"
    //             placeholder="Enter your Email"
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="password">Password</label>
    //           <input
    //             onChange={changePassword}
    //             type="password"
    //             className="form-control mb-4"
    //             placeholder="Enter your Password"
    //           />
    //         </div>
    //         <div className="form-group d-flex align-items-center justify-content-between mb-4">
    //           <div className="form-check">
    //             <input
    //               type="checkbox"
    //               className="form-check-input"
    //               id="rememberMe"
    //             />
    //             <label className="form-check-label" htmlFor="rememberMe">
    //               Remember me
    //             </label>
    //           </div>
    //           <a className="forgot-pass">Forgot Password ?</a>
    //         </div>
    //         <button
    //           type="submit"
    //           className="btn btn-block btn-primary"
    //           onClick={handleSubmit}
    //         >
    //           Log In
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="container my-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <i
                  className="fas fa-cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                ></i>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <div className="mb-4">
                <label htmlFor="formControlLg" className="form-label">
                  Email address
                </label>
                <input
                  onChange={changeEmail}
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="formControlLg" className="form-label">
                  Password
                </label>
                <input
                  onChange={changePassword}
                  type="password"
                  className="form-control mb-4"
                  placeholder="Enter your Password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-block btn-primary"
                onClick={handleSubmit}
              >
                Log In
              </button>
              <Link to="/forgotpassword" className="small text-muted">
                Forgot password?
              </Link>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>
              <div className="d-flex flex-row justify-content-start">
                <a className="small text-muted me-1">Terms of use.</a>
                <a className="small text-muted">Privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
