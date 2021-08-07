import React from 'react'

function TheirMessage({lastMessage, message}) {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

    return (
        <div className>
            {
                isFirstMessageByUser && (
                    <div className="message-avatar" 
                        style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                    />
                )
            }
            {
                message?.attachments?.length> 0 ? (
                       <img 
                           src={message.attachments[0].file} 
                           alt="sent-message" 
                           className="float-left rounded-lg"    
                       />
                    ) :(
                        <div className="bg-gray-100 float-left p-2 my-2 rounded-lg ml-2 text-sm text-gray-900">
                            {message.text}
                        </div>
                    )
               
            }
        </div>
    )
}

export default TheirMessage
