import React, { useState, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuAlt2Icon, XIcon, UserCircleIcon, MoonIcon, LightBulbIcon } from '@heroicons/react/outline'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../images/logo425.png'
import useDarkMode from '../../helpers/useDarkMode'
import {nav_options} from '../../helpers/nav_options'
import Text from '../Text/Text'
import { useStateValue } from '../../context/StateProvier'
import { useEffect } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HomeNavbar() {
  const [navbaron, setNavbarOn] = useState(false)
  const [colorTheme, setTheme] = useDarkMode();
  const user = localStorage.getItem('daypitch_user_auth')

  const history = useHistory()
   // eslint-disable-next-line
  const [{}, dispatch] = useStateValue()

  const changeBackground = () => {
    if (window.scrollY >= 80) {
        setNavbarOn(true)
    } else {
        setNavbarOn(false)
    }
  }

    const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('daypitch_user_auth')
    dispatch({
        type: 'SET_USER',
        user: null
    })
    setTimeout(() => {
        history.push('/')
    }, 1500);
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeBackground)
    },[])

  return (
    <Disclosure as="nav" className={`${navbaron ? "bg-white dark:bg-gray-900 shadow " : "md:bg-transparent bg-gray-50  dark:bg-gray-900 "} transition duration-500 ease-in-out`}>
            {({ open }) => (
                <>
                    <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuAlt2Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <Link to='/' className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block h-6 w-auto"
                                        src={logo}
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:flex items-center sm:ml-6">
                                    {/* <div className="flex space-y-4">
                                        <span onClick={() => setTheme(colorTheme)} style={{ transition: "all .15s ease" }}>
                                            {colorTheme === 'light' ? (
                                                <LightBulbIcon width={25} height={25} className="transition duration-150 ease-in-out hover:bg-gray-800 cursor-pointer text-gray-200 hover:text-gray-400 rounded p-1" />
                                            ) : (
                                                <MoonIcon width={25} height={25} className="hover:bg-gray-200 cursor-pointer text-gray-500 rounded p-1" />
                                            )}
                                        </span>
                                    </div> */}
                                    {
                                        JSON.parse(user)?.role === "buyer" ? (
                                            <div className="flex space-x-4">
                                                {nav_options.BuyerAuthenticatedNavigation.map((item) => (
                                                    <Link to={item.href}
                                                        style={{ transition: "all .15s ease" }}
                                                        key={item.name}
                                                        className={classNames('text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold')}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        <Text>{item.name}</Text>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : JSON.parse(user)?.role === "seller" ? (
                                            <div className="flex space-x-4">
                                                {nav_options.SellerAuthenticatedNavigation.map((item) => (
                                                    <Link to={item.href}
                                                        style={{ transition: "all .15s ease" }}
                                                        key={item.name}
                                                        className={classNames('text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold')}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        <Text>{item.name}</Text>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex space-x-4">
                                                {nav_options.navigation.map((item) => (
                                                    <Link to={item.href}
                                                        style={{ transition: "all .15s ease" }}
                                                        key={item.name}
                                                        className={classNames('text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold')}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        <Text>{item.name}</Text>
                                                    </Link>
                                                ))}
                                            </div>
                                        )
                                    }
                                </div>
                                {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative transition duration-500 ease-in-out">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className="flex text-sm rounded-full focus:outline-none" style={{ transition: "all .15s ease" }}>
                                                    <span className="sr-only">Open user menu</span>
                                                    {
                                                        user ? (
                                                            <>
                                                                {
                                                                    JSON.parse(user)?.display_picture ? (
                                                                        <img
                                                                            className="h-9 w-9 rounded-full"
                                                                            src={JSON.parse(user)?.display_picture}
                                                                            alt="propic"
                                                                        />
                                                                    ) : (
                                                                        <UserCircleIcon width={24} height={24} className="text-gray-600" />
                                                                    )
                                                                }
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="space-x-4">
                                                                    <Link to='/register' className="bg-yellow-400 hover:bg-yellow-500 md:block hidden py-2 px-4 text-gray-700 rounded-sm">
                                                                        Join community
                                                                    </Link>
                                                                    <Link to='/register' className="bg-yellow-400 hover:bg-yellow-500 md:hidden block py-2 px-4 text-gray-700 rounded-sm">
                                                                        Join
                                                                    </Link>
                                                                </div>
                                                            </>
                                                        )
                                                    }

                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition duration-150 ease-in-out"
                                                enterFrom="transition duration-150 ease-in-out transform opacity-0 scale-95"
                                                enterTo="transition duration-150 ease-in-out transform opacity-100 scale-100"
                                                leave="transition duration-150 ease-in-out transition ease-in duration-75"
                                                leaveFrom="transition duration-150 ease-in-out transform opacity-100 scale-100"
                                                leaveTo="transition duration-150 ease-in-out transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    static
                                                    className="origin-top-right transition duration-150 ease-in-out absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link to='/account'
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                Account
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <span onClick={logout}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                                                )}
                                                            >
                                                                Sign out
                                                            </span>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        </div>
                    </nav>

                    <Disclosure.Panel className="sm:hidden transition duration-150 ease-in-out">
                        <span onClick={() => setTheme(colorTheme)} style={{ transition: "all .15s ease" }} className="transition duration-150 ease-in-out px-2 pt-2 pb-3 space-y-1 flex flex-row items-center">
                            {colorTheme === 'light' ? (
                                <LightBulbIcon width={25} height={25} className="hover:bg-gray-800 cursor-pointer text-gray-200 hover:text-gray-400 rounded p-1" />
                            ) : (
                                <MoonIcon width={25} height={25} className="hover:bg-gray-200 cursor-pointer text-gray-500 rounded p-1" />
                            )}
                            <Text>Theme</Text>
                        </span>
                        {
                            JSON.parse(user)?.role === "buyer" ? (
                                <div className="px-2 pt-2 pb-3 space-y-1 shadow-md">
                                    {nav_options.BuyerAuthenticatedNavigation.map((item) => (
                                        <Link to={item.href}
                                            key={item.name}
                                            className={classNames('text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base')}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            ) : JSON.parse(user)?.role === "seller" ? (
                                <div className="px-2 pt-2 pb-3 space-y-1 shadow-md">
                                    {nav_options.SellerAuthenticatedNavigation.map((item) => (
                                        <Link to={item.href}
                                            key={item.name}
                                            className={classNames('text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base')}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="px-2 pt-2 pb-3 space-y-1 shadow-md">
                                    {nav_options.navigation.map((item) => (
                                        <Link to={item.href}
                                            key={item.name}
                                            className={classNames('text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base')}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )
                        }

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
  )
}

export default HomeNavbar
