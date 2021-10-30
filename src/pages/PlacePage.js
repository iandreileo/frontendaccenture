import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const PlacePage = () => {

  const {id} = useParams();

    useEffect(() => {
      }, []);

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        ID primit: {id}
        </div>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
    )
}

export default PlacePage;