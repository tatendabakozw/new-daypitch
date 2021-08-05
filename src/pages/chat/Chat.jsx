import React from 'react'
import { useState } from 'react'
import ChatItem from '../../components/chatitem/ChatItem'
import ChatLayout from '../../layouts/chatlayout/ChatLayout'
import {ChevronLeftIcon} from '@heroicons/react/outline'

function Chat() {
    
    const [mobile_on, stMobileOn] = useState(false)

    return (
        <ChatLayout>
            <div className="flex w-full">
                <div className="md:hidden block w-full">
                    <div className={`${mobile_on ? "hidden" : "flex"}  md:w-1/4 w-full min-h-screen bg-white`}>
                        <div className={`flex flex-col overflow-hidden bg-white"`}>
                            <div className="flex flex-col rounded-lg p-2">
                                <input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200 outline-none w-full" />
                            </div>
                            <span onClick={()=> stMobileOn(true)}>
                                <ChatItem/>
                            </span>
                        </div>
                    </div>
                    <div className={`${mobile_on ? "block" : "hidden" } md:w-4/5 w-full  min-h-screen bg-gray-50 p-4`}>
                        <span onClick={()=> stMobileOn(false)} className="flex flex-row items-center">
                            <ChevronLeftIcon height={20} width={20} className="text-gray-700" />
                            <p>Back to chats</p>
                        </span>
                    </div>
                </div>

                {/* .for deskyop */}
                <div className="md:flex flex-row hidden w-full">
                    <div className={`flex flex-col w-1/4 min-h-screen`}>
                        <div className={`flex flex-col overflow-hidden bg-white"`}>
                            <div className="flex flex-col rounded-lg p-2">
                                <input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200 outline-none w-full" />
                            </div>
                            <span onClick={()=> stMobileOn(true)}>
                                <ChatItem/>
                            </span>
                        </div>
                    </div>
                    <div className={`flex flex-col w-4/5  min-h-screen bg-gray-white p-4 bg-green-600`}>
                        alksdjfkl;asjflksj
                    </div>
                </div>
            </div>
        </ChatLayout>
    )
}

export default Chat
