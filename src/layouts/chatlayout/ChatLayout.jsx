import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'
import Sidebar from '../../components/sidebar/Sidebar'

function ChatLayout({children}) {
    return (
        <div className="flex flex-col">
            <div className="navbar">
                <HomeNavbar/>
            </div>
            <div className="flex">
                <div className="w-1/4 min-h-screen bg-white">
                    <Sidebar/>
                </div>
                <div className="w-4/5 min-h-screen bg-gray-50">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ChatLayout
