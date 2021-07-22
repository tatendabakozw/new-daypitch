import React, { useState } from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import google from '../../images/google.svg'
import Text from '../../components/Text/Text'
import { useHistory } from 'react-router'
import {Link } from 'react-router-dom'
import { auth } from '../../helpers/firebase'
import firebase from 'firebase'
import { useStateValue } from '../../context/StateProvier'
var provider = new firebase.auth.GoogleAuthProvider();



function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwor2, setPassword2] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [passwordVisible2, setPasswordVisible2] = useState(false)
    const [err, setErr] = useState('')
    const [msg, setMSg] = useState('')
    const history = useHistory()

    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue()

    const registerWithGoogle = (e) =>{
        e.preventDefault()

            auth.signInWithPopup(provider).then(auth_user=>{
                if(auth_user){
                    setMSg('Account created Sucessfully')
                    dispatch({
                        type: 'SET_USER',
                        user: 'daypitch_user_logged_in'
                    })
                    window.localStorage.setItem('daypitch_user_auth', 'true')
                    setTimeout(() => {
                        history.push('/') 
                    }, 2000);
                } 
            }).catch(err=>{
                setErr(err.message)
            })
    }

    const registerWithCreds = (e) =>{
        e.preventDefault()
        if(passwor2 !== password){
            setErr('passwords do not match')
        }else{
            auth.createUserWithEmailAndPassword(email, password).then(auth_user=>{
                if(auth_user){
                    if(auth_user.additionalUserInfo.isNewUser){
                        setMSg('Sign Up successfull')
                        setTimeout(() => {
                            history.push('/becomeaseller')
                        }, 2000);
                    }else{
                        setMSg('Sign Up successfull')
                        window.localStorage.setItem('daypitch_user_auth', 'true')
                        setTimeout(() => {
                            history.push('/login') 
                        }, 2000);
                    }
                }
            }).catch(err=>{
                setErr(err.message)
            })
        }
    }

    return (
        <HomeLayout>
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-row items-center w-full">
                <form onSubmit={registerWithCreds} className="login flex flex-col items-center w-full">
                    <Text className="text-2xl mb-4 font-semibold">Sign Up</Text>
                    <button className="bg-blue-900 hover:bg-blue-800 self-center md:w-2/5 w-4/5 justify-center rounded p-2 flex flex-row items-center " onClick={registerWithGoogle}>
                        <img src={google} alt="logo" className="w-8 mr-2" />
                        <p className="text-white">Register using Google</p>
                    </button>
                    <p className="text-gray-500 dark:text-gray-400 text-sm my-2">Or register using credentials</p>

                    {msg ? (<p className="bg-blue-200 border-l-4 border-blue-600 md:w-2/5 w-4/5 text-gray-700 capitalize font-semibold text-center p-2 rounded-sm">{msg}</p>) : null}
                    {err ? (<p className="bg-red-200 border-l-4 border-red-600 md:w-2/5 w-4/5 text-gray-700 capitalize font-semibold text-center p-2 rounded-sm">{err}</p>) : null}

                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-2">
                        <label htmlFor="service" className="text-gray-700 text-sm mb-1 dark:text-gray-200">Email Address</label>
                        <input
                            type="text"
                            id="service"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="border-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded p-2" />
                    </div>

                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-2">
                        <label htmlFor="password2" className="text-gray-700 text-sm mb-1 dark:text-gray-200">Password</label>
                        <div className="flex border-2 justify-between px-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded bg-white flex-row items-center">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="email"
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter password" className="border-2 dark:bg-gray-700 w-full dark:text-gray-400 outline-none dark:border-gray-700 border-none rounded py-2" />
                            {passwordVisible ? (<span onClick={() => setPasswordVisible(false)} className="cursor-pointer text-gray-600">
                                <EyeOffIcon width={20} height={20} />
                            </span>) : (<span onClick={() => setPasswordVisible(true)} className="cursor-pointer text-gray-600">
                                <EyeIcon width={20} height={20}/>
                            </span>)}
                        </div>
                    </div>
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-2">
                        <label htmlFor="password2" className="text-gray-700 text-sm mb-1 dark:text-gray-200">Confirm Password</label>
                        <div className="flex border-2 justify-between px-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded bg-white flex-row items-center">
                            <input
                                type={passwordVisible2 ? "text" : "password"}
                                id="email"
                                onChange={e => setPassword2(e.target.value)}
                                placeholder="Confirm password" className="border-2 dark:bg-gray-700 w-full dark:text-gray-400 outline-none dark:border-gray-700 border-none rounded py-2" />
                            {passwordVisible2 ? (<span onClick={() => setPasswordVisible2(false)} className="cursor-pointer text-gray-600">
                                <EyeOffIcon width={20} height={20} />
                            </span>) : (<span onClick={() => setPasswordVisible2(true)} className="cursor-pointer text-gray-600">
                                <EyeIcon width={20} height={20} />
                            </span>)}
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">By signing up you agree to our terms and conditions of use</p>
                    <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 self-center font-semibold w-2/5 mt-8 justify-center rounded text-gray-700 p-2 flex flex-row items-center">Sign Up</button>
                    <p className="text-gray-500 dark:text-gray-200 mt-2 text-sm">Already registered? <Link to='/login'>Sign In here</Link></p>

                </form>
            </div>
        </HomeLayout>
    )
}

export default Register