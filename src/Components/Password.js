import React from 'react'

export default function Password() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
    <div className="p-3 rounded w-25 border loginForm">
      <form>
        <h4 className="text-center">Reset Password</h4>
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
        <div class="d-grid gap-2 d-md-block mt-3">
            <button class="btn btn-danger" type="button">
              Reset Password
            </button>
          </div>
        </form>
        </div>
        </div>

  )
}
