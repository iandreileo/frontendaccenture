import React, { useContext, useState } from 'react';
import Modal from '../utils/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../providers/UserProvider';
import axios from 'axios';
import { HOST, PORT } from '../utils/CONSTANTS';

const Promotions = () => {
  const [user, setUser] = useContext(UserContext);
  const [selectedPromo, setSelectedPromo] = useState();
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      points: 10,
      description: 'Voucher de 20% la Altex',
      oferitde: 'Altex',
      code: "ALTEX20"
    },
    {
      id: 2,
      points: 250,
      description: 'Voucher de 50lei la Emag',
      oferitde: 'BACANIE LOCALA',
      code: "EMAG50"
    },
    {
      id: 3,
      points: 50,
      description: 'Voucher de 5% la Cel.ro',
      oferitde: 'Cel.ro',
      code: "CEL5"
    },
  ])

  const toastTest = () => {
    toast('Thank you for claim! You will receive a email with coupon code. CODE: ASDAZC', {
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
  
  const claim = (item) => {
    if(user.points >= item.points) {
      // Scadem puncte
          axios.post(`${HOST}:${PORT}/substractPoints`, {
          uid: user.uid,
          points: item.points
      })
      .then(function (response) {
        let newUser = user;
        user.points = user.points - item.points;
        setUser(newUser); 
        toastTest();
        const test = promotions.filter(function(value, index) {
          return value.id != item.id;
        });
        setPromotions(test)
        console.log(test)
        // console.log(user)
      })
      .catch(function (error) {
        console.log(error);
      });

    } else {
      toast.error('You don\'t have enough points!', {
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
 
  }

  return (
    <>
        <section class="text-gray-600 body-font">
      <div class="container px-5 pt-24 mx-auto">
        <div class="flex flex-wrap w-full mb-8">
          <div class="w-full mb-6 lg:mb-0">
          <h1 class="mb-2 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Hello, {user.name}! </h1>
          <p>Here you can claim voucher from local partners.</p>
          <p className="title-font font-black">You have: {user.points} points.</p>
          </div>
        </div>
      </div>
    </section>
<section class="text-gray-600 body-font mb-12">
  <div class="container mx-auto max-w-7x1">
    <div class="flex flex-wrap -m-4">
      {
        promotions.map((item, index) => {
          return (
            <div class="xl:w-1/3 md:w-1/2 p-4" onClick={() => claim(item)}>
            <div class="bg-white p-6 rounded-lg">
              <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://media.londontheatredirect.com/voucher/email-images/generic-voucher.png" alt="Image Size 720x400"/>
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.points} points</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font">{item.description}</h2>
              <p class="leading-relaxed text-base">Offered by: {item.oferitde}</p>
              <a class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 mt-4"><span>Claim Now</span><svg class="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero"></path></svg></a>
            </div>
          </div>
          )
        })
      }
    </div>
  </div>
  <Toaster position="bottom-center" />
</section>
    
</>
  );
};

export default Promotions;