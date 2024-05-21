import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ComingSoon from "../pages/ComingSoon";
import NotFound from "../pages/NotFound";
import Dasboard from "../pages/Dasboard";
import NewBlog from "../pages/NewBlog";
import Detail from "../pages/Detail";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dasboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
          <Route path="blogdetails" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="twitter" element={<ComingSoon/>}/>
        <Route path="facebook" element={<ComingSoon/>}/>
        <Route path="instagram" element={<ComingSoon/>}/>
        <Route path="github" element={<ComingSoon/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default AppRouter;
