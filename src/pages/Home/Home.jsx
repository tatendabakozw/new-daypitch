import React from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import person from '../../images/Daypitch31.png'
import HomeSearch from '../../components/HomeSearch/HomeSearch'
import Stars from '../../components/banner/Stars'

function Home() {
    return (
        <HomeLayout>
            <div>
            <div className="transition duration-500 ease-in-out min-h-screen grid md:grid-cols-2 grid-cols-1 gap-2 bg-gray-50 dark:bg-gray-900 lg:px-32 md:px-16 px-4 w-full">
                        <div className="md:block hidden opacity-50 absolute z-0 w-full">
                            <Stars/>
                        </div>
                    <div className="md:my-auto pt-16 w-full">
                        
                        <div className="col-span-1 pt-8 flex flex-col md:items-start items-center w-full">
                            <p className="md:text-6xl text-gray-900  md:dark:text-gray-100 dark:text-geay-100 text-4xl mx-auto w-full mb-4 font-semibold z-40">Find the perfect location for your professionals</p>
                            <p className="md:w-full text-gray-800  md:dark:text-gray-100 dark:text-geay-100 md:mb-16 mb-8 w-full dark:text-gray-400 z-40">View Professionals in your local area for free</p>
                            {/* search component */}
                            <div className="w-full self-center flex mb-2 z-40">
                                <HomeSearch />
                            </div>
                            <p className="text-gray-900 text-xs self-start dark:text-gray-300 z-40">Popular: Mechanic, Health, Software</p>
                        </div>
                    </div>
                    <div className="col-span-1 overflow-hidden">
                        <div className="absolute md:flex z-20 hidden bottom-0 right-0">
                            <img src={person} alt='first' className="lg:max-h-[500px] md:max-h-[400] max-h-[250px]" />
                        </div>
                    </div>


                    <div className="blob md:block hidden absolute opacity-75 z-0 top-0 right-0">
                        <svg
                            width="900"
                            height="900"
                            viewBox="0 50 520 800"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <clipPath id="shape">
                                    <path fill="currentColor" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z"></path>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#shape)">
                                <path fill="#1E40AF" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z" />
                            </g>
                        </svg>
                    </div>
                    <div className="blob md:hidden block absolute opacity-75 z-0 top-0 right-0">
                        <svg
                            width="700"
                            height="800"
                            viewBox="200 20 500 800"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <clipPath id="shape">
                                    <path fill="currentColor" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z"></path>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#shape)">
                                <path fill="#1E40AF" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Home
