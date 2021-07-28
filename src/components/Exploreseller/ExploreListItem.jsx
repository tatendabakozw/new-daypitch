import React, { useState } from 'react'
import {
    StarIcon as StarRateIcon,
    ThumbUpIcon, HeartIcon as FavoriteIcon,
    UserCircleIcon
} from '@heroicons/react/outline'
import { HeartIcon as FavoriteBorderIcon } from '@heroicons/react/solid'

function ExploreListItem({className, verified, category, price, rating, tags, propic, businessname, id, description}) {
    const [save, setSaved] = useState(false)
    return (
        <div className="bg-white rounded-sm md:px-8 px-4 py-4 justify-between items-center w-4/5 self-center shadow mb-4">
            <div className="flex flex-row items-center justify-between mb-8">
                <div className="flex flex-row items-center mr-2">
                    <img
                        className="inline-block rounded-full w-10 h-10 mr-2"
                        src={propic}
                        alt="picture"
                    />
                <p className={`text-gray-700 font-semibold`}>{businessname}</p>
                {verified === true ? (<div className="saved flex flex-row items-center text-blue-600 ml-2">
                        <ThumbUpIcon width={15} height={15} />
                        <p className="text-xs">Verified</p>
                    </div>) : (
                        <p className="text-xs text-gray-600 dark:text-gray-400 dark:bg-gray-700 p-1 bg-gray-200 rounded ml-2">not verified</p>
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
                <p className="text-sm text-gray-500 font-semibold">price range - <span className="font-normal">${price}/hr - negotiable</span></p>
            </div>
            <div className="price mb-8">
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex-wrap flex flex-row">
                {tags?.map(tag => (
                    <ItemCategory
                        realatedcatefory={tag} />
                ))}

            </div>
        </div>
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
