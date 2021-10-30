import React from 'react'
import { Link } from 'react-router-dom';

const CardQA = ({place}) => {

    return (
        <div class="w-full rounded-lg shadow-lg p-4">
            <h3 class="font-semibold text-lg tracking-wide">{place.title}</h3>
            <p class="text-gray-500 my-1">
            {place.question.slice(0,200) + '...'}
            </p>
            <div class="mt-2">
                <Link to={`/topic/${place.id}`} class="text-blue-700  inline-flex items-center font-semibold tracking-wide">
                    Read Answears
                    <span class="text-xl ml-2">&#8594;</span>
                </Link>
            </div>
        </div>
    )
}

export default CardQA;