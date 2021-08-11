import React from 'react'
import Footer from '../../components/footer/Footer'
import HomeNavbar from '../../components/navigation/HomeNavbar'

function HomeLayout({children}) {
    return (
        <div className="layout">
            <div className="fixed w-full top-0 z-50">
                <HomeNavbar/>
            </div>
            <div className="min-h-screen bg-white pb-8">
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default HomeLayout
