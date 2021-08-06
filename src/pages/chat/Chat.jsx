import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import HomeNavbar from '../../components/navigation/HomeNavbar';
import './ChatStyles.css'

function Chat() {

    const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<form onSubmit={ () => createDirectChat(creds)} className="flex flex-row items-center border border-gray-200 rounded-full px-2 mb-8">
				<input 
					placeholder='type username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
					className="p-2 w-full rounded-full outline-none"
				/>
				<button type="submit" className="text-gray-500">
					search
				</button>
			</form>
		)
	}


    return (
        <div className="w-full">
            <HomeNavbar/>
            <div className="bg-green-600">
            <ChatEngine
                height='100vh'
                userName='bako'
                userSecret='123456'
                projectID='908aeb92-95e4-4503-9f57-de1b322f4dee'
                // renderChatFeed = {(feedProps)=> <ChatFeed {...feedProps} />}
				renderNewChatForm={(creds) => renderChatForm(creds)}
            />
            </div>
        </div>
    )
}

export default Chat
