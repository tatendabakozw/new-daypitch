import React, { useState, useEffect, useRef } from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import {CameraIcon} from '@heroicons/react/outline'
import image from '../../images/man.png'
import { auth, storage } from '../../helpers/firebase'
import Dropzone from "react-dropzone";
import axios from 'axios'
import { useStateValue } from '../../context/StateProvier'
import { apiUrl } from '../../helpers/apiUrl'



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
    const [{token}] = useStateValue()

    //for image picking
    const [previewSrc, setPreviewSrc] = useState("");
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const [profile_progress, setProfileProgress] = useState(101)
    const dropRef = useRef();


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
                authorization : token
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <HomeLayout>
            <div className="flex flex-col pt-24 lg:px-96 md:px-44 px-4">
                <p className="text-2xl text-gray-700 pb-8">Edit Profile</p>
                
                {/* //edit picture */}
                <div className="flex flex-row self-center items-end pb-16">
                    <div className="self-center h-24 w-24 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                        <img src={user?.photoURL ? user?.photoURL : image} alt="w-auto" />
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
                            <input {...getInputProps()} />
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
                                    className="bg-blue-900 p-1 text-sm cursor-pointer hover:bg-blue-800 rounded-sm text-white text-center">save image</span>)
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
                    <span className="flex flex-col">
                        <label htmlFor="username" className="text-gray-500 text-sm pb-2 font-semibold">Username/Businessname</label>
                        <input 
                            type="text" 
                            id='username' 
                            className="border border-blue-300 outline-none rounded-sm p-2 bg-gray-50"
                            onChange={e=> setUsername(e.target.value)}
                            placeholder={`Username`}
                        />
                    </span>
                </div>

                {/* //first and last name */}
                <div className="grid grid-cols-2 md:gap-16 gap-4 pb-8">
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
                {/* <div className="w-full pb-8">
                    <span className="flex flex-col">
                        <label htmlFor="email" className="text-gray-500 text-sm pb-2 font-semibold">Email</label>
                        <input 
                            type="text" 
                            id='email' 
                            className="border border-blue-300 outline-none rounded-sm p-2 bg-gray-50"
                            onChange={e=> setEmail(e.target.value)}
                            placeholder={`${user?.email}`}
                        />
                    </span>
                </div> */}

                {/* //edit address part */}
                <div className="w-full pb-8">
                    <span className="flex flex-col">
                        <label htmlFor="address" className="text-gray-500 text-sm pb-2 font-semibold">Address</label>
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
                <div className="grid grid-cols-2 md:gap-16 gap-4 pb-8">
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
                            onClick={editDetails}
                            className="border-none bg-blue-900 hover:bg-blue-800 cursor-pointer outline-none rounded-sm p-2 text-white"
                        >Save</button>
                    </span>
                </div>

            </div>
        </HomeLayout>
    )
}

export default Account
