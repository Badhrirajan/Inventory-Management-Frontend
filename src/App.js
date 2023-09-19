import React from "react";
import Startpage from "./Components/Startpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSign from "./Components/AdminSign";
import AdminLogin from "./Components/AdminLogin";
import Email from "./Components/Email";
import Password from "./Components/Password";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import AddProducts from "./Components/AddProducts";
import UserDetails from "./Components/UserDetails";
import EditProduct from "./Components/EditProduct";
import UserSign from "./Components/UserSign";
import UserLogin from "./Components/UserLogin";
import UserDashboard from "./Components/UserDashboard";
import UserProduct from "./Components/UserProduct";
import Orderproduct from "./Components/Orderproduct";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<Home />}></Route>
            <Route path='/dashboard/productdetails' element={<ProductDetails />}></Route>
            <Route path='/dashboard/productdetails/addproduct' element={<AddProducts />}></Route>
            <Route path='/dashboard/productdetails/editproduct/:id' element={<EditProduct />}></Route>
            <Route path='/dashboard/userdetails' element={<UserDetails />}></Route>
          </Route>
          <Route path='/userdashboard' element={<UserDashboard />}>
            <Route path='' element={<UserProduct />}></Route>
            <Route path='/userdashboard/orderproduct/:id' element={<Orderproduct />}></Route>
          </Route>
        <Route path='/' element={<Startpage />} />
        <Route path='/createadmin' element={<AdminSign />} />
        <Route path='/createuser' element={<UserSign />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/email' element={<Email />} />
        <Route path='/resetpassword/:id/:token' element={<Password />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
