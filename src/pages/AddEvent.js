import React, { useContext, useState } from 'react';
import axios from 'axios';
import { HOST } from '../utils/CONSTANTS';
import { PORT } from '../utils/CONSTANTS';

import Header from '../partials/Header';

import { Toaster } from 'react-hot-toast';
import Footer from '../partials/Footer';
import { useHistory } from 'react-router';
import { UserContext } from '../providers/UserProvider';

function AddEvent() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState();
  const [user] = useContext(UserContext);
  let history = useHistory();

  const handleAddEvent = (event) => {
    event.preventDefault();
    axios.post(`${HOST}:${PORT}/addevent`, {
        title: title,
        image: image,
        description: description,
        date: date,
        category: category,
        addedBy: user.uid,
        uid: user.uid
      })
      .then(function (response) {
        history.push("/main");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Header />

      {/*  Page content */}
      <Toaster position="bottom-center" />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Add a new event
                </h1>
              </div>

              <div className="max-w-sm mx-auto">
                <form onSubmit={handleAddEvent}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="title"
                      >
                        Title <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="title"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
       
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="image"
                      >
                        Image url <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="image"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter image url"
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="description"
                      >
                        Description <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="description"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="date"
                      >
                        Date <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="address"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter address"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="category"
                      >
                        Category <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="category"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter category"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                        Add event
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AddEvent;