import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { get_a_Contract, react_to_a_contract_Action } from '../../redux/actions/contractActions'
import Loading from '../../components/loading/loading'
import Success from '../../components/alert/Success'

function SinlgeContract() {
    const _contract = useSelector(state => state.single_contract)
    const _reaction = useSelector(state=> state.react_to_contract)
    const {react_loading, message} = _reaction
    const { loading, contract } = _contract
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(get_a_Contract(id))
    }, [dispatch])

    const accept_contract = () =>{
        dispatch(react_to_a_contract_Action(id, 'active'))
    }

    const reject_contract = () =>{
        dispatch(react_to_a_contract_Action(id, 'rejection'))
    }

    if (loading) {
        return (
            <HomeLayout>
                <div className="pt-16">
                    <Loading/>
                </div>
            </HomeLayout>
        )
    }

    return (
        <HomeLayout>
            <div className="pt-16 lg:px-40 md:px-28 px-4">
                <div className="bg-white overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Contract Details
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Details about this contract
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Contractor name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {contract?.firstname} {contract?.lastname}
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Contract title
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {contract?.title !== '' ? contract?.title : 'No Title'}
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Contract status
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {contract?.status}
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {contract?.email}
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Expected earnings
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    ${contract?.amount}
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Details
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {contract?.details}
                                </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 items-center">
                                <dt className="text-sm font-medium text-gray-500">
                                    Action
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {message && <Success text={message} />}
                                    <ul className="divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="flex flex-row items-center justify-end w-full">
                                                {
                                                    react_loading ? (
                                                        <div className="text-green-700 mr-3 font-semibold">Loading...</div>
                                                    ):(
                                                        <div onClick={accept_contract} className="text-green-700 mr-3 font-semibold cursor-pointer">Accept</div>
                                                    )
                                                }
                                                {
                                                    react_loading ? (
                                                        <div className="text-red-700 mr-3 font-semibold">Loading...</div>
                                                    ):(
                                                        <div onClick={reject_contract} className="text-red-700 mr-3 font-semibold cursor-pointer">Decline</div>
                                                    )
                                                }
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default SinlgeContract
