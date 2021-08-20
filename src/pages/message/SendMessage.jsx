import { Button, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'

function SendMessage() {
    return (
        <HomeLayout>
            <div className="md:pt-24 pt-16 flex flex-col items-center min-h-screen">
                <Text size="lg" className="font-semibold text-gray-600 pb-8">Type your message below</Text>
                <form action="" className="bg-white p-4 rounded shadow lg:w-2/5 md:w-2/3 w-full">
                    <Stack spacing={8}>
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                        <Input placeholder="Email" />
                        <Input placeholder="Phonenumber" />
                        <Textarea placeholder="type your message" />
                        <Button colorScheme="blue">send</Button>
                    </Stack>
                </form>
            </div>
        </HomeLayout>

    )
}

export default SendMessage
