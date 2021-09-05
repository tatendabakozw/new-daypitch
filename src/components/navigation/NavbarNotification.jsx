import React, { useEffect } from 'react'
import { BellIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { get_user_contracts_Action } from '../../redux/actions/contractActions'
import Loading from '../loading/loading'
import { Text } from '@chakra-ui/layout'

function NavbarNotification() {
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  const userSignin = useSelector(state => state.userCredsSignIn)
  const { userInfo } = userSignin
  const user_contracts = useSelector(state => state.all_user_contracts)
  const { loading, contracts } = user_contracts

  useEffect(() => {
    dispatch(get_user_contracts_Action(userInfo?.user?.uid))
  }, [dispatch, userInfo?.user?.uid])

  if (loading) {
    return (
      <>
        <span onClick={() => setShow(true)} className="relative">
          <BellIcon height={20} width={20} className="text-gray-700" />
        </span>
        <div aria-live="assertive"
          className="fixed inset-12 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            <Transition
              show={show}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                <div className="bg-gray-100 p-4 flex flex-row items-center justify-between">
                  <p>Notifications</p>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <Loading />
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <span onClick={() => setShow(true)} className="">
        <span class="relative inline-block">
          <BellIcon className="text-gray-700" height={20} width={20} />
          {
            contracts?.length > 0 ? (
              <span class="absolute top-0 right-0 inline-flex items-center justify-center p-1 text-xs font-semibold leading-none text-blue-100 transform translate-x-1/2 -translate-y-1/2 bg-blue-900 rounded-full"></span>
            ) : null
          }
        </span>
      </span>
      {
        contracts?.length < 1 ? (
          <div aria-live="assertive"
            className="fixed inset-12 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
              <Transition
                show={show}
                as={Fragment}
                enter="transform ease-out duration-300 transition"
                enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                  <div className="bg-gray-100 p-4 flex flex-row items-center justify-between">
                    <p>Notifications</p>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                          setShow(false)
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    You do not have any notifications at the moment
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        ) : <>
          {
            contracts?.map(contract => (
              <div
                aria-live="assertive"
                className="fixed inset-12 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
              >
                <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                  {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                  <Transition
                    show={show}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
                      <div className="bg-gray-100 p-4 flex flex-row items-center justify-between">
                        <p>Notifications</p>
                        <div className="ml-4 flex-shrink-0 flex">
                          <button
                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => {
                              setShow(false)
                            }}
                          >
                            <span className="sr-only">Close</span>
                            <XIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 pt-0.5">
                            {/* <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        /> */}
                            <p className="h-10 w-10 rounded-full bg-blue-200"></p>
                          </div>
                          <div className="ml-3 w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">{contract.contracts.company}</p>
                            <Text noOfLines={1} className="mt-1 text-sm text-gray-500">{contract.contracts.details}</Text>
                            <div className="mt-4 flex">
                              <button
                                type="button"
                                className="inline-flex items-center py-1 px-2 border border-transparent shadow-sm text-xs leading-4 rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none"
                              >
                                View
                              </button>
                              <button
                                type="button"
                                className="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                              >
                                Decline
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            ))
          }

        </>
      }

    </>
  )
}

export default NavbarNotification
