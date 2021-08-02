import React from 'react'

function Sidebar() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col rounded-lg p-2">
                <input type="text" placeholder="search" className="p-2 rounded-lg border border-gray-200" />
            </div>
        </div>
    )
}

export default Sidebar
