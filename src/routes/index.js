import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import AboutUs from "../views/About";
import HomeLayout from "../component/HomeLayout";
import Tours from "../views/Tours";
import ManagerUsers from "../views/admin/ManageUsers";
import ManagerTrips from "../views/admin/ManageTrips";
import Dashboard from "../views/admin/Dashboard"

const Index = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/tours" element={<Tours />} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/users" element={<ManagerUsers/>} />
        <Route path="/admin/trips" element={<ManagerTrips/>} />
      </Routes>
    </HomeLayout>
  );
};
export default Index;
