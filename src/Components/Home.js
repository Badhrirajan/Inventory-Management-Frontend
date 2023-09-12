import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Home() {
  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
          <div className="d-flex justify-content-around align-items-center p-4 border border-secondary shadow-sm">
            <i className="bi bi-currency-dollar fs-1"></i>
            <div>
              <span>Sales</span>
              <h2>234</h2>
            </div>
          </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
          <div className="d-flex justify-content-around align-items-center p-4 border border-secondary shadow-sm">
            <i className="bi bi-truck fs-1"></i>
            <div>
              <span>Delivery</span>
              <h2>23</h2>
            </div>
          </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">          
          <div className="d-flex justify-content-around align-items-center p-4 border border-secondary shadow-sm">
            <i className="bi bi-graph-up-arrow fs-1"></i>
            <div>
              <span>Increase</span>
              <h2>256</h2>
            </div>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 p-3">
            PieChart
          </div>
          <div className="col-12 col-md-4 p-3">
            LineChart
          </div>
        </div>
      </div>
    </div>
    )
}
