import React from 'react'
import { useState } from 'react'
import ChatItem from '../../components/chatitem/ChatItem'
import ChatLayout from '../../layouts/chatlayout/ChatLayout'
import {ChevronLeftIcon, ChatIcon} from '@heroicons/react/outline'
import pic from '../../images/IMG_5117_1_1.jpg'
import image from '../../images/man.png'
import { useHistory } from 'react-router-dom'

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
    }
]

function Chat() {
    
    const [mobile_on, stMobileOn] = useState(false)
    const history = useHistory()
    const [current_chat_id, setCurrentChat_id] = useState()

    return (
        <ChatLayout>
            <div className="flex w-full">
                <div className="md:hidden block w-full">
                    <div className={`${mobile_on ? "hidden" : "flex"}  md:w-1/4 w-full min-h-screen bg-white`}>
                        <div className={`flex flex-col overflow-hidden bg-white"`}>
                            <div className="flex flex-col rounded-lg p-2">
                                <input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200 outline-none w-full" />
                            </div>
                            {
                                messages.map(message=>(
                                    <span onClick={()=> {
                                        stMobileOn(true)
                                        setCurrentChat_id(message.id)
                                    }}>
                                        <ChatItem
                                            sender_id={message.id}
                                            sender_name={message.sender_name}
                                            message={message.message}
                                        />
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${mobile_on ? "block" : "hidden" } md:w-4/5 w-full  min-h-screen bg-gray-50 p-4`}>
                        <span onClick={()=> stMobileOn(false)} className="flex flex-row items-center">
                            <ChevronLeftIcon height={20} width={20} className="text-gray-700" />
                            <p>Back to chats</p>
                        </span>
                        {
                            current_chat_id ? (<>
                                {
                                    messages.map((message, index)=>(
                                        <div className="flex flex-col w-full justify-between" key={index}>
                                            {message.receiver_name === "tatenda bako" ? (<div className="flex flex-row justify-end w-full">
                                                <p className="text-right my-2 bg-blue-900 text-white text-sm max-w-4xl rounded-lg p-4">{message.message}</p>
                                            </div>) : null}
                                            {message.receiver_name === "tafara bako" ? (<div className="flex flex-row justify-start">
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
                        .chatata
                    </div>
                </div>

                {/* .for deskyop */}
                <div className="md:flex flex-row hidden w-full">
                    <div className={`flex flex-col w-1/4 min-h-screen`}>
                        <div className={`flex flex-col overflow-hidden bg-white"`}>
                            <div className="flex flex-col rounded-lg p-2">
                                <input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200 outline-none w-full" />
                            </div>
                            {
                                messages.map(message=>(
                                    <span onClick={()=> {
                                        stMobileOn(true)
                                        setCurrentChat_id(message.id)
                                    }}>
                                        <ChatItem
                                            sender_id={message.id}
                                            sender_name={message.sender_name}
                                            message={message.message}
                                        />
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <div className={`flex flex-col w-4/5  min-h-screen bg-gray-white p-4 bg-whitewhite`}>
                        {
                            current_chat_id ? (<>
                                {
                                    messages.map((message, index)=>(
                                        <div className="flex flex-col w-full justify-between" key={index}>
                                            {message.receiver_name === "tatenda bako" ? (<div className="flex flex-row justify-end w-full">
                                                <p className="text-right my-4 bg-blue-900 text-white max-w-4xl rounded-lg p-4">{message.message}</p>
                                            </div>) : null}
                                            {message.receiver_name === "tafara bako" ? (<div className="flex flex-row justify-start">
                                                <p className="text-left my-4 bg-gray-100 text-gray-700 max-w-4xl rounded-lg p-4">{message.message}</p>
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
                        <div className="flex-1"></div>
                        <div className="flex bottom-5 mb-16 flex-end self-end bg-gray-500 w-full rounded-full">
                            <input type="text" className="bg-gray-50 p-4 rounded-full" placeholder="type message" />
                        </div>
                    </div>
                </div>
            </div>
        </ChatLayout>
    )
}

export default Chat
