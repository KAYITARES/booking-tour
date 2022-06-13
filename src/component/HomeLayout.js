import React from "react";
import Nav from "./navbar";
import Footer from "./footer";

const HomaeLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <div style={{ minHeight: "90vh" }}>{children}</div>
      <Footer />
    </>
  );
};
export default HomaeLayout;
