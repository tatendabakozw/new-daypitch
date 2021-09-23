import { Text } from '@chakra-ui/react'
import { CalendarIcon, ChatAltIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { db } from '../../helpers/firebase'

function ExploreRight() {
    const userSignin = useSelector(state => state.userCredsSignIn)
    const { userInfo } = userSignin
    const history = useHistory()
    const [user, setUser] = useState()
    const [user_loading, setUserLoading] = useState(false)

    useEffect(() => {
        setUserLoading(true)
        db.collection('users').doc(userInfo?.user?.uid).onSnapshot(doc => {
            console.log(doc.data())
            setUser(doc.data())
            setUserLoading(false)
        }, (err) => {
            console.log(err)
            setUserLoading(false)
        })
    }, [userInfo?.user?.uid])

    return (
        <>
            {
                userInfo ? (
                    <div className="w-full flex flex-col">
                        <span onClick={() => history.push('/account')} className="flex flex-row items-center mb-8">
                            {
                                userInfo?.user?.photoURL ? (<div className="h-12 w-12 bg-white rounded-full overflow-hidden mr-2">
                                    <img src={userInfo?.user?.photoURL} alt="user_pic" className="object-contain" />
                                </div>) : (
                                    <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500 mr-2">
                                        <span className="text-xl font-medium leading-none text-white">{userInfo?.user?.email.slice(0, 2)}</span>
                                    </span>
                                )
                            }
                            <p className="text-gray-700 font-semibold">My Account</p>
                        </span>
                        {
                            !user?.verified ? (<span onClick={() => history.push('/upgrade')} className="bg-blue-900 text-sm p-2 rounded text-white text-center w-2/3 hover:bg-blue-800 cursor-pointer">Upgrade account</span>) :
                                (<span onClick={() => history.push('/account')} className="bg-blue-900 text-sm p-2 rounded text-white text-center w-2/3 hover:bg-blue-800 cursor-pointer">Edit account</span>)
                        }
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center mb-8">
                            <div className="rounded-full overflow-hidden mr-2">
                                <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                            </div>
                            <p className="text-gray-700 font-semibold">You are not logged in</p>
                        </div>
                        <div className="grid items-center w-full border border-gray-200 p-16 content-center rounded">
                            <span onClick={() => history.push('/login')} className="text-center bg-blue-900 text-white p-2 text-sm rounded cursor-pointer hover:bg-blue-800">Login</span>
                        </div>
                    </div>
                )
            }
            {
                user ? (<aside className="hidden lg:block  pt-16">
                    {
                        user_loading ? (<p>loading...</p>) : (
                            <>
                                <h2 className="sr-only">Details</h2>
                                <div className="space-y-5">
                                    <div className="flex items-center space-x-2">
                                        {
                                            user?.verified ? (<>
                                                <BadgeCheckIcon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                                                <span className="text-green-900 text-sm font-medium">Verified Account</span>
                                            </>) : (
                                                <>
                                                    <BadgeCheckIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                                    <span className="text-green-900 text-sm font-medium">Free account</span>
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="text-gray-900 text-sm font-medium">{user?.total_contracts} contracts</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="text-gray-900 text-sm font-medium">
                                            Created on - <time dateTime="2020-12-02">{Date(user?.createdAt * 1000).slice(0, 15)}</time>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
                                    <div>
                                        <h2 className="text-sm font-medium text-gray-500">Contractors</h2>
                                        <ul className="mt-3 space-y-3">
                                            {
                                                user?.current_contracts < 1 ? (<Text className="text-gray-700 font-semibold">no current contracts at the moment</Text>) : (<li className="flex justify-start">
                                                    <Link to='/jobs' className="flex items-center space-x-3">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="h-5 w-5 rounded-full"
                                                                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                                                    </Link>
                                                </li>)
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                                        <ul className="mt-2 leading-8">
                                            <li className="inline">
                                                <a
                                                    href="/"
                                                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                                                >
                                                    <div className="absolute flex-shrink-0 flex items-center justify-center">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-3.5 text-sm font-medium text-gray-900">Bug</div>
                                                </a>{' '}
                                            </li>
                                            <li className="inline">
                                                <a
                                                    href="/"
                                                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                                                >
                                                    <div className="absolute flex-shrink-0 flex items-center justify-center">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                                                </a>{' '}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </aside>) : null
            }
        </>
    )
}

export default ExploreRight
