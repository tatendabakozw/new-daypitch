import React from 'react'
import { useState } from 'react'
import ChatItem from '../../components/chatitem/ChatItem'
import ChatLayout from '../../layouts/chatlayout/ChatLayout'
import {ChevronLeftIcon, ChatIcon} from '@heroicons/react/outline'
import pic from '../../images/IMG_5117_1_1.jpg'
import image from '../../images/man.png'
import { useHistory } from 'react-router-dom'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_Firestore_users } from '../../redux/actions/firestore_usersActions'
import { Input, Spinner, Text } from "@chakra-ui/react"
import { create_a_Message_action, get_all_Messages } from '../../redux/actions/conversationsActions'

const messages = [
    {
        message: 'hi, whats app, can i borrow some money',
        sent_to: 'me',
        sender_name: 'tatenda bako',
        receiver_name: 'tafara bako',
        sender_pic: pic,
        id: 1,
        date: 1
    },
    {
        message: 'this is a test message to see if everything works',
        sent_to: 'me',
        sender_name: 'tafara bako',
        receiver_name: 'tatenda bako',
        sender_pic: image,
        id: 2,
        date: 2,
    },
    {
        message: 'hi, whats app, can i borrow some money',
        sent_to: 'me',
        sender_name: 'tafara bako',
        receiver_name: 'tatenda bako',
        sender_pic: pic,
        id: 4,
        date: 3
    },
    {
        message: 'this is a test message to see if everything works',
        sent_to: 'me',
        sender_name: 'tatenda bako',
        receiver_name: 'tafara bako',
        sender_pic: image,
        id: 4,
        date: 4,
    },
]

function Chat() {

    const [mobile_on, stMobileOn] = useState(false)
    const history = useHistory()
    const [current_chat_id, setCurrentChat_id] = useState()
	const dispatch = useDispatch()
	const all_users = useSelector(state=> state.all_users)
	const all_messages = useSelector(state=> state.all_messages)
	const {loading, users} = all_users
	const [chatStart, setChatStart] = useState(false)
	const [chat_user, setChatUser] = useState()
	const [message, setMessage] = useState('')

	const logged_in_user = window.localStorage.getItem('userInfo')

	useEffect(()=>{
		dispatch(get_all_Firestore_users(JSON.parse(logged_in_user)?.user?.uid))
	},[dispatch])

	

	const initializeChat = (user) =>{
		setChatStart(true)
		setChatUser(user)
		// console.log(user)
		if(chat_user){
			dispatch(get_all_Messages({uid_1:JSON.parse(logged_in_user)?.user?.uid, uid_2: chat_user?.uid }))
		}

	}

	const send_a_message = (e) =>{
		e.preventDefault()
		const msg_obj = {
			sender : JSON.parse(logged_in_user)?.user?.uid,
			receiver : chat_user?.uid,
			message: message
		}
		if(message !== ""){
			dispatch(create_a_Message_action(msg_obj))
			setMessage('')
		}
	}

    return (
        <ChatLayout>
            <div className="flex w-full">
                <div className="md:hidden block w-full">
                    <div className={`${mobile_on ? "hidden" : "flex"}  md:w-1/4 w-full min-h-screen bg-white`}>
                        <div className={`flex flex-col overflow-hidden bg-white w-full`}>
                            <div className="flex flex-col rounded-lg p-2">
                                <Input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200 outline-none w-full" />
                            </div>
                            {
								loading ? (<>
								
								<div class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto ">
									<div class="animate-pulse flex space-x-4">
										<div class="rounded-full bg-gray-400 h-12 w-12"></div>
										<div class="flex-1 space-y-4 py-1">
										<div class="h-4 bg-gray-400 rounded w-3/4"></div>
										<div class="space-y-2">
											<div class="h-4 bg-gray-400 rounded"></div>
											<div class="h-4 bg-gray-400 rounded w-5/6"></div>
										</div>
										</div>
									</div>
								</div>
								<div class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto ">
									<div class="animate-pulse flex space-x-4">
										<div class="rounded-full bg-gray-400 h-12 w-12"></div>
										<div class="flex-1 space-y-4 py-1">
										<div class="h-4 bg-gray-400 rounded w-3/4"></div>
										<div class="space-y-2">
											<div class="h-4 bg-gray-400 rounded"></div>
											<div class="h-4 bg-gray-400 rounded w-5/6"></div>
										</div>
										</div>
									</div>
								</div>

								</>) : (<>
									{
										users?.map((user, index)=>(
											<span
												key={index}
												onClick={()=> {
												stMobileOn(true)
												// setCurrentChat_id(user)
												initializeChat(user)
											}}>
												<ChatItem
													sender_id={user.uid}
													sender_name={user.name}
													message={user.name}
													propic={user.propic}
												/>
											</span>
										))
									}
								</>)
							}
                        </div>
                    </div>
                    <div className={`${mobile_on ? "block" : "hidden" } md:w-4/5 w-full  min-h-screen bg-gray-50 p-4`}>
                        <span onClick={()=> stMobileOn(false)} className="flex flex-row items-center">
                            <ChevronLeftIcon height={20} width={20} className="text-gray-700" />
                            <p>Back to chats</p>
                        </span>
                        {
							loading ? (<p>loading...</p>): (<>
								{
									chatStart ? (<>
										{
											all_messages?.messages?.map((message, index)=>(
												<div className="flex flex-col w-full justify-between" key={index}>
													{message.sender === JSON.parse(logged_in_user)?.user?.uid ? (<div className="flex flex-row justify-end w-full">
														<p className="text-right my-2 bg-blue-900 text-white text-sm max-w-4xl rounded-lg p-4">{message.message}</p>
													</div>) : null}
													{message.receiver === JSON.parse(logged_in_user)?.user?.uid ? (<div className="flex flex-row justify-start">
														<p className="text-left my-2 bg-gray-100 text-gray-700 text-sm max-w-4xl rounded-lg p-4">{message.message}</p>
													</div>) : null}
												</div>
											))
										}
									</>) : (<div className="grid items-center content-center my-auto">
										<div className="flex flex-col items-center my-auto">
											<ChatIcon height={96} width={96} className="text-blue-900" />
											<p>Click a chat to view</p>
										</div>
									</div>)
								}
							</>)
						}
						 <div className="flex-1"></div>
                        <div className="flex bottom-5 mb-16 flex-row items-center flex-end self-end bg-white w-full rounded-full">
                            <Input value={message} onChange={e=>setMessage(e.target.value)} type="text" className="bg-white p-4 rounded-full w-full outline-none" placeholder="type message" />
							<span onClick={send_a_message} className="cursor-pointer p-4">
								<SendRoundedIcon fontSize = "large" className="text-gray-700"/>
							</span>
                        </div>
                    </div>
                </div>

                {/* .for deskyop */}
                <div className="md:flex flex-row min-h-screen hidden w-full">
                    <aside className={`w-1/4 flex flex-col pb-16`}>
                        <div className={`flex flex-col h-screen overflow-y-scroll bg-white"`}>
                            <div className="flex flex-col rounded-lg p-2">
                                <Input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200 outline-none w-full" />
                            </div>
                            {
								loading? (<>
								
								<div class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto ">
									<div class="animate-pulse flex space-x-4">
										<div class="rounded-full bg-gray-400 h-12 w-12"></div>
										<div class="flex-1 space-y-4 py-1">
										<div class="h-4 bg-gray-400 rounded w-3/4"></div>
										<div class="space-y-2">
											<div class="h-4 bg-gray-400 rounded"></div>
											<div class="h-4 bg-gray-400 rounded w-5/6"></div>
										</div>
										</div>
									</div>
								</div>
								<div class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto ">
									<div class="animate-pulse flex space-x-4">
										<div class="rounded-full bg-gray-400 h-12 w-12"></div>
										<div class="flex-1 space-y-4 py-1">
										<div class="h-4 bg-gray-400 rounded w-3/4"></div>
										<div class="space-y-2">
											<div class="h-4 bg-gray-400 rounded"></div>
											<div class="h-4 bg-gray-400 rounded w-5/6"></div>
										</div>
										</div>
									</div>
								</div>

								</>) :(<>
									{
										users?.map((user, index)=>(
											<span key={index} onClick={()=> {
												stMobileOn(true)
												// setCurrentChat_id(user.uid)
												initializeChat(user)
											}}>
												<ChatItem
													sender_id={user.uid}
													sender_name={user.name}
													message={user.name}
													propic={user.propic}
												/>
											</span>
										))
									}
								</>)
							}
                        </div>
						
                    </aside>
                    <div className={`flex flex-col w-4/5 h-screen overflow-y-scroll bg-gray-white p-4 bg-white`}>
						<div className="text-center sticky top-0 flex flex-col"><Text className="bg-blue-50 p-2 fixed top-16 z-0 rounded-lg text-sm text-blue-900 text-center self-center">{chat_user?.name}</Text></div>
                        {
							loading ? (<div className="grid items-center my-auto h-96 content-center">
										<div className="flex flex-col items-center">
											<Spinner
												thickness="4px"
												speed="0.65s"
												emptyColor="gray.200"
												color="blue.500"
												size="xl"
											/>
										</div>
									</div>) : (<>
										{
											chatStart ? (<>
										{
											all_messages?.messages?.map((message, index)=>(
												<div className="flex flex-col w-full justify-between" key={index}>
													{/* <p>{message.sender }</p> */}
													{message.sender === JSON.parse(logged_in_user)?.user?.uid ? (<div className="flex flex-row justify-end w-full">
														<p className="text-right my-4 bg-blue-900 text-white max-w-4xl rounded-lg p-2">{message.message}</p>
													</div>) : message.receiver === JSON.parse(logged_in_user)?.user?.uid ? (
														<div className="flex flex-row justify-start">
															<p className="text-left my-4 bg-gray-100 text-gray-700 max-w-4xl rounded-lg p-2">{message.message}</p>
														</div>
													):null}
												</div>
											))
										}
									</>) : (<div className="grid items-center content-center my-auto h-96">
										<div className="flex flex-col items-center my-auto">
											<ChatIcon height={96} width={96} className="text-blue-900" />
											<p>Click on a user to start talking</p>
										</div>
									</div>)
								}
							</>)
						}
                        <div className="flex-1"></div>
                        <div className="flex bottom-5 mb-16 flex-row items-center flex-end self-end bg-white w-full rounded-full">
                            <Input value={message} onChange={e=>setMessage(e.target.value)} type="text" className="bg-gray-50 p-4 rounded-full w-full outline-none" placeholder="type message" />
							<span onClick={send_a_message} className="cursor-pointer p-4">
								<SendRoundedIcon fontSize = "large" className="text-gray-700"/>
							</span>
                        </div>
                    </div>
                </div>
            </div>
        </ChatLayout>
    )
}

export default Chat