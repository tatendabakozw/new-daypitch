import React from 'react'

function Error({text}) {
    return (
        <div className="bg-red-200 text-red-700 p-2 rounded w-full text-center">
            <p>{text}</p>
        </div>
    )
}

export default Error
