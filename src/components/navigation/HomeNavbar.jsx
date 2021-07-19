import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {MenuAlt1Icon, ChevronDownIcon} from '@heroicons/react/outline'
import NavbarDropdown from '../dropdowns/NavbarDropdown'

const UnAuthenticatedNaOptions = [
  {name : 'Explore', location:'/explore', id:"ias878"},
  {name : 'How It Works', location:'/howitworks', id:"asld86"},
  {name : 'Sign In', location:'/auth/login', id:"kjsadf8"}
]

const UnAuthenticatedMobileNavOptions = [
  {name : 'Explore', location:'/explore', id:"ias878"},
  {name : 'How It Works', location:'/howitworks', id:"asld86"},
  {name : 'Sign In', location:'/auth/login', id:"kjsadf8"}
]

const AuthenticatedMobileNavOptions = [
  {name : 'Explore', location:'/explore', id:"ias878"},
  {name : 'Dashboard', location:'/howitworks', id:"asld86"},
  {name : 'Account', location:'/auth/login', id:"kjsadf8"}
]

function HomeNavbar() {
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
            <div className="lg:flex md:flex hidden items-center">
              {
                UnAuthenticatedNaOptions.map(option =>(
                  <span key={option.id} className="mr-4 uppercase text-sm text-gray-700 font-semibold cursor-pointer">
                    <p>{option.name}</p>
                  </span>
                ))
              }
              <span className="uppercase p-2 bg-yellow-400 rounded-sm text-gray-700 cursor-pointer hover:bg-yellow-500 text-sm font-semibold">
                <p>JOIN COMMUNITY</p>
              </span>
      
            </div>
            <div className="lg:hidden md:hidden flex">
              <NavbarDropdown options={UnAuthenticatedMobileNavOptions} title={<MenuAlt1Icon height={24} width={24} className="text-gray-700" />} />
            </div>
          </div>
        </nav>
      </>
    )
}

export default HomeNavbar
