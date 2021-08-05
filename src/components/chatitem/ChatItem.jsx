import React from 'react'
import image from '../../images/IMG_5117_1_1.jpg'

function ChatItem() {
    return (
        <div className="grid grid-cols-5 border-b border-gray-200 p-2 cursor-pointer hover:bg-gray-50">
            <div className="h-16 w-16 col-span-1 rounded-full bg-gray-200 mr-2 overflow-hidden">
                <img src={image} alt="user_image" className="object-contain" />
            </div>
            <div className="col-span-4 flex flex-col justify-center px-2 overflow-ellipsis">
                <p className="text-gray-700 font-semibold text-lg">Full name</p>
                <p className="truncate text-sm text-gray-600">iam a new mekahkfjh asjkflhkjasdhfkjl hagfhjkasfjkahskjldfhlkjasfh  asflhjkashflkjhasdfjhlkjashd</p>
            </div>
        </div>
    )
}

export default ChatItem
