import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/presentation/header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

const LayoutRoute = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default LayoutRoute;
