import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import ChatFeed from '../../components/ChatFeed/ChatFeed';
import HomeNavbar from '../../components/navigation/HomeNavbar';

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
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
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
                renderChatFeed = {(feedProps)=> <ChatFeed {...feedProps} />}
            />
            </div>
        </div>
    )
}

export default Chat
