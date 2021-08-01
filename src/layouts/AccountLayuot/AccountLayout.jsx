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
        <div className='flex flex-row pt-16'>
            <div className="sidebar w-1/4 flex flex-col items-center pt-8 border-r border-gray-200">
                {
                    side_option.map(option=>(
                        <span onClick={()=> history.push(option.location)} key={option.id} className={`${location.pathname === option.location ? "border-r-4 bg-gray-200 border-blue-900 " : "border-none "} p-4 w-full text-center hover:bg-gray-200 cursor-pointer`}>
                            {option.name}
                        </span>
                    ))
                }

            </div>
            <div className="body w-3/4">
                {children}
            </div>
        </div>
    )
}

export default AccountLayout
