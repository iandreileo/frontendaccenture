import React, {useEffect, useState} from 'react';
import Card from '../utils/Card';

const Home = () => {

    const [places, setPlaces] = useState([]);
    const getPlaces = () => {
        let array = [
            {
                "id": "1",
                "image": "https://picsum.photos/200",
                "category": "Travel",
                "title": "Cacat",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.",
            },
            {
                "id": "2",
                "image": "https://picsum.photos/200",
                "category": "Travel",
                "title": "Pisat",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.",
            },
            {
                "id": "3",
                "image": "https://picsum.photos/200",
                "category": "Travel",
                "title": "Apa plata",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.",
            },
        ];
        setPlaces(array);
    };

    useEffect(() => {
        getPlaces();
      }, []);

    return (
        <section class="blog text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {
                    places.map(
                        (place) => (
                          <Card place={place} />
                        ))
                }
            </div>
        </div>
    </section>
    )
}

export default Home;