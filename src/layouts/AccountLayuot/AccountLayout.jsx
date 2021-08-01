import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

function AccountLayout({children}) {
    const location = useLocation();
    const history = useHistory()

    const side_option = [
        {
            name: 'Account',
            location: '/account',
            id: 1
        },
        {
            name: 'Business Profile',
            location: '/becomeaseller',
            id: 2
        }
    ]

    return (
        <div className='flex md:flex-row flex-col pt-16'>
            <div className="sidebar md:w-1/4 w-full flex md:flex-col flex-row items-center pt-8 md:border-r border-b border-gray-200 mb-4">
                {
                    side_option.map(option=>(
                        <span onClick={()=> history.push(option.location)} key={option.id} className={`${location.pathname === option.location ? "md:border-r-4 border-b-4 bg-gray-200 border-blue-900 " : "border-none "} p-4 w-full text-center hover:bg-gray-200 cursor-pointer`}>
                            {option.name}
                        </span>
                    ))
                }

            </div>
            <div className="body md:w-3/4 w-full">
                {children}
            </div>
        </div>
    )
}

export default AccountLayout
