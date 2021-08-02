import React from 'react'
import ChatItem from '../chatitem/ChatItem'

function Sidebar() {
    return (
        <div className="flex flex-col overflow-hidden max-w-sm bg-white">
            <div className="flex flex-col rounded-lg p-2">
                <input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200 outline-none" />
            </div>
            <div>
                <ChatItem/>
            </div>
            <div>
                <ChatItem/>
            </div>
            <div>
                <ChatItem/>
            </div>
        </div>
    )
}

export default Sidebar
