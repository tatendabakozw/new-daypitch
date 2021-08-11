import React, { Fragment } from 'react'
import { CheckCircleIcon, XIcon } from '@heroicons/react/outline'
import { Dialog, Transition  } from '@headlessui/react'
import { useHistory } from 'react-router-dom'
import { auth, db } from '../../helpers/firebase'

function UserInfoPanel({open, setOpen, propic, description, verified, id, rating, name, school}) {

  const hire_professional = () =>{
    db.collection('contracts').doc(auth?.currentUser?.uid).set({
      contract_info : '',
      contract_period : '',
      contract_status : 'completed',
      contract_type : "long-term"
    })
  }

  const create_contract = (e) =>{
    e.preventDefault()
    history.push(`contract/${id}`)
  }

  const history = useHistory()
    return (
        <div>
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
                                onClick={()=> history.push('/chat')}
                                className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 sm:flex-1"
                              >
                                Message
                              </button>
                              <button
                                type="button"
                                onClick={create_contract}
                                className="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Hire
                              </button>
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
        </div>
    )
}

export default UserInfoPanel
