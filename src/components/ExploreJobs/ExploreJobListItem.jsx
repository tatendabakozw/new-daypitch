import React from 'react'
import { Text } from '@chakra-ui/react'
import { HeartIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router-dom'
import { HStack } from '@chakra-ui/react'

export default function ExploreJobListItem({ title, description, amount, name, id }) {
    const history = useHistory()
    return (
        <span onClick={() => history.push(`/job/${id}`)} className={`bg-white  transition duration-100 transform hover:scale-105 cursor-pointer md:px-0 px-2 py-4 justify-between items-center w-full self-center border-b border-gray-200 mb-4`}>
            <div className="flex flex-row items-center">
                <p className="text-gray-700 font-semibold mr-2 text-xs">{name}</p>
                <p className="text-gray-400 mr-2">&bull;</p>
                <p className="text-xs text-gray-400">Posted 2 mins ago</p>
                <div className="flex-1"></div>
                <span className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                        <HeartIcon height={16} width={16} className="text-gray-600" />
                    </span>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex justify-between flex-row items-center">
                    {/* <p>{id}</p> */}
                    <div className="text-gray-700 flex flex-row items-center">
                        <Text noOfLines={1} className="mr-4 font-semibold text-sm">{title}</Text>
                        <div className="flex">
                            <p className="bg-yellow-100 text-yellow-700 p-1 text-xs rounded flex uppercase">NEW</p>
                        </div>
                    </div>
                   
                </div>
                <Text color="gray.500" mt={2} noOfLines={3} className="text-sm text-gray-700">
                    {description}
                </Text>
                <div className="grid grid-cols-5 gap-2 items-center mt-4 w-full">
                    <HStack noOfLines={1} spacing="20px" className="col-span-4">
                        <HStack spacing={'20px'}>
                            <Text noOfLines={1} className="p-1 text-xs text-gray-700 border border-gray-200 rounded">
                                UX/UI
                            </Text><Text noOfLines={1} className="p-1 text-xs text-gray-700 border border-gray-200 rounded">
                                REACT
                            </Text>
                            <Text noOfLines={1} className="p-1 text-xs text-gray-700 border border-gray-200 rounded">
                                WEBSITE
                            </Text>
                        </HStack>
                    </HStack>
                    <p className="text-gray-900 font-semibold text-sm text-right self-end col-span-1">${amount}</p>
                </div>
            </div>
        </span>
    )
}
