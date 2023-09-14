import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Home() {
  const [count, setCount] = useState()
  // const [category, setCategory] = useState()

  useEffect(() => {
    fetch("http://localhost:5000/itemcount")
      .then((res) => res.json())
      .then((result) => {
        setCount(result)
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/categorycount")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCategory(result);
  //     });
  // }, []);

  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
          <div className="d-flex justify-content-around align-items-center p-4 border border-secondary shadow-sm">
            <i className="bi bi-cart-check-fill fs-1"></i>
            <div>
              <span>Total Product</span>
              <h2>12</h2>
            </div>
          </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
          <div className="d-flex justify-content-around align-items-center p-4 border border-secondary shadow-sm">
            <i className="bi bi-truck fs-1"></i>
            <div>
              <span>Orders</span>
              <h2>12</h2>
            </div>
          </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">          
          <div className="d-flex justify-content-around align-items-center p-4 border border-secondary shadow-sm">
            <i className="bi bi-graph-up-arrow fs-1"></i>
            <div>
              <span>Total Revenue</span>
              <h2>1,50,000</h2>
            </div>
          </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">          
          <div className="d-flex justify-content-around align-items-center p-4 border border-secondary shadow-sm">
            <i className="bi bi-graph-up-arrow fs-1"></i>
            <div>
              <span>Users</span>
              <h2>21</h2>
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
