import React from 'react'
import HomeNavbar from '../../components/navigation/HomeNavbar'

function HomeLayout({children}) {
    return (
        <div className="layout">
            <div className="navbar">
                <HomeNavbar/>
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    )
}

export default HomeLayout
