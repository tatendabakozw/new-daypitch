import React, {Fragment, useState} from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Tags from '../../components/tags/Tags'
import TextArea from '../../components/Text/TextArea'

const categories = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ]

function BecomeASeller() {
    const [catTags, setCatTags] = useState()
    const [description, setDescription] = useState('')

    const selectedTags = (tags) => {
        setCatTags(tags)
    }


    return (
        <HomeLayout>
           <div className=" flex flex-col items-center px-4">
               <p className="py-16 text-xl font-semibold text-gray-700">Describe your service</p>

               {/* category */}
               <div className="flex flex-col lg:w-2/5 md:w-2/3 w-full items-center">
                    <div className="flex flex-col self-center bg-gray-50 w-full">
                            <p className="text-sm mb-2 text-gray-700 ml-4">Select service category</p>
                            <CategoryList 
                                className=""
                            />
                    </div>
               </div>

               {/* tags */}
               <div className="flex flex-col lg:w-2/5 md:w-2/3 w-full items-center">
                    <div className="flex flex-col self-center bg-gray-50 w-full">
                            {/* <p className="text-sm my-4 text-gray-700 ml-4 font-semibold">Search tags</p> */}
                            <Tags
                                selectedTags={selectedTags} 
                                className=""
                            />
                    </div>
               </div>

               {/* description */}
               <div className="flex flex-col lg:w-2/5 md:w-2/3 w-full items-center">
                    <div className="flex flex-col self-center bg-gray-50 w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">Description</p>
                        {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
                        <TextArea 
                            limit={150} 
                            cols="30" rows="7"
                            className="p-2 border border-gray-300 outline-none rounded-sm"
                            placeholder="Describe yourself and/or your service with not less than 150 words"
                            value={description}/>
                    </div>
               </div>

               {/* education */}
               <div className="flex flex-col lg:w-2/5 md:w-2/3 w-full items-center">
                    <div className="flex flex-col self-center bg-gray-50 w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">Education (Optional)</p>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <input 
                                type="text"
                                placeholder="Level Reached"
                                className="p-2 col-span-1 border border-gray-300 outline-none rounded-sm"
                            />
                            <input 
                                type="text"
                                placeholder="School Attended"
                                className="p-2 border col-span-2 border-gray-300 outline-none rounded-sm"
                            />
                        
                        </div>
                    </div>
               </div>

                {/* price range */}
               <div className="flex flex-col lg:w-2/5 md:w-2/3 w-full items-center mt-4">
                    <div className="flex flex-col self-center bg-gray-50 w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">Price range e.g $45/hour</p>
                        {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
                        <input 
                            type="text"
                            placeholder="$35/hour"
                            className="p-2 border col-span-2 border-gray-300 outline-none rounded-sm"
                        />
                    </div>
               </div>
               

               {/* //create profile button */}
               <div className="flex flex-col lg:w-2/5 md:w-2/3 w-full items-center mt-8">
                    <div className="flex flex-col self-center bg-gray-50 w-full">
                        <span className="capitalize bg-blue-900 p-2 text-white rounded-sm text-center cursor-pointer hover:bg-blue-800">Create My Profile</span>
                    </div>
               </div>
           </div>
        </HomeLayout>
    )
}

const CategoryList = ({className}) =>{
    const [selected, setSelected] = useState(categories[0])

    return (
        <div className={`${className} " w-full"`}>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-sm border border-gray-300 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-sm border border-gray-300 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {categories.map((person, personIdx) => (
                        <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                            `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                select-none relative py-2 pl-10 pr-4 hover:bg-gray-100 cursor-pointer`
                        }
                        value={person}
                        >
                        {({ selected, active }) => (
                            <>
                            <span
                                className={`${
                                selected ? 'font-medium' : 'font-normal'
                                } block truncate`}
                            >
                                {person.name}
                            </span>
                            {selected ? (
                                <span
                                className={`${
                                    active ? 'text-amber-600' : 'text-amber-600'
                                }
                                        absolute inset-y-0 left-0 flex items-center pl-3`}
                                >
                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
                </div>
            </Listbox>
    </div>
    )
}

export default BecomeASeller
