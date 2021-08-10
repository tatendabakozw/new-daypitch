import React, { useState } from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ChatLayout from '../../layouts/chatlayout/ChatLayout';
import './ChatStyles.css'

function Chat() {

    return (
        <div className="w-full">
			<div className="flex flex-row w-full">
				<div className="w-1/4 min-h-screen">
					<Sidebar></Sidebar>
				</div>
				<div className="min-h-screen w-3/4 bg-green-600">
					the chat screen
				</div>
			</div>
        </div>
    )
}

export default Chat
