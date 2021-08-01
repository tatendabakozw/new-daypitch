import React, { useState } from 'react'
import {StarIcon as StarRateIcon,ThumbUpIcon, HeartIcon as FavoriteIcon,UserCircleIcon,CheckCircleIcon} from '@heroicons/react/outline'
import { HeartIcon as FavoriteBorderIcon } from '@heroicons/react/solid'


function ExploreGridItem({className, verified, category, price, rating, tags, propic, businessname, id}) {
    const [save, setSaved] = useState(false)
    return (
        <div className={`${className } flex flex-col rounded-sm overflow-hidden cursor-pointer bg-white shadow-sm`}>
            <div className="picture bg-white rounded-b-none rounded-t-sm p-4 h-40 flex flex-col items-center">
                <img
                    className="inline-block rounded-full ring-2 ring-white bg-gray-50"
                    src={propic}
                    alt="picture"
                />
                <div className={`cat bg-blue-200 rounded-sm m-4 flex flex-row items-center`}>
                    <p className="text-xs text-gray-700 p-2">{category}</p>
                </div>
            </div>
            <div className="border-b border-gray-300 w-4/5 self-center my-4"></div>
            
            <div className="flex flex-col py-2 px-8 bg-white">
                
                <div className="service mb-4 flex flex-row items-center justify-between">
                    <div className="category flex flex-row items-center mb-1">
                        <div className="propicdark:bg-blue-900 overflow-hidden flex flex-row items-center text-center">
                            <UserCircleIcon height={24} width={24} className="text-gray-500" />
                        </div>
                        <div className={`rounded-sm m-1 flex flex-row items-center`}>
                        <p className="text-blue-900 dark:text-blue-700 text-sm font-semibold">{businessname}</p>
                        </div>
                    </div>
                    <span className="text-gray-700 text-sm font-semibold flex flex-row items-center">
                        <p className="font-normal text-gray-600 dark:text-gray-300 mr-1 text-xs">from:</p>
                        <p className="text-gray-700 dark:text-gray-300">$</p>
                        <p className="text-gray-700 dark:text-gray-300">{price}</p>
                    </span>
                </div>
                <div className="ratingselller flex flex-row items-center justify-between mb-4">
                    <div className="rating flex flex-row items-center">
                        <StarRateIcon width={15} height={15} className="text-yellow-500" />
                        <p className="text-xs dark:bg-gray-700 rounded px-1 dark:text-gray-400" >{rating}</p>
                    </div>
                    {verified ? (<div className="saved flex flex-row items-center text-blue-600">
                        <CheckCircleIcon height={24} width={24} className="text-blue-700" />
                        <p className="text-xs">Verified</p>
                    </div>) : (
                        <p className="text-xs text-gray-500 dark:text-gray-400 p-1 rounded flex flex-row items-center">
                            <CheckCircleIcon height={24} width={24} />
                            <p>not verified</p>
                        </p>
                    )}
                    {!save ? (
                        <span onClick={() => setSaved(true)} className="saved flex flex-row items-center text-gray-600">
                            <FavoriteBorderIcon width={20} height={20} className="text-pink-600" />
                            <p className="text-xs text-pink-600">Saved</p>
                        </span>) : (
                        <span onClick={() => setSaved(false)} className="saved flex flex-row items-center text-gray-600">
                            <FavoriteIcon width={20} height={20} className="text-gray-600" />
                            <p className="text-xs">Save</p>
                        </span>)}
                </div>
                {/* related categories */}
                <div className="flex flex-col w-full ">
                    <div className=" bottom-0 flex-wrap justify-between flex flex-row">
                        {tags?.map(tag => (
                            <ItemCategory
                                realatedcatefory={tag} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ItemCategory = ({ realatedcatefory }) => {
    return (
        <div className="similarcats bg-blue-100 dark:bg-gray-700 dark:text-gray-200 rounded-full px-2 py-1 my-1">
            <p className="text-xs text-blue-900 dark:text-gray-200">{realatedcatefory}</p>
        </div>
    )
}

export default ExploreGridItem
