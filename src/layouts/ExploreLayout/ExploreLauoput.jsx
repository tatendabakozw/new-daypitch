import React, { useState } from 'react'
import HomeLayout from '../HomeLayout/HomeLayout'
import { SearchIcon, ChevronDownIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { RadioGroup } from '@headlessui/react'
import { useSelector } from 'react-redux';
import ExploreRight from '../../components/ExploreRight/ExploreRight';
import { data } from '../../data';

const filter_price = [
    { name: 'High To Low' },
    { name: 'Low To High' }
]

function ExploreLauoput({ children, heading }) {

    const [grid_view, setGridView] = useState(false)
    const [skip, setSkip] = useState(0);
    // eslint-disable-next-line
    const [limit, setLimit] = useState(8);

    //service info
    const servicesInfo = useSelector(state => state.allServices)
    const { loading } = servicesInfo

    //filter items
    const [selected_category, setSelecCategory] = useState('category')
    // eslint-disable-next-line
    const [selected, setSelected] = useState(filter_price[0])

    const handleLoadMore = (e) => {
        e.preventDefault();
        setSkip(skip + limit);
    };

    const filter_by_category = () =>{
        console.log(selected_category)
    }

    return (
        <HomeLayout>
            <div className="lg:px-16 md:px-8 pt-24 px-4">
                {/* <div className="pt-24 pb-8">
                    <Warning />
                </div> */}
                <div className="flex flex-row justify-between gap-8">
                    <div className="w-1/4 lg:block md:block hidden min-h-screen">
                        <div className="flex flex-col items-center">
                            <div className=" w-full">
                                <div className="border border-gray-200 dark:border-gray-800 rounded p-3 bg-white dark:bg-gray-800 flex-col">
                                    <span className="flex flex-row items-center mb-4 dark:text-white">
                                        {/* <XIcon height={20} width={20} /> */}
                                        <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">Filters</p>
                                        <div className="flex-1 "></div>
                                        <ChevronDownIcon height={20} width={20} className="text-blue-900" />
                                    </span>

                                    {/* // select price range */}
                                    <div className="bg-white z-30 mb-4">
                                        <div>
                                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                                Sort by
                                            </label>
                                            <select
                                                id="location"
                                                name="location"
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                                                defaultValue="Price (Low to high)"
                                            >
                                                {
                                                    data.filter_options.map((option, index)=>(
                                                        <option key={index}>{option.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">Categories:</p>

                                    {/* // categories */}
                                    {
                                        !loading ? (
                                            <div className="w-full py-2 z-10">
                                                <div className="w-full max-w-md mx-aut">
                                                    <RadioGroup value={selected_category} onChange={(e)=> {
                                                        setSelecCategory(e)
                                                        filter_by_category()
                                                    }}>
                                                        <RadioGroup.Label className="sr-only">category</RadioGroup.Label>
                                                        <div className="space-y-2">
                                                            {data.categories?.map((category) => (
                                                                <RadioGroup.Option
                                                                    key={category.name}
                                                                    value={category}
                                                                    className={({ active, checked }) =>
                                                                        `${active ? '' : ''}
                                                        ${checked ? 'text-gray-700 ' : 'bg-white text-gray-700'}
                                                    relative rounded px-2 py-2 cursor-pointer flex focus:outline-none`
                                                                    }>
                                                                    {({ active, checked }) => (
                                                                        <>
                                                                            <div className="flex items-center justify-between w-full">
                                                                                <div className="flex items-center">
                                                                                    <div className="text-sm">
                                                                                        <RadioGroup.Label
                                                                                            as="p"
                                                                                            className={`text-sm ${checked ? 'text-gray-900 font-semibold' : 'text-gray-500'
                                                                                                }`}
                                                                                        >
                                                                                            {category.name}
                                                                                        </RadioGroup.Label>
                                                                                    </div>
                                                                                </div>
                                                                                {checked && (
                                                                                    <NewCheckIcon className="w-6 h-6" />
                                                                                )}
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </RadioGroup.Option>
                                                            ))}
                                                        </div>
                                                    </RadioGroup>
                                                </div>
                                            </div>
                                        ) : (
                                            <div class="animate-pulse flex flex-col space-x-4">
                                                <div class="flex-1 space-y-4 py-1">
                                                    <div class="space-y-2">
                                                        <div class="h-4 bg-gray-300 rounded"></div>
                                                        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* //middle row */}
                    <div className="lg:w-2/4 md:w-3/4 w-full min-h-screen">
                        <div className="w-full flex flex-col">
                            <div className="search bg-white flex flex-row items-center w-full rounded border border-gray-200 overflow-hidden mb-4">
                                <input
                                    type="text"
                                    className="bg-white border-none outline-none p-2 flex-1"
                                    placeholder="search" />
                                <span className="bg-blue-900 p-4 cursor-pointer hover:bg-blue-800 rounded">
                                    <SearchIcon height={20} width={20} className="text-white" />
                                </span>
                            </div>
                            <div className="md:flex hidden flex-row items-center justify-between p-8">
                                <p className="flex-1 text-gray-700 font-semibold">{heading}</p>
                                <div className="flex flex-row items-center">
                                    <ViewGridAddIcon
                                        height={20} width={20}
                                        onClick={() => setGridView(true)}
                                        className={`${grid_view ? "text-blue-500" : "text-gray-500"} mr-4 cursor-pointer`} />
                                    <FormatListBulletedIcon
                                        fontSize="small"
                                        onClick={() => setGridView(false)}
                                        className={`${grid_view ? "text-gray-500" : "text-blue-500"} mr-4 cursor-pointer`} />
                                </div>
                            </div>


                            {/* //the items go here */}
                            {children}

                        </div>
                    </div>

                    {/* right column */}
                    <div className="w-1/4 min-h-screen lg:flex md:hidden hidden flex-col">
                        <ExploreRight />
                    </div>

                </div>
            </div>
            <div onClick={handleLoadMore} className="py-24 flex flex-col items-center">
                <span className="bg-blue-900 rounded text-white p-2">Load More</span>
            </div>
        </HomeLayout>
    )
}

function NewCheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#059669"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ExploreLauoput
