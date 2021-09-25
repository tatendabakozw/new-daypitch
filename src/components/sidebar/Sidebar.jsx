import React from 'react'
import ChatItem from '../chatitem/ChatItem'

function Sidebar() {
    return (
        <div className="flex flex-col overflow-hidden bg-white">
            <div className="flex flex-col rounded-lg p-2">
                <input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200 outline-none w-full" />
            </div>
            <div>
                <ChatItem/>
            </div>
        </div>
    )
}

export default Sidebar
