import React, {Fragment, useState} from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Tags from '../../components/tags/Tags'
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'
import { useDispatch, useSelector } from 'react-redux'
import AccountLayout from '../../layouts/AccountLayuot/AccountLayout'
import { useEffect } from 'react'
import { get_serviceAction } from '../../redux/actions/serviceActions'
import { auth } from '../../helpers/firebase'
import { Input, Select, Textarea } from '@chakra-ui/react'

const categories = [
    { name: 'Programming and tech' },
    { name: 'Writing & translation' },
    { name: 'video and animation' },
    { name: 'graphocs and design' },
    { name: 'home and living' },
    { name: 'budiness' },
    { name: 'vehicle and transportation'}
  ]

function BecomeASeller() {   

    //input values
    const [description, setDescription] = useState('')
    const [catTags, setCatTags] = useState()
    const [level, setLevel] = useState('')
    const [school, setSchool] = useState('')
    const [pricerange, setPriceRange] = useState('')
    const [selected, setSelected] = useState(categories[0])
    const [create_lodaing, setCreate_lodaing] = useState(false)
    const loggedInUser = localStorage.getItem('daypitch_user')
    const dispatch = useDispatch()

    const user_service = useSelector(state => state.getService)
    const {service} = user_service

    const userSignin = useSelector(state=> state.userCredsSignIn)
    const {userInfo} = userSignin 

    const selectedTags = (tags) => {
        setCatTags(tags)
    }

    const create_user_profile = (e) =>{
        e.preventDefault()
        // console.log(catTags)
        // console.log(description)
        // console.log(selected.name)
        // console.log(level)
        // console.log(school)
        // console.log(pricerange)
        setCreate_lodaing(true)
        
        axios.post(`${apiUrl}/service/create`,{
            description,
            tags: catTags,
            school_level: level,
            school_attended: school,
            price_range: pricerange,
            category: selected.name,
            username: JSON.parse(loggedInUser)?.username,
            picture: JSON.parse(loggedInUser)?.propic
        },{
            headers: {
                authorization: userInfo?.credential?.oauthIdToken
            }
        }).then(res=>{
            setCreate_lodaing(false)
            // console.log(res.data)
            axios.patch(`${apiUrl}/user/edit/seller/${res.data.user.firebase_uid}`,{
                role: 'seller'
            }).then(res2=>{
                console.log(res2)
            })
            console.log(res)
        }).catch(err=>{
            setCreate_lodaing(false)
            console.log(err)
        })
    }

    useEffect(()=>{
        auth?.currentUser?.getIdToken().then(res=>{
            dispatch(get_serviceAction(res, userInfo?.user?.uid))
        }).catch(err=>{
            console.log(err)
        })
    },[dispatch, userInfo?.user?.uid])

    return (
        <HomeLayout>
            <AccountLayout>
            <div className=" flex flex-col lg:px-32 md:px-16 px-4 items-center bg-white">
               <p className="py-16 text-xl font-semibold text-gray-700">Describe your service</p>
               {/* category */}
               <div className="flex flex-col  w-full items-center">
                    <div className="flex flex-col self-center w-full">
                            <p className="text-sm mb-2 text-gray-700 ml-4">Select service category</p>
                            <div className={`" w-full"`}>
                                <Select placeholder="Select category" className="outline-none bg-white" variant="filled" onChange={e=> setSelected(e.target.value)}>
                                    {
                                        categories.map((category, index)=>(
                                            <option key={index} value={category.name}>{category.name}</option>
                                        ))
                                    }
                                </Select>
                        </div>
                    </div>
               </div>

               {/* tags */}
               <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col self-center bg-white w-full">
                            <p className="text-sm mt-4 text-gray-700 ml-4">Search tags</p>
                            <Tags
                                selectedTags={selectedTags} 
                                className=""
                            />
                    </div>
               </div>

               {/* description */}
               <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">Description</p>
                        {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
                        <Textarea 
                            minLength={150}
                            variant="filled"
                            cols="30" rows="7"
                            className="p-2 border border-gray-300 outline-none rounded-lg bg-white"
                            placeholder="Describe yourself and/or your service with not less than 150 words"
                            onChange={e=> setDescription(e.target.value)}
                        />
                    </div>
               </div>

               {/* education */}
               <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">Education (Optional)</p>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                            <Input 
                                type="text"
                                placeholder="Level Reached"
                                variant="filled"
                                className="p-2 col-span-1 border border-gray-300 bg-white outline-none rounded-lg"
                                onChange={e=> setLevel(e.target.value)}
                            />
                            <Input 
                                type="text"
                                variant="filled"
                                placeholder="School Attended"
                                className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                                onChange={e=> setSchool(e.target.value)}
                            />
                        
                        </div>
                    </div>
               </div>

                {/* price range */}
               <div className="flex flex-col w-full items-center mt-4">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">Price range e.g $45/hour</p>
                        {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
                        <Input 
                            type="text"
                            variant="filled"
                            placeholder="$35/hour"
                            className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                            onChange={e => setPriceRange(e.target.value)}
                        />
                    </div>
               </div>
               

               {/* //create profile button */}
               <div className="flex flex-col w-full items-center mt-8">
                    <div className="flex flex-col self-center bg-white w-full">
                        {
                            service?.data?.error ? (
                                <>
                                    {
                                        create_lodaing ? (<p className="capitalize bg-blue-900 p-2 text-white rounded-lg text-center opacity-75 hover:bg-blue-800">create_lodaing ...</p>) : (
                                            <span onClick={create_user_profile} className="capitalize bg-blue-900 p-2 text-white rounded-lg text-center cursor-pointer hover:bg-blue-800">Create My Profile</span>
                            )
                                    }
                                            </>
                                        ):(
                                            <>
                                            {
                                        create_lodaing ? (<p className="capitalize bg-blue-900 p-2 text-white rounded-lg text-center opacity-75 hover:bg-blue-800">create_lodaing ...</p>) : (
                                            <span onClick={create_user_profile} className="capitalize bg-blue-900 p-2 text-white rounded-lg text-center cursor-pointer hover:bg-blue-800">Edit Profile</span>
                                        )
                                    }
                                </>
                            )
                        }
                    </div>
               </div>
           </div>
            </AccountLayout>
        </HomeLayout>
    )
}

export default BecomeASeller
