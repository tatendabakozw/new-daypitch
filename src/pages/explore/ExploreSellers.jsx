import React, { useState } from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import {SearchIcon, ViewGridIcon} from '@heroicons/react/outline'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function ExploreSellers() {
    const [grid_view, setGridView] = useState(false)

    return (
        <HomeLayout>
            <div className="py-24 flex flex-col items-center">
                <div className="w-3/5 flex flex-col">
                    <div className="search bg-white flex flex-row items-center w-full rounded-sm border border-gray-200 overflow-hidden">
                        <input 
                            type="text" 
                            className="bg-white border-none outline-none p-2 flex-1" 
                            placeholder="search" />
                        <span className="bg-blue-900 p-4 cursor-pointer hover:bg-blue-800 rounded-sm">
                            <SearchIcon height={20} width={20} className="text-white" />
                        </span>
                    </div>
                    <div className="flex flex-row items-center justify-between p-8">
                        <p className="flex-1 text-gray-700">Sellers</p>
                        <div className="flex flex-row items-center">
                            <ViewGridIcon  
                                height={20} width={20} 
                                onClick={()=> setGridView(true)}
                                className={`${grid_view ? "text-blue-500" : "text-gray-500" } mr-4 cursor-pointer`} />
                            <FormatListBulletedIcon 
                                fontSize="small"
                                onClick={()=> setGridView(false)} 
                                className={`${grid_view ? "text-gray-500" : "text-blue-500" } mr-4 cursor-pointer`} />
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default ExploreSellers
