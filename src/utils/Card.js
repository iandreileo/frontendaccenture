import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({place}) => {

    return (
        <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
        <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: `url(${place.image})`}}></div>

        <div class="bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5" style={{width: "20rem"}}>
          
          <div class="header-content inline-flex ">
            <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
              <div class="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
            </div>
            <div class="category-title flex-1 text-sm"> {place.category}</div>
          </div>
          <div class="title-post font-medium">{place.title}</div>

          <div class="summary-post text-base text-justify"> {place.text}
            <button class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><Link to={`/place/${place.id}`}><span class="">Read more</span></Link></button>
          </div>
         
        </div>
      </div>
    )
}

export default Card;