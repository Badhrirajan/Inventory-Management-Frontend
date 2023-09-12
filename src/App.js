import React from "react";
import Startpage from "./Components/Startpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import Email from "./Components/Email";
import Password from "./Components/Password";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import AddProducts from "./Components/AddProducts";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='' element={<Home />}></Route>
            <Route path='/productdetails' element={<ProductDetails />}></Route>
            <Route path='/prouductdetails/:id' element={<AddProducts />}></Route>
            <Route path='/userdetails' element={<UserDetails />}></Route>
          </Route>
        <Route path='/start' element={<Startpage />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/email' element={<Email />} />
        <Route path='/resetpassword' element={<Password />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
