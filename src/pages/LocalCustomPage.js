import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const LocalCustomPage = () => {

  const {id} = useParams();
  const [place, setPlace] = useState({});
  const getPlaceById = async (id) => {
    await axios
    .get(`http://localhost:3000/getLocalCustom?id=${id}`)
    .then((response) => {
      setPlace(response.data[0]);
    });
  }

    useEffect(() => {
        getPlaceById(id);
      }, []);

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <div className="container mx-auto">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <section class="blog text-gray-700 body-font">
        <div class="container px-5 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <main class="relative container mx-auto bg-white px-4">

        <div class="test mt-[-10%] w-1/2 mx-auto">
          <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img class="w-full h-full inset-0 object-cover" src={place.image} alt="" />
          </div>
        </div>

        <article class="max-w-prose mx-auto py-8">
          <h1 class="text-3xl font-bold">{place.title}</h1>
          <h2 class="mt-2 text-sm text-gray-500"><strong>Added by</strong> <i>{place.addedBy}</i></h2>

          <p class="mt-6 text-justify">{place.description}</p>
        </article>
      </main>
            </div>
        </div>
    </section>
                </div>
            </div>

      {/*  Site footer */}
      <Footer />

    </div>
    )
}

export default LocalCustomPage;