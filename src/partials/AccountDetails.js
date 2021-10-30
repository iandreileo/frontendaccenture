import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const AccountDetails = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-24 pb-8 mx-auto">
        <div class="flex flex-wrap w-full mb-8">
          <div class="w-full mb-6 lg:mb-0">
            <h1 class="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
              Account details: You have {user.points} points
            </h1>
            <div class="h-1 w-20 bg-blue-600 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccountDetails;
