import React from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

function MyJobs() {
    return (
        <HomeLayout>
            <div className="flex flex-col items-center">
                <div className="py-16 w-3/5">
                    <p className="text-gray-700 font-semibold text-2xl m-4">My Current Jobs </p>
                    <div className="flex jobs w-full">
                    <div className="w-full pt-2">
                        <div className="w-full p-2 mx-auto bg-white rounded-sm shadow">
                            <p className="text-gray-700 py-8 text-lg font-semibold">Active Contracts - <span className="text-gray-500 text-sm font-medium">(click to expand)</span></p>
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-sm hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                    <span>Mobile App Developemnt</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-sm hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                    <span>Website develpment</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    No.
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default MyJobs
