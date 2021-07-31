import React from 'react'
import search from '../../images/search.svg'
import referal from '../../images/referal.svg'
import analytics from '../../images/analytics.svg'
import location from '../../images/location.svg'
import future from '../../images/future.svg'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'

function HowItWorks() {
    return (
        <HomeLayout>
            <div className="flex flex-col md:px-48 px-8 bg-gray-50 dark:bg-gray-900 pb-16 pt-16">
                {/* <p className="bg-blue-100 self-center text-sm font-semibold text-blue-900 p-2 rounded-sm">How it works?</p> */}
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
                <p className="bg-blue-100 self-center text-sm my-16 font-semibold text-blue-900  p-2 rounded-sm">Daypitch overflow</p>
                <div className="below min-h-screen">
                    <div className="1 grid md:grid-cols-2 grid-cols-1 md:mb-32 mb-16 items-center gap-24">
                        <div className="left col-span-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-300 mb-8">Market</p>
                            <p className="text-gray-700 dark:text-gray-500">You also have a free platform to market and advertise your 
                            business and profession so you can be connected to people who are interested in your services </p>
                        </div>
                        <div className="roight col-span-1 items-center mx-auto">
                            <img src={future} alt="ffsvg" className="w-48" />
                        </div>
                    </div>
                    <div className="1 grid md:grid-cols-2 grid-cols-1 items-center gap-24">
                        <div className="left col-span-1 mx-auto">
                            <img src={location} alt="search_svg" className="w-48" />
                        </div>
                        <div className="roight col-span-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-300 mb-8">Choice</p>
                            <p className="text-gray-700 dark:text-gray-500">Having a place to properly choose your local professionals in your area is a great advantage.
                                So just search area, category and range u want for your services </p>
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
