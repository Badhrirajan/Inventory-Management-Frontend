import React from "react";
import { Link } from "react-router-dom";

export default function Email() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <form>
          <h4 className="text-center">Forgot Password</h4>
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
          <div class="d-grid gap-2 d-md-block mt-3">
            <Link to='/resetpassword'><button class="btn btn-dark text-white" type="button">
              Send Link
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
