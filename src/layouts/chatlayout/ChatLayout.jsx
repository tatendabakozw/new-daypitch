import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'

function ChatLayout({children}) {
    return (
        <div className="flex flex-col">
            <div className="navbar">
                <HomeNavbar/>
            </div>
            {children}
        </div>
    )
}

export default ChatLayout
