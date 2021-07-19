import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {MenuAlt1Icon, ChevronDownIcon} from '@heroicons/react/outline'


function HomeNavbar(props) {
    const [navbaron, setNavbarOn] = useState(false)

      const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbarOn(true)
        } else {
            setNavbarOn(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
      <>
        <nav className={`${navbaron ? 'bg-gray-50' : 'bg-white'} bg-white lg:px-24 md:px-16 px-4 h-16 flex flex-row items-center w-full transition duration-500 ease-in-out`}>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="">
              <p>logo</p>
            </div>
            <div className="lg:flex md:flex hidden">
              <p>other</p>
            </div>
            <div className="lg:hidden md:hidden flex">
              <MenuAlt1Icon height={24} width={24} className="text-gray-700" />
            </div>
          </div>
        </nav>
      </>
    )
}

export default HomeNavbar
