import React from "react";
import { Footer, Navbar, Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
