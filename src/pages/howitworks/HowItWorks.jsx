import React from 'react'
import search from '../../images/search.svg'
import referal from '../../images/referal.svg'
import analytics from '../../images/analytics.svg'
import location from '../../images/choose.svg'
import future from '../../images/future.svg'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'

function HowItWorks() {
    return (
        <HomeLayout>
            <div className="flex flex-col md:px-24 px-8 bg-gray-50 dark:bg-gray-900 pb-16 pt-16">


            <div className="relative py-16 overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                        <pattern
                            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-yellow-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                        <pattern
                            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-blue-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                        <pattern
                            id="d3eb07ae-5182-43e6-857d-35c643af9034"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                        <div className="text-center">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Daypitch</h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Be your own boss.
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            Work from anywhere, at your own time. And be your own boss
                        </p>
                        </div>
                    </div>
                        <div className="min-h-screen flex flex-row items-center w-full">
                            <div className="flex flex-col w-full justify-between">
                                {/* <p className="text-gray-900 md:text-2xl dark:text-gray-200 text-sm text-center font-semibold self-center mt-4 mb-16 capitalize">How it works</p> */}
                                <div className="flex md:flex-row flex-col items-center justify-between">
                                    <HowItem
                                        pic={search}
                                        text="Search professional from around your area"
                                    />
                                    <HowItem
                                        pic={referal}
                                        text="Professionals create accounts and manage their services, while users can use referrals to connect professionals and clients"
                                    />
                                    <HowItem
                                        pic={analytics}
                                        text="Analyse growth of your business and manage your customers using analytics dashboard"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <p className="bg-blue-100 self-center text-sm my-16 font-semibold text-blue-900  p-2 rounded-sm">Daypitch overflow</p>
                <div className="below min-h-screen">
                    <div className="1 grid md:grid-cols-2 grid-cols-1 md:mb-32 mb-16 items-center gap-24">
                        <div className="left col-span-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-300 mb-8">Market</p>
                            <p className="text-gray-700 dark:text-gray-500">You also have a free platform to market and advertise your 
                            business and profession so you can be connected to people who are interested in your services </p>
                        </div>
                        <div className="roight col-span-1 items-center mx-auto">
                            <img src={future} alt="ffsvg" className="w-72" />
                        </div>
                    </div>
                    <div className="1 grid md:grid-cols-2 grid-cols-1 items-center gap-24">
                        <div className="left col-span-1 mx-auto">
                            <img src={location} alt="search_svg" className="w-72" />
                        </div>
                        <div className="roight col-span-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-300 mb-8">Choice</p>
                            <p className="text-gray-700 dark:text-gray-500">Having a place to properly choose your local professionals in your area is a great advantage.
                                So just search area, category and range u want for your services </p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>        
            </div>
        </HomeLayout>
    )
}

const HowItem = ({ pic, text }) => {
    return (
        <div className="flex flex-col w-60  mb-24 items-center">
            <div className="imag w-48 md:h-48 h-28 md:mb-4 mb-32">
                <img src={pic} alt="search_svg" />
            </div>
            <p className="text-gray-700 dark:text-gray-500 text text-center">{text}</p>
        </div>
    )
}

export default HowItWorks
