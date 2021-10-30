import React, { useState } from 'react';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      points: 150,
      description: 'Voucher de 20% la Altex',
    },
    {
      id: 2,
      points: 250,
      description: 'Voucher de 50lei la Emag',
    },
    {
      id: 3,
      points: 50,
      description: 'Voucher de 5% la Cel.ro',
    },
    {
      id: 4,
      points: 200,
      description: 'Voucher de 30% la Dominos',
    },
    {
      id: 4,
      points: 200,
      description: 'Voucher de 30% la Dominos',
    },
  ];
  const [selectedPromo, setSelectedPromo] = useState(0);
  return (
    <div className="container px-5 mx-auto">
      <div className="flex">
        <div class="max-w-sm">
          <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img
              class="rounded-t-lg"
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
              alt=""
            />
            <div class="py-6 px-8 rounded-lg bg-white">
              <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                Super oferta pentru tine!
              </h1>
              <p class="text-gray-700 tracking-wide">
                {promotions[selectedPromo]}
              </p>
              <button class="mt-6 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                Claim now
              </button>
            </div>
            <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span class="text-md">
                {promotions[selectedPromo].points} Points
              </span>
            </div>
          </div>
        </div>
        <div className="w-3/4 h-10 ml-6">
          <div className="grid grid-cols-3 gap-4">
            <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img
                class="rounded-lg"
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                alt=""
              />

              <button
                class=" absolute top-2 left-2 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={setSelectedPromo(1)}
              >
                See more
              </button>

              <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span class="text-md">{promotions[1].points} P</span>
              </div>
            </div>
            <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img
                class="rounded-lg"
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                alt=""
              />

              <button
                class=" absolute top-2 left-2 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={setSelectedPromo(2)}
              >
                See more
              </button>

              <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span class="text-md">{promotions[2].points} P</span>
              </div>
            </div>
            <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img
                class="rounded-lg"
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                alt=""
              />

              <button
                onClick={setSelectedPromo(3)}
                class=" absolute top-2 left-2 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                See more
              </button>

              <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span class="text-md">{promotions[3].points} P</span>
              </div>
            </div>
            <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img
                class="rounded-lg"
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                alt=""
              />

              <button
                onClick={setSelectedPromo(4)}
                class=" absolute top-2 left-2 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                See more
              </button>

              <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span class="text-md">{promotions[4].points} P</span>
              </div>
            </div>
            <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img
                class="rounded-lg"
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                alt=""
              />

              <button class=" absolute top-2 left-2 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                See more
              </button>

              <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span class="text-md">$150</span>
              </div>
            </div>
            <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img
                class="rounded-lg"
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                alt=""
              />

              <button class=" absolute top-2 left-2 py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                See more
              </button>

              <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span class="text-md">$150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
