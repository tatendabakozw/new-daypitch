import React from 'react'

function MyMessage({message}) {

    console.log(message)

    if(message?.attachments?.length> 0){
         return(
            <img 
                src={message.attachments[0].file} 
                alt="sent-message" 
                className="float-right rounded-lg"    
            />
         )
    }
    return (
        <div className="bg-blue-900 float-right p-2 my-2 rounded-lg mr-2 text-white text-sm">
            {message.text}
        </div>
    )
}

export default MyMessage
