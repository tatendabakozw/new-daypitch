import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import HomeLayout from '../HomeLayout/HomeLayout'
import { useHistory, useLocation } from 'react-router-dom'


const contract_routes = [
    {name : 'Active Contracts', location: '/jobs'},
    {name : 'My Listings', location: '/listings'}
]

export default function ContractsLayout({ children }) {
    const location = useLocation();
    const history = useHistory()
    return (
        <HomeLayout>
            <div className="flex flex-col items-center">
                <div className="py-16 w-3/5">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-gray-700 font-semibold text-2xl m-4">My Current Jobs </p>
                        <span className="bg-blue-900 hover:bg-blue-800 cursor-pointer text-white p-2 rounded-full">
                            <PlusIcon height={20} width={20} />
                        </span>
                    </div>
                    <div className="flex jobs w-full">
                        <div className="w-full pt-2">
                            <div className="w-full p-2 mx-auto bg-white rounded-sm shadow">
                                <div className="flex flex-row items-center">
                                    {
                                        contract_routes.map((option, index)=>(
                                            <span onClick={()=> history.push(option.location)} key={index} className={`${location.pathname === option.location ? "border-b-2 border-blue-900 " : "border-none "} text-gray-700 hover:bg-gray-100 cursor-pointer py-4 mb-8 px-4 text-lg font-semibold`}>{option.name}</span>
                                        ))
                                    }
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

