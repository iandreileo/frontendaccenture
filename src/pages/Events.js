import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import Card from '../utils/Card';
import { UserContext } from '../providers/UserProvider';
import CardEvent from '../utils/CardEvent';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [user] = useContext(UserContext);
    const getPlaces = async () => {
        await axios
        .get(`http://localhost:3000/getEvents`)
        .then((response) => {
          let array = [];
          for (let i = 0; i < response.data.length; i++) {
            array.push(response.data[i]);
          }
          setEvents(array);
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
                <h1 class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate text-center" data-aos="zoom-y-out">Events in <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{user.newLocation}</span></h1>
                <section class="blog text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
        <div class="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2">
                {
                    events.map(
                        (event) => (
                          <CardEvent place={event} />
                        ))
                }
            </div>
        </div>
    </section>
                </div>
            </div>
        

            <Footer />

        </>
    );
}


export default Events;