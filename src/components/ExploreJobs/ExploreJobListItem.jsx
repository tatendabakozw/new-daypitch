import React from 'react'
import { Text } from '@chakra-ui/react'
import {HeartIcon} from '@heroicons/react/outline'
import { useHistory } from 'react-router-dom'

export default function ExploreJobListItem({ title, description, amount, name, id }) {
    const history = useHistory()
    return (
        <span onClick={() => history.push(`/job/${id}`)} className={`bg-white  transition duration-100 transform hover:scale-105 rounded-lg cursor-pointer md:px-8 px-4 py-4 justify-between items-center w-full self-center shadow mb-4`}>
            <div className="flex flex-col justify-between">
                <div className="flex justify-between flex-row items-center">
                    {/* <p>{id}</p> */}
                    <p>{title}</p>
                    <span className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                    <HeartIcon height={16} width={16} className="text-gray-600" />
                    </span>
                </div>
                <Text color="gray.500" mt={2} noOfLines={3}>
                    {description}
                </Text>
                <div className="flex flex-row items-center mt-4">
                    <p className="mr-4 text-gray-900 font-semibold text-sm">${amount}</p>
                    <p className="mr-4 text-gray-700">{name}</p>
                </div>
            </div>
        </span>
    )
}
