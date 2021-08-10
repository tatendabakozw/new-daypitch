import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import {CogIcon, UserCircleIcon} from '@heroicons/react/outline'
import { Text } from '@chakra-ui/react';

function AccountLayout({children}) {
    const location = useLocation();
    const history = useHistory()

    const side_option = [
        {
            name: 'Account',
            location: '/account',
            id: 1,
            icon: <CogIcon height={24} width={24}/>
        },
        {
            name: 'Business Profile',
            location: '/becomeaseller',
            id: 2,
            icon: <UserCircleIcon height={24} width={24}/>
        }
    ]

    return (
        <div className='flex md:flex-row flex-col md:pt-16 pt-8 bg-white'>
            <div className="sidebar md:w-1/4 w-full flex md:flex-col bg-white flex-row items-center pt-8 border-r border-gray-200 mb-4">
                {
                    side_option.map(option=>(
                        <span onClick={()=> history.push(option.location)} key={option.id} className={`${location.pathname === option.location ? "md:border-l-4 border-l-0 md:border-b-0 border-b-4 bg-blue-50 border-blue-900 " : "border-none "} p-4 w-full hover:bg-blue-50 cursor-pointer flex flex-row items-center`}>
                            <Text className={`${location.pathname === option.location ? 'text-blue-900' : ' text-gray-700'} mr-2`}>{option.icon}</Text>
                            <Text>{option.name}</Text>
                        </span>
                    ))
                }
            </div>
            <div className="body md:w-3/4 w-full bg-white min-h-screen">
                {children}
            </div>
        </div>
    )
}

export default AccountLayout
