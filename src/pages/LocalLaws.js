import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { UserContext } from "../providers/UserProvider";
import CardLocalLaws from "../utils/CardLocalLaws";

const LocalLaws = () => {
  const [localLaws, setLocalLaws] = useState([]);
  const [user] = useContext(UserContext);
  const getPlaces = async () => {
    await axios.get(`http://localhost:3000/getlocallaws`).then((response) => {
      let array = [];
      for (let i = 0; i < response.data.length; i++) {
        array.push(response.data[i]);
      }
      setLocalLaws(array);
    });
  };

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <>
      <Header />

      <div className="container mx-auto">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <h1
            class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate text-center"
            data-aos="zoom-y-out"
          >
            Local Laws in{" "}
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {user.newLocation}
            </span>
          </h1>
          <section class="blog text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {localLaws.map((locallaw) => (
                  <CardLocalLaws place={locallaw} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LocalLaws;
