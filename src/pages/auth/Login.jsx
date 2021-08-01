import React, { useState } from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import google from '../../images/google.svg'
import Text from '../../components/Text/Text'
import { useHistory } from 'react-router'
import {Link } from 'react-router-dom'
import logo from '../../images/favicon.png'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithCred, loginWithGoog } from '../../redux/actions/userActions'


function  Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [msg, setMsg] = useState('')

    // eslint-disable-next-line
    // const [{}, dispatch] = useStateValue()
    const userLogin = useSelector(state=> state.userCredsSignIn)
    const {loading, error} = userLogin


    const loginWithGoogle = (e) =>{
        e.preventDefault()
        dispatch(loginWithGoog())
        if(!error){
            setMsg('Login sucessful')
            setTimeout(() => {
                history.push('/explore')
            },1500)
        }
    }

    const dispatch = useDispatch()

    const loginWIthCreds = (e) =>{
        e.preventDefault()
        dispatch(loginWithCred(email, password))
        if(!error){
            setMsg('Login sucessful')
            setTimeout(() => {
                history.push('/explore')
            }, 1500);
        }
    } 

    return (
        <HomeLayout>
            <div className="md:pt-12 pt-16 bg-gray-50 min-h-screen dark:bg-gray-900 flex flex-row items-center w-full">
                <form onSubmit={loginWIthCreds} className="login flex flex-col items-center my-auto w-full">
                    
                    <div className="flex flex-row mb-4 pt-8 items-center">
                        <img src={logo} alt="logo" className="w-10" />
                        <Text className="text-2xl font-semibold">Sign In</Text>
                    </div>

                    <button onClick={loginWithGoogle} className="bg-blue-900 self-center md:w-2/5 w-4/5 justify-center rounded p-2 flex flex-row items-center ">
                        <img src={google} alt="logo" className="w-8 mr-2" />
                        <p className="text-white">Sign in using Google</p>
                    </button>

                    <p className="text-gray-500 dark:text-gray-400 my-2">or sign in using credentials</p>
                    {msg ? (<p className="bg-blue-200 border-l-4 border-blue-600 md:w-2/5 w-4/5 text-gray-700 text-center p-2 rounded-sm">{msg}</p>) : null}
                    {error ? (<p className="bg-red-200 border-l-4 border-red-600 md:w-2/5 w-4/5 text-gray-700 text-center p-2 rounded-sm">{error}</p>) : null}
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-2">
                        <label htmlFor="email" className="text-gray-700 dark:text-gray-100 text-sm mb-1">Email Address</label>
                        <input
                            type="text"
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="border-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded p-2" />
                    </div>
                    <div className="emai flex flex-col md:w-2/5 w-4/5 my-2">
                        <span className="flex flex-row items-center justify-between">
                            <Text className="text-sm mb-1">Password</Text>
                            {/* <Link to='/passwordreset' className="text-blue-700 cursor-pointer text-xs mb-1">Forgot password?</Link> */}
                        </span>
                        <div className="flex border-2 justify-between px-2 dark:bg-gray-700 outline-none dark:border-gray-700 border-blue-800 rounded bg-white flex-row items-center">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="email"
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter password" className="border-2 dark:bg-gray-700 w-full dark:text-gray-400 outline-none dark:border-gray-700 border-none rounded py-2" />
                            {passwordVisible ? (<span onClick={() => setPasswordVisible(false)} className="cursor-pointer text-gray-600 dark:text-gray-800">
                                <EyeOffIcon width={20} height={20} />
                            </span>) : (<span onClick={() => setPasswordVisible(true)} className="cursor-pointer dark:text-gray-400 text-gray-600">
                                <EyeIcon  width={20} height={20}/>
                            </span>)}
                        </div>
                    </div>


                        {
                            loading ? (<button type="submit" disabled className="bg-yellow-400 opacity-50 self-center font-semibold w-2/5 mt-8 justify-center rounded text-gray-700 p-2 flex flex-row items-center">Sign In</button>) :
                            (<button type="submit" className="bg-yellow-400 hover:bg-yellow-500 self-center font-semibold w-2/5 mt-8 justify-center rounded text-gray-700 p-2 flex flex-row items-center">Sign In</button>)
                        }


                    <p className="text-gray-500 mt-2 dark:text-gray-300 text-sm">Not yet registered? <Link to='/register'>Register here</Link></p>

                </form>
            </div>
        </HomeLayout>
    )
}

export default Login
