import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'
import Sidebar from '../../components/sidebar/Sidebar'

function ChatLayout({children}) {
    return (
        <div className="flex flex-col w-full">
            <div className="navbar">
                <HomeNavbar/>
            </div>
            <div className="flex w-full">
                <div className="w-1/4 min-h-screen">
                    <Sidebar/>
                </div>
                <div className="w-4/5 min-h-screen bg-green-600">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ChatLayout
