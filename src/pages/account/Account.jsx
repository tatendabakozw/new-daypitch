import React, { useState, useEffect, useRef, Fragment } from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import {CameraIcon} from '@heroicons/react/outline'
import { auth, storage } from '../../helpers/firebase'
import Dropzone from "react-dropzone";
import axios from 'axios'
import { apiUrl } from '../../helpers/apiUrl'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'
import AccountLayout from '../../layouts/AccountLayuot/AccountLayout';
import { Input } from '@chakra-ui/react';


function Account() {

    const [firstname, setFirstmame] = useState('')
    const [picture, setPicture] = useState(null);
    const [lastname, setLastname] = useState('')
    // const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [username, setUsername] = useState('')
    const [user, setUser] = useState()

    const userSignin = useSelector(state=> state.userCredsSignIn)
    const {userInfo} = userSignin 

    //for image picking
    const [previewSrc, setPreviewSrc] = useState("");
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const [profile_progress, setProfileProgress] = useState(101)
    const dropRef = useRef();

    //delete account
    let [isDelteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    function closeDelteModal() {
        setIsDeleteDialogOpen(false)
    }

    function openDeleteModal() {
        setIsDeleteDialogOpen(true)
    }


    const onDrop = (files) => {
        const [uploadedFile] = files;
        setPicture(uploadedFile);
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    };

    useEffect(()=>{
        auth.onAuthStateChanged(auth_user=>{
            if(auth_user){
                console.log(auth_user)
                setUser(auth_user)
            }
        })
    },[])

    const changeProPic = (e) =>{
        e.preventDefault()
        const uploadTask = storage.ref(`/images/daypitch/propics/${user?.uid}`).put(picture)
        uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProfileProgress(progress);
            console.log(progress)
        }, (error) => {
            console.log(error);
            alert(error.message)
        },
            () => {
                storage.ref('images/daypitch/propics').child(user.uid).getDownloadURL().then(url => {
                    user.updateProfile({
                        photoURL: url
                    })
                    window.localStorage.setItem('daypitch_user', JSON.stringify({
                        propic: url,
                        username: user.displayName
                    }))
                })
            }
        )
    }

    const editDetails = (e) =>{
        e.preventDefault()
        axios.patch(`${apiUrl}/user/edit/${user?.uid}`,{
            username: username,
            lastname: lastname,
            firstname: firstname,
            city: city,
            address: address,
            country: country,
            // email: email
        },{
            headers: {
                authorization : userInfo?.credential?.oauthIdToken
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    const deleteAccount = (e) =>{
        e.preventDefault()
    }

    return (
        <HomeLayout>
            <AccountLayout>
            <div className="flex flex-col lg:px-32 md:px-16 px-4 w-full">
                <p className="text-2xl text-gray-700 pb-8">Edit Profile</p>
                
                {/* //edit picture */}
                <div className="flex flex-row self-center items-end pb-16">
                    <div className="self-center h-24 w-24 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                        <img src={userInfo?.user?.photoURL} alt="w-auto" />
                    </div>
                    {/* <span className="cursor-pointer">
                        <CameraIcon height={24} width={24} className="text-blue-400 hover:text-blue-600" />
                    </span> */}
                    <Dropzone onDrop={onDrop}>
                        {({ getRootProps, getInputProps }) => (
                        <div
                            {...getRootProps({ className: "drop-zone" })}
                            ref={dropRef}
                        >
                            <Input {...getInputProps()} />
                            <div className="cursor-pointer text-gray-400 flex flex-col  items-center rounded outline-none border-none">
                                <CameraIcon width={24} height={24} className="text-blue-400 hover:text-blue-600" />
                            </div>
                            {picture && (
                            <span>
                                <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                                Selected file:
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                                {picture.name}
                                </p>
                            </span>
                            )}
                        </div>
                        )}
                    </Dropzone>
                    {previewSrc ? (
                        isPreviewAvailable ? (
                        <div className="flex flex-col ml-2">
                            <div className="self-center h-28 w-28 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                                <img
                                className="w-auto"
                                src={previewSrc}
                                alt="Preview"
                                />
                            </div>
                            {
                                profile_progress < 100 ? 'uploading...' : (<span
                                    onClick={changeProPic} 
                                    className="bg-blue-900 p-1 text-sm cursor-pointer hover:bg-blue-800 rounded-lg text-white text-center">save image</span>)
                            }
                        </div>
                        ) : (
                        <div className="preview-message">
                            <p>No preview available for this file</p>
                        </div>
                        )
                    ) : (
                        <div className="font-semibold text-gray-700 dark:text-gray-300 text-sm ml-2">
                        <p>Select picture</p>
                        </div>
                    )}
                </div>

                {/* //edit username part */}
                <div className="w-full pb-8">
                    <div className="flex flex-row items-center w-full mb-4groo">
                        <div className="border-b border-gray-300 w-1/3"></div>
                        <p className="text-gray-700 font-semibold text-center text-sm w-1/3">Display info</p>
                        <div className="border-b border-gray-300 w-1/3"></div>
                    </div>
                    <span className="flex flex-col">
                        <label htmlFor="username" className="text-gray-500 text-sm pb-2 font-semibold">Username/Businessname</label>
                        <Input 
                            type="text"
                            variant="filled" 
                            id='username' 
                            className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                            onChange={e=> setUsername(e.target.value)}
                            placeholder={`Username`}
                        />
                    </span>
                </div>

                {/* //first and last name */}
                <div className="grid grid-cols-2 md:gap-16 gap-4 pb-8">
                    <span className="flex flex-col col-span-1">
                        <label htmlFor="firstname" className="text-gray-500 text-sm pb-2 font-semibold">First Name</label>
                        <Input 
                            type="text"
                            variant="filled" 
                            id='firstname' 
                            className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                            onChange={e=> setFirstmame(e.target.value)}
                            placeholder={`Tatenda`}
                        />
                    </span>
                    <span className="flex flex-col col-span-1">
                        <label htmlFor="lastname" className="text-gray-500 text-sm pb-2 font-semibold">Last Name</label>
                        <Input 
                            type="text"
                            variant="filled" 
                            id='lastname' 
                            className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                            onChange={e=> setLastname(e.target.value)}
                            placeholder={`Bako`}
                        />
                    </span>
                </div>

                {/* //edit email part */}
                {/* <div className="w-full pb-8">
                    <span className="flex flex-col">
                        <label htmlFor="email" className="text-gray-500 text-sm pb-2 font-semibold">Email</label>
                        <Input 
                            type="text"
                            variant="filled" 
                            id='email' 
                            className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                            onChange={e=> setEmail(e.target.value)}
                            placeholder={`${user?.email}`}
                        />
                    </span>
                </div> */}

                {/* //edit address part */}
                <div className="w-full pb-8">
                    <span className="flex flex-col">
                        <label htmlFor="address" className="text-gray-500 text-sm pb-2 font-semibold">Address</label>
                        <Input 
                            type="text"
                            variant="filled" 
                            id='address' 
                            className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                            onChange={e=> setAddress(e.target.value)}
                            placeholder={`15002 Zengeza 3 Extension, Chitungwiza`}
                        />
                    </span>
                </div>

                {/* //sity and country */}
                <div className="grid grid-cols-2 md:gap-16 gap-4 pb-8">
                    <span className="flex flex-col col-span-1">
                        <label htmlFor="city" className="text-gray-500 text-sm pb-2 font-semibold">City</label>
                        <Input 
                            type="text"
                            variant="filled" 
                            id='city' 
                            className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                            onChange={e=> setCity(e.target.value)}
                            placeholder={`Harare`}
                        />
                    </span>
                    <span className="flex flex-col col-span-1">
                        <label htmlFor="country" className="text-gray-500 text-sm pb-2 font-semibold">Country</label>
                        <Input 
                            type="text"
                            variant="filled" 
                            id='country' 
                            className="border border-blue-300 outline-none rounded-lg p-2 bg-gray-50"
                            onChange={e=> setCountry(e.target.value)}
                            placeholder={`Zimbabwe`}
                        />
                    </span>
                </div>
                {/* //edit address part */}
                <div className="pb-8">
                    <span className="flex flex-col">
                        <button 
                            onClick={editDetails}
                            className="border-none bg-blue-900 hover:bg-blue-800 cursor-pointer outline-none rounded-lg p-2 text-white"
                        >Save</button>
                    </span>
                </div>

                {/* //edit address part */}
                <div className="pb-8">
                    <span className="flex flex-col">
                        <button 
                            onClick={openDeleteModal}
                            className="border-none bg-red-500 hover:bg-red-600 cursor-pointer outline-none rounded-lg p-2 text-white"
                        >Delete Account</button>
                    </span>
                    <>
                        <Transition appear show={isDelteDialogOpen} as={Fragment}>
                            <Dialog
                            as="div"
                            className="fixed inset-0 z-10 overflow-y-auto"
                            onClose={closeDelteModal}
                            >
                            <div className="min-h-screen px-4 text-center">
                                <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                >
                                <Dialog.Overlay className="fixed inset-0" />
                                </Transition.Child>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                                >
                                    &#8203;
                                </span>
                                <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                                >
                                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-3xl rounded-lg border border-gray-200">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                            Confirm Delete!
                                        </Dialog.Title>
                                        <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Once your account has been deleted it can never be retreived. Are you sure you want to proceed?
                                        </p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 mr-4 border border-transparent rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                onClick={closeDelteModal}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                                onClick={deleteAccount}
                                            >
                                                Delete my account!
                                            </button>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                            </Dialog>
                        </Transition>
                    </>
                </div>

            </div>
            </AccountLayout>
        </HomeLayout>
    )
}

export default Account
