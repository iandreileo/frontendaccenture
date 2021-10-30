import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import Loading from '../partials/Loading';
import { LoadingContext } from '../providers/LoadingProvider';
import { UserContext } from '../providers/UserProvider';



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
            <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Places in {user.newLocation} </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Medium length display headline. </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/places" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br class="hidden lg:block"/>
                <a href="#" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
        </div>
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:mb-0">
            <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Restaurants in {user.newLocation} </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Medium length display headline. </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/restaurants" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br class="hidden lg:block"/>
                <a href="#" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p>
            </div>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Local Customs in {user.newLocation} </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Medium length display headline. </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/localcustoms" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br class="hidden lg:block"/>
                <a href="#" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
        </div>
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:mb-0">
            <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Local Laws in {user.newLocation} </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Medium length display headline. </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
            <div class="flex flex-col justify-center lg:flex-row">
            <Link to="/locallaws" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br class="hidden lg:block"/>
                <a href="#" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p>
            </div>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Events in {user.newLocation} </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Medium length display headline. </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/events" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br class="hidden lg:block"/>
                <a href="#" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p>
            </div>
        </div>
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
        </div>
    </div>
</div>

<div class="text-blueGray-700 bg-white pt-20">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
        </div>
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:mb-0">
            <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Q&A from {user.newLocation} </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Medium length display headline. </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
            <div class="flex flex-col justify-center lg:flex-row">
                <Link to="/qa" class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </Link>
                <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. <br class="hidden lg:block"/>
                <a href="#" class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                </p>
            </div>
        </div>
    </div>
</div>
        <Footer />
        </>
    );

}

export default MainPage;