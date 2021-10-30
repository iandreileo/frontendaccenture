import React from 'react'
import { Link } from 'react-router-dom';

const CardEvent = ({place}) => {

    return (
        <Link to={`/event/${place.id}`}>
        <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
        <div class="rounded-md flex-1">
            <img alt="mountain" class="rounded-md" src={place.image} />
        </div>
         <div id="body" class="flex flex-col ml-5 flex-1">
            <h4 id="name" class="text-xl font-semibold mb-2">{place.title}</h4>
            <p id="job" class="text-gray-800 mt-2">{place.description.slice(0,200) + '...'}</p>
            <div class="mt-5">
               <p class=""><b>Date:</b> {place.date || '2021'}</p>
            </div>
            <div class=" mt-2">
               <p class=""><b>Organised by:</b> {place.addedBy || 'Admin'}</p>
            </div>
         </div>
    </div>
        </Link>

    )
}

export default CardEvent;