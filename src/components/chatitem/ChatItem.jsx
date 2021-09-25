import React from 'react'
import image from '../../images/man.png'

function ChatItem({propic, message,sender_name, sender_id}) {
    return (
        <div className="grid grid-cols-5 border-b gap-16 border-gray-200 p-2 cursor-pointer hover:bg-gray-50">
            <div className="h-16 w-16 col-span-1 rounded-full bg-gray-200 mr-2 overflow-hidden">
                <img src={propic ? propic : image } alt="user_image" className="object-contain" />
            </div>
            <div className="col-span-4 flex flex-col justify-center px-2 overflow-ellipsis">
                <p className="text-gray-700 font-semibold text-lg">{sender_name}</p>
                <p className="truncate text-sm text-gray-600">{message}</p>
            </div>
        </div>
    )
}

export default ChatItem
