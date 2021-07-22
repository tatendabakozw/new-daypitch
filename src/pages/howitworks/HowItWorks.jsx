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
            <div className="flex flex-col md:px-48 px-8 bg-gray-50 dark:bg-gray-900 pb-16 pt-32">
                <p className="bg-blue-100 self-center text-xs font-semibold text-blue-900 p-1 rounded-sm">How it works?</p>
                <p className="text-gray-700 md:text-xl dark:text-gray-200 text-sm text-center font-semibold self-center mt-4 mb-16">How to use the Daypitch platform</p>
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
                <p className="bg-blue-100 self-center text-xs my-16 font-semibold text-blue-900  p-1 rounded-sm">Daypitch overflow</p>
                <div className="below">
                    <div className="1 grid md:grid-cols-2 grid-cols-1 mb-16 items-center gap-8">
                        <div className="left col-span-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-300 mb-8">Feature</p>
                            <p className="text-gray-700 dark:text-gray-500">Having a place to properly choose your local professionals in your area is a great advantage.
                                So just search area, category and range u want for your services </p>
                        </div>
                        <div className="roight col-span-1 items-center mx-auto">
                            <img src={future} alt="ffsvg" className="w-48" />
                        </div>
                    </div>
                    <div className="1 grid md:grid-cols-2 grid-cols-1 items-center gap-8">
                        <div className="left col-span-1 mx-auto">
                            <img src={location} alt="search_svg" className="w-48" />
                        </div>
                        <div className="roight col-span-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-300 mb-8">Feature</p>
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
        <div className="flex flex-col w-60  mb-2 items-center">
            <div className="imag w-40 md:h-40 h-28 md:mb-4 mb-16">
                <img src={pic} alt="search_svg" />
            </div>
            <p className="text-gray-700 dark:text-gray-500 text-sm text-center">{text}</p>
        </div>
    )
}

export default HowItWorks
