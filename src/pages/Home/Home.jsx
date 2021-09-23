import React from 'react'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import person from '../../images/nomad3.svg'
import HomeSearch from '../../components/HomeSearch/HomeSearch'
import Stars from '../../components/banner/Stars'
import first from '../../images/homeBuy.svg'
import second from '../../images/homeInvest.svg'
import third from '../../images/homeQuick.svg'
import {  Link } from 'react-router-dom'
import {  CheckIcon } from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Home() {

    return (
        <HomeLayout>
            <div className="home pb-16">
            <div className="relative transition duration-500 ease-in-out min-h-screen grid md:grid-cols-2 grid-cols-1 gap-2 bg-gray-50 dark:bg-gray-900 lg:px-32 md:px-16 px-4 w-full">
                    <div className="md:block hidden absolute z-0 w-full opacity-50">
                        <Stars />
                    </div>
                    <div className="md:my-auto my-auto pt-16 w-full">

                        <div className="col-span-1 pt-8 flex flex-col md:items-start items-center w-full">
                            <p className="md:text-7xl text-gray-900  md:dark:text-gray-100 dark:text-geay-100 text-4xl mx-auto w-full mb-4 font-semibold z-40">Find the perfect location for your professionals</p>
                            <p className="md:w-full text-gray-800  md:dark:text-gray-100 dark:text-geay-100 md:mb-16 mb-8 w-full dark:text-gray-400 z-40">View Professionals in your local area for free</p>
                            
                            {/* search component */}
                            <div className="w-full self-center flex mb-2 z-40">
                                <HomeSearch />
                            </div>
                            <p className="text-gray-900 text-xs self-start dark:text-gray-300 z-40">Popular: Mechanic, Health, Software</p>
                        </div>
                    </div>

                    <div className="col-span-1 overflow-hidden">
                        <div className="absolute z-20 md:bottom-0 -bottom-16 right-0 md:mt-0 mt-8">
                            <img src={person} alt='first' className="lg:max-h-[500px] md:max-h-[400] max-h-[250px]" />
                        </div>
                    </div>


                    <div className="blob md:block hidden absolute z-0 top-0 right-0">
                        <svg
                            width="900"
                            height="900"
                            viewBox="0 50 520 800"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <clipPath id="shape">
                                    <path fill="currentColor" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z"></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#shape)">
                                <path fill="#1E3A8A" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z" />
                            </g>
                        </svg>
                    </div>
                    <div className="blob md:hidden block opacity-75 absolute z-0 top-0 right-0">
                        <svg
                            width="700"
                            height="800"
                            viewBox="200 20 500 800"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <clipPath id="shape">
                                    <path fill="currentColor" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z"></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#shape)">
                                <path fill="#1E40AF" d="M713.5,593.5Q723,687,637,737.5Q551,788,442,788.5Q333,789,292.5,689.5Q252,590,178.5,473Q105,356,220,285Q335,214,457.5,131Q580,48,710,131.5Q840,215,772,357.5Q704,500,713.5,593.5Z" />
                            </g>
                        </svg>
                    </div>

                </div>

                

                {/* // category items */}
                <div className="flex flex-col items-center md:pt-40 md:px-16 pt-16 px-4 z-20 pb-36 w-full bg-gray-50">
                    <p className="text-gray-700 text-4xl dark:text-gray-200 text-center font-semibold mb-24 md:px-32 px-8 pt-12">Easily prototype and communicate your vision</p>
                    <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-40 md:gap-16 gap-8 items-center">
                        <HomeViewComponent
                            className="col-span-1"
                            picture={first}
                            description={'Mix and match best professionals as a seller'}
                            heading={'Communication'}
                            id={1}
                            />
                        <HomeViewComponent
                            className="col-span-1"
                            picture={second}
                            description={'No need for advertisement, because we do it for you'}
                            heading={'Advertisement'} 
                            id={2}
                            />
                        <HomeViewComponent
                            className="col-span-1"
                            picture={third}
                            description={'Dont waste time, jump to the task buy either becoming a professional or becoming a buyer'}
                            heading={'Quick'} 
                            id={3}
                            />
                    </div>
                </div>

                {/* // category loading */}
                {/* <div className="md:pt-16 md:px-16 pt-4 px-4 z-20 flex flex-col">
                    <p className="text-gray-700 dark:text-gray-400 text-3xl pb-8 self-center font-semibold z-20">Categories</p>
                        <>
                            <div className="md:grid hidden md:grid-cols-5 grid-col-2 gap-8">
                                <CategoryLoading />
                                <CategoryLoading />
                                <CategoryLoading />
                                <CategoryLoading />
                                <CategoryLoading />
                                
                            </div>
                            <div className="grid md:hidden grid-cols-2 gap-4">
                                <CategoryLoading />
                                <CategoryLoading />
                            </div>
                        </>

                    <div className="absolute top-0 right-0 bg-gradient-to-l from-gray-50 dark:from-gray-800 h-10 w-3/12" />
                </div > */}

                {/* // paying boxes */}
                <div className="flex flex-col items-center md:pt-16 md:px-16 pt-4 z-20 pb-16 bg-gray-50">
                    <p className="text-2xl text-gray-700 dark:text-gray-400 text-center px-8 font-semibold mb-16">Professionals price arrangements</p>
                        <FreeComponent className="col-span-1" />
                        {/* <PayComponent className="col-span-1" /> */}
                </div>

                        {/* CTA Section */}
                <div className="bg-white">
                <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to get started?</span>
                    <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        Get in touch or create an account.
                    </span>
                    </h2>
                    <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                    <Link
                        to='/howitworks'
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800"
                    >
                        How it works
                    </Link>
                    <Link
                        Link='/login    '
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
                    >
                        Get started
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </HomeLayout>
    )
}

const HomeViewComponent = ({ className, picture, description, heading, id }) => {
    return (
        <div key={id}>
            <div className={`${className} flex flex-col w-64 items-center`}>
                <img src={picture} className="w-60 mb-4" alt="buy" />
                <h3 className="text-gray-800 dark:text-gray-200 mb-2 font-semibold">{heading}</h3>
                <p className="font-gray-500 dark:text-gray-400 text-center text-sm">{description}</p>
            </div>
        </div>
    )
}

const pricing = {
    tiers: [
      {
        title: 'Freelancer',
        price: 0,
        frequency: '/month',
        description: 'The essentials to provide your best work for clients.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
        cta: 'Monthly billing',
        mostPopular: false,
      },
      {
        title: 'Startup',
        price: 9.99,
        frequency: '/month',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
          '25 products',
          'Up to 10,000 subscribers',
          'Advanced analytics',
          '24-hour support response time',
          'Marketing automations',
        ],
        cta: 'Monthly billing',
        mostPopular: true,
      },
    //   {
    //     title: 'Enterprise',
    //     price: 10,
    //     frequency: '/month',
    //     description: 'Dedicated support and infrastructure for your company.',
    //     features: [
    //       'Unlimited products',
    //       'Unlimited subscribers',
    //       'Advanced analytics',
    //       '1-hour, dedicated support response time',
    //       'Marketing automations',
    //       'Custom integrations',
    //     ],
    //     cta: 'Monthly billing',
    //     mostPopular: false,
    //   },
    ],
  }

// login as a free user
const FreeComponent = ({ className }) => {
    return (
        <section className="relative" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only">
            Pricing
          </h2>

          {/* Tiers */}
          <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-16">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 py-1.5 px-4 bg-blue-900 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                    <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/"
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-blue-900 text-white hover:bg-blue-800'
                      : 'bg-blue-50 text-blue-900 hover:bg-blue-100',
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>
    )
}


export default Home
