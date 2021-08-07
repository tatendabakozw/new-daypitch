import React, { useState, Fragment } from 'react'
import { StarIcon as StarRateIcon, HeartIcon as FavoriteIcon,CheckCircleIcon, XIcon } from '@heroicons/react/outline'
import { HeartIcon as FavoriteBorderIcon, BookmarkIcon, ChatIcon, DotsVerticalIcon  } from '@heroicons/react/solid'
import { Dialog, Transition, Menu  } from '@headlessui/react'
import { useHistory } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

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
        <span onClick={() =>setOpen(true)} className={`bg-white cursor-pointer rounded-sm md:px-8 px-4 py-4 justify-between items-center w-full self-center shadow mb-4`}>
            <div className="flex flex-row items-center justify-between mb-8">
                <span onClick={()=> setOpen(true)} className="flex flex-row items-center mr-2 cursor-pointer">
                    <img
                        className="inline-block rounded-full w-10 h-10 mr-2"
                        src={propic}
                        alt="user propic "
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
                        <EditUserSideBar
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

const EditUserSideBar = ({open, setOpen, propic, description, verified, id, rating, name, school}) =>{
    return(
        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={open} onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                        Profile
                      </h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div>
                    <div className="pb-1 sm:pb-6">
                      <div>
                        <div className="relative h-40 sm:h-56">
                          <img
                            className="absolute h-full w-full object-cover"
                            src={propic}
                            alt=""
                          />
                        </div>
                        <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                          <div className="sm:flex-1">
                            <div>
                              <div className="flex items-center">
                                <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">{name}</h3>
                                <span className="ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full">
                                  <span className="sr-only">Online</span>
                                </span>
                              </div>
                              <p className="text-sm text-gray-500">
                              {verified ? (<div className="saved flex flex-row items-center text-blue-600">
                                    <CheckCircleIcon height={24} width={24} className="text-blue-700" />
                                    <p className="text-xs">Verified</p>
                                </div>) : (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 p-1 rounded flex flex-row items-center">
                                        <CheckCircleIcon height={24} width={24} />
                                        <p>not verified</p>
                                    </p>
                                )}
                              </p>
                            </div>
                            <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                              <button
                                type="button"
                                className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 sm:flex-1"
                              >
                                Message
                              </button>
                              <button
                                type="button"
                                className="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Feedback
                              </button>
                              {/* <span className="ml-3 inline-flex sm:ml-0">
                                <Menu as="div" className="relative inline-block text-left">
                                  {({ open }) => (
                                    <>
                                      <Menu.Button className="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="sr-only">Open options menu</span>
                                        <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                      </Menu.Button>
                                      <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                      >
                                        <Menu.Items
                                          static
                                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                          <div className="py-1">
                                            <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                  )}
                                                >
                                                  View profile
                                                </a>
                                              )}
                                            </Menu.Item>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                  )}
                                                >
                                                  Copy profile link
                                                </a>
                                              )}
                                            </Menu.Item>
                                          </div>
                                        </Menu.Items>
                                      </Transition>
                                    </>
                                  )}
                                </Menu>
                              </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
                      <dl className="space-y-8 px-4 sm:px-6 sm:space-y-6">
                        <div>
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Bio</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                            <p>
                              {description}
                            </p>
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Location</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">15002 zengeza 3 extension chitungwiza</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Website</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">devbako.co.zw</dd>
                        </div>
                        {/* <div>
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Birthday</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                            <time dateTime="1988-06-23">June 23, 1988</time>
                          </dd>
                        </div> */}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    )
}

export default ExploreListItem
