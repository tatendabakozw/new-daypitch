import React from 'react'
import { useParams } from 'react-router-dom'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { auth } from '../../helpers/firebase'
import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { create_a_contract } from '../../redux/actions/contractActions'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Contract() {
    const [agreed, setAgreed] = useState(false)
    const { id } = useParams()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [country_code, setCountryCode] = useState('')
    const [details, setDetails] = useState('')
    const [phone_number, setPhonenumber] = useState()
    const [amount, setAmount] = useState(0)
    const [err, setErr] = useState('')

    const contract_state = useSelector(state=> state.create_Contract)
    const {loading} = contract_state
    const dispatch = useDispatch()

    const create_contract = () =>{
        if(!firstname || !lastname || !company || !email || !details){
            setErr('please enter all fields')
        }else{
            const msg_obj = {
                sent_by : auth.currentUser.uid,
                sent_to : id,
                firstname,
                lastname,
                company,
                email,
                details,
                phone_number,
                amount,
                country_code,
                status: 'inactive'
            }
            if(agreed){
                dispatch(create_a_contract(msg_obj, id))
            }
        }
    }

    return (
        <HomeLayout>
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg
                        className="absolute left-full transform translate-x-1/2"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-yellow-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg
                        className="absolute right-full bottom-0 transform -translate-x-1/2"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-yellow-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">Create contract</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Write your info here and send to the other party. Create contract in which both parties should agree in order for work to start
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Your first name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        required
                                        onChange={e=> setFirstname(e.target.value)}
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm  border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Your Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        required
                                        onChange={e=> setLastname(e.target.value)}
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm  border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Company
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        required
                                        onChange={e=> setCompany(e.target.value)}
                                        autoComplete="organization"
                                        className="py-3 px-4 block w-full shadow-sm  border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        onChange={e=> setEmail(e.target.value)}
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm  border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            onChange={e=> setCountryCode(e.target.value)}
                                            id="country"
                                            name="country"
                                            required
                                            value={country_code}
                                            className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500  rounded-md"
                                        >
                                            <option value="zar">ZAR</option>
                                            <option value="zwl">ZWL</option>
                                            <option value="us">US</option>
                                        </select>
                                    </div>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        required
                                        onChange={e=> setPhonenumber(e.target.value)}
                                        className="py-3 px-4 block w-full pl-20  border-gray-300 rounded-md"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Contract details
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        onChange={e=> setDetails(e.target.value)}
                                        className="py-3 px-4 block w-full shadow-sm  border border-gray-300 rounded-md"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Amount to pay
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="number"
                                        name="amount"
                                        required
                                        onChange={e=> setAmount(e.target.value)}
                                        type="amount"
                                        className="py-3 px-4 block w-full shadow-sm border  border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <Switch
                                            checked={agreed}
                                            onChange={setAgreed}
                                            className={classNames(
                                                agreed ? 'bg-blue-900' : 'bg-gray-200',
                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                                            )}
                                        >
                                            <span className="sr-only">Agree to policies</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    agreed ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base text-gray-500">
                                            By selecting this, you agree that{' '}
                                            <a href="/" className="font-medium text-gray-700 underline">
                                                you have signed the contract
                                            </a>{' '}
                                            and{' '}
                                            <a href="/" className="font-medium text-gray-700 underline">
                                               await other party's confirmation
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            {err ? <p className="bg-red-100 text-red-700 p-2 text-center w-full my-4">enter all detals</p>:null}

                            </div>
                            <div className="sm:col-span-2">
                                <Button
                                    isLoading={loading}
                                    onClick={create_contract}
                                    type="submit"
                                    colorScheme="blue"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none"
                                >
                                    Send Contract
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Contract
