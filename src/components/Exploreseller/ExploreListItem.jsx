import React, { useState, Fragment } from 'react'
import {
    StarIcon as StarRateIcon,
    ThumbUpIcon, HeartIcon as FavoriteIcon,
    CheckCircleIcon
} from '@heroicons/react/outline'
import { HeartIcon as FavoriteBorderIcon, LocationMarkerIcon, BookmarkIcon } from '@heroicons/react/solid'
import { Dialog, Transition } from '@headlessui/react'

function ExploreListItem({className, verified, category, price, rating, tags, propic, businessname, id, description}) {
    const [save, setSaved] = useState(false)
    return (
        <span className="bg-white rounded-sm md:px-8 px-4 py-4 justify-between items-center w-full self-center shadow mb-4 cursor-pointer">
            <div className="flex flex-row items-center justify-between mb-8">
                <div className="flex flex-row items-center mr-2">
                    <img
                        className="inline-block rounded-full w-10 h-10 mr-2"
                        src={propic}
                        alt="picture"
                    />
                <p className={`text-gray-700 font-semibold`}>{businessname} -</p>
                {verified === true ? (<div className="saved flex flex-row items-center text-blue-600">
                        <ThumbUpIcon width={15} height={15} />
                        <p className="text-xs">Verified</p>
                    </div>) : (
                        <p className="text-xs text-gray-500 dark:text-gray-400 p-1 rounded flex flex-row items-center">
                            <CheckCircleIcon height={24} width={24} />
                            <p>not verified</p>
                        </p>
                    )}
                </div>
                <div className="ratingselller flex flex-row items-center justify-between">
                    <div className="rating flex flex-row items-center">
                        <StarRateIcon width={15} height={15} className="text-yellow-500" />
                        <p className="text-xs dark:bg-gray-700 rounded px-1 dark:text-gray-400" >{rating}</p>
                    </div>
                    
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
            </div>
            <div className="price mb-2">
                <p className="text-sm text-gray-700 font-semibold flex flex-row flex-wrap">Price range - <span className="font-normal">${price}/hr - </span><span className="flex flex-row items-center"><BookmarkIcon height={16} width={16}/>{category}</span></p>
            </div>
            <div className="price mb-4">
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex-wrap flex flex-row">
                {tags?.map(tag => (
                    <ItemCategory
                        realatedcatefory={tag} />
                ))}

            </div>
        </span>
    )
}

const ItemCategory = ({ realatedcatefory }) => {
    return (
        <div className="similarcats bg-blue-100 dark:bg-gray-700 dark:text-gray-200 rounded px-2 py-1 mr-2 my-1">
            <div className="flex">
                <p className="text-xs text-blue-900 dark:text-gray-200">{realatedcatefory}</p>
            </div>
        </div>
    )
}

export default ExploreListItem
