import React from "react";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <form>
          <h4 className="text-center">Login</h4>
          <div>
            <label htmlFor="email">
              <h6>Email</h6>
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email id"
            />
          </div>
          <div>
            <label htmlFor="password">
              <h6>Password</h6>
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="row">
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-success mt-3">
                Login
              </button>
            </div>
            <div className="col-6">
              <Link to="/email" style={{ color: "red" }}>
                <p className="text-end">Forgot Password</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
