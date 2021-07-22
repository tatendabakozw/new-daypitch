import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../../context/StateProvier'


function HomeSearch() {
    const history = useHistory()
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue()
    const [category, setCategory] = useState('')

    const searchItems = (e) => {
        e.preventDefault()
        dispatch({
            type: 'SET_SEARCH',
            search: ({
                search: category,
            })
        })
        // dispatch({
        //     type: 'SET_LOCATION',
        //     search: ({
        //         location: location,
        //     })
        // })
        history.push('/explore')
    }


    return (

        <div className="sear transition duration-500 ease-in-out w-full">
            <div className="flex flex-col w-full">
                <div className="bg-gray-200  dark:bg-gray-700 dark:text-gray-200 ml-4 rounded-b-none rounded w-24 py-1 text-center flex flex-col items-center">
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">Search</p>
                </div>
                <form onSubmit={searchItems} className="transition duration-100 transform hover:scale-105 cursor-pointer flex flex-row items-center bg-white dark:bg-gray-800 p-2 shadow rounded w-full">
                    <input 
                        onChange={e=>setCategory(e.target.value)}
                        type="text" 
                        className="bg-white w-full border dark:bg-gray-700 dark:border-gray-700 border-gray-100 md:mx-2 mx-0 p-3 my-2 rounded outline-none"
                        placeholder="Search..."
                    />
                    {/* <input 
                        type="text" 
                        onChange={e=>setLocation(e.target.value)}
                        className="bg-white border w-full dark:bg-gray-700 dark:border-gray-700 border-gray-300 md:mx-2 mx-0 p-3 rounded outline-none"
                        placeholder="Location"
                    /> */}
                    <button type="submit" className="dark:text-blue-800 text-blue-800 cursor-pointer outline-none hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 rounded-full p-2">
                            <SearchIcon height={24} width={24} className="dark:text-blue-800 text-blue-800" />
                    </button>
                    
                </form>
            </div>
        </div>
    )
}

export default HomeSearch
