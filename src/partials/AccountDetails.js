import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const AccountDetails = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-24 mx-auto">
        <div class="flex flex-wrap w-full mb-8">
          <div class="w-full mb-6 lg:mb-0">
            <h1 class="mb-2 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
              {" "}
              Hello, {user.name}!{" "}
            </h1>
            <p>Here you can claim voucher from local partners.</p>
            <p className="title-font font-black">
              You have: {user.points} points.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccountDetails;
