import React from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { PaperClipIcon } from '@heroicons/react/solid'

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
                                <div className="bg-white overflow-hidden sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Contract Details</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about this contract</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                        <dl className="sm:divide-y sm:divide-gray-200">
                                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Contractor name</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
                                        </div>
                                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Contract name</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Mobile app development</dd>
                                        </div>
                                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
                                        </div>
                                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Expected earnings</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$1,200</dd>
                                        </div>
                                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Details</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            To develop and deploy mobile app within the next seven days. Should use react and firebase for everything and should put seo in mind
                                            </dd>
                                        </div>
                                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">Download contract?</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                <div className="w-0 flex-1 flex items-center">
                                                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                    </a>
                                                </div>
                                                </li>
                                            </ul>
                                            </dd>
                                        </div>
                                        </dl>
                                    </div>
                                    </div>
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
