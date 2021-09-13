import React from 'react'
import { PlusIcon } from '@heroicons/react/solid'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/react"

export default function SideDrawer({drawer_heading, sendButton, children}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <p className="text-gray-700 font-semibold text-2xl m-4">My Current Jobs </p>
                <div className="flex items-center">
                    <p className="mr-2 text-gray-700">Create a job</p>
                    <span ref={btnRef} colorScheme="teal" onClick={onOpen} className="bg-blue-900 hover:bg-blue-800 cursor-pointer text-white p-2 rounded-full">
                        <PlusIcon height={20} width={20} />
                    </span>
                </div>
            </div>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size="md"
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{drawer_heading}</DrawerHeader>

                    <DrawerBody>
                        {children}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        {sendButton}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
