import React from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import InfoIcon from '@material-ui/icons/Info';
import upload from '../../images/uploadI.svg'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import premium from '../../images/premium.svg'
import text from '../../images/textM.svg'
import {LockClosedIcon} from '@heroicons/react/outline'
import { Input } from '@chakra-ui/react';

function Upgrade() {
    return (
        <HomeLayout>
            <div className="min-h-screen flex flex-row items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 px-8">
                <div className="left md:p-8 p-4 col-span-1">
                    <p className="text-gray-700 dark:text-white md:w-2/3 w-full text-3xl font-bold">Why you should ugrade your account?</p>
                    <p className="mb-4 dark:text-gray-400">By this upgrade you get all features from Basic, plus:</p>
                    <div className="item flex flex-col md:w-2/3 w-full">
                        <BenefitItem
                            bImage={upload}
                            benefit="More Uploads"
                            descr="Will be able to upload more images. Also able to upload promotional video"
                        />
                        <BenefitItem
                            bImage={premium}
                            benefit="Proof"
                            descr="Be featured as top professional in your area according to the category you fall under."
                        />
                        <BenefitItem
                            bImage={text}
                            benefit="Replying"
                            descr=" People and possible clients can inbox you and chat with you as well as view your contact details."
                        />
                    </div>
                </div>
                <div className="right p-2 col-span-1">
                    <form action="" className="bg-white dark:bg-gray-800 md:w-4/5 w-full rounded shadow flex flex-col p-8">
                        <p className="text-gray-700 font-semibold self-center dark:text-white">Become a Pro now</p>
                        <p className="text-gray-500 text-sm self-center mb-4 dark:text-gray-400">Choose your preferred PRO access plan</p>
                        <span className="bg-gray-100 dark:bg-gray-900 p-2 rounded mx-2">
                            <p className="text-gray-500 text-sm dark:text-gray-300">Pro plan</p>
                            <span className="flex flex-row">
                                <p className="text-gray-700 dark:text-gray-100 font-semibold">$85</p>
                                <p className="text-gray-500 dark:text-gray-300 text-sm">/mo</p>
                            </span>
                            <p className="flex-row text-gray-600 dark:text-white mt-1 flex">
                                <p className="text-blue-900 dark:text-blue-700 text-sm font-semibold">Your PRO plan</p>
                                <InfoIcon fontSize="small" />
                            </p>
                        </span>
                        <div className="border-b my-4 border-gray-300 dark:border-gray-500"></div>
                        <div className="items mx-2 flex flex-col">
                            <p className="text-gray-600 font-semibold dark:text-gray-400">Billing Information</p>
                            <div className="border text-gray-300 mt-1 dark:bg-gray-700 dark:border-gray-700 border-gray-300 flex mb-2 flex-row items-center rounded p-1">
                                <input 
                                    type="text" 
                                    className="w-full dark:bg-gray-700 border-none outline-none" placeholder="Card Number" />
                                <CreditCardIcon />
                            </div>
                            <div className="two grid md:grid-cols-2 grid-cols-1 gap-2 items-center">
                                <Input
                                    placeholder="Security Code"
                                    type="text"
                                    className="border col-span-1 dark:bg-gray-700 dark:border-gray-700 border-gray-300 text-gray-300 p-1 rounded" />
                                <Input
                                    placeholder="CVV"
                                    type="text"
                                    className="border col-span-1 border-gray-300 dark:bg-gray-700  dark:border-gray-700 text-gray-300 p-1 rounded" />
                            </div>
                            <button className="bg-blue-900 text-white rounded p-1 w-full mt-4">Upgrade Now</button>
                            <span className="text-xs flex flex-row mt-4 self-center items-center text-gray-400">
                                <LockClosedIcon height={16} width={16} />
                                <p className="text-xs text-gray-400">secure transaction</p>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </HomeLayout>
    )
}

const BenefitItem = ({ bImage, benefit, descr }) => {
    return (
        <div className="flex flex-row items-center mb-4">
            <img src={bImage} alt="upload_icon" className="w-12 mr-2" />
            <div>
                <p className="text-gray-800 dark:text-white font-bold">{benefit}</p>
                <p className="text-sm dark:text-gray-400 text-gray-500">{descr}</p>
            </div>
        </div>
    )
}

export default Upgrade
