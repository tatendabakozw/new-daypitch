import React, { useState } from 'react'
import {
    StarIcon as StarRateIcon,
    ThumbUpIcon, HeartIcon as FavoriteIcon
} from '@heroicons/react/outline'
import { HeartIcon as FavoriteBorderIcon } from '@heroicons/react/solid'


function ExploreGridItem({className, verified, category, price, rating, tags, propic, businessname}) {
    const [save, setSaved] = useState(false)
    return (
        <div className={`${className } flex flex-col rounded-sm overflow-hidden shadow cursor-pointer`}>
            <div className="picture bg-white rounded-b-none rounded-t-sm p-4 h-40"></div>
            <div className="flex flex-col py-2 px-8">
                <div className="category flex flex-row items-center mb-1">
                    <div className="propic bg-gray-50 border border-gray-100 dark:bg-blue-900 overflow-hidden rounded-full w-10 h-10 flex flex-row items-center text-center">
                        <img
                            className="inline-block rounded-full ring-2 ring-white bg-blue-100"
                            src={propic}
                            alt=""
                        />
                    </div>
                    <div className={`cat bg-blue-200 rounded-sm m-1 flex flex-row items-center`}>
                        <p className="text-xs text-gray-700 px-2">{category}</p>
                    </div>
                </div>
                <div className="service mb-4 flex flex-row items-center justify-between">
                    <p className="text-blue-900 dark:text-blue-700 text-sm font-semibold">{businessname}</p>
                    <span className="text-gray-700 text-sm font-semibold flex flex-row items-center">
                        <p className="font-normal text-gray-700 dark:text-gray-300 mr-1 text-xs">from:</p>
                        <sup className="text-gray-700 dark:text-gray-300">$</sup>
                        <p className="text-gray-700 dark:text-gray-300">{price}</p>
                    </span>
                </div>
                <div className="ratingselller flex flex-row items-center justify-between mb-4">
                    <div className="rating flex flex-row items-center">
                        <StarRateIcon width={15} height={15} className="text-yellow-500" />
                        <p className="text-xs dark:bg-gray-700 rounded px-1 dark:text-gray-400" >{rating}</p>
                    </div>
                    {verified === "true" ? (<div className="saved flex flex-row items-center text-blue-600">
                        <ThumbUpIcon width={15} height={15} />
                        <p className="text-xs">Verified</p>
                    </div>) : (
                        <p className="text-xs text-gray-600 dark:text-gray-400 dark:bg-gray-700 p-1 bg-gray-200 rounded">not verified</p>
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
                <div className="flex flex-row ">
                <p className="text-blue-900 text-xs  font-semibold mb-1 items-center">Tags: {"  "}</p>
                <div className=" bottom-0 flex-wrap flex flex-row">
                    {tags?.map(tag => (
                        <ItemCategory
                            key={'2'}
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
        <div className="similarcats bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 mx-2 my-1">
            <p className="text-xs text-gray-700 dark:text-gray-200">{realatedcatefory}</p>
        </div>
    )
}

export default ExploreGridItem
