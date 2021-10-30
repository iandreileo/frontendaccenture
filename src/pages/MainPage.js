import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import Loading from '../partials/Loading';
import { LoadingContext } from '../providers/LoadingProvider';
import { UserContext } from '../providers/UserProvider';
import { HOST } from '../utils/CONSTANTS';



const MainPage = () => {

    const [user] = useContext(UserContext);
    const [loading] = useContext(LoadingContext);
 
    return (
        
            loading ?
            <Loading/> :
        
        <>
        <Header />
<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            {/* <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Places in {user.newLocation} </h2> */}
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Places in {user.newLocation} </h1>
            {/* <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p> */}
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/places" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> If you want to win bonus points, add a place. <br class="hidden lg:block"/>
                <Link to="/addPlace" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Add a new place » </Link>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2015%2F11%2Fbeautiful-places-world-1200x900.jpg"/>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://www.discoverlosangeles.com/sites/default/files/images/2019-01/laxbw-prime-1715-hor-wide.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp"/>
        </div>
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:mb-0">
            {/* <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Restaurants in {user.newLocation} </h2> */}
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Restaurants in {user.newLocation} </h1>
            {/* <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p> */}
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/restaurants" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">  If you want to win bonus points, add a restaurant. <br class="hidden lg:block"/>
                <Link to="/addRestaurant" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Add a new restaurant » </Link>
                </p>
            </div>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            {/* <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Local Customs in {user.newLocation} </h2> */}
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Local Customs in {user.newLocation} </h1>
            {/* <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p> */}
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/localcustoms" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> If you want to win bonus points, add a local custom. <br class="hidden lg:block"/>
                <Link to="/addLocalCustom" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Add a new local custom » </Link>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="http://gajj42edaf-flywheel.netdna-ssl.com/wp-content/uploads/sites/2/2020/09/woody10-768x576.jpg"/>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://www.vannormanlaw.com/wp-content/uploads/2021/03/RuleofLaw.jpg"/>
        </div>
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:mb-0">
            {/* <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Local Laws in {user.newLocation} </h2> */}
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Local Laws in {user.newLocation} </h1>
            {/* <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p> */}
            <div class="flex flex-col justify-center lg:flex-row">
            <Link to="/locallaws" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> If you want to win bonus points, add a local law. <br class="hidden lg:block"/>
                <Link to="/addLocalLaw" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Add a new local custom » </Link>
                </p>
            </div>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            {/* <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Events in {user.newLocation} </h2> */}
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Events in {user.newLocation} </h1>
            {/* <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p> */}
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/events" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> If you want to win bonus points, add an event. <br class="hidden lg:block"/>
                <Link to="/addEvent" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Add a new event » </Link>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://i0.wp.com/www.oxbridgeacademy.edu.za/blog/wp-content/uploads/2019/06/Music-Events-Marketing-1.jpg?resize=1000%2C640&ssl=1"/>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://stars4media.eu/wp-content/uploads/2021/03/getty_617570002_275666.jpg"/>
        </div>
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:mb-0">
            {/* <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Q&A from {user.newLocation} </h2> */}
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Q&A from {user.newLocation} </h1>
            {/* <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p> */}
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/qa" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> If you have a question, create a topic. <br class="hidden lg:block"/>
                <Link to="/addTopic" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Create a new topic » </Link>
                </p>
            </div>
        </div>
    </div>
</div>
<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            {/* <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Events in {user.newLocation} </h2> */}
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Get your local guide now! </h1>
            {/* <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p> */}
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/events" class="flex items-center px-10 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> I want my personal guide! </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> Do you want to became a guide in {user.newLocation}? <br class="hidden lg:block"/>
                <Link to="/addEvent" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Be a guide » </Link>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://www.checkfront.com/blog/what-makes-a-top-notch-tour-guide/how-to-be-the-best-tour-guide"/>
        </div>
    </div>
</div>
        <Footer />
        </>
    );

}

export default MainPage;