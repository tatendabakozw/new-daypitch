import React, { useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import ContractsLayout from '../../layouts/ContractsLayout/ContractsLayout'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { get_user_jobs_Actions } from '../../redux/actions/jobsActions'
import { Spinner } from '@chakra-ui/spinner'

export default function Listings() {

    const _jobs = useSelector(state => state.user_jobs)
    const _user = useSelector(state => state.userCredsSignIn)
    const { userInfo } = _user
    const { loading, jobs } = _jobs
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_user_jobs_Actions(userInfo?.user?.uid))
    }, [dispatch])

    if (loading) {
        return (
            <ContractsLayout>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-sm hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                <span>Loading</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-blue-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                                <div className="flex flex-col w-full items-center my-8">
                                    <Spinner
                                        thickness="4px"
                                        speed="0.65s"
                                        emptyColor="gray.200"
                                        color="blue.900"
                                        size="xl"
                                    />
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </ContractsLayout>
        )
    }

    return (
        <ContractsLayout>
            <Disclosure>
                {({ open }) => (
                    <>
                        {
                            jobs?.length <= 0 ? (
                                <>
                                    <p className="text-center text-gray-500">You haven't posted any jobs at the moment</p>
                                </>
                            ) : (
                                <>
                                    {
                                        jobs?.map(job => (
                                            <>
                                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-sm hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                                    <span>{job?.job?.title}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'transform rotate-180' : ''
                                                            } w-5 h-5 text-blue-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    <div className="bg-white overflow-hidden sm:rounded-lg">
                                                        <div className="px-4 py-5 sm:px-6">
                                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Job Details</h3>
                                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about this job</p>
                                                        </div>
                                                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                                            <dl className="sm:divide-y sm:divide-gray-200">
                                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                    <dt className="text-sm font-medium text-gray-500">Contractor name</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{job?.job?.name}</dd>
                                                                </div>
                                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                    <dt className="text-sm font-medium text-gray-500">Contract name</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{job?.job?.title}</dd>
                                                                </div>
                                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{job?.job?.email}</dd>
                                                                </div>
                                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                    <dt className="text-sm font-medium text-gray-500">How much you are paying</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${job?.job?.amount}</dd>
                                                                </div>
                                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                    <dt className="text-sm font-medium text-gray-500">Details</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                        {job?.job?.details}
                                                                    </dd>
                                                                </div>
                                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                                                                    {
                                                                        job?.job?.status === 'pending' ? (
                                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Not Started</dd>
                                                                        ) : job?.job?.status === 'on-going' ? (
                                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">On-Going</dd>
                                                                        ): (
                                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Finished</dd>
                                                                        )
                                                                    }
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        ))
                                    }
                                </>
                            )
                        }
                    </>
                )}
            </Disclosure>

        </ContractsLayout >
    )
}
