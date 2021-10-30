import React from "react";
import { Link } from "react-router-dom";

const CardRestaurant = ({ restaurant }) => {
  return (
    <div class="p-4 md:w-1/4 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
      <div
        class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurant.image})` }}
      ></div>

      <div
        class="bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5"
        style={{ width: "20rem" }}
      >
        <div class="header-content inline-flex ">
          <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
            <div class="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
          </div>
          <div class="category-title flex-1 text-sm">
            {" "}
            {restaurant.category}
          </div>
        </div>
        <div class="title-post font-medium">{restaurant.title}</div>

        <div class="summary-post text-base text-justify">
          {restaurant.description.slice(0, 40) + "..."}
          <div class="text-sm">
            <strong>Added by:</strong> <i>{restaurant.addedBy || "Admin"}</i>
          </div>
          <div class="text-sm">
            <strong>Address:</strong> <i>{restaurant.address}</i>
          </div>
          <div>
            <ul class="flex text-right">
              <li>
                <i class="fas fa-star fa-sm text-yellow-500 mr-1"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-yellow-500 mr-1"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-yellow-500 mr-1"></i>
              </li>
              <li>
                <i class="far fa-star fa-sm text-yellow-500 mr-1"></i>
              </li>
              <li>
                <i class="far fa-star fa-sm text-yellow-500 mr-1"></i>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <Link
              to={`/restaurant/${restaurant.id}`}
              class="bg-blue-100 text-blue-500 mt-4 rounded p-2 text-sm "
            >
              <span class="">Read more</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;
