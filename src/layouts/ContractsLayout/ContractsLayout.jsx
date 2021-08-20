import React from 'react'
import HomeLayout from '../HomeLayout/HomeLayout'
import { useHistory, useLocation } from 'react-router-dom'
import SideDrawer from '../../components/panel/SideDrawer'
import { Button, Input, Stack, Textarea } from '@chakra-ui/react'
import { useState } from 'react'

const contract_routes = [
    { name: 'Active Contracts', location: '/jobs' },
    { name: 'My Listings', location: '/listings' }
]

export default function ContractsLayout({ children }) {
    const location = useLocation();
    const history = useHistory()
    const [name, setName] = useState('')
    const [job_name, setJobName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')
    const [amount, setAmount] = useState(0)

    const post_job = (e) =>{
        e.preventDefault()
    }


    return (
        <HomeLayout>
            <div className="flex flex-col items-center px-4">
                <div className="py-16 lg:w-3/5 md:w-4/5 w-full">
                    <>
                        <SideDrawer
                            sendButton={<Button onClick={post_job} colorScheme="blue">Post Job</Button>}
                            drawer_heading={'Create a job'}
                        >
                            <Stack spacing={8} pt={8}>

                                <Input
                                    placeholder="Full name"
                                    onChange={e => setName(e.target.value)}
                                />
                                <Input placeholder="Job name"
                                    onChange={e => setJobName(e.target.value)}
                                />
                                <Input
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="email" />
                                <Input
                                    type="number"
                                    onChange={e => setAmount(e.target.value)}
                                    placeholder="Amount for the job" />
                                <Textarea
                                    onChange={e => setDetails(e.target.value)}
                                    placeholder="Full details for the job" />

                            </Stack>
                        </SideDrawer>
                    </>
                    <div className="flex jobs w-full">
                        <div className="w-full pt-2">
                            <div className="w-full p-2 mx-auto bg-white rounded-sm shadow">
                                <div className="flex flex-row items-center">
                                    {
                                        contract_routes.map((option, index) => (
                                            <span onClick={() => history.push(option.location)} key={index} className={`${location.pathname === option.location ? "border-b-2 border-blue-900 " : "border-none "} text-gray-700 hover:bg-gray-100 cursor-pointer py-4 mb-8 px-4 text-lg font-semibold`}>{option.name}</span>
                                        ))
                                    }
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

