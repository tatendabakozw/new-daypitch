import React from 'react'
import { Link } from 'react-router-dom'
import HomeLayout from '../../layouts/HomeLayout'
import {ArrowLeftIcon} from '@heroicons/react/solid'

function NotFound() {
    return (
        <HomeLayout>
           <div className="flex flex-col items-center min-h-screen">
               <div className="flex my-auto flex-col items-center">
                   <p className="font-serif mb-5 md:text-7xl text-4xl font-semibold text-gray-800 dark:text-gray-400">Page Not Found</p>
                   <Link to='/explore' className="flex flex-row items-center">
                       <ArrowLeftIcon width={24} height={15} className="text-gray-800 dark:text-gray-400" />
                       <p className="text-xl font-serif dark:text-gray-400">Back to explore</p>
                   </Link>
               </div>
           </div>
        </HomeLayout>
    )
}

export default NotFound
