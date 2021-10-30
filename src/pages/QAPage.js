import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { UserContext } from "../providers/UserProvider";
import { createAnswear } from "../Api";
import toast, { Toaster } from "react-hot-toast";

const QAPage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [show, setShow] = useState(false);
  const [answear, setAnswear] = useState("");
  const [user] = useContext(UserContext);

  const getPlaceById = async (id) => {
    await axios
      .get(`http://localhost:3000/gettopic?id=${id}`)
      .then((response) => {
        setPlace(response.data[0]);
      });
  };

  const handleSubmitAnswear = () => {
    if (answear) {
      createAnswear(answear, user.name, id, user.uid).then(() => {
        getPlaceById(id).then(() => {
          toast.success("Succes! You received 20 points!");
          setAnswear("");
        });
      });
    } else {
      toast.error("Please enter a comment!");
    }
  };

  useEffect(() => {
    getPlaceById(id);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      <Toaster position="bottom-center" />

      {/*  Page content */}
      <div className="container mx-auto">
        <div className="pt-32 md:pt-40 md:pb-20">
          <section class="blog text-gray-700 body-font">
            <div class="container px-5 pt-24 mx-auto">
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <main class="relative container mx-auto bg-white px-4">
                  <div class="test mt-[-10%] w-1/2 mx-auto">
                    <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
                      <img
                        class="w-full h-full inset-0 object-cover"
                        src={place.image}
                        alt=""
                      />
                    </div>
                  </div>

                  <article class="max-w-prose mx-auto py-8">
                    <h1 class="text-3xl font-bold">{place.title}</h1>
                    <h2 class="mt-2 text-sm text-gray-500">
                      <strong>Added by</strong> <i>{place.addedBy}</i>
                    </h2>

                    <p class="mt-6">{place.question}</p>
                  </article>
                </main>
              </div>
            </div>
          </section>
        </div>

        <div className="answears max-w-prose mx-auto py-8">
          <div
            class="w-full rounded-lg shadow-lg p-4"
            onClick={() => setShow(!show)}
          >
            <h3 class="font-semibold text-lg tracking-wide">
              Click here to add comment
            </h3>
          </div>

          {show ? (
            <div class="w-full rounded-lg shadow-lg p-4">
              <form class="w-full max-w-lg">
                <label class="block text-left">
                  <textarea
                    class="form-textarea mt-1 block w-full"
                    rows="3"
                    placeholder="Enter your answer."
                    value={answear}
                    onChange={(e) => {
                      setAnswear(e.target.value);
                    }}
                  ></textarea>
                </label>
                <div
                  class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 mt-4"
                  onClick={handleSubmitAnswear}
                >
                  <span>Send answer</span>
                  <svg
                    class="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </div>
                <div class="text-gray-400 text-sm mt-2">
                  * You will receive 20 points for this answer.
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
          <div class="w-full rounded-lg my-4 p-4 text-medium font-bold">
            The answers for: {place.title}
          </div>
          {place.answears
            ? place.answears.map((item, index) => {
                return (
                  <div class="w-full rounded-lg shadow-lg p-4">
                    <p class="text-black-700 my-1">{item.answear}</p>
                    <h2 class="mt-2 text-sm text-gray-500">
                      <strong>Added by</strong> <i>{item.addedBy}</i>
                    </h2>
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default QAPage;
