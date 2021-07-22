import React, { useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuAlt2Icon, XIcon, UserCircleIcon, MoonIcon, LightBulbIcon } from '@heroicons/react/outline'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../images/logo425.png'
import useDarkMode from '../../helpers/useDarkMode'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HomeNavbar() {
  const [navbaron, setNavbarOn] = useState(false)
  const [colorTheme, setTheme] = useDarkMode();
  const user = localStorage.getItem('daypitchuser')

  const changeBackground = () => {
    if (window.scrollY >= 80) {
        setNavbarOn(true)
    } else {
        setNavbarOn(false)
    }
  }

  return (
    <nav className={`${navbaron ? "bg-white dark:bg-gray-900 shadow " : "bg-none dark:bg-gray-900 "}  transition duration-500 ease-in-out h-16 flex flex-row items-center`}>
      home nav
    </nav>
  )
}

export default HomeNavbar
