import React from 'react'
import {
    PaperClipIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/solid'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { get_single_Job_Action } from '../../redux/actions/jobsActions'
import Loading from '../../components/loading/loading'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Textarea, useDisclosure } from '@chakra-ui/react'

const attachments = [
    { name: 'sample_picture_of_project.pdf', href: '#' },
]

const comments = [
    {
        id: 1,
        name: 'Leslie Alexander',
        date: '4d ago',
        imageId: '1494790108377-be9c29b29330',
        body:
            'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
    }
]

export default function JobInfo() {

    let { id } = useParams();
    const get_job = useSelector(state => state.single_Job)
    const { loading, job } = get_job
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    useEffect(() => {
        dispatch(get_single_Job_Action(id))
    }, [])

    if (loading) {
        return (
            <HomeLayout>
                <Loading />
            </HomeLayout>
        )
    }

    return (
        <HomeLayout>
            <div className="relative min-h-screen bg-gray-100 pt-16">
                <main className="py-10">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                        <div className="flex items-center space-x-5">

                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{job.name}</h1>
                                <p className="text-sm font-medium text-gray-500">
                                    Created job{' '} on <time dateTime="2020-08-25">{Date(job?.createdAt * 1000).slice(0, 15)}</time>
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                            >
                                Save
                            </button>
                            <Button ref={btnRef} colorScheme="blue" onClick={onOpen}
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none"
                            >
                                Send Proposal
                            </Button>
                            <Drawer
                                isOpen={isOpen}
                                placement="right"
                                onClose={onClose}
                                finalFocusRef={btnRef}
                                size="md"
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerHeader>Type your proposal</DrawerHeader>

                                    <DrawerBody>
                                        <textarea rows={15} placeholder="Type here..." className="w-full border border-gray-300 rounded p-2 outline-none" />
                                        <p className="text-gray-400 text-right text-xs">max: 500 words</p>
                                    </DrawerBody>

                                    <DrawerFooter>
                                        <Button variant="outline" mr={3} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button colorScheme="blue">Send Proposal</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>

                    <div className="mt-8  mx-auto lg:px-24 md:px-16 px-4">
                        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                            {/* Description list*/}
                            <section aria-labelledby="applicant-information-title">
                                <div className="bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
                                            Applicant Information
                                        </h2>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Job title</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{job.title}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{job.email}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Amount</dt>
                                                <dd className="mt-1 text-sm text-gray-900">${job.amount}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{job.phone_number}</dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">About</dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {job.details}
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                        {attachments.map((attachment) => (
                                                            <li
                                                                key={attachment.name}
                                                                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                                            >
                                                                <div className="w-0 flex-1 flex items-center">
                                                                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                    <span className="ml-2 flex-1 w-0 truncate">{attachment.name}</span>
                                                                </div>
                                                                <div className="ml-4 flex-shrink-0">
                                                                    <a href={attachment.href} className="font-medium text-blue-900 hover:text-blue-500">
                                                                        Download
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </section>

                            {/* Comments*/}
                            <section aria-labelledby="notes-title">
                                <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                                    <div className="divide-y divide-gray-200">
                                        <div className="px-4 py-5 sm:px-6">
                                            <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                                                Feedback
                                            </h2>
                                        </div>
                                        <div className="px-4 py-6 sm:px-6">
                                            <ul role="list" className="space-y-8">
                                                {comments.map((comment) => (
                                                    <li key={comment.id}>
                                                        <div className="flex space-x-3">
                                                            <div className="flex-shrink-0">
                                                                <img
                                                                    className="h-10 w-10 rounded-full"
                                                                    src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm">
                                                                    <a href="#" className="font-medium text-gray-900">
                                                                        {comment.name}
                                                                    </a>
                                                                </div>
                                                                <div className="mt-1 text-sm text-gray-700">
                                                                    <p>{comment.body}</p>
                                                                </div>
                                                                <div className="mt-2 text-sm space-x-2">
                                                                    <span className="text-gray-500 font-medium">{comment.date}</span>{' '}
                                                                    <span className="text-gray-500 font-medium">&middot;</span>{' '}
                                                                    <button type="button" className="text-gray-900 font-medium">
                                                                        Reply
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-6 sm:px-6">
                                        <div className="flex space-x-3">
                                            <div className="min-w-0 flex-1">
                                                <form action="#">
                                                    <div>
                                                        <label htmlFor="comment" className="sr-only">
                                                            About
                                                        </label>
                                                        <textarea
                                                            id="comment"
                                                            name="comment"
                                                            rows={3}
                                                            className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                                                            placeholder="Add a note"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                    <div className="mt-3 flex items-center justify-between">
                                                        <a
                                                            href="#"
                                                            className="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                                                        >
                                                            <QuestionMarkCircleIcon
                                                                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                aria-hidden="true"
                                                            />
                                                            <span>Some HTML is okay.</span>
                                                        </a>
                                                        <button
                                                            type="submit"
                                                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                        >
                                                            Comment
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </HomeLayout>

    )
}
