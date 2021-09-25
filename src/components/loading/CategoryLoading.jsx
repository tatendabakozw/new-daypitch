import React from 'react'

function CategoryLoading() {
    return (
        <>
            <div class="border border-gray-300 rounded p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex flex-col space-x-4">
                    <div class="rounded-full bg-blue-600 self-center mb-8 h-12 w-12"></div>
                    <div class="flex-1 space-y-4 py-1">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-gray-300 rounded"></div>
                            <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryLoading
