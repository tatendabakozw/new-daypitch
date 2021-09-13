import { Button, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { create_message_Action } from '../../redux/actions/messageActions'

function SendMessage() {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [body, setBody] = useState('')
    const _message = useSelector(state => state.create_message)
    const userSignin = useSelector(state => state.userCredsSignIn)
    const { userInfo } = userSignin
    const {loading} = _message
    const dispatch = useDispatch()
    const {id} = useParams()

    const send_message = () => {
        console.log(first_name, last_name, email, phone_number, body)
        if(userInfo?.user.uid === id){
            console.log('you cant send yourself a message')
        }else{
            dispatch(create_message_Action(userInfo?.user.uid, body, id))
        }
    }

    console.log(id)

    return (
        <HomeLayout>
            <div className="md:pt-24 pt-16 flex flex-col items-center min-h-screen">
                <Text size="lg" className="font-semibold text-gray-600 pb-8">Type your message below</Text>
                <form action="" className="bg-white p-4 rounded shadow lg:w-2/5 md:w-2/3 w-full">
                    <Stack spacing={8}>
                        <Input placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
                        <Input placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
                        <Input
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email" />
                        <Input
                            onChange={e => setPhoneNumber(e.target.value)}
                            placeholder="Phonenumber" />
                        <Textarea
                            onChange={e => setBody(e.target.value)}
                            placeholder="type your message" />
                        <Button isLoading={loading} colorScheme="blue" onClick={send_message}>send</Button>
                    </Stack>
                </form>
            </div>
        </HomeLayout>

    )
}

export default SendMessage
