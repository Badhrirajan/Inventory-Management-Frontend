import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Email() {
  const [email,setEmail] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({email}),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === "Email sent successfully!!") {
          Swal.fire({
            icon: "success",
            text: result,
          });
          navigate('/adminlogin')
        } else{
            Swal.fire({
                icon: "error",
                text: result.message,
            })
        }
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
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
