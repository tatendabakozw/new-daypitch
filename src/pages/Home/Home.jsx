import React from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import person from '../../images/nomad3.svg'
import HomeSearch from '../../components/HomeSearch/HomeSearch'
import Stars from '../../components/banner/Stars'
import first from '../../images/homeBuy.svg'
import second from '../../images/homeInvest.svg'
import third from '../../images/homeQuick.svg'
import { useHistory } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/outline'

function Home() {

    return (
        <HomeLayout>
            <div className="home pb-16">
            <div className="relative transition duration-500 ease-in-out min-h-screen grid md:grid-cols-2 grid-cols-1 gap-2 bg-gray-50 dark:bg-gray-900 lg:px-32 md:px-16 px-4 w-full">
                    <div className="md:block hidden absolute z-0 w-full opacity-50">
                        <Stars />
                    </div>
                    <div className="md:my-auto my-auto pt-16 w-full">

                        <div className="col-span-1 pt-8 flex flex-col md:items-start items-center w-full">
                            <p className="md:text-7xl text-gray-900  md:dark:text-gray-100 dark:text-geay-100 text-4xl mx-auto w-full mb-4 font-semibold z-40">Find the perfect location for your professionals</p>
                            <p className="md:w-full text-gray-800  md:dark:text-gray-100 dark:text-geay-100 md:mb-16 mb-8 w-full dark:text-gray-400 z-40">View Professionals in your local area for free</p>
                            
                            {/* search component */}
                            <div className="w-full self-center flex mb-2 z-40">
                                <HomeSearch />
                            </div>
                            <p className="text-gray-900 text-xs self-start dark:text-gray-300 z-40">Popular: Mechanic, Health, Software</p>
                        </div>
                    </div>

                    <div className="col-span-1 overflow-hidden">
                        <div className="absolute z-20 md:bottom-0 md:opacity-100 opacity-80 -bottom-16 right-0 md:mt-0 mt-8">
                            <img src={person} alt='first' className="lg:max-h-[500px] md:max-h-[400] max-h-[250px]" />
                        </div>
                    </div>


                    <div className="blob md:block hidden absolute z-0 top-0 right-0">
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
                            <g clipPath="url(#shape)">
                                <path fill="#1E3A8A" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z" />
                            </g>
                        </svg>
                    </div>
                    <div className="blob md:hidden block opacity-75 absolute z-0 top-0 right-0">
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
                            <g clipPath="url(#shape)">
                                <path fill="#1E40AF" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z" />
                            </g>
                        </svg>
                    </div>

                </div>

                {/* // category items */}
                <div className="flex flex-col items-center md:pt-40 md:px-16 pt-16 px-4 z-20 pb-36 w-full">
                    <p className="text-gray-700 text-4xl dark:text-gray-200 text-center font-semibold mb-24 md:px-32 px-8">Easily prototype and communicate your vision</p>
                    <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-40 md:gap-16 gap-8 items-center">
                        <HomeViewComponent
                            className="col-span-1"
                            picture={first}
                            description={'Mix and match best professionals as a seller'}
                            heading={'Communication'}
                            id={1}
                            />
                        <HomeViewComponent
                            className="col-span-1"
                            picture={second}
                            description={'No need for advertisement, because we do it for you'}
                            heading={'Advertisement'} 
                            id={2}
                            />
                        <HomeViewComponent
                            className="col-span-1"
                            picture={third}
                            description={'Dont waste time, jump to the task buy either becoming a professional or becoming a buyer'}
                            heading={'Quick'} 
                            id={3}
                            />
                    </div>
                </div>

                {/* // category loading */}
                {/* <div className="md:pt-16 md:px-16 pt-4 px-4 z-20 flex flex-col">
                    <p className="text-gray-700 dark:text-gray-400 text-3xl pb-8 self-center font-semibold z-20">Categories</p>
                        <>
                            <div className="md:grid hidden md:grid-cols-5 grid-col-2 gap-8">
                                <CategoryLoading />
                                <CategoryLoading />
                                <CategoryLoading />
                                <CategoryLoading />
                                <CategoryLoading />
                                
                            </div>
                            <div className="grid md:hidden grid-cols-2 gap-4">
                                <CategoryLoading />
                                <CategoryLoading />
                            </div>
                        </>

                    <div className="absolute top-0 right-0 bg-gradient-to-l from-gray-50 dark:from-gray-800 h-10 w-3/12" />
                </div > */}

                {/* // paying boxes */}
                <div className="flex flex-col items-center md:pt-16 md:px-16 pt-4 px-4 z-20 pb-16">
                    <p className="text-2xl text-gray-700 dark:text-gray-400 text-center font-semibold mb-16">Professionals price arrangements</p>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-8">
                        <FreeComponent className="col-span-1" />
                        <PayComponent className="col-span-1" />
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

const HomeViewComponent = ({ className, picture, description, heading, id }) => {
    return (
        <div key={id}>
            <div className={`${className} flex flex-col w-64 items-center`}>
                <img src={picture} className="w-60 mb-4" alt="buy" />
                <h3 className="text-gray-800 dark:text-gray-200 mb-2 font-semibold">{heading}</h3>
                <p className="font-gray-500 dark:text-gray-400 text-center text-sm">{description}</p>
            </div>
        </div>
    )
}

// login as a free user
const FreeComponent = ({ className }) => {
    const history = useHistory()
    return (
        <>
            <div className={`${className} flex flex-col bg-blue-100 p-4 rounded-lg`}>
                <p className="text-gray-800 font-semibold text-center mb-1">Free Tier</p>
                <p className="text-gray-800 text-xl font-extrabold text-center mb-1"><sup className="font-semibold">$</sup> 0</p>
                <p className="text-gray-500 text-xs text-center mb-4">Free for a lifetime</p>
                <span className="flex flex-row items-center text-xs text-left text-gray-800 mb-1">
                    {/* <p className="text-green-600 font-semibold">✓</p> */}
                    <p className="text-red-500 font-semibold">&#10006;</p>
                    <p className="">Unlimited uploads</p>
                </span>
                <span className="flex flex-row items-center text-xs text-left text-gray-800 mb-1">
                    {/* <p className="text-green-600 font-semibold">✓</p> */}
                    <p className="text-red-500 font-semibold">&#10006;</p>
                    <p className="">Free onsight comminication</p>
                </span>
                <span className="flex flex-row items-center text-xs text-left text-gray-800 mb-1">
                    {/* <p className="text-green-600 font-semibold">✓</p> */}
                    <p className="text-red-500 font-semibold">&#10006;</p>
                    <p className="">Approved as professional</p>
                </span>
                <span className="flex flex-row items-center text-xs text-left text-gray-800 mb-4">
                    {/* <p className="text-green-600 font-semibold">✓</p> */}
                    <p className="text-red-500 font-semibold">&#10006;</p>
                    <p className="">Free advertisement</p>
                </span>
                <button onClick={() => history.push('/register')} className="text-gray-50 bg-blue-800 mb-4 p-2 rounded-lg outline-none border-none w-56 text-sm">Try it out for free</button>
                <small className="text-gray-500 text-center text-xs">No credit card needed</small>
            </div>
        </>
    )
}

//register as a paid user
const PayComponent = ({ className }) => {
    const history = useHistory()
    return (
        <>
            <div className={`${className} flex flex-col bg-yellow-100 p-4 rounded-lg`}>
                <p className="text-gray-800 font-semibold text-center mb-1">Payed Tier</p>
                <p className="text-gray-800 text-xl font-extrabold text-center mb-1"><sup className="font-semibold">$</sup>9.99</p>
                <p className="text-gray-500 text-xs text-center mb-4">Payed per month</p>
                <span className="flex flex-row items-center text-xs text-left text-gray-800 mb-1">
                    <p className="text-green-600 font-semibold">✓</p>
                    <p className="">Unlimited uploads</p>
                </span>
                <span className="flex flex-row items-center text-xs text-left text-gray-800 mb-1">
                    <p className="text-green-600 font-semibold">✓</p>
                    <p className="">Free onsight comminication</p>
                </span>
                <span className="flex flex-row items-center text-xs text-left text-gray-800 mb-1">
                    <p className="text-green-600 font-semibold">✓</p>
                    <p className="">Approved as professional</p>
                </span>
                <span className="flex flex-row items-center text-xs text-left text-gray-800 mb-4">
                    <p className="text-green-600 font-semibold">✓</p>
                    <p className="">Free advertisement</p>
                </span>
                <button onClick={() => history.push('/upgrade')} className="text-gray-50 bg-blue-800 mb-4 p-2 rounded-lg outline-none border-none w-56 text-sm">Try it out</button>
                <span className="text-gray-500 text-center self-center text-sm flex flex-row items-center">
                    <LockClosedIcon width={15} height={15} />
                    <p className="text-xs">Credit card info secured</p>
                </span>
            </div>
        </>
    )
}

export default Home
