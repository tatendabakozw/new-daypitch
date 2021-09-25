import React from 'react'
import { Spinner } from "@chakra-ui/react"

function Loading() {
    return (
        <div className="flex w-full">
            <div className="flex flex-col items-center w-full mt-60">
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.900"
                    size="xl"
                />
            </div>
        </div>
    )
}

export default Loading
