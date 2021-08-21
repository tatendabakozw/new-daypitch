import React from 'react'
import { Text } from '@chakra-ui/react'

export default function ExploreJobListItem({ title, description, amount, name }) {
    return (
        <div className={`bg-white  transition duration-100 transform hover:scale-105 rounded-lg cursor-pointer md:px-8 px-4 py-4 justify-between items-center w-full self-center shadow mb-4`}>
            <div className="flex flex-col justify-between">
                <p>{title}</p>
                <Text color="gray.500" mt={2} noOfLines={3}>
                    {description}
                </Text>
                <div className="flex flex-row items-center mt-4">
                    <p className="mr-4 text-gray-900 font-semibold text-sm">${amount}</p>
                    <p className="mr-4 text-gray-700">{name}</p>
                </div>
            </div>
        </div>
    )
}
