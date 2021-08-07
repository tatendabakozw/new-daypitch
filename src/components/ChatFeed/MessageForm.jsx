import React from 'react'
import { useState } from 'react'
import {sendMessage, isTyping} from 'react-chat-engine'
import {PhotographIcon} from '@heroicons/react/outline'
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function MessageForm(props) {

    const [value, setValue] = useState('')
    const {creds} = props
    const chatId = props.chatId 

    // console.log(chatId)

    const hanldeSubmit = (e)=>{
        e.preventDefault()
        const text = value.trim()

        if(text.length > 0) sendMessage(creds, chatId, {text})
        setValue('')
    }

    const hanleUpload = (e)=>{
        sendMessage(creds, chatId, {File: e.target.files, text: '' })
    }

    return (
        <div className="w-full">
            <form action="" onSubmit={hanldeSubmit} className="flex flex-row items-center w-full bg-gray-50 rounded-full px-2">
                <input 
                    type="text" 
                    onChange={e=> {
                        setValue(e.target.value)
                        isTyping(props, chatId)
                    }}
                    className="w-full p-2 bg-gray-50 rounded-full outline-none"
                    placeholder="type message"
                />
                <label htmlFor="upload-button"className="mr-2 cursor-pointer">
                    <span>
                        <PhotographIcon height={20} width={20} className="text-gray-500" />
                    </span>
                </label>
                <input type="file" multiple={false} id="upload-button" style={{display: 'none'}} on />
                <button type="submit" className="text-gray-500">
                    <SendRoundedIcon fontSize="small" />
                </button>
            </form>
        </div>
    )
}

export default MessageForm
