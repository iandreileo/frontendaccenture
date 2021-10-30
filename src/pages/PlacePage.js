import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const PlacePage = () => {

  const {id} = useParams();
  const [place, setPlace] = useState({});
  const getPlaceById = async (id) => {
    await axios
    .get(`http://localhost:3000/getPlace?id=${id}`)
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
      <main className="flex-grow">

        {/*  Page sections */}
        <div className="container mx-auto">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <section class="blog text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap flex-col sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class="title-post font-bold text-7xl text-center break-all">{place.title}</div>
              <div class="bg-gray-300 h-56 w-6/12 rounded-lg shadow-md bg-cover bg-center self-center" style={{backgroundImage: `url(${place.image})`}}></div>
            </div>
        </div>
    </section>
                </div>
            </div>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
    )
}

export default PlacePage;