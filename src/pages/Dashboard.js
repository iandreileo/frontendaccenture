import React from 'react';
import AccountDetails from '../partials/AccountDetails';

import Header from '../partials/Header';
import Promotions from '../partials/Promotions';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <AccountDetails />
      <Promotions />
    </div>
  );
};

export default Dashboard;
