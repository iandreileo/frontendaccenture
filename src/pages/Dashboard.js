import React from "react";
import Footer from "../partials/Footer";

import Header from "../partials/Header";
import Promotions from "../partials/Promotions";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      {/* <AccountDetails /> */}
      <Promotions />
      <Footer />
    </div>
  );
};

export default Dashboard;
