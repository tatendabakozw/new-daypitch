import React from 'react'

function ProductLoading() {
    return (
        <div class="border border-gray-300 p-4 max-w-sm w-full mx-auto">
            <div class="relative animate-pulse group flex flex-col items-center space-x-4">
                <div class="rounded-lg overflow-hidden bg-gray-300 w-full aspect-w-1 aspect-h-1 group-hover:opacity-75"></div>
                <div class="flex-1 flex-col items-center flex space-y-4 py-1 w-full mt-4">
                    <div class="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div class="space-y-2 w-full flex flex-col items-center">
                        <div class="h-4 bg-gray-400 rounded w-full"></div>
                        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductLoading
