import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'

function HomeLayout({children}) {
    return (
        <div className="layout">
            <div className="fixed w-full top-0 z-50">
                <HomeNavbar/>
            </div>
            <div className="min-h-screen bg-red-500 pt-16">
                {children}
            </div>
            <div className="h-screen bg-green-600"></div>
        </div>
    )
}

export default HomeLayout
