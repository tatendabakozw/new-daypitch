import React, { useState } from 'react'
import {MenuAlt1Icon} from '@heroicons/react/outline'
import NavbarDropdown from '../dropdowns/NavbarDropdown'
import logo from '../../images/logo425.png'

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

const SellerAuthenticatedOptions = [
  { name: 'Explore', href: '/explore', current: false, id: '1278hj' },
  { name: 'Messages', href: '/chat', current: true, id:'asd87a' },
  { name: 'Dashboard', href: '/dashboard', current: true, id: '19208jhj' },
]

const SellerAuthenticatedNavigation = [
  { name: 'Explore', href: '/explore', current: false, id:'ajkjs90' },
  { name: 'Messages', href: '/chat', current: true, id: '909asd' },
  { name: 'Dashboard', href: '/dashboard', current: true, id:'9812jk' },

]

const BuyerAuthenticatedOptions = [
  { name: 'Explore', href: '/explore', current: false, id: '1298ada' },
  { name: 'Become a seller', href: '/becomeaseller', current: true, id: '19uiu' },
  { name: 'Messages', href: '/chat', current: false, id: 'asklk12' },

]

function HomeNavbar() {
    const [navbaron, setNavbarOn] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)

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
        <nav className={`${navbaron ? 'bg-gray-50' : 'bg-white'} bg-white lg:px-32 md:px-16 px-4 h-16 flex flex-row items-center w-full transition duration-500 ease-in-out`}>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="w-auto">
              <img src={logo} alt="logo" className="h-6 w-auto" />
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
