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
    const [pricerange, setPriceRange] = useState(0)
    const [selected, setSelected] = useState(categories[0])
    const [create_lodaing, setCreate_lodaing] = useState(false)
    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')
    const loggedInUser = localStorage.getItem('userinfo')
    const dispatch = useDispatch()

    const user_service = useSelector(state => state.getService)
    const {service} = user_service

    const userSignin = useSelector(state=> state.userCredsSignIn)
    const {userInfo} = userSignin 

    console.log(userInfo?.user?.uid)

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
        auth.currentUser.getIdToken().then(token=>{
            axios.post(`${apiUrl}/service/create`,{
                description,
                tags: catTags,
                school_level: level,
                school_attended: school,
                price_range: pricerange,
                category: selected,
                username: userInfo?.user?.displayName,
                picture: userInfo?.user?.photoURL,
                location: location,
                website: website
            },{
                headers: {
                    authorization: token
                }
            }).then(res=>{
                setCreate_lodaing(false)
                console.log(res.data)
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
        }).catch(err=>{
            setCreate_lodaing(false)
            console.log(err)
        })
        
        
    }

    const edit_user_profiule = (e) =>{
        e.preventDefault()
        auth.currentUser.getIdToken().then(token=>{
            axios.patch(`${apiUrl}/service/eit/${userInfo?.user?.uid}`,{
                description,
                tags: catTags,
                school_level: level,
                school_attended: school,
                price_range: pricerange,
                category: selected,
                username: userInfo?.user?.displayName,
                picture: userInfo?.user?.photoURL,
                location: location,
                website: website
            },{
                headers: token
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
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

    // console.log(service)

    return (
        <HomeLayout>
            <AccountLayout>
            <div className=" flex flex-col lg:px-32 md:px-16 px-4 items-center">
               <p className="py-16 text-xl font-semibold text-gray-700">Describe your service</p>
               {/* category */}
               <div className="flex flex-col  w-full items-center">
                    <div className="flex flex-col self-center bg-white w-full">
                            <p className="text-sm mb-2 text-gray-700 ml-4">Select service category</p>
                            <div className={`" w-full"`}>
                                    <div className="relative mt-1">
                                        <Select variant="filled" value={selected} placeholder="Select Category" onChange={e=>setSelected(e.target.value)}>
                                            {
                                                categories.map(category=>(
                                                    <option value={category.name}>{category.name}</option>
                                                ))
                                            }
                                        </Select>
                                    </div>
                        </div>
                    </div>
               </div>

               {/* tags */}
               <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col self-center bg-white w-full">
                            {/* <p className="text-sm my-4 text-gray-700 ml-4 font-semibold">Search tags</p> */}
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
                            cols="30" rows="7"
                            variant="filled"
                            className="p-2 border border-gray-300 outline-none rounded-lg bg-white"
                            placeholder="Describe yourself and/or your service with not less than 150 words"
                            onChange={e=> setDescription(e.target.value)}
                            required
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
                                variant="filled"
                                placeholder="Level Reached"
                                className="p-2 col-span-1 border border-gray-300 bg-white outline-none rounded-lg"
                                onChange={e=> setLevel(e.target.value)}
                            />
                            <Input
                                variant="filled" 
                                type="text"
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
                            type="number"
                            variant="filled"
                            placeholder="$35/hour"
                            className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                            onChange={e => setPriceRange(e.target.value)}
                        />
                    </div>
               </div>

                {/* location */}
                <div className="flex flex-col w-full items-center mt-4">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">location (city/country)</p>
                        {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
                        <Input 
                            type="text"
                            variant="filled"
                            placeholder="where are you located"
                            className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                            onChange={e => setLocation(e.target.value)}
                            required
                        />
                    </div>
               </div>
               {/* location */}
               <div className="flex flex-col w-full items-center mt-4">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">website (Optional)</p>
                        {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
                        <Input 
                            type="text"
                            variant="filled"
                            placeholder="what is your website?"
                            className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                            onChange={e => setWebsite(e.target.value)}
                            required
                        />
                    </div>
               </div>
               

               {/* //create profile button */}
               <div className="flex flex-col w-full items-center my-8">
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
                                            <span onClick={edit_user_profiule} className="capitalize bg-blue-900 p-2 text-white rounded-lg text-center cursor-pointer hover:bg-blue-800">Edit Profile</span>
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
