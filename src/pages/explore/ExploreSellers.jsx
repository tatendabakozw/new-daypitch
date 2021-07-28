import React, { useState } from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import {SearchIcon, ViewGridIcon} from '@heroicons/react/outline'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExploreGridItem from '../../components/Exploreseller/ExploreGridItem'


function ExploreSellers() {
    const [grid_view, setGridView] = useState(false)

    const [all_services, setAllServices] = useState()

    const services =[
        {
            businessname: 'devbako',
            rating: '4.5',
            price: '60',
            tags: ['react', 'node.js', 'mongoose', 'web development'],
            id: '1',
            propic: '../../images/tatenda.jpg',
            category: 'Programming and tech',
            verified: true
        }
    ]

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
                    <div className="sellers grid grid-cols-2 gap-16 items-center">
                        {
                            services.map(service=>(
                                <ExploreGridItem 
                                    className="col-span-1"
                                    verified={service.verified}
                                    category={service.category}
                                    price={service.price}
                                    rating={service.rating}
                                    tags={service.tags}
                                    propic={service.propic}
                                    businessname={service.businessname}
                                    />
                            ))
                        }
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default ExploreSellers
