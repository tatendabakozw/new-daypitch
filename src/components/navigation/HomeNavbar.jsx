import React, { useState } from 'react'
import {MenuAlt1Icon} from '@heroicons/react/outline'
import NavbarDropdown from '../dropdowns/NavbarDropdown'
import logo from '../../images/logo425.png'

const UnAuthenticatedNaOptions = [
  {name : 'Explore', location:'/explore', id:"ias878", authenticated: true},
  {name : 'How It Works', location:'/howitworks', id:"asld86", authenticated: true},
  {name : 'Dashboard', location:'/dashboard', id:"kjsau67", authenticated: true},
  {name : 'Sign In', location:'/auth/login', id:"kjsadf8", authenticated: false},
  {name : 'Explore', location:'/explore', id:"aaa876g", authenticated: false},
  {name : 'How It Works', location:'/howitworks', id:"salk90", authenticated: false},
]

const UnAuthenticatedMobileNavOptions = [
  {name : 'Explore', location:'/explore', id:"ias878", authenticated: true},
  {name : 'How It Works', location:'/howitworks', id:"asld86", authenticated: true},
  {name : 'Dashboard', location:'/dashboard', id:"kjsau67", authenticated: true},
  {name : 'Sign In', location:'/auth/login', id:"kjsadf8", authenticated: false},
  {name : 'Explore', location:'/explore', id:"aaa876g", authenticated: false},
  {name : 'How It Works', location:'/howitworks', id:"salk90", authenticated: false},
  {name : 'Join community', location:'/register', id:"salk6a0", authenticated: false},
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
             <>
              {
                authenticated ? (
                  <>
                     {
                        UnAuthenticatedNaOptions.map(option =>(
                          <>
                            {option.authenticated ? (<span key={option.id} className="mr-4 uppercase text-sm text-gray-700 font-semibold cursor-pointer">
                            <p>{option.name}</p>
                          </span>) : null}
                          </>
                        ))
                      }
                  </>
                ) : (<>
                  {
                      UnAuthenticatedNaOptions.map(option =>(
                        <>
                          {!option.authenticated ? (<span key={option.id} className="mr-4 uppercase text-sm text-gray-700 font-semibold cursor-pointer">
                            <p>{option.name}</p>
                          </span>) : null}
                        </>
                      ))
                    }
                </>)
              }
             </>
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
