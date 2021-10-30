import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../providers/UserProvider';

const EventPage = () => {

  const {id} = useParams();
  const [place, setPlace] = useState({});
  const [user] = useContext(UserContext);
  const getPlaceById = async (id) => {
    await axios
    .get(`http://localhost:3000/getEvent?id=${id}`)
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
          <h2 class="mt-2 text-sm text-gray-500"><strong>Organised by: </strong> <i>{place.addedBy}</i></h2>
          <h2 class="mt-2 text-sm text-gray-500"><strong>Date: </strong> <i>{place.date}</i></h2>
          <h2 class="mt-2 text-sm text-gray-500"><strong>Category: </strong> <i>{place.category}</i></h2>
          <h2 class="mt-2 text-sm text-gray-500"><strong>Location: </strong> <i>{user.newLocation}</i></h2>

          <div class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 mt-4" onClick={
            () => {
              toast.success('Thank you! You have successfully registered for this event! You will receive an email with aditional informations.', {
                duration: 10000,
                position: 'middle-center',
                // Styling
                style: {},
                className: '',
                // Custom Icon
                icon: '👏',
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
            }
          }><span>JOIN EVENT</span><svg class="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero"></path></svg></div>
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
      <Toaster position="bottom-center" />

    </div>
    )
}

export default EventPage;