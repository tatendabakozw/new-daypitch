import React, { useState, Fragment } from 'react'
import { StarIcon as StarRateIcon, HeartIcon as FavoriteIcon,CheckCircleIcon } from '@heroicons/react/outline'
import { HeartIcon as FavoriteBorderIcon, BookmarkIcon, ChatIcon  } from '@heroicons/react/solid'
import { Dialog, Transition  } from '@headlessui/react'
import { useHistory } from 'react-router-dom'
import UserInfoPanel from '../UserInfoPanel/UserInfoPanel'
import image from '../../images/man.png'


function ExploreListItem({verified, category, price, rating, tags, propic, businessname, id, description, school}) {
    const [save, setSaved] = useState(false)
    let [isOpen, setIsOpen] = useState(false)
    const history = useHistory()
    const [open, setOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const userInfo = localStorage.getItem('userInfo')

    const chat_with_user = (e) =>{
        e.preventDefault()
        if(!userInfo){
            openModal()
        }else{
            history.push('/chat')
        }
    }

    return (
        <span onClick={() =>setOpen(true)} className={`bg-white  transition duration-100 transform hover:scale-105 rounded-lg cursor-pointer md:px-8 px-4 py-4 justify-between items-center w-full self-center shadow mb-4`}>
            <div className="flex flex-row items-center justify-between mb-8">
                <span onClick={()=> setOpen(true)} className="flex flex-row items-center mr-2 cursor-pointer">
                    <img
                        className="inline-block rounded-full w-10 h-10 mr-2"
                        src={propic ? propic : image }
                        alt="user propic"
                    />

                    <p className={`text-gray-700 font-semibold`}>{businessname} -</p>
                    {verified ? (<div className="saved flex flex-row items-center text-blue-600">
                        <CheckCircleIcon height={24} width={24} className="text-blue-700" />
                        <p className="text-xs">Verified</p>
                    </div>) : (
                        <p className="text-xs text-gray-500 dark:text-gray-400 p-1 rounded flex flex-row items-center">
                            <CheckCircleIcon height={24} width={24} />
                            <p>not verified</p>
                        </p>
                    )}
                    <>
                        <UserInfoPanel
                            propic={propic}
                            name={businessname}
                            rating={rating}
                            id={id}
                            description={description}
                            verified={verified}
                            open={open} setOpen={setOpen}
                            school={school}
                        />
                    </>
                </span>
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
            <div className="price mb-4 overflow-ellipsis truncate overflow-hidden">
                <p className="text-sm text-gray-500 truncate">{description}</p>
            </div>
            <div className="flex flex-row md:items-center items-end justify-between">
                <div className="flex-wrap flex flex-row">
                    {tags?.map(tag => (
                        <ItemCategory
                            realatedcatefory={tag} />
                    ))}
                </div>
                <span onClick={chat_with_user} className="flex bg-blue-100 hover:bg-blue-200 rounded-full py-1 px-2 flex-row items-center justify-between cursor-pointer">
                    <p className="text-xs text-blue-800 mr-1">Talk</p>
                    <ChatIcon height={24} width={24}  className="text-blue-800" />
                </span>
                <>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                        >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                            >
                            &#8203;
                            </span>
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 border border-gray-200 shadow-xl rounded-2xl">
                                <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Please login
                                </Dialog.Title>
                                <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Your account is not logged in at the moment. Please login or create account to be able to talk with the client
                                </p>
                                </div>

                                <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={closeModal}
                                >
                                    Login!
                                </button>
                                </div>
                            </div>
                            </Transition.Child>
                        </div>
                        </Dialog>
                    </Transition>
                    </>
            </div>
        </span>
    )
}

const ItemCategory = ({ realatedcatefory }) => {
    return (
        <div  className="similarcats bg-blue-100 dark:bg-gray-700 dark:text-gray-200 rounded-full px-2 py-1 mr-2 my-1">
            <div className="flex">
                <p className="text-xs text-blue-900 dark:text-gray-200">{realatedcatefory}</p>
            </div>
        </div>
    )
}

export default ExploreListItem
