import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import Card from '../utils/Card';

const Home = () => {

    const [places, setPlaces] = useState([]);
    const getPlaces = async () => {
        await axios
        .get(`http://localhost:3000/getPlaces`)
        .then((response) => {
          let array = [];
          for (let i = 0; i < response.data.length; i++) {
            array.push(response.data[i]);
          }
          setPlaces(array);
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
                <section class="blog text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {
                    places.map(
                        (place) => (
                          <Card place={place} />
                        ))
                }
            </div>
        </div>
    </section>
                </div>
            </div>
        

            <Footer />

        </>

    )
}

export default Home;