import React, { useState } from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import {CameraIcon} from '@heroicons/react/outline'
import image from '../../images/tatenda.jpg'

function Account() {

    const [firstname, setFirstmame] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    return (
        <HomeLayout>
            <div className="flex flex-col pt-24 px-96">
                <p className="text-2xl text-gray-700 pb-8">Edit Profile</p>

                {/* //edit picture */}
                <div className="flex flex-row self-center items-end pb-16">
                    <div className="self-center h-28 w-28 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                        <img src={image} alt="w-auto" />
                    </div>
                    <span className="cursor-pointer">
                        <CameraIcon height={24} width={24} className="text-blue-400 hover:text-blue-600" />
                    </span>
                </div>

                {/* //first and last name */}
                <div className="grid grid-cols-2 gap-16 pb-8">
                    <span className="flex flex-col col-span-1">
                        <label htmlFor="firstname" className="text-gray-500 text-sm pb-2 font-semibold">First Name</label>
                        <input 
                            type="text" 
                            id='firstname' 
                            className="border border-blue-300 outline-none rounded-sm p-2 bg-gray-50"
                            onChange={e=> setFirstmame(e.target.value)}
                            placeholder={`Tatenda`}
                        />
                    </span>
                    <span className="flex flex-col col-span-1">
                        <label htmlFor="lastname" className="text-gray-500 text-sm pb-2 font-semibold">Last Name</label>
                        <input 
                            type="text" 
                            id='lastname' 
                            className="border border-blue-300 outline-none rounded-sm p-2 bg-gray-50"
                            onChange={e=> setLastname(e.target.value)}
                            placeholder={`Bako`}
                        />
                    </span>
                </div>

                {/* //edit email part */}
                <div className="w-full pb-8">
                    <span className="flex flex-col">
                        <label htmlFor="email" className="text-gray-500 text-sm pb-2 font-semibold">Email</label>
                        <input 
                            type="text" 
                            id='email' 
                            className="border border-blue-300 outline-none rounded-sm p-2 bg-gray-50"
                            onChange={e=> setEmail(e.target.value)}
                            placeholder={`tatenda@email.com`}
                        />
                    </span>
                </div>

                {/* //edit address part */}
                <div className="w-full pb-8">
                    <span className="flex flex-col">
                        <label htmlFor="email" className="text-gray-500 text-sm pb-2 font-semibold">Address</label>
                        <input 
                            type="text" 
                            id='address' 
                            className="border border-blue-300 outline-none rounded-sm p-2 bg-gray-50"
                            onChange={e=> setAddress(e.target.value)}
                            placeholder={`15002 Zengeza 3 Extension, Chitungwiza`}
                        />
                    </span>
                </div>

                {/* //sity and country */}
                <div className="grid grid-cols-2 gap-16 pb-8">
                    <span className="flex flex-col col-span-1">
                        <label htmlFor="city" className="text-gray-500 text-sm pb-2 font-semibold">City</label>
                        <input 
                            type="text" 
                            id='city' 
                            className="border border-blue-300 outline-none rounded-sm p-2 bg-gray-50"
                            onChange={e=> setCity(e.target.value)}
                            placeholder={`Harare`}
                        />
                    </span>
                    <span className="flex flex-col col-span-1">
                        <label htmlFor="country" className="text-gray-500 text-sm pb-2 font-semibold">Country</label>
                        <input 
                            type="text" 
                            id='country' 
                            className="border border-blue-300 outline-none rounded-sm p-2 bg-gray-50"
                            onChange={e=> setCountry(e.target.value)}
                            placeholder={`Zimbabwe`}
                        />
                    </span>
                </div>
                {/* //edit address part */}
                <div className="pb-8">
                    <span className="flex flex-col">
                        <button 
                            type="submit" 
                            className="border-none bg-blue-900 hover:bg-blue-800 cursor-pointer outline-none rounded-sm p-2 text-white"
                            onChange={e=> setAddress(e.target.value)}
                        >Save</button>
                    </span>
                </div>

            </div>
        </HomeLayout>
    )
}

export default Account
