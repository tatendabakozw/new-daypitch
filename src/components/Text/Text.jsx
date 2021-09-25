import React from 'react'

function Text({children, className}) {
    return (
        <p className={`${className} text-gray-700 dark:text-gray-200`}>
            {children}
        </p>
    )
}

export default Text
