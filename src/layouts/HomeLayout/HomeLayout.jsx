import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'

function HomeLayout({children}) {
    return (
        <div className="layout">
            <div className="fixed w-full top-0 z-50">
                <HomeNavbar/>
            </div>
            <div className="min-h-screen bg-gray-50">
                {children}
            </div>
        </div>
    )
}

export default HomeLayout
